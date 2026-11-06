export const LOCALES = ["fr", "de", "en"] as const;

export interface ContactInput {
  name: string;
  businessName: string;
  /** At least one of email / phone is always present. */
  email?: string;
  phone?: string;
  message: string;
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

export function validateContact(body: Record<string, unknown>): ValidationResult {
  const bad: string[] = [];
  const check = (field: string, ok: boolean) => ok || bad.push(field);

  const name = line(body.name);
  const businessName = line(body.businessName);
  const message = str(body.message).replace(/\r\n/g, "\n");

  check("name", !!name && name.length >= 2 && name.length <= 120);
  check("businessName", !!businessName && businessName.length >= 2 && businessName.length <= 160);
  check("message", message.length >= 10 && message.length <= 4000);

  // One field: "email or phone". Legacy separate `email` / `phone` keys still work.
  const contactRaw = line(body.contact) ?? "";
  let email: string | undefined;
  let phone: string | undefined;
  const legacyEmail = line(body.email);
  const legacyPhone = line(body.phone);
  if (contactRaw) {
    if (contactRaw.includes("@")) email = contactRaw.toLowerCase();
    else phone = contactRaw;
  }
  if (!email && legacyEmail) email = legacyEmail.toLowerCase();
  if (!phone && legacyPhone) phone = legacyPhone;

  check("contact", !!email || !!phone);
  if (email) check("contact", email.length <= 254 && EMAIL.test(email));
  if (phone) check("contact", PHONE.test(phone));

  const locale = LOCALES.find((l) => l === body.locale) ?? LOCALES[0];

  if (bad.length) return { ok: false, fields: [...new Set(bad)] };
  return {
    ok: true,
    data: { name: name!, businessName: businessName!, email, phone, message, locale },
  };
}
