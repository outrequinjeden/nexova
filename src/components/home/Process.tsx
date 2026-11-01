import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function Process({ locale }: { locale: Locale }) {
  const { process } = homeContent[locale];

  return (
    <section id="process" className="bg-paper py-24 text-ink md:py-40">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionLabel className="text-royal">{process.eyebrow}</SectionLabel>
              <h2 className="mt-10 font-display text-[clamp(2.3rem,4.8vw,4.4rem)] leading-[1.03] tracking-[-0.015em] text-balance">
                <Accent text={process.headline} className="italic text-royal" />
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">
                {process.body}
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink/15 first:border-t-0 lg:first:border-t">
              <Reveal className="grid grid-cols-[3.5rem_1fr] gap-4 py-8 md:grid-cols-[5rem_1fr] md:py-10">
                <span className="font-display text-4xl leading-none text-royal md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
