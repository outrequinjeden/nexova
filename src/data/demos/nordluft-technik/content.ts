import type { DemoContent } from "@/types/demo";
import type { Locale } from "@/i18n/routing";

const ADDRESS = "Zone Industrielle 22, 1950 Sion, Switzerland";
const PHONE = "+41 27 555 33 99";
const EMAIL = "info@nordluft-technik.ch";

const AREAS = ["Sion", "Sierre", "Martigny", "Monthey", "Crans-Montana", "Verbier"].map(
  (name) => ({ name })
);

const en: DemoContent = {
  seo: {
    title: "Nordluft Technik — HVAC Services in Valais, Switzerland",
    description:
      "Licensed heating, ventilation, and air conditioning specialists serving the Valais region with 24/7 emergency service.",
  },
  brandName: "Nordluft Technik",
  tagline: "Heating and air, done right — day or night.",
  location: "Valais, Switzerland",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Areas", href: "#areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Licensed HVAC Specialists",
    title: "Reliable heating, ventilation, and air conditioning — for homes and businesses.",
    subtitle:
      "Nordluft Technik installs, services, and repairs HVAC systems across the Valais — certified technicians, transparent pricing, and 24/7 emergency response.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See our work",
  },
  emergencyCta: {
    title: "No heat? No cool air? We're on call.",
    subtitle:
      "24/7 emergency service for heating and cooling breakdowns — fast response, fair pricing.",
    cta: "Call emergency line",
    variant: "emergency",
  },
  services: {
    title: "Our services",
    subtitle: "Full-service HVAC — from new installations to seasonal maintenance.",
    items: [
      {
        icon: "🔥",
        title: "Heating Installation & Repair",
        description:
          "New boiler and furnace installation, plus fast repairs when heating fails.",
      },
      {
        icon: "❄️",
        title: "Air Conditioning & Cooling",
        description:
          "AC installation, servicing, and repair for homes, offices, and retail spaces.",
      },
      {
        icon: "🌬️",
        title: "Ventilation Systems",
        description:
          "Mechanical ventilation design and installation for healthy indoor air quality.",
      },
      {
        icon: "♻️",
        title: "Heat Pump Installation",
        description:
          "Energy-efficient heat pump systems, sized and installed for Swiss winters.",
      },
      {
        icon: "🗓️",
        title: "Maintenance Contracts",
        description:
          "Scheduled seasonal maintenance to keep systems efficient and prevent breakdowns.",
      },
      {
        icon: "🚨",
        title: "Emergency Repairs",
        description: "24/7 emergency response for heating and cooling failures.",
      },
    ],
  },
  testimonials: {
    title: "What our clients say",
    items: [
      {
        quote:
          "Our heating failed on a Sunday in January — Nordluft had a technician out within two hours.",
        author: "Fabienne Michellod",
        role: "Homeowner",
        rating: 5,
      },
      {
        quote:
          "Professional installation, clean work, and they explained the whole system clearly.",
        author: "Grégoire Salamin",
        role: "Property manager",
        rating: 5,
      },
      {
        quote: "Fair pricing and no upselling. Exactly what you want from an HVAC company.",
        author: "Isabelle Roux",
        role: "Business owner",
        rating: 5,
      },
    ],
  },
  gallery: {
    title: "Recent installations",
    subtitle:
      "A look at heat pump, boiler, and ventilation installations completed across the region.",
  },
  certifications: {
    title: "Certified & insured",
    items: [
      { name: "STASA Certified", issuer: "Swiss Heating & Sanitary Association", icon: "🏅" },
      { name: "Heat Pump Specialist", issuer: "Swiss Heat Pump Association (FWS)", icon: "🔧" },
      { name: "Fully Insured", issuer: "Liability & workmanship guarantee", icon: "🛡️" },
      { name: "10-Year Warranty", issuer: "On all new installations", icon: "📜" },
    ],
  },
  serviceAreas: {
    title: "Areas we serve",
    subtitle: "Proudly serving homes and businesses across the Valais region.",
    areas: AREAS,
  },
  contact: {
    title: "Request a quote",
    subtitle:
      "Tell us about your system and what you need — we'll respond within one business day.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      {
        name: "propertyType",
        label: "Property type",
        type: "select",
        options: ["Select an option", "Residential", "Commercial", "Industrial"],
      },
      {
        name: "serviceNeeded",
        label: "Service needed",
        type: "select",
        options: [
          "Select an option",
          "Heating Installation & Repair",
          "Air Conditioning & Cooling",
          "Ventilation Systems",
          "Heat Pump Installation",
          "Maintenance Contract",
          "Emergency Repair",
        ],
      },
      { name: "message", label: "Your message", type: "textarea", required: true },
    ],
    submitLabel: "Request quote",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Heating and air, done right — day or night.",
    copyright: "© 2026 Nordluft Technik. All rights reserved.",
  },
};

