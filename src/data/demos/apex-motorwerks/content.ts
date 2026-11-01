import type { DemoContent } from "@/types/demo";
import type { Locale } from "@/i18n/routing";
import { images } from "./images";

const ADDRESS = "Route de l'Industrie 12, 1950 Sion, Switzerland";
const PHONE = "+41 27 555 12 34";
const EMAIL = "service@apex-motorwerks.ch";

const en: DemoContent = {
  seo: {
    title: "Apex Motorwerks — Premium Automotive Service in Sion, Valais",
    description:
      "Independent garage in Sion offering diagnostics, brakes, engine service, bodywork, and detailing with dealership-level precision and honest pricing.",
  },
  brandName: "Apex Motorwerks",
  tagline: "Precision automotive care, engineered for trust.",
  location: "Sion, Valais",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Independent Service Center",
    title: "Precision automotive care for drivers who expect more.",
    subtitle:
      "Apex Motorwerks combines dealership-level expertise with honest, transparent service — for every make, every model, every visit.",
    ctaPrimary: "Book a service",
    ctaSecondary: "View our workshop",
  },
  services: {
    title: "What we service",
    items: [
    {
      icon: "🔧",
      title: "Diagnostics & Electronics",
      description:
        "Full computerized diagnostics for engine, electronics, and onboard systems — pinpointed, not guessed.",
    },
    {
      icon: "🛑",
      title: "Brakes & Suspension",
      description:
        "Precision brake and suspension work using OE-grade parts, tested to manufacturer tolerances.",
    },
    {
      icon: "⚙️",
      title: "Engine & Transmission",
      description:
        "Complete engine and transmission service, from routine maintenance to complex rebuilds.",
    },
    {
      icon: "🛞",
      title: "Tires & Wheel Alignment",
      description:
        "Tire fitting, balancing, and computerized wheel alignment for a smoother, safer drive.",
    },
    {
      icon: "✨",
      title: "Bodywork & Detailing",
      description:
        "Bodywork repair and premium detailing that restores your vehicle to showroom condition.",
    },
    {
      icon: "❄️",
      title: "Air Conditioning Service",
      description:
        "Full A/C diagnostics, regassing, and repair to keep every season comfortable.",
    },
    ],
  },
  bookingCta: {
    title: "Ready to book your service?",
    subtitle:
      "Choose a time that works for you — our team will confirm within one business hour.",
    cta: "Book an appointment",
    variant: "appointment",
  },
  testimonials: {
    title: "What our clients say",
    items: [
    {
      quote:
        "Apex diagnosed an issue two other garages missed — professional from start to finish.",
      author: "Marc Dubois",
      role: "Audi A4 owner",
      rating: 5,
    },
    {
      quote:
        "Transparent pricing, no surprises, and my car came back cleaner than when I dropped it off.",
      author: "Élodie Fontaine",
      role: "BMW 3 Series owner",
      rating: 5,
    },
    {
      quote:
        "The team explained every repair in plain language. I finally trust my garage.",
      author: "Samuel Roten",
      role: "Mercedes-Benz C-Class owner",
      rating: 5,
    },
    ],
  },
  beforeAfter: {
    title: "Real repairs, real results",
    subtitle:
      "A look at recent bodywork and detailing work completed at our workshop.",
    entries: [
      {
        label: "Bodywork restoration",
        before: images.beforeAfter![0].before,
        after: images.beforeAfter![0].after,
      },
      {
        label: "Full detailing service",
        before: images.beforeAfter![1].before,
        after: images.beforeAfter![1].after,
      },
    ],
  },
  team: {
    title: "Meet the team",
    subtitle:
      "Certified technicians with decades of combined experience across premium and everyday brands.",
    members: [
      {
        id: "lead-mechanic",
        name: "Julien Moret",
        role: "Lead Master Technician",
        bio: "15 years servicing premium German and Swiss vehicles, certified across all major diagnostic platforms.",
        photo: images.team![0],
      },
      {
        id: "diagnostics-specialist",
        name: "Nadia Berger",
        role: "Diagnostics Specialist",
        bio: "Specialist in electronic systems and hybrid drivetrains, trained on manufacturer-specific tooling.",
        photo: images.team![1],
      },
      {
        id: "service-advisor",
        name: "Thomas Wyss",
        role: "Service Advisor",
        bio: "Your point of contact from drop-off to pickup — clear updates, honest estimates, no jargon.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "Inside our workshop",
    subtitle:
      "A modern facility built for precision work, from diagnostics to detailing.",
  },
  emergencyCta: {
    title: "Breakdown or emergency repair?",
    subtitle:
      "Call now for priority service — we'll get you back on the road as fast as safely possible.",
    cta: "Call for emergency service",
    variant: "emergency",
  },
  contact: {
    title: "Request a service or quote",
    subtitle:
      "Tell us about your vehicle and what it needs — we'll get back to you with a clear plan and price.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "vehicle", label: "Vehicle (make & model)", type: "text" },
      {
        name: "serviceType",
        label: "Type of service",
        type: "select",
        options: [
          "Select a service",
          "Diagnostics",
          "Brakes & Suspension",
          "Engine & Transmission",
          "Tires & Alignment",
          "Bodywork & Detailing",
          "Air Conditioning",
          "Not sure yet",
        ],
      },
      { name: "message", label: "Your message", type: "textarea", required: true },
    ],
    submitLabel: "Request service",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Precision automotive care, engineered for trust.",
    copyright: "© 2026 Apex Motorwerks. All rights reserved.",
  },
};

