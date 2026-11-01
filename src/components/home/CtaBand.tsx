import { Accent } from "@/components/brand/Accent";
import { ButtonLink } from "@/components/brand/ButtonLink";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function CtaBand({ locale }: { locale: Locale }) {
  const { cta } = homeContent[locale];

  return (
    <section className="relative isolate overflow-hidden bg-royal-deep py-28 text-white md:py-44">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_85%_0%,rgba(167,139,250,0.35),transparent_60%),radial-gradient(60%_90%_at_0%_100%,rgba(11,10,16,0.7),transparent_70%)]"
      />
      <Container>
        <Reveal className="max-w-5xl">
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.6rem)] leading-[0.98] tracking-[-0.02em] text-balance">
            <Accent text={cta.headline} className="italic text-white/70" />
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">{cta.body}</p>
          <ButtonLink href="#contact" variant="light" className="mt-10">
            {cta.button}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
