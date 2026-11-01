import { Hero } from "@/components/demo/Hero";
import { BookingCTA } from "@/components/demo/BookingCTA";
import { ServiceGrid } from "@/components/demo/ServiceGrid";
import { Gallery } from "@/components/demo/Gallery";
import { CertificationBadges } from "@/components/demo/CertificationBadges";
import { Testimonials } from "@/components/demo/Testimonials";
import { ServiceAreas } from "@/components/demo/ServiceAreas";
import { ContactForm } from "@/components/demo/ContactForm";
import { content } from "@/data/demos/nordluft-technik/content";
import { images } from "@/data/demos/nordluft-technik/images";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

const SLUG = "nordluft-technik";

export default async function NordluftTechnikPage({
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
      {c.emergencyCta && <BookingCTA cta={c.emergencyCta} />}
      {c.services && (
        <ServiceGrid
          title={c.services.title}
          subtitle={c.services.subtitle}
          items={c.services.items}
        />
      )}
      {c.gallery && (
        <Gallery
          title={c.gallery.title}
          subtitle={c.gallery.subtitle}
          images={images.gallery}
        />
      )}
      {c.certifications && (
        <CertificationBadges title={c.certifications.title} items={c.certifications.items} />
      )}
      <Testimonials title={c.testimonials.title} items={c.testimonials.items} />
      {c.serviceAreas && (
        <ServiceAreas
          title={c.serviceAreas.title}
          subtitle={c.serviceAreas.subtitle}
          areas={c.serviceAreas.areas}
        />
      )}
      <ContactForm content={c.contact} />
    </main>
  );
}
