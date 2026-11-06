// List stored contact leads from Upstash Redis. Usage: pnpm leads [--failed] [--csv]
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
if (!url || !token) {
  console.error("Set UPSTASH_REDIS_REST_URL/TOKEN (or KV_REST_API_URL/TOKEN) first, e.g. via `vercel env pull`.");
  process.exit(1);
}

async function pipeline(commands) {
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error(`Store error ${res.status}`);
  return (await res.json()).map((r) => r.result);
}

const [ids] = await pipeline([["ZRANGE", "leads", 0, -1, "REV"]]);
if (!ids.length) {
  console.log("No leads.");
  process.exit(0);
}
const rows = (await pipeline(ids.map((id) => ["GET", `lead:${id}`])))
  .filter(Boolean)
  .map((s) => JSON.parse(s))
  .filter((l) => !process.argv.includes("--failed") || l.status === "email_failed");

if (process.argv.includes("--csv")) {
  const cols = ["createdAt", "status", "name", "businessName", "email", "phone", "locale", "message", "website", "industry", "projectType", "preferredLanguage"];
  const q = (v) => `"${String(v ?? "").replaceAll('"', '""')}"`;
  console.log(cols.join(","));
  for (const l of rows) console.log(cols.map((c) => q(c === "createdAt" || c === "status" ? l[c] : l.data[c])).join(","));
} else {
  console.log(JSON.stringify(rows, null, 2));
}
