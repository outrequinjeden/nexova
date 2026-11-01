import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
