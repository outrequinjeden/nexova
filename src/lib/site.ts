/** Canonical origin used for canonical URLs, hreflang, sitemap and OG. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexova-nu.vercel.app"
).replace(/\/$/, "");

/** Only the real production deployment may be indexed. */
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";
