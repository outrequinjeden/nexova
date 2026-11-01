/**
 * Minimal Upstash Redis REST client (no SDK). Works with either the Upstash
 * variable names or the ones the Vercel Marketplace integration injects.
 */
const URL_ = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

export const hasStore = Boolean(URL_ && TOKEN);

type Command = (string | number)[];

export async function redis(commands: Command[]): Promise<unknown[]> {
  if (!URL_ || !TOKEN) throw new Error("store_not_configured");
  const res = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
    signal: AbortSignal.timeout(4000),
  });
  if (!res.ok) throw new Error(`store_http_${res.status}`);
  const out = (await res.json()) as { result?: unknown; error?: string }[];
  const failed = out.find((r) => r.error);
  if (failed) throw new Error("store_command_failed");
  return out.map((r) => r.result);
}
