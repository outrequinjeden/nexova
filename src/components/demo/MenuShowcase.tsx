import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { MenuCategory } from "@/types/demo";

export function MenuShowcase({
  title,
  subtitle,
  categories,
}: {
  title: string;
  subtitle?: string;
  categories: MenuCategory[];
}) {
  return (
    <section id="menu" className="py-24">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 opacity-70">{subtitle}</p>}
        </Reveal>

        <div className="mt-14 grid gap-12">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.08}>
              <h3 className="text-lg font-semibold text-[var(--demo-primary)]">
                {category.name}
              </h3>
              <div className="mt-4 divide-y divide-current/10">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm opacity-60">{item.description}</p>
                    </div>
                    <span className="shrink-0 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
