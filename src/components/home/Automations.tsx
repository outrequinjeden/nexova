import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import { Check } from "lucide-react";

export function Automations({ locale }: { locale: Locale }) {
  const { automations } = homeContent[locale];

  return (
    <section className="bg-muted/40 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {automations.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{automations.subheader}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <ul className="grid gap-3 sm:grid-cols-2">
            {automations.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              {automations.cta}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
