import type { ContactInput } from "./validate";

const LABELS: [keyof ContactInput, string][] = [
  ["name", "Name"],
  ["businessName", "Business"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["locale", "Site language"],
  ["message", "Message"],
];

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function render(data: ContactInput, id: string) {
  const rows = LABELS.filter(([k]) => data[k]);
  const html = `<table cellpadding="0" cellspacing="0" style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5">${rows
    .map(
      ([k, l]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#6b6874;vertical-align:top;white-space:nowrap">${l}</td><td style="padding:4px 0">${esc(String(data[k])).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table><p style="color:#999;font-size:12px">Lead ${id}</p>`;
  const text = rows.map(([k, l]) => `${l}: ${data[k]}`).join("\n") + `\n\nLead ${id}`;
  return { html, text };
}

/**
 * Sends the lead notification. Provider order:
 *  1. Resend (RESEND_API_KEY) — preferred
 *  2. Gmail SMTP (GMAIL_USER + GMAIL_APP_PASSWORD) — legacy fallback
 * Returns false when nothing is configured or delivery fails. Never throws.
 */
export async function sendLeadEmail(data: ContactInput, id: string): Promise<boolean> {
  const to = process.env.CONTACT_EMAIL ?? "nexova.website@gmail.com";
  const subject = `New enquiry — ${data.businessName}`;
  const { html, text } = render(data, id);

  try {
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `lead-${id}`,
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Nexova <onboarding@resend.dev>",
          to: [to],
          ...(data.email ? { reply_to: data.email } : {}),
          subject,
          html,
          text,
        }),
        signal: AbortSignal.timeout(8000),
      });
      return res.ok;
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (user && pass) {
      const nodemailer = (await import("nodemailer")).default;
      await nodemailer
        .createTransport({ service: "gmail", auth: { user, pass } })
        .sendMail({ from: `"Nexova Website" <${user}>`, to, replyTo: data.email, subject, html, text });
      return true;
    }
  } catch {
    /* fall through */
  }
  return false;
}
