import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function Services({ locale }: { locale: Locale }) {
  const { services } = homeContent[locale];

  return (
    <section id="services" className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {services.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{services.subheader}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
