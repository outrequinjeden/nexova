import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import type { ProjectId } from "@/types/home";
import { cn } from "@/lib/utils";

/**
 * Temporary typographic "plates" — one per planned concept. Each uses the
 * palette of its future identity and will be swapped for photography once
 * the demo imagery exists.
 */
const plates: Record<
  ProjectId,
  { wrapper: string; ink: string; layer: React.ReactNode; layout: string }
> = {
  valmont: {
    wrapper: "bg-[#09090b]",
    ink: "text-[#d8d6d0]",
    layout: "lg:col-span-7",
    layer: (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_75%_40%,rgba(190,160,110,0.22),transparent_70%)]" />
        <div className="absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-[#cdb68a]/70 to-transparent" />
        <div className="absolute inset-x-0 top-[62%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-[66%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </>
    ),
  },
  orme: {
    wrapper: "bg-[#d7d3ca]",
    ink: "text-[#15140f]",
    layout: "lg:col-span-5 lg:mt-32",
    layer: (
      <>
        <div className="absolute bottom-[18%] left-[14%] h-[58%] w-[34%] border border-[#15140f]/70" />
        <div className="absolute bottom-[18%] left-[34%] h-[40%] w-[46%] bg-[#15140f]/90" />
        <div className="absolute bottom-[18%] left-[8%] h-px w-[84%] bg-[#15140f]" />
      </>
    ),
  },
  aurele: {
    wrapper: "bg-[#ecdcd2]",
    ink: "text-[#4a2a2b]",
    layout: "lg:col-span-5",
    layer: (
      <>
        <div className="absolute bottom-0 left-1/2 h-[68%] w-[46%] -translate-x-1/2 rounded-t-full bg-[#f8efe8]" />
        <div className="absolute bottom-0 left-1/2 h-[54%] w-[32%] -translate-x-1/2 rounded-t-full border border-[#4a2a2b]/25" />
      </>
    ),
  },
  verdane: {
    wrapper: "bg-[#1d3a2b]",
    ink: "text-[#e9e4d3]",
    layout: "lg:col-span-7",
    layer: (
      <div className="absolute -right-[10%] top-1/2 aspect-square w-[80%] -translate-y-1/2 rounded-full [background:repeating-radial-gradient(circle,transparent_0_26px,rgba(233,228,211,0.16)_26px_27px)]" />
    ),
  },
};

export function Work({ locale }: { locale: Locale }) {
  const { work } = homeContent[locale];

  return (
    <section id="work" className="bg-ink py-24 text-white md:py-40">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel className="text-royal-bright">{work.eyebrow}</SectionLabel>
            <h2 className="mt-10 font-display text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              <Accent text={work.headline} />
            </h2>
          </div>
          <p className="self-end border-l border-white/15 pl-6 text-sm leading-relaxed text-white/55 lg:col-span-3 lg:col-start-10">
            {work.note}
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-20 md:mt-24 lg:grid-cols-12">
          {work.projects.map((project, i) => {
            const plate = plates[project.id];
            return (
              <li key={project.id} className={cn("group", plate.layout)}>
                <Reveal delay={(i % 2) * 0.1}>
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden transition-transform duration-700 group-hover:scale-[1.01]",
                      plate.wrapper,
                      plate.ink,
                      i % 2 === 0 ? "lg:aspect-[16/11]" : "lg:aspect-[4/5]",
                    )}
                  >
                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
                      {plate.layer}
                    </div>
                    <span className="absolute left-5 top-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] opacity-70 md:left-7 md:top-7">
                      {String(i + 1).padStart(2, "0")} — {project.industry}
                    </span>
                    <span className="absolute bottom-5 left-5 font-display text-[clamp(2rem,4vw,3.6rem)] leading-none md:bottom-7 md:left-7">
                      {project.name}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
                    <p className="max-w-md leading-relaxed text-white/60">
                      {project.concept}
                    </p>
                    <span className="shrink-0 border border-white/20 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/55">
                      {work.status}
                    </span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
