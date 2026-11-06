import { Accent } from "@/components/brand/Accent";
import { ButtonLink } from "@/components/brand/ButtonLink";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

/** Orbit motif — two hairline rings and a single node. Pure SVG + CSS, no JS. */
function Orbit() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 800"
      className="pointer-events-none absolute -right-[38%] opacity-60 sm:opacity-100 top-1/2 w-[130vw] max-w-[1100px] -translate-y-1/2 sm:-right-[22%] sm:w-[85vw] lg:-right-[8%] lg:w-[62vw]"
      fill="none"
    >
      <defs>
        <radialGradient id="nx-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#5a2bd4" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5a2bd4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="330" fill="url(#nx-core)" />
      <g className="nx-orbit">
        <circle cx="400" cy="400" r="300" stroke="white" strokeOpacity="0.14" />
        <circle cx="700" cy="400" r="7" fill="#a78bfa" />
        <circle cx="700" cy="400" r="18" stroke="#a78bfa" strokeOpacity="0.35" />
      </g>
      <g className="nx-orbit-rev">
        <circle cx="400" cy="400" r="215" stroke="white" strokeOpacity="0.09" />
        <circle cx="185" cy="400" r="4" fill="white" fillOpacity="0.7" />
      </g>
      <circle cx="400" cy="400" r="130" stroke="white" strokeOpacity="0.07" />
    </svg>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = homeContent[locale];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white"
    >
      {/* hairline grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px)] [background-size:calc(100%/6)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <Orbit />

      <Container className="relative flex flex-1 flex-col justify-end pb-14 pt-36 md:pb-20">
        <SectionLabel className="nx-rise text-royal-bright">{hero.eyebrow}</SectionLabel>

        <h1
          className="nx-rise mt-8 max-w-[19ch] font-display text-[clamp(2.6rem,6.6vw,6.4rem)] leading-[1] tracking-[-0.02em] text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          <Accent text={hero.headline} />
        </h1>

        <div
          className="nx-rise mt-12 grid gap-10 md:mt-16 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end"
          style={{ animationDelay: "0.25s" }}
        >
          <div>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              {hero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact">{hero.ctaPrimary}</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                {hero.ctaSecondary}
              </ButtonLink>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-white/50 lg:justify-end">
            {hero.keywords.map((k) => (
              <li key={k} className="flex items-center gap-3">
                <span aria-hidden="true" className="size-1 rounded-full bg-royal-bright" />
                {k}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
