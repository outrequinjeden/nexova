import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function WhyChoose({ locale }: { locale: Locale }) {
  const { whyChoose } = homeContent[locale];

  return (
    <section className="bg-muted/40 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {whyChoose.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{whyChoose.subheader}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="text-center sm:text-left">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
