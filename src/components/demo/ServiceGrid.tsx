import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { ServiceItem } from "@/types/demo";

export function ServiceGrid({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
}) {
  return (
    <section id="services" className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-[var(--demo-surface-foreground)]/70">
              {subtitle}
            </p>
          )}
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="h-full border-current/10">
                <CardHeader>
                  <span className="text-2xl">{item.icon}</span>
                  <CardTitle className="mt-2 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--demo-surface-foreground)]/70">
                    {item.description}
                  </p>
                  {item.price && (
                    <p className="mt-3 text-sm font-semibold text-[var(--demo-primary)]">
                      {item.price}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
