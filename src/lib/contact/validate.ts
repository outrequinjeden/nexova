export const PROJECT_TYPES = [
  "New website",
  "Website redesign",
  "E-commerce",
  "Booking system",
  "Other",
] as const;
export const LANGUAGES = ["Français", "Deutsch", "English"] as const;
export const LOCALES = ["fr", "de", "en"] as const;

export interface ContactInput {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  website?: string;
  industry: string;
  projectType: (typeof PROJECT_TYPES)[number];
  message: string;
  preferredLanguage: (typeof LANGUAGES)[number];
  locale: (typeof LOCALES)[number];
}

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; fields: string[] };

const CONTROL = /[\u0000-\u0008\u000b-\u001f\u007f\u2028\u2029]/g;
const EMAIL = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]{2,}$/;
const PHONE = /^[+\d\s().\-/]{6,40}$/;

function str(v: unknown): string {
  return typeof v === "string" ? v.replace(CONTROL, "").trim() : "";
}
/** Single-line fields must not contain line breaks (header-injection safe). */
function line(v: unknown): string | null {
  const s = str(v);
  return /[\r\n]/.test(s) ? null : s;
}

function normaliseUrl(raw: string): string | null {
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const u = new URL(candidate);
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes(".")) return null;
    return u.toString().slice(0, 200);
  } catch {
    return null;
  }
}

export function validateContact(body: Record<string, unknown>): ValidationResult {
  const bad: string[] = [];
  const check = (field: string, ok: boolean) => ok || bad.push(field);

  const name = line(body.name);
  const businessName = line(body.businessName);
  const email = line(body.email)?.toLowerCase() ?? null;
  const industry = line(body.industry);
  const phoneRaw = line(body.phone);
  const websiteRaw = line(body.website);
  const message = str(body.message).replace(/\r\n/g, "\n");

  check("name", !!name && name.length >= 2 && name.length <= 120);
  check("businessName", !!businessName && businessName.length >= 2 && businessName.length <= 160);
  check("email", !!email && email.length <= 254 && EMAIL.test(email));
  check("industry", !!industry && industry.length >= 2 && industry.length <= 120);
  check("message", message.length >= 10 && message.length <= 4000);

  const projectType = PROJECT_TYPES.find((p) => p === body.projectType);
  check("projectType", !!projectType);

  const preferredLanguage =
    LANGUAGES.find((l) => l === body.preferredLanguage) ?? LANGUAGES[0];
  const locale = LOCALES.find((l) => l === body.locale) ?? LOCALES[0];

  let phone: string | undefined;
  if (phoneRaw) {
    check("phone", PHONE.test(phoneRaw));
    phone = phoneRaw;
  }
  let website: string | undefined;
  if (websiteRaw) {
    const url = normaliseUrl(websiteRaw);
    check("website", !!url);
    website = url ?? undefined;
  }

  if (bad.length) return { ok: false, fields: bad };
  return {
    ok: true,
    data: {
      name: name!,
      businessName: businessName!,
      email: email!,
      phone,
      website,
      industry: industry!,
      projectType: projectType!,
      message,
      preferredLanguage,
      locale,
    },
  };
}
