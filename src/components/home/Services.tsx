import {
  CalendarCheck,
  Code2,
  Building2,
  PenTool,
  RefreshCw,
  Search,
} from "lucide-react";
import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

const icons = [PenTool, Code2, RefreshCw, Building2, CalendarCheck, Search];

export function Services({ locale }: { locale: Locale }) {
  const { services } = homeContent[locale];

  return (
    <section id="services" className="bg-paper-deep py-24 text-ink md:py-40">
      <Container>
        <Reveal className="max-w-4xl">
          <SectionLabel className="text-royal">{services.eyebrow}</SectionLabel>
          <h2 className="mt-10 font-display text-[clamp(2.4rem,5.2vw,4.8rem)] leading-[1.03] tracking-[-0.015em] text-balance">
            <Accent text={services.headline} className="italic text-royal" />
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px bg-ink/15 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="group bg-paper-deep">
                <Reveal
                  delay={(i % 3) * 0.07}
                  className="flex h-full min-h-72 flex-col p-8 transition-colors duration-500 group-hover:bg-paper md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <Icon aria-hidden="true" className="size-6 text-royal" strokeWidth={1.4} />
                    <span className="font-mono text-xs text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-auto pt-16 font-display text-[1.9rem] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone">{item.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
