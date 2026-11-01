import { createHash } from "node:crypto";
import { hasStore, redis } from "@/lib/upstash";

interface Rule {
  scope: string;
  limit: number;
  windowSec: number;
}

/** Per visitor, plus one global ceiling that caps mail volume during an attack. */
const RULES: Rule[] = [
  { scope: "ip10m", limit: 5, windowSec: 600 },
  { scope: "ip1d", limit: 12, windowSec: 86_400 },
];
const GLOBAL: Rule = { scope: "global1d", limit: 300, windowSec: 86_400 };

/** Fallback used in dev, or if the store is unreachable (fails open, per instance). */
const memory = new Map<string, { count: number; reset: number }>();

function memoryHit(key: string, rule: Rule): number {
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.reset < now) {
    memory.set(key, { count: 1, reset: now + rule.windowSec * 1000 });
    return 1;
  }
  return ++entry.count;
}

export function clientKey(headers: Headers): string {
  const ip =
    headers.get("x-real-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  // Only a salted hash is ever stored, and it expires with the window.
  return createHash("sha256")
    .update(`${process.env.RATE_LIMIT_SALT ?? "nexova"}:${ip}`)
    .digest("hex")
    .slice(0, 24);
}

export async function rateLimit(
  key: string,
): Promise<{ allowed: boolean; retryAfter: number }> {
  const rules = [...RULES.map((r) => ({ r, id: `${r.scope}:${key}` })), { r: GLOBAL, id: GLOBAL.scope }];

  let counts: number[];
  if (hasStore) {
    try {
      const results = await redis(
        rules.flatMap(({ r, id }) => [
          ["INCR", `rl:${id}`],
          ["EXPIRE", `rl:${id}`, r.windowSec, "NX"],
        ]),
      );
      counts = rules.map((_, i) => Number(results[i * 2]));
    } catch {
      counts = rules.map(({ r, id }) => memoryHit(id, r));
    }
  } else {
    counts = rules.map(({ r, id }) => memoryHit(id, r));
  }

  const hit = rules.findIndex(({ r }, i) => counts[i] > r.limit);
  return hit === -1
    ? { allowed: true, retryAfter: 0 }
    : { allowed: false, retryAfter: rules[hit].r.windowSec };
}