const fr: DemoContent = {
  seo: {
    title: "Nordluft Technik — Services CVC en Valais, Suisse",
    description:
      "Spécialistes agréés en chauffage, ventilation et climatisation desservant la région du Valais avec service d'urgence 24h/24.",
  },
  brandName: "Nordluft Technik",
  tagline: "Chauffage et climatisation, faits comme il faut — de jour comme de nuit.",
  location: "Valais, Suisse",
  nav: [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#gallery" },
    { label: "Zones", href: "#areas" },
    { label: "Avis", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Spécialistes CVC agréés",
    title: "Chauffage, ventilation et climatisation fiables — pour particuliers et entreprises.",
    subtitle:
      "Nordluft Technik installe, entretient et répare les systèmes CVC dans tout le Valais — techniciens certifiés, tarifs transparents et intervention d'urgence 24h/24.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir nos réalisations",
  },
  emergencyCta: {
    title: "Plus de chauffage ? Plus de clim ? Nous sommes disponibles.",
    subtitle:
      "Service d'urgence 24h/24 pour les pannes de chauffage et de climatisation — intervention rapide, tarifs justes.",
    cta: "Appeler l'urgence",
    variant: "emergency",
  },
  services: {
    title: "Nos services",
    subtitle: "Un service CVC complet — de l'installation à l'entretien saisonnier.",
    items: [
      {
        icon: "🔥",
        title: "Installation & réparation de chauffage",
        description:
          "Installation de chaudières et de systèmes de chauffage, ainsi que réparations rapides en cas de panne.",
      },
      {
        icon: "❄️",
        title: "Climatisation & refroidissement",
        description:
          "Installation, entretien et réparation de climatisation pour logements, bureaux et commerces.",
      },
      {
        icon: "🌬️",
        title: "Systèmes de ventilation",
        description:
          "Conception et installation de ventilation mécanique pour une qualité d'air intérieur saine.",
      },
      {
        icon: "♻️",
        title: "Installation de pompes à chaleur",
        description:
          "Systèmes de pompe à chaleur efficaces, dimensionnés pour les hivers suisses.",
      },
      {
        icon: "🗓️",
        title: "Contrats d'entretien",
        description:
          "Entretien saisonnier programmé pour garder vos systèmes efficaces et éviter les pannes.",
      },
      {
        icon: "🚨",
        title: "Réparations d'urgence",
        description: "Intervention d'urgence 24h/24 en cas de panne de chauffage ou de climatisation.",
      },
    ],
  },
  testimonials: {
    title: "Ce que disent nos clients",
    items: [
      {
        quote:
          "Notre chauffage est tombé en panne un dimanche de janvier — Nordluft a envoyé un technicien en deux heures.",
        author: "Fabienne Michellod",
        role: "Propriétaire",
        rating: 5,
      },
      {
        quote:
          "Installation professionnelle, travail soigné, et tout le système nous a été clairement expliqué.",
        author: "Grégoire Salamin",
        role: "Gérant immobilier",
        rating: 5,
      },
      {
        quote:
          "Des tarifs justes et aucune vente forcée. Exactement ce qu'on attend d'une entreprise CVC.",
        author: "Isabelle Roux",
        role: "Cheffe d'entreprise",
        rating: 5,
      },
    ],
  },
  gallery: {
    title: "Nos installations récentes",
    subtitle:
      "Un aperçu des installations de pompes à chaleur, chaudières et ventilation réalisées dans la région.",
  },
  certifications: {
    title: "Certifiés & assurés",
    items: [
      { name: "Certifié STASA", issuer: "Association suisse de chauffage et sanitaire", icon: "🏅" },
      {
        name: "Spécialiste pompe à chaleur",
        issuer: "Association suisse des pompes à chaleur (FWS)",
        icon: "🔧",
      },
      { name: "Entièrement assurés", issuer: "Garantie responsabilité civile et travaux", icon: "🛡️" },
      { name: "Garantie 10 ans", issuer: "Sur toutes les nouvelles installations", icon: "📜" },
    ],
  },
  serviceAreas: {
    title: "Zones desservies",
    subtitle: "Nous intervenons fièrement auprès des particuliers et entreprises de toute la région du Valais.",
    areas: AREAS,
  },
  contact: {
    title: "Demander un devis",
    subtitle: "Parlez-nous de votre système et de vos besoins — nous répondrons sous un jour ouvré.",
    fields: [
      { name: "name", label: "Votre nom", type: "text", required: true },
      { name: "email", label: "Adresse e-mail", type: "email", required: true },
      { name: "phone", label: "Téléphone", type: "tel" },
      {
        name: "propertyType",
        label: "Type de bien",
        type: "select",
        options: ["Choisir une option", "Résidentiel", "Commercial", "Industriel"],
      },
      {
        name: "serviceNeeded",
        label: "Service souhaité",
        type: "select",
        options: [
          "Choisir une option",
          "Installation & réparation de chauffage",
          "Climatisation & refroidissement",
          "Systèmes de ventilation",
          "Installation de pompe à chaleur",
          "Contrat d'entretien",
          "Réparation d'urgence",
        ],
      },
      { name: "message", label: "Votre message", type: "textarea", required: true },
    ],
    submitLabel: "Demander un devis",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Chauffage et climatisation, faits comme il faut — de jour comme de nuit.",
    copyright: "© 2026 Nordluft Technik. Tous droits réservés.",
  },
};

const de: DemoContent = {
  seo: {
    title: "Nordluft Technik — HLK-Service im Wallis, Schweiz",
    description:
      "Zertifizierter Fachbetrieb für Heizung, Lüftung und Klimatisierung im Wallis mit 24-Stunden-Notdienst.",
  },
  brandName: "Nordluft Technik",
  tagline: "Heizung und Klima, richtig gemacht — Tag und Nacht.",
  location: "Wallis, Schweiz",
  nav: [
    { label: "Start", href: "#home" },
    { label: "Leistungen", href: "#services" },
    { label: "Referenzen", href: "#gallery" },
    { label: "Gebiete", href: "#areas" },
    { label: "Bewertungen", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    eyebrow: "Zertifizierter HLK-Fachbetrieb",
    title: "Zuverlässige Heizung, Lüftung und Klimatisierung — für Zuhause und Unternehmen.",
    subtitle:
      "Nordluft Technik installiert, wartet und repariert HLK-Systeme im gesamten Wallis — zertifizierte Techniker, transparente Preise und 24-Stunden-Notdienst.",
    ctaPrimary: "Angebot anfordern",
    ctaSecondary: "Unsere Arbeiten ansehen",
  },
  emergencyCta: {
    title: "Keine Heizung? Keine Kühlung? Wir sind erreichbar.",
    subtitle:
      "24-Stunden-Notdienst bei Heizungs- und Klimaausfällen — schnelle Reaktion, faire Preise.",
    cta: "Notdienst anrufen",
    variant: "emergency",
  },
  services: {
    title: "Unsere Leistungen",
    subtitle: "Kompletter HLK-Service — von der Neuinstallation bis zur saisonalen Wartung.",
    items: [
      {
        icon: "🔥",
        title: "Heizungsinstallation & -reparatur",
        description:
          "Neuinstallation von Heizkesseln und Öfen sowie schnelle Reparaturen bei Ausfällen.",
      },
      {
        icon: "❄️",
        title: "Klimatisierung & Kühlung",
        description:
          "Installation, Wartung und Reparatur von Klimaanlagen für Wohnungen, Büros und Geschäfte.",
      },
      {
        icon: "🌬️",
        title: "Lüftungssysteme",
        description: "Planung und Installation mechanischer Lüftung für gesunde Raumluft.",
      },
      {
        icon: "♻️",
        title: "Wärmepumpeninstallation",
        description:
          "Energieeffiziente Wärmepumpensysteme, dimensioniert für Schweizer Winter.",
      },
      {
        icon: "🗓️",
        title: "Wartungsverträge",
        description:
          "Geplante saisonale Wartung für effiziente Systeme und weniger Ausfälle.",
      },
      {
        icon: "🚨",
        title: "Notfallreparaturen",
        description: "24-Stunden-Notdienst bei Heizungs- und Kühlungsausfällen.",
      },
    ],
  },
  testimonials: {
    title: "Was unsere Kunden sagen",
    items: [
      {
        quote:
          "Unsere Heizung fiel an einem Sonntag im Januar aus — Nordluft hatte innerhalb von zwei Stunden einen Techniker vor Ort.",
        author: "Fabienne Michellod",
        role: "Hausbesitzerin",
        rating: 5,
      },
      {
        quote:
          "Professionelle Installation, saubere Arbeit, und das ganze System wurde uns klar erklärt.",
        author: "Grégoire Salamin",
        role: "Immobilienverwalter",
        rating: 5,
      },
      {
        quote:
          "Faire Preise und kein Upselling. Genau das, was man von einem HLK-Unternehmen erwartet.",
        author: "Isabelle Roux",
        role: "Unternehmerin",
        rating: 5,
      },
    ],
  },
  gallery: {
    title: "Unsere aktuellen Installationen",
    subtitle: "Ein Einblick in Wärmepumpen-, Heizkessel- und Lüftungsinstallationen in der Region.",
  },
  certifications: {
    title: "Zertifiziert & versichert",
    items: [
      { name: "STASA-zertifiziert", issuer: "Schweizerischer Verband für Heizung und Sanitär", icon: "🏅" },
      {
        name: "Wärmepumpen-Spezialist",
        issuer: "Fachvereinigung Wärmepumpen Schweiz (FWS)",
        icon: "🔧",
      },
      { name: "Vollständig versichert", issuer: "Haftpflicht- und Gewährleistungsschutz", icon: "🛡️" },
      { name: "10 Jahre Garantie", issuer: "Auf alle Neuinstallationen", icon: "📜" },
    ],
  },
  serviceAreas: {
    title: "Unser Einsatzgebiet",
    subtitle: "Wir betreuen Privat- und Geschäftskunden im gesamten Wallis.",
    areas: AREAS,
  },
  contact: {
    title: "Angebot anfordern",
    subtitle: "Erzählen Sie uns von Ihrem System und Ihrem Bedarf — wir antworten innerhalb eines Werktags.",
    fields: [
      { name: "name", label: "Ihr Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "phone", label: "Telefon", type: "tel" },
      {
        name: "propertyType",
        label: "Objektart",
        type: "select",
        options: ["Option wählen", "Wohngebäude", "Gewerbe", "Industrie"],
      },
      {
        name: "serviceNeeded",
        label: "Gewünschte Leistung",
        type: "select",
        options: [
          "Option wählen",
          "Heizungsinstallation & -reparatur",
          "Klimatisierung & Kühlung",
          "Lüftungssysteme",
          "Wärmepumpeninstallation",
          "Wartungsvertrag",
          "Notfallreparatur",
        ],
      },
      { name: "message", label: "Ihre Nachricht", type: "textarea", required: true },
    ],
    submitLabel: "Angebot anfordern",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Heizung und Klima, richtig gemacht — Tag und Nacht.",
    copyright: "© 2026 Nordluft Technik. Alle Rechte vorbehalten.",
  },
};

export const content: Record<Locale, DemoContent> = { en, fr, de };
