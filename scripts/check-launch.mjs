// Fails while launch-blocking information is still missing.
// Usage: pnpm check:launch
import { readFileSync } from "node:fs";

const entity = readFileSync("src/data/legal/entity.ts", "utf8");
const required = ["legalName", "address"];
const missing = required.filter((k) => new RegExp(`${k}:\\s*null`).test(entity));

const env = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "NEXT_PUBLIC_SITE_URL"];
const unset = env.filter((k) => !process.env[k] && !(k.startsWith("UPSTASH") && process.env[k.replace("UPSTASH_REDIS_REST", "KV_REST_API")]));

if (missing.length) console.error(`✗ Legal identity missing in src/data/legal/entity.ts: ${missing.join(", ")}`);
if (unset.length) console.warn(`! Not set in this shell (check Vercel project env): ${unset.join(", ")}`);
process.exit(missing.length ? 1 : 0);