const fr: DemoContent = {
  seo: {
    title: "Apex Motorwerks — Garage automobile premium à Sion, Valais",
    description:
      "Garage indépendant à Sion proposant diagnostic, freins, moteur, carrosserie et detailing avec la précision d'une concession et des tarifs honnêtes.",
  },
  brandName: "Apex Motorwerks",
  tagline: "Un entretien automobile de précision, pensé pour la confiance.",
  location: "Sion, Valais",
  nav: [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#gallery" },
    { label: "Équipe", href: "#team" },
    { label: "Avis", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Garage indépendant",
    title: "Un entretien automobile de précision, pour les conducteurs exigeants.",
    subtitle:
      "Apex Motorwerks allie l'expertise d'une concession à un service honnête et transparent — pour toutes les marques, tous les modèles, à chaque visite.",
    ctaPrimary: "Réserver un entretien",
    ctaSecondary: "Découvrir notre atelier",
  },
  services: {
    title: "Nos prestations",
    items: [
    {
      icon: "🔧",
      title: "Diagnostic & électronique",
      description:
        "Diagnostic électronique complet du moteur et des systèmes embarqués — une analyse précise, jamais approximative.",
    },
    {
      icon: "🛑",
      title: "Freins & suspension",
      description:
        "Interventions de précision sur freins et suspensions, avec pièces d'origine et contrôles aux tolérances du constructeur.",
    },
    {
      icon: "⚙️",
      title: "Moteur & transmission",
      description:
        "Entretien complet du moteur et de la transmission, de la maintenance courante aux réparations complexes.",
    },
    {
      icon: "🛞",
      title: "Pneus & géométrie",
      description:
        "Montage, équilibrage et géométrie informatisée pour une conduite plus sûre et plus confortable.",
    },
    {
      icon: "✨",
      title: "Carrosserie & detailing",
      description:
        "Réparation de carrosserie et detailing haut de gamme pour retrouver une finition comme neuve.",
    },
    {
      icon: "❄️",
      title: "Climatisation",
      description:
        "Diagnostic complet, recharge et réparation de climatisation pour un confort toute l'année.",
    },
    ],
  },
  bookingCta: {
    title: "Prêt à réserver votre entretien ?",
    subtitle:
      "Choisissez un créneau qui vous convient — notre équipe confirme sous une heure ouvrée.",
    cta: "Prendre rendez-vous",
    variant: "appointment",
  },
  testimonials: {
    title: "Ce que disent nos clients",
    items: [
    {
      quote:
        "Apex a identifié une panne que deux autres garages avaient manquée — un service professionnel du début à la fin.",
      author: "Marc Dubois",
      role: "Propriétaire d'une Audi A4",
      rating: 5,
    },
    {
      quote:
        "Des tarifs transparents, aucune surprise, et ma voiture est revenue plus propre qu'à son dépôt.",
      author: "Élodie Fontaine",
      role: "Propriétaire d'une BMW Série 3",
      rating: 5,
    },
    {
      quote:
        "L'équipe explique chaque réparation avec des mots simples. J'ai enfin confiance en mon garage.",
      author: "Samuel Roten",
      role: "Propriétaire d'une Mercedes-Benz Classe C",
      rating: 5,
    },
    ],
  },
  beforeAfter: {
    title: "De vraies réparations, de vrais résultats",
    subtitle:
      "Un aperçu de récents travaux de carrosserie et de detailing réalisés dans notre atelier.",
    entries: [
      {
        label: "Restauration de carrosserie",
        before: images.beforeAfter![0].before,
        after: images.beforeAfter![0].after,
      },
      {
        label: "Detailing complet",
        before: images.beforeAfter![1].before,
        after: images.beforeAfter![1].after,
      },
    ],
  },
  team: {
    title: "Rencontrez l'équipe",
    subtitle:
      "Des techniciens certifiés cumulant des décennies d'expérience sur les marques premium comme généralistes.",
    members: [
      {
        id: "lead-mechanic",
        name: "Julien Moret",
        role: "Chef technicien",
        bio: "15 ans d'expérience sur les véhicules premium allemands et suisses, certifié sur toutes les principales plateformes de diagnostic.",
        photo: images.team![0],
      },
      {
        id: "diagnostics-specialist",
        name: "Nadia Berger",
        role: "Spécialiste diagnostic",
        bio: "Spécialiste des systèmes électroniques et des motorisations hybrides, formée aux outils spécifiques des constructeurs.",
        photo: images.team![1],
      },
      {
        id: "service-advisor",
        name: "Thomas Wyss",
        role: "Conseiller service",
        bio: "Votre interlocuteur du dépôt à la restitution du véhicule — des informations claires, des devis honnêtes, sans jargon.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "À l'intérieur de notre atelier",
    subtitle:
      "Un atelier moderne conçu pour un travail de précision, du diagnostic au detailing.",
  },
  emergencyCta: {
    title: "Panne ou réparation urgente ?",
    subtitle:
      "Appelez-nous pour un service prioritaire — nous vous remettons sur la route aussi vite que possible, en toute sécurité.",
    cta: "Appeler le service d'urgence",
    variant: "emergency",
  },
  contact: {
    title: "Demander un entretien ou un devis",
    subtitle:
      "Parlez-nous de votre véhicule et de ses besoins — nous reviendrons vers vous avec un plan clair et un prix.",
    fields: [
      { name: "name", label: "Votre nom", type: "text", required: true },
      { name: "email", label: "Adresse e-mail", type: "email", required: true },
      { name: "phone", label: "Téléphone", type: "tel" },
      { name: "vehicle", label: "Véhicule (marque et modèle)", type: "text" },
      {
        name: "serviceType",
        label: "Type de service",
        type: "select",
        options: [
          "Choisir une option",
          "Diagnostic",
          "Freins & suspension",
          "Moteur & transmission",
          "Pneus & géométrie",
          "Carrosserie & detailing",
          "Climatisation",
          "Je ne sais pas encore",
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
    tagline: "Un entretien automobile de précision, pensé pour la confiance.",
    copyright: "© 2026 Apex Motorwerks. Tous droits réservés.",
  },
};

const de: DemoContent = {
  seo: {
    title: "Apex Motorwerks — Premium Autowerkstatt in Sion, Wallis",
    description:
      "Unabhängige Werkstatt in Sion mit Diagnose, Bremsen, Motorservice, Karosserie und Aufbereitung auf Vertragswerkstatt-Niveau zu fairen Preisen.",
  },
  brandName: "Apex Motorwerks",
  tagline: "Präzise Fahrzeugpflege, der Sie vertrauen können.",
  location: "Sion, Wallis",
  nav: [
    { label: "Start", href: "#home" },
    { label: "Leistungen", href: "#services" },
    { label: "Galerie", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Bewertungen", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    eyebrow: "Unabhängige Fachwerkstatt",
    title: "Präzise Fahrzeugpflege für Fahrer, die mehr erwarten.",
    subtitle:
      "Apex Motorwerks vereint Kompetenz auf Vertragswerkstatt-Niveau mit ehrlichem, transparentem Service — für jede Marke, jedes Modell, bei jedem Besuch.",
    ctaPrimary: "Termin vereinbaren",
    ctaSecondary: "Werkstatt entdecken",
  },
  services: {
    title: "Unsere Leistungen",
    items: [
    {
      icon: "🔧",
      title: "Diagnose & Elektronik",
      description:
        "Vollständige computergestützte Diagnose für Motor, Elektronik und Bordsysteme — präzise statt geraten.",
    },
    {
      icon: "🛑",
      title: "Bremsen & Fahrwerk",
      description:
        "Präzisionsarbeiten an Bremsen und Fahrwerk mit Originalteilen, geprüft nach Herstellervorgaben.",
    },
    {
      icon: "⚙️",
      title: "Motor & Getriebe",
      description:
        "Kompletter Service für Motor und Getriebe — von der Routinewartung bis zur komplexen Instandsetzung.",
    },
    {
      icon: "🛞",
      title: "Reifen & Achsvermessung",
      description:
        "Reifenmontage, Auswuchten und computergestützte Achsvermessung für sichereres, ruhigeres Fahren.",
    },
    {
      icon: "✨",
      title: "Karosserie & Aufbereitung",
      description:
        "Karosseriereparaturen und hochwertige Fahrzeugaufbereitung — Ihr Auto wie neu.",
    },
    {
      icon: "❄️",
      title: "Klimaanlagenservice",
      description:
        "Vollständige Diagnose, Befüllung und Reparatur der Klimaanlage für Komfort in jeder Jahreszeit.",
    },
    ],
  },
  bookingCta: {
    title: "Bereit für Ihren Werkstatttermin?",
    subtitle:
      "Wählen Sie einen passenden Termin — unser Team bestätigt innerhalb einer Stunde.",
    cta: "Termin buchen",
    variant: "appointment",
  },
  testimonials: {
    title: "Was unsere Kunden sagen",
    items: [
    {
      quote:
        "Apex hat einen Fehler gefunden, den zwei andere Werkstätten übersehen haben — professionell von Anfang bis Ende.",
      author: "Marc Dubois",
      role: "Audi A4 Besitzer",
      rating: 5,
    },
    {
      quote:
        "Transparente Preise, keine Überraschungen, und mein Auto kam sauberer zurück, als ich es gebracht hatte.",
      author: "Élodie Fontaine",
      role: "BMW 3er Besitzerin",
      rating: 5,
    },
    {
      quote:
        "Das Team erklärt jede Reparatur verständlich. Endlich vertraue ich meiner Werkstatt.",
      author: "Samuel Roten",
      role: "Mercedes-Benz C-Klasse Besitzer",
      rating: 5,
    },
    ],
  },
  beforeAfter: {
    title: "Echte Reparaturen, echte Ergebnisse",
    subtitle:
      "Ein Einblick in kürzlich abgeschlossene Karosserie- und Aufbereitungsarbeiten in unserer Werkstatt.",
    entries: [
      {
        label: "Karosserie-Instandsetzung",
        before: images.beforeAfter![0].before,
        after: images.beforeAfter![0].after,
      },
      {
        label: "Komplettaufbereitung",
        before: images.beforeAfter![1].before,
        after: images.beforeAfter![1].after,
      },
    ],
  },
  team: {
    title: "Unser Team",
    subtitle:
      "Zertifizierte Techniker mit jahrzehntelanger Erfahrung mit Premium- und Alltagsmarken.",
    members: [
      {
        id: "lead-mechanic",
        name: "Julien Moret",
        role: "Leitender Techniker",
        bio: "15 Jahre Erfahrung mit deutschen und Schweizer Premiumfahrzeugen, zertifiziert auf allen wichtigen Diagnoseplattformen.",
        photo: images.team![0],
      },
      {
        id: "diagnostics-specialist",
        name: "Nadia Berger",
        role: "Diagnosespezialistin",
        bio: "Spezialistin für elektronische Systeme und Hybridantriebe, geschult an herstellerspezifischen Werkzeugen.",
        photo: images.team![1],
      },
      {
        id: "service-advisor",
        name: "Thomas Wyss",
        role: "Serviceberater",
        bio: "Ihr Ansprechpartner von der Abgabe bis zur Abholung — klare Updates, ehrliche Kostenvoranschläge, kein Fachjargon.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "Einblick in unsere Werkstatt",
    subtitle:
      "Eine moderne Anlage für präzise Arbeit — von der Diagnose bis zur Aufbereitung.",
  },
  emergencyCta: {
    title: "Panne oder dringende Reparatur?",
    subtitle:
      "Rufen Sie jetzt an für einen Prioritätsservice — wir bringen Sie so schnell wie sicher möglich wieder auf die Strasse.",
    cta: "Notdienst anrufen",
    variant: "emergency",
  },
  contact: {
    title: "Service oder Kostenvoranschlag anfragen",
    subtitle:
      "Erzählen Sie uns von Ihrem Fahrzeug und was es braucht — wir melden uns mit einem klaren Plan und Preis.",
    fields: [
      { name: "name", label: "Ihr Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "phone", label: "Telefon", type: "tel" },
      { name: "vehicle", label: "Fahrzeug (Marke & Modell)", type: "text" },
      {
        name: "serviceType",
        label: "Serviceart",
        type: "select",
        options: [
          "Option wählen",
          "Diagnose",
          "Bremsen & Fahrwerk",
          "Motor & Getriebe",
          "Reifen & Achsvermessung",
          "Karosserie & Aufbereitung",
          "Klimaanlage",
          "Noch unsicher",
        ],
      },
      { name: "message", label: "Ihre Nachricht", type: "textarea", required: true },
    ],
    submitLabel: "Kostenvoranschlag anfragen",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Präzise Fahrzeugpflege, der Sie vertrauen können.",
    copyright: "© 2026 Apex Motorwerks. Alle Rechte vorbehalten.",
  },
};

export const content: Record<Locale, DemoContent> = { en, fr, de };
