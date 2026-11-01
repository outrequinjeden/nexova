import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Approach } from "@/components/home/Approach";
import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { CtaBand } from "@/components/home/CtaBand";
import { ContactForm } from "@/components/home/ContactForm";
import { Footer } from "@/components/home/Footer";
import { CONTACT_EMAIL, homeContent } from "@/data/home/content";
import { buildHomeMetadata, SITE_URL } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return buildHomeMetadata({ locale: loc, seo: homeContent[loc].seo });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  setRequestLocale(loc);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexova",
    description: homeContent[loc].seo.description,
    url: `${SITE_URL}/${loc}`,
    email: CONTACT_EMAIL,
    areaServed: { "@type": "Country", name: "Switzerland" },
    knowsLanguage: ["fr", "de", "en"],
    serviceType: homeContent[loc].services.items.map((s) => s.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={loc} />
      <main className="flex-1">
        <Hero locale={loc} />
        <Approach locale={loc} />
        <Services locale={loc} />
        <Work locale={loc} />
        <Process locale={loc} />
        <About locale={loc} />
        <CtaBand locale={loc} />
        <ContactForm locale={loc} />
      </main>
      <Footer locale={loc} />
    </>
  );
}
