# Contact form: delivery, storage and abuse protection

## Flow (`POST /api/contact`)

1. **Origin check** — requests whose `Origin` host differs from the site host get `403`.
2. **Size + JSON check** — body ≤ 20 kB, must be a JSON object.
3. **Rate limit** (persistent when Upstash is configured): 5 / 10 min and 12 / day per visitor
   (salted SHA-256 of the IP, expires with the window) plus a 300 / day global ceiling → `429`.
4. **Bot traps** — filled honeypot field `hp`, or a form filled in < 2.5 s → silent `200`, nothing stored.
5. **Server-side validation** (`src/lib/contact/validate.ts`) — lengths, email/phone/URL formats,
   allowed values for project type, no line breaks in single-line fields → `400 {fields}`.
6. **Persist first, then notify** — the lead is written to Redis (24-month TTL) *and* emailed in parallel.
7. **Honest outcome** — success if **either** channel worked. If **both** fail the visitor gets `503`
   and the form shows the direct email address. Logs carry only the lead id, never personal data.

Lead statuses: `received` → `emailed` | `email_failed`.

## Why this is lead-safe

| Failure | Result |
|---|---|
| Email provider down | Lead is in Redis with status `email_failed`; export and follow up. |
| Redis down | Lead still emailed; rate limiting falls back to per-instance memory. |
| Both down | Visitor sees an error + the email address; nothing is claimed as sent. |

## Recommended lead storage — Upstash Redis (via Vercel Marketplace)

* Free tier is enough for an agency lead volume; install from the Vercel dashboard →
  Storage → Upstash Redis, which injects `KV_REST_API_URL` / `KV_REST_API_TOKEN`.
* Choose an **EU region** (e.g. Frankfurt) to keep stored enquiries in Europe.
* No SDK dependency: `src/lib/upstash.ts` talks to the REST API with `fetch`.
* Alternative if you later want SQL/CRM-style queries: Neon Postgres. Not needed now.

Read leads: `pnpm leads` (needs the two env vars locally; `vercel env pull` provides them).
`pnpm leads --failed` lists only leads whose email did not go out; `--csv` prints CSV.

## Resend (email) — what you need to do

1. Create a Resend account and add + verify your sending domain (DNS records).
2. Create an API key and add it in Vercel → Project → Settings → Environment Variables as
   `RESEND_API_KEY` (Preview first), plus `CONTACT_FROM_EMAIL` on the verified domain.
3. Until then the code falls back to the existing Gmail SMTP variables, so nothing breaks.
   Without a verified domain Resend only delivers to your own account address.

No key has been created or configured by this codebase.
