import { Container } from "@/components/layout/Container";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = homeContent[locale];

  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="grid gap-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">{footer.brand}</p>
          <p className="mt-3 text-sm text-muted-foreground">{footer.tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground">{footer.location}</p>
        </div>

        <div>
          <p className="text-sm font-medium">{footer.companyLabel}</p>
          <ul className="mt-3 space-y-2">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">{footer.contactLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{footer.email}</li>
            <li>{footer.location}</li>
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>{footer.copyright}</p>
        <p>{footer.builtWith}</p>
      </Container>
    </footer>
  );
}
