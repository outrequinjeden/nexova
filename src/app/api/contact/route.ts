import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact/validate";
import { clientKey, rateLimit } from "@/lib/contact/rate-limit";
import { saveLead, setLeadStatus, type Lead } from "@/lib/contact/lead-store";
import { sendLeadEmail } from "@/lib/contact/mailer";

const MAX_BODY = 20_000;
/** A human needs more than this to fill the form; bots submit instantly. */
const MIN_FILL_MS = 2500;

const json = (body: object, status = 200, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ error: "forbidden" }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "unsupported" }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return json({ error: "too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed;
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const limit = await rateLimit(clientKey(request.headers));
  if (!limit.allowed) {
    return json({ error: "rate_limited" }, 429, { "Retry-After": String(limit.retryAfter) });
  }

  // Bot traps: filled honeypot or implausibly fast submit. Pretend success.
  const filledMs = typeof body.t === "number" ? body.t : Infinity;
  if ((typeof body.hp === "string" && body.hp.trim()) || filledMs < MIN_FILL_MS) {
    return json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) return json({ error: "validation", fields: result.fields }, 400);

  const lead: Lead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: "received",
    data: result.data,
  };

  // Persist first, then notify: a mail outage must never lose the lead.
  const [stored, emailed] = await Promise.all([saveLead(lead), sendLeadEmail(lead.data, lead.id)]);
  if (stored) await setLeadStatus(lead, emailed ? "emailed" : "email_failed");

  if (!stored && !emailed) {
    // Neither channel worked — tell the visitor honestly. No personal data in logs.
    console.error(JSON.stringify({ event: "lead_delivery_failed", id: lead.id }));
    return json({ error: "delivery_failed" }, 503);
  }
  if (!emailed) console.error(JSON.stringify({ event: "lead_email_failed", id: lead.id }));

  return json({ ok: true });
}
