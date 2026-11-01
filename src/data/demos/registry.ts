import type { Locale } from "@/i18n/routing";

export interface DemoRegistryEntry {
  slug: string;
  industry: string;
  brandName: string;
  location: string;
  description: string;
  features: string[];
}

const en: DemoRegistryEntry[] = [
  {
    slug: "apex-motorwerks",
    industry: "Automotive Garage",
    brandName: "Apex Motorwerks",
    location: "Sion, Valais",
    description:
      "A premium automotive service website with online booking, workshop gallery, and transparent before/after repair showcases.",
    features: [
      "Service booking CTA",
      "Before/after repair gallery",
      "Customer reviews",
      "Emergency repair line",
      "Mobile-first layout",
    ],
  },
  {
    slug: "rasoio-barbershop",
    industry: "Barbershop",
    brandName: "Rasoio Barbershop",
    location: "Sion, Valais",
    description:
      "A luxury barbershop website with barber profiles, haircut gallery, transparent pricing, and online appointment booking.",
    features: [
      "Appointment booking",
      "Barber profiles",
      "Haircut gallery",
      "Transparent pricing",
      "Mobile-first layout",
    ],
  },
  {
    slug: "maison-ambre",
    industry: "Restaurant",
    brandName: "Maison Ambre",
    location: "Sion, Valais",
    description:
      "An immersive restaurant website with menu showcase, table reservations, chef story, and a rich photo gallery.",
    features: [
      "Menu showcase",
      "Table reservation CTA",
      "Chef section",
      "Photo gallery",
      "Mobile-first layout",
    ],
  },
  {
    slug: "nordluft-technik",
    industry: "HVAC",
    brandName: "Nordluft Technik",
    location: "Valais, Switzerland",
    description:
      "A clean, technical HVAC business website with 24/7 emergency CTA, certifications, and service area coverage.",
    features: [
      "24/7 emergency CTA",
      "Certifications showcase",
      "Installation examples",
      "Service area coverage",
      "Mobile-first layout",
    ],
  },
];

const fr: DemoRegistryEntry[] = [
  {
    slug: "apex-motorwerks",
    industry: "Garage automobile",
    brandName: "Apex Motorwerks",
    location: "Sion, Valais",
    description:
      "Un site premium pour garage automobile avec réservation en ligne, galerie d'atelier et suivi transparent des réparations avant/après.",
    features: [
      "Réservation de service",
      "Galerie avant/après réparation",
      "Avis clients",
      "Ligne d'urgence",
      "Mise en page mobile-first",
    ],
  },
  {
    slug: "rasoio-barbershop",
    industry: "Barbershop",
    brandName: "Rasoio Barbershop",
    location: "Sion, Valais",
    description:
      "Un site de barbershop haut de gamme avec profils des barbiers, galerie de coupes, tarifs transparents et réservation en ligne.",
    features: [
      "Réservation de rendez-vous",
      "Profils des barbiers",
      "Galerie de coupes",
      "Tarifs transparents",
      "Mise en page mobile-first",
    ],
  },
  {
    slug: "maison-ambre",
    industry: "Restaurant",
    brandName: "Maison Ambre",
    location: "Sion, Valais",
    description:
      "Un site de restaurant immersif avec présentation du menu, réservation de table, portrait du chef et une riche galerie photo.",
    features: [
      "Présentation du menu",
      "Réservation de table",
      "Portrait du chef",
      "Galerie photo",
      "Mise en page mobile-first",
    ],
  },
  {
    slug: "nordluft-technik",
    industry: "CVC",
    brandName: "Nordluft Technik",
    location: "Valais, Suisse",
    description:
      "Un site technique et épuré pour entreprise CVC avec appel d'urgence 24h/24, certifications et zones d'intervention.",
    features: [
      "Appel d'urgence 24h/24",
      "Présentation des certifications",
      "Exemples d'installations",
      "Zones d'intervention",
      "Mise en page mobile-first",
    ],
  },
];

const de: DemoRegistryEntry[] = [
  {
    slug: "apex-motorwerks",
    industry: "Autowerkstatt",
    brandName: "Apex Motorwerks",
    location: "Sion, Wallis",
    description:
      "Eine Premium-Website für Autowerkstätten mit Online-Terminbuchung, Werkstattgalerie und transparenter Vorher/Nachher-Darstellung von Reparaturen.",
    features: [
      "Terminbuchung",
      "Vorher/Nachher-Galerie",
      "Kundenbewertungen",
      "Notdienst-Hotline",
      "Mobile-First-Layout",
    ],
  },
  {
    slug: "rasoio-barbershop",
    industry: "Barbershop",
    brandName: "Rasoio Barbershop",
    location: "Sion, Wallis",
    description:
      "Eine luxuriöse Barbershop-Website mit Barbier-Profilen, Frisurengalerie, transparenten Preisen und Online-Terminbuchung.",
    features: [
      "Terminbuchung",
      "Barbier-Profile",
      "Frisurengalerie",
      "Transparente Preise",
      "Mobile-First-Layout",
    ],
  },
  {
    slug: "maison-ambre",
    industry: "Restaurant",
    brandName: "Maison Ambre",
    location: "Sion, Wallis",
    description:
      "Eine stimmungsvolle Restaurant-Website mit Menüpräsentation, Tischreservierung, Porträt der Küchenchefin und einer reichhaltigen Fotogalerie.",
    features: [
      "Menüpräsentation",
      "Tischreservierung",
      "Porträt der Küchenchefin",
      "Fotogalerie",
      "Mobile-First-Layout",
    ],
  },
  {
    slug: "nordluft-technik",
    industry: "HLK",
    brandName: "Nordluft Technik",
    location: "Wallis, Schweiz",
    description:
      "Eine klare, technische Website für HLK-Unternehmen mit 24-Stunden-Notdienst, Zertifizierungen und Einsatzgebieten.",
    features: [
      "24-Stunden-Notdienst",
      "Zertifizierungen",
      "Installationsbeispiele",
      "Einsatzgebiete",
      "Mobile-First-Layout",
    ],
  },
];

export const demoRegistry: Record<Locale, DemoRegistryEntry[]> = { en, fr, de };

export const legacySlugRedirects: Record<string, string> = {
  "casa-lume": "maison-ambre",
  "studio-corte": "rasoio-barbershop",
};
