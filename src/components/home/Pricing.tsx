import { Check } from "lucide-react";
import { Accent } from "@/components/brand/Accent";
import { ButtonLink } from "@/components/brand/ButtonLink";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function Pricing({ locale }: { locale: Locale }) {
  const { pricing } = homeContent[locale];

  return (
    <section id="pricing" className="bg-paper py-24 text-ink md:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionLabel className="text-royal">{pricing.eyebrow}</SectionLabel>
          <h2 className="mt-8 font-display text-[clamp(2.3rem,5vw,4.6rem)] leading-[1.04] tracking-[-0.015em] text-balance">
            <Accent text={pricing.headline} className="italic text-royal" />
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">{pricing.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
          {pricing.packages.map((pkg, i) => {
            const featured = pkg.id === "pro";
            return (
              <Reveal key={pkg.id} delay={i * 0.1} className="flex">
                <article
                  className={cn(
                    "relative flex w-full flex-col p-8 md:p-10",
                    featured ? "bg-ink text-white" : "border border-ink/15 bg-white",
                  )}
                >
                  {featured && (
                    <span className="absolute right-8 top-0 -translate-y-1/2 bg-royal px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white">
                      {pricing.featuredLabel}
                    </span>
                  )}
                  <h3 className="font-display text-3xl md:text-4xl">{pkg.name}</h3>
                  <p className={cn("mt-3 leading-relaxed", featured ? "text-white/65" : "text-stone")}>
                    {pkg.description}
                  </p>

                  <p className="mt-8 flex items-baseline gap-3">
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-[0.16em]",
                        featured ? "text-royal-bright" : "text-royal",
                      )}
                    >
                      {pricing.fromLabel}
                    </span>
                    <span className="font-display text-5xl md:text-6xl">{pkg.price}</span>
                  </p>

                  <ul
                    className={cn(
                      "mt-8 flex-1 space-y-3.5 border-t pt-8",
                      featured ? "border-white/15" : "border-ink/10",
                    )}
                  >
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 leading-snug">
                        <Check
                          aria-hidden="true"
                          className={cn("mt-0.5 size-4 shrink-0", featured ? "text-royal-bright" : "text-royal")}
                          strokeWidth={2}
                        />
                        <span className={featured ? "text-white/85" : "text-ink/85"}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="#contact"
                    variant={featured ? "primary" : "dark"}
                    className="mt-10 w-full sm:w-auto sm:self-start"
                  >
                    {pkg.cta}
                  </ButtonLink>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-ink/15 p-8">
              <h3 className="font-display text-2xl">{pricing.maintenance.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{pricing.maintenance.body}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full border border-ink/15 p-8">
              <h3 className="font-display text-2xl">{pricing.extras.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{pricing.extras.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pricing.extras.items.map((item) => (
                  <li key={item} className="border border-ink/15 px-2.5 py-1 text-sm text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone">{pricing.note}</p>
      </Container>
    </section>
  );
}
