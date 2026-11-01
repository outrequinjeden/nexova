import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import { demoRegistry } from "@/data/demos/registry";
import type { Locale } from "@/i18n/routing";
import { Check } from "lucide-react";

export function DemosSection({ locale }: { locale: Locale }) {
  const { demosSection } = homeContent[locale];
  const demos = demoRegistry[locale];

  return (
    <section id="demos" className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {demosSection.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{demosSection.subheader}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {demos.map((demo, i) => (
            <Reveal key={demo.slug} delay={i * 0.08}>
              <Card className="h-full overflow-hidden">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {demo.industry}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    {demo.brandName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {demo.location}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {demo.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {demo.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/${locale}/demos/${demo.slug}`}
                    className="mt-6 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    {demosSection.linkLabel}
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
