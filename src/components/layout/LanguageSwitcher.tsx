"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, localeNames, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  currentLocale,
  href = "/",
  className,
}: {
  currentLocale: Locale;
  href?: string;
  className?: string;
}) {
  const t = useTranslations("LanguageSwitcher");

  return (
    <div
      aria-label={t("label")}
      className={cn(
        "flex items-center gap-1 rounded-full border border-current/15 px-1 py-1 text-xs font-medium",
        className
      )}
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={href}
          locale={locale}
          className={cn(
            "rounded-full px-2 py-1 uppercase transition-colors",
            locale === currentLocale
              ? "bg-current/15 opacity-100"
              : "opacity-50 hover:opacity-80"
          )}
          title={localeNames[locale]}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
