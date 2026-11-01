// Delete stored contact leads (data-subject erasure request).
// Usage: pnpm leads:delete --id <uuid>   |   pnpm leads:delete --email someone@example.com [--yes]
// Without --yes it only lists what would be deleted.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
if (!url || !token) {
  console.error("Set the store credentials first (e.g. `vercel env pull`).");
  process.exit(1);
}
const arg = (n) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const id = arg("--id");
const email = arg("--email")?.toLowerCase();
if (!id && !email) {
  console.error("Pass --id <uuid> or --email <address>.");
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

const [ids] = await pipeline([["ZRANGE", "leads", 0, -1]]);
const leads = (await pipeline(ids.map((i) => ["GET", `lead:${i}`]))).filter(Boolean).map((s) => JSON.parse(s));
const matches = leads.filter((l) => (id ? l.id === id : l.data.email === email));

if (!matches.length) { console.log("No matching lead."); process.exit(0); }
for (const l of matches) console.log(`${l.id}  ${l.createdAt}  ${l.data.businessName}`);
if (!process.argv.includes("--yes")) { console.log("\nDry run. Re-run with --yes to delete."); process.exit(0); }

await pipeline(matches.flatMap((l) => [["DEL", `lead:${l.id}`], ["ZREM", "leads", l.id]]));
console.log(`Deleted ${matches.length} lead(s).`);
