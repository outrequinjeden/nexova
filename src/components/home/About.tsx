import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function About({ locale }: { locale: Locale }) {
  const { about } = homeContent[locale];

  return (
    <section id="about" className="bg-paper-deep py-24 text-ink md:py-40">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <SectionLabel className="text-royal">{about.eyebrow}</SectionLabel>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.03] tracking-[-0.015em] text-balance">
              <Accent text={about.headline} className="italic text-royal" />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-14">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p className="text-lg leading-relaxed text-stone">{p}</p>
              </Reveal>
            ))}
          </div>
          <ul className="mt-14 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
            {about.pillars.map((pillar, i) => (
              <li key={pillar.title} className="bg-paper-deep p-7">
                <Reveal delay={0.06 * i}>
                  <p className="font-mono text-xs text-royal">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-2xl">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone">{pillar.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
