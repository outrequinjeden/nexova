import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { ServiceAreaItem } from "@/types/demo";
import { MapPin } from "lucide-react";

export function ServiceAreas({
  title,
  subtitle,
  areas,
}: {
  title: string;
  subtitle?: string;
  areas: ServiceAreaItem[];
}) {
  return (
    <section id="areas" className="py-24">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 opacity-70">{subtitle}</p>}
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {areas.map((area) => (
            <span
              key={area.name}
              className="flex items-center gap-1.5 rounded-full border border-current/15 px-4 py-2 text-sm"
            >
              <MapPin className="size-3.5 text-[var(--demo-primary)]" />
              {area.name}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
