import { Hero } from "@/components/demo/Hero";
import { MenuShowcase } from "@/components/demo/MenuShowcase";
import { BookingCTA } from "@/components/demo/BookingCTA";
import { ChefSection } from "@/components/demo/ChefSection";
import { Gallery } from "@/components/demo/Gallery";
import { Testimonials } from "@/components/demo/Testimonials";
import { ContactForm } from "@/components/demo/ContactForm";
import { content } from "@/data/demos/maison-ambre/content";
import { images } from "@/data/demos/maison-ambre/images";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

const SLUG = "maison-ambre";

export default async function MaisonAmbrePage({
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
      {c.menu && (
        <MenuShowcase
          title={c.menu.title}
          subtitle={c.menu.subtitle}
          categories={c.menu.categories}
        />
      )}
      {c.bookingCta && <BookingCTA cta={c.bookingCta} />}
      {c.chef && (
        <ChefSection
          title={c.chef.title}
          name={c.chef.name}
          bio={c.chef.bio}
          photo={c.chef.photo}
        />
      )}
      {c.gallery && (
        <Gallery
          title={c.gallery.title}
          subtitle={c.gallery.subtitle}
          images={images.gallery}
        />
      )}
      <Testimonials title={c.testimonials.title} items={c.testimonials.items} />
      <ContactForm content={c.contact} />
    </main>
  );
}
