import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function SeoFeatures({ locale }: { locale: Locale }) {
  const { seoSection } = homeContent[locale];

  return (
    <section className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {seoSection.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{seoSection.subheader}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seoSection.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
