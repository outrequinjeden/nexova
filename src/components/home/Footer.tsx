import { Wordmark } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { CONTACT_EMAIL, homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function Footer({ locale, home = true }: { locale: Locale; home?: boolean }) {
  const { footer, nav } = homeContent[locale];
  const base = home ? "" : `/${locale}`;

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-6">
          <Wordmark />
          <p className="mt-6 max-w-sm leading-relaxed text-white/55">{footer.tagline}</p>
        </div>

        <nav aria-label={footer.navLabel} className="md:col-span-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/40">
            {footer.navLabel}
          </p>
          <ul className="mt-5 space-y-3">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={`${base}${l.href}`} className="text-white/75 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/40">
            {footer.contactLabel}
          </p>
          <ul className="mt-5 space-y-3 text-white/75">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>{footer.region}</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <p className="flex gap-6">
          <a href={`/${locale}/privacy`} className="transition-colors hover:text-white">
            {footer.privacy}
          </a>
          <a href={`/${locale}/legal`} className="transition-colors hover:text-white">
            {footer.notice}
          </a>
        </p>
      </Container>
    </footer>
  );
}
