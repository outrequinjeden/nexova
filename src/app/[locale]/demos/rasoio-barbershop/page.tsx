import { Hero } from "@/components/demo/Hero";
import { BookingCTA } from "@/components/demo/BookingCTA";
import { TeamGrid } from "@/components/demo/TeamGrid";
import { Gallery } from "@/components/demo/Gallery";
import { PricingTable } from "@/components/demo/PricingTable";
import { Testimonials } from "@/components/demo/Testimonials";
import { LocationHours } from "@/components/demo/LocationHours";
import { ContactForm } from "@/components/demo/ContactForm";
import { content } from "@/data/demos/rasoio-barbershop/content";
import { images } from "@/data/demos/rasoio-barbershop/images";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

const SLUG = "rasoio-barbershop";

export default async function RasoioBarbershopPage({
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
      {c.bookingCta && <BookingCTA cta={c.bookingCta} />}
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
      {c.pricing && (
        <PricingTable
          title={c.pricing.title}
          subtitle={c.pricing.subtitle}
          items={c.pricing.items}
        />
      )}
      <Testimonials title={c.testimonials.title} items={c.testimonials.items} />
      {c.hours && (
        <LocationHours
          title={c.hours.title}
          entries={c.hours.entries}
          address={c.contact.address}
        />
      )}
      <ContactForm content={c.contact} />
    </main>
  );
}
