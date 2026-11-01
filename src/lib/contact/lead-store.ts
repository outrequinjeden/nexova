import { hasStore, redis } from "@/lib/upstash";
import type { ContactInput } from "./validate";

export type LeadStatus = "received" | "emailed" | "email_failed";

/** Kept 24 months — matches the retention period in the privacy policy. */
const TTL_SECONDS = 60 * 60 * 24 * 730;

export interface Lead {
  id: string;
  createdAt: string;
  status: LeadStatus;
  data: ContactInput;
}

/** Returns true only if the lead is durably stored. Never throws. */
export async function saveLead(lead: Lead): Promise<boolean> {
  if (!hasStore) return false;
  try {
    await redis([
      ["SET", `lead:${lead.id}`, JSON.stringify(lead), "EX", TTL_SECONDS],
      ["ZADD", "leads", Date.parse(lead.createdAt), lead.id],
    ]);
    return true;
  } catch {
    return false;
  }
}

export async function setLeadStatus(lead: Lead, status: LeadStatus): Promise<void> {
  if (!hasStore) return;
  try {
    await redis([["SET", `lead:${lead.id}`, JSON.stringify({ ...lead, status }), "KEEPTTL"]]);
  } catch {
    /* status is informational; the lead itself is already stored */
  }
}
