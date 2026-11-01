import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import { Menu } from "lucide-react";

export function Header({ locale }: { locale: Locale }) {
  const { nav } = homeContent[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Nexova
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} href="/" />
          <Button size="sm" nativeButton={false} render={<a href="#contact" />}>
            {nav.cta}
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-10 flex flex-col gap-6 px-6">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher currentLocale={locale} href="/" />
              <Button nativeButton={false} render={<a href="#contact" />}>{nav.cta}</Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
