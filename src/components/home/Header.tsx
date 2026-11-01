"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/brand/ButtonLink";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Header({
  locale,
  home = true,
  path = "/",
}: {
  locale: Locale;
  home?: boolean;
  path?: "/" | "/privacy" | "/legal";
}) {
  const { nav } = homeContent[locale];
  const base = home ? "" : `/${locale}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-colors duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a href={home ? "#top" : `/${locale}`} aria-label="Nexova" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={`${base}${link.href}`}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher currentLocale={locale} href={path} />
          <ButtonLink href={`${base}#contact`} arrow={false} className="min-h-10 px-5 text-sm">
            {nav.cta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher currentLocale={locale} href={path} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center focus-visible:outline-2 focus-visible:outline-royal-bright"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-ink lg:hidden">
        <Container className="flex flex-col py-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={`${base}${link.href}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-3xl"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href={`${base}#contact`} className="mt-6" arrow={false}>
            {nav.cta}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
