import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function Approach({ locale }: { locale: Locale }) {
  const { approach } = homeContent[locale];

  return (
    <section id="approach" className="bg-paper py-24 text-ink md:py-40">
      <Container>
        <Reveal>
          <SectionLabel className="text-royal">{approach.eyebrow}</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              <Accent text={approach.headline} className="italic text-royal" />
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p className="text-lg leading-relaxed text-stone">{approach.body}</p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-x-12 gap-y-12 border-t border-ink/15 pt-12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {approach.pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.07}>
                <span className="font-mono text-xs text-royal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-3xl leading-tight">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{p.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
