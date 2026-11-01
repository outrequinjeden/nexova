import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function CtaBeforeForm({ locale }: { locale: Locale }) {
  const { ctaBeforeForm } = homeContent[locale];

  return (
    <section className="border-y border-white/10 bg-violet-500/10 py-24 text-white backdrop-blur-sm">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {ctaBeforeForm.headline}
          </h2>
          <p className="mt-4 text-white/70">{ctaBeforeForm.subheader}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-violet-500 text-white hover:bg-violet-400"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              {ctaBeforeForm.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              nativeButton={false}
              render={<a href="#demos" />}
            >
              {ctaBeforeForm.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
