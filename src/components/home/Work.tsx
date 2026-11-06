import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import { demoRegistry } from "@/data/demos/registry";
import { images as apex } from "@/data/demos/apex-motorwerks/images";
import { images as rasoio } from "@/data/demos/rasoio-barbershop/images";
import { images as ambre } from "@/data/demos/maison-ambre/images";
import { images as nordluft } from "@/data/demos/nordluft-technik/images";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const heroBySlug: Record<string, { src: string; alt: string }> = {
  "apex-motorwerks": apex.hero,
  "rasoio-barbershop": rasoio.hero,
  "maison-ambre": ambre.hero,
  "nordluft-technik": nordluft.hero,
};

export function Work({ locale }: { locale: Locale }) {
  const { work } = homeContent[locale];
  const demos = demoRegistry[locale];

  return (
    <section id="work" className="bg-ink py-24 text-white md:py-36">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel className="text-royal-bright">{work.eyebrow}</SectionLabel>
            <h2 className="mt-8 font-display text-[clamp(2.3rem,5vw,4.6rem)] leading-[1.04] tracking-[-0.015em] text-balance">
              <Accent text={work.headline} />
            </h2>
          </div>
          <p className="self-end border-l border-royal-bright/50 pl-6 text-sm leading-relaxed text-white/65 lg:col-span-4 lg:col-start-9">
            {work.note}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2">
          {demos.map((demo, i) => {
            const hero = heroBySlug[demo.slug];
            return (
              <li key={demo.slug} className="group relative">
                <Reveal delay={(i % 2) * 0.1}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft ring-1 ring-white/10">
                    <Image
                      src={hero.src}
                      alt={hero.alt}
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                    />
                    <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-royal-bright backdrop-blur-sm">
                      {work.badge}
                    </span>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/50">
                        {demo.industry} · {demo.location}
                      </p>
                      <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                        <Link
                          href={`/demos/${demo.slug}`}
                          locale={locale}
                          aria-label={`${work.ctaLabel} ${demo.brandName}`}
                          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal-bright"
                        >
                          {demo.brandName}
                        </Link>
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-royal-bright group-hover:bg-royal"
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  <p className="mt-3 max-w-xl leading-relaxed text-white/65">{demo.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {demo.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="border border-white/15 px-2.5 py-1 text-xs text-white/60"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-medium text-royal-bright">{work.cta} →</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
