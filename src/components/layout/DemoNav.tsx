"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { DemoContent } from "@/types/demo";
import { Menu, ArrowLeft } from "lucide-react";

export function DemoNav({
  content,
  slug,
  locale,
}: {
  content: DemoContent;
  slug: string;
  locale: Locale;
}) {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-current/10 bg-[var(--demo-surface)]/90 text-[var(--demo-surface-foreground)] backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs opacity-60 transition-opacity hover:opacity-100"
        >
          <ArrowLeft className="size-3.5" />
          {t("backToHome")}
        </Link>

        <span className="hidden text-base font-semibold tracking-tight sm:block">
          {content.brandName}
        </span>

        <nav className="hidden items-center gap-6 lg:flex">
          {content.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} href={`/demos/${slug}`} />
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-10 flex flex-col gap-6 px-6">
              <span className="text-base font-semibold">{content.brandName}</span>
              {content.nav.map((link) => (
                <a key={link.href} href={link.href} className="text-base font-medium">
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher currentLocale={locale} href={`/demos/${slug}`} />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
