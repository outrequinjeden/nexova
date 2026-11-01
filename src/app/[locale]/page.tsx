import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { DemosSection } from "@/components/home/DemosSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Process } from "@/components/home/Process";
import { Automations } from "@/components/home/Automations";
import { SeoFeatures } from "@/components/home/SeoFeatures";
import { CtaBeforeForm } from "@/components/home/CtaBeforeForm";
import { ContactForm } from "@/components/home/ContactForm";
import { Footer } from "@/components/home/Footer";
import { homeContent } from "@/data/home/content";
import { buildHomeMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { SiteBackground3D } from "@/components/home/hero-3d";

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

  return (
    <div className="dark relative flex flex-1 flex-col text-foreground">
      {/* text-foreground is re-applied here deliberately: <body> sets it
          too, but body sits outside this .dark scope (it's this div's
          ancestor, not a descendant), so body's own color stays locked to
          the light-mode value. Anything below that doesn't set its own
          explicit text color would otherwise inherit that light
          near-black instead of the dark theme's near-white.
          Deliberately no bg-background here — this div sits in front of
          the fixed 3D canvas in paint order, so an opaque background on
          it would cover the canvas everywhere its content doesn't. */}
      <SiteBackground3D />
      <Header locale={loc} />
      <main className="flex-1">
        <Hero locale={loc} />
        <Services locale={loc} />
        <DemosSection locale={loc} />
        <WhyChoose locale={loc} />
        <Process locale={loc} />
        <Automations locale={loc} />
        <SeoFeatures locale={loc} />
        <CtaBeforeForm locale={loc} />
        <ContactForm locale={loc} />
      </main>
      <Footer locale={loc} />
    </div>
  );
}
