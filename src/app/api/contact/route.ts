import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "nexova.website@gmail.com";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  businessName: "Business name",
  phone: "Phone",
  website: "Website",
  industry: "Industry",
  projectType: "Project type",
  preferredLanguage: "Preferred language",
  locale: "Site language",
  message: "Message",
};

// Simple in-memory rate limiter (resets on server restart / per instance)
const submissionCache = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 submission per IP per minute

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown";
  const last = submissionCache.get(ip) ?? 0;
  if (Date.now() - last < RATE_LIMIT_MS) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill it, people never see it. Pretend success.
  if (typeof body.hp === "string" && body.hp.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  submissionCache.set(ip, Date.now());

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = body[key];
      if (typeof value !== "string" || !value.trim()) return null;
      return `<tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:600;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(value.slice(0, 4000)).replace(/\n/g, "<br />")}</td></tr>`;
    })
    .filter(Boolean)
    .join("");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"Nexova Website" <${gmailUser}>`,
      to: process.env.CONTACT_EMAIL || TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `<table cellpadding="0" cellspacing="0" style="font-family:sans-serif;font-size:14px;">${rows}</table>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
