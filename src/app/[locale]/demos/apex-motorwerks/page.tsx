import { Hero } from "@/components/demo/Hero";
import { ServiceGrid } from "@/components/demo/ServiceGrid";
import { BookingCTA } from "@/components/demo/BookingCTA";
import { Testimonials } from "@/components/demo/Testimonials";
import { BeforeAfter } from "@/components/demo/BeforeAfter";
import { TeamGrid } from "@/components/demo/TeamGrid";
import { Gallery } from "@/components/demo/Gallery";
import { ContactForm } from "@/components/demo/ContactForm";
import { content } from "@/data/demos/apex-motorwerks/content";
import { images } from "@/data/demos/apex-motorwerks/images";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

const SLUG = "apex-motorwerks";

export default async function ApexMotorwerksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as Locale];

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildLocalBusinessJsonLd({ slug: SLUG, locale: locale as Locale, content: c })
          ),
        }}
      />

      <Hero content={c.hero} image={images.hero} />
      {c.services && (
        <ServiceGrid
          title={c.services.title}
          subtitle={c.services.subtitle}
          items={c.services.items}
        />
      )}
      {c.bookingCta && <BookingCTA cta={c.bookingCta} />}
      <Testimonials title={c.testimonials.title} items={c.testimonials.items} />
      {c.beforeAfter && (
        <BeforeAfter
          title={c.beforeAfter.title}
          subtitle={c.beforeAfter.subtitle}
          entries={c.beforeAfter.entries}
        />
      )}
      {c.team && (
        <TeamGrid title={c.team.title} subtitle={c.team.subtitle} members={c.team.members} />
      )}
      {c.gallery && (
        <Gallery
          title={c.gallery.title}
          subtitle={c.gallery.subtitle}
          images={images.gallery}
        />
      )}
      {c.emergencyCta && <BookingCTA cta={c.emergencyCta} />}
      <ContactForm content={c.contact} />
    </main>
  );
}
