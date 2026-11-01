import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { PricingItem } from "@/types/demo";

export function PricingTable({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: PricingItem[];
}) {
  return (
    <section id="pricing" className="py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 opacity-70">{subtitle}</p>}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 divide-y divide-current/10">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-4"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                {item.description && (
                  <p className="text-sm opacity-60">{item.description}</p>
                )}
              </div>
              <span className="font-semibold text-[var(--demo-primary)]">
                {item.price}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
