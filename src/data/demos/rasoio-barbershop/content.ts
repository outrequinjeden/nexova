import type { DemoContent } from "@/types/demo";
import type { Locale } from "@/i18n/routing";
import { images } from "./images";

const ADDRESS = "Rue du Grand-Pont 8, 1950 Sion, Switzerland";
const PHONE = "+41 27 555 98 76";
const EMAIL = "hello@rasoio-barbershop.ch";

const en: DemoContent = {
  seo: {
    title: "Rasoio Barbershop — Premium Barbershop in Sion, Valais",
    description:
      "Classic barbering with a modern edge — precision haircuts, beard grooming, and hot towel shaves in the heart of Sion.",
  },
  brandName: "Rasoio Barbershop",
  tagline: "Classic craft, modern edge.",
  location: "Sion, Valais",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Gallery", href: "#gallery" },
    { label: "Barbers", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Est. Barbershop",
    title: "Classic craft, modern edge.",
    subtitle:
      "Rasoio Barbershop blends old-world barbering technique with a refined, modern atmosphere — precision cuts, hot towel shaves, and grooming done right.",
    ctaPrimary: "Book an appointment",
    ctaSecondary: "View the gallery",
  },
  bookingCta: {
    title: "Ready for your next cut?",
    subtitle:
      "Reserve your chair online — walk-ins welcome when space allows.",
    cta: "Book now",
    variant: "appointment",
  },
  testimonials: {
    title: "What our clients say",
    items: [
      {
        quote: "Best fade I've had in years — clean lines, no rush.",
        author: "Yanis Perruchoud",
        role: "Regular client",
        rating: 5,
      },
      {
        quote:
          "The hot towel shave is worth it alone. Feels like a proper barbershop, not a chain.",
        author: "Diego Volken",
        role: "Regular client",
        rating: 5,
      },
      {
        quote: "Booking online is effortless and they're always on time.",
        author: "Rafael Constantin",
        role: "Regular client",
        rating: 5,
      },
    ],
  },
  team: {
    title: "Meet your barbers",
    subtitle:
      "Every barber at Rasoio is trained in classic technique and modern styling.",
    members: [
      {
        id: "leo-berthod",
        name: "Léo Berthod",
        role: "Master Barber",
        bio: "10+ years perfecting fades, tapers, and traditional straight-razor shaves.",
        photo: images.team![0],
      },
      {
        id: "karim-aziz",
        name: "Karim Aziz",
        role: "Senior Barber",
        bio: "Specialist in textured cuts and beard sculpting, trained in Milan and Geneva.",
        photo: images.team![1],
      },
      {
        id: "noah-steiner",
        name: "Noah Steiner",
        role: "Barber & Colorist",
        bio: "Brings precision color and creative styling to the classic barbershop chair.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "Recent work",
    subtitle:
      "A look at the cuts, shaves, and details that define the Rasoio style.",
  },
  pricing: {
    title: "Services & pricing",
    subtitle: "Transparent pricing, no surprises.",
    items: [
      {
        name: "Classic Haircut",
        price: "45 CHF",
        description: "Precision cut, wash, and style.",
      },
      {
        name: "Beard Trim & Shape",
        price: "25 CHF",
        description: "Sculpted beard trim with straight-razor lines.",
      },
      {
        name: "Hot Towel Shave",
        price: "40 CHF",
        description: "Traditional straight-razor shave with hot towel treatment.",
      },
      {
        name: "Haircut & Beard Combo",
        price: "60 CHF",
        description: "Our most popular service — full cut and beard grooming.",
      },
      {
        name: "Kids Haircut",
        price: "30 CHF",
        description: "Precision cut for younger clients.",
      },
    ],
  },
  hours: {
    title: "Opening hours",
    entries: [
      { day: "Monday – Friday", hours: "9:00 – 19:00" },
      { day: "Saturday", hours: "9:00 – 17:00" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  contact: {
    title: "Book your visit",
    subtitle: "Reserve a chair, ask about a service, or just say hello.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      {
        name: "barber",
        label: "Preferred barber",
        type: "select",
        options: ["Select an option", "Any barber", "Léo Berthod", "Karim Aziz", "Noah Steiner"],
      },
      {
        name: "service",
        label: "Preferred service",
        type: "select",
        options: [
          "Select an option",
          "Classic Haircut",
          "Beard Trim & Shape",
          "Hot Towel Shave",
          "Haircut & Beard Combo",
          "Kids Haircut",
        ],
      },
      { name: "message", label: "Your message", type: "textarea", required: true },
    ],
    submitLabel: "Request appointment",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Classic craft, modern edge.",
    copyright: "© 2026 Rasoio Barbershop. All rights reserved.",
  },
};

const fr: DemoContent = {
  seo: {
    title: "Rasoio Barbershop — Barbershop premium à Sion, Valais",
    description:
      "Un barbershop classique à l'esprit moderne — coupes précises, soin de barbe et rasage à la serviette chaude au cœur de Sion.",
  },
  brandName: "Rasoio Barbershop",
  tagline: "L'artisanat classique, avec une touche moderne.",
  location: "Sion, Valais",
  nav: [
    { label: "Accueil", href: "#home" },
    { label: "Galerie", href: "#gallery" },
    { label: "Barbiers", href: "#team" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Avis", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Barbershop depuis toujours",
    title: "L'artisanat classique, avec une touche moderne.",
    subtitle:
      "Rasoio Barbershop allie techniques traditionnelles de barbier et ambiance résolument moderne — coupes précises, rasages à la serviette chaude, et un soin du détail sans compromis.",
    ctaPrimary: "Réserver un rendez-vous",
    ctaSecondary: "Voir la galerie",
  },
  bookingCta: {
    title: "Prêt pour votre prochaine coupe ?",
    subtitle: "Réservez votre fauteuil en ligne — sans rendez-vous selon disponibilité.",
    cta: "Réserver",
    variant: "appointment",
  },
  testimonials: {
    title: "Ce que disent nos clients",
    items: [
      {
        quote:
          "Le meilleur dégradé que j'ai eu depuis des années — des lignes nettes, sans précipitation.",
        author: "Yanis Perruchoud",
        role: "Client régulier",
        rating: 5,
      },
      {
        quote:
          "Le rasage à la serviette chaude vaut à lui seul le déplacement. On sent un vrai barbershop, pas une chaîne.",
        author: "Diego Volken",
        role: "Client régulier",
        rating: 5,
      },
      {
        quote: "La réservation en ligne est simple et ils sont toujours à l'heure.",
        author: "Rafael Constantin",
        role: "Client régulier",
        rating: 5,
      },
    ],
  },
  team: {
    title: "Rencontrez vos barbiers",
    subtitle:
      "Chaque barbier de Rasoio maîtrise les techniques classiques et le style moderne.",
    members: [
      {
        id: "leo-berthod",
        name: "Léo Berthod",
        role: "Barbier en chef",
        bio: "Plus de 10 ans à perfectionner dégradés, coupes progressives et rasage traditionnel au coupe-chou.",
        photo: images.team![0],
      },
      {
        id: "karim-aziz",
        name: "Karim Aziz",
        role: "Barbier senior",
        bio: "Spécialiste des coupes texturées et de la sculpture de barbe, formé à Milan et à Genève.",
        photo: images.team![1],
      },
      {
        id: "noah-steiner",
        name: "Noah Steiner",
        role: "Barbier & coloriste",
        bio: "Apporte précision de la couleur et créativité au fauteuil classique du barbier.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "Nos réalisations récentes",
    subtitle: "Un aperçu des coupes, rasages et finitions qui définissent le style Rasoio.",
  },
  pricing: {
    title: "Services & tarifs",
    subtitle: "Des tarifs transparents, sans surprise.",
    items: [
      {
        name: "Coupe classique",
        price: "45 CHF",
        description: "Coupe précise, shampooing et coiffage.",
      },
      {
        name: "Taille de barbe",
        price: "25 CHF",
        description: "Taille sculptée avec des lignes nettes au coupe-chou.",
      },
      {
        name: "Rasage à la serviette chaude",
        price: "40 CHF",
        description: "Rasage traditionnel au coupe-chou avec serviette chaude.",
      },
      {
        name: "Coupe & barbe",
        price: "60 CHF",
        description: "Notre prestation la plus demandée — coupe complète et soin de barbe.",
      },
      {
        name: "Coupe enfant",
        price: "30 CHF",
        description: "Coupe précise pour les plus jeunes clients.",
      },
    ],
  },
  hours: {
    title: "Horaires d'ouverture",
    entries: [
      { day: "Lundi – Vendredi", hours: "9h00 – 19h00" },
      { day: "Samedi", hours: "9h00 – 17h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
  },
  contact: {
    title: "Réservez votre visite",
    subtitle: "Réservez un fauteuil, posez une question sur un service, ou dites-nous bonjour.",
    fields: [
      { name: "name", label: "Votre nom", type: "text", required: true },
      { name: "email", label: "Adresse e-mail", type: "email", required: true },
      { name: "phone", label: "Téléphone", type: "tel" },
      {
        name: "barber",
        label: "Barbier préféré",
        type: "select",
        options: ["Choisir une option", "Peu importe", "Léo Berthod", "Karim Aziz", "Noah Steiner"],
      },
      {
        name: "service",
        label: "Service souhaité",
        type: "select",
        options: [
          "Choisir une option",
          "Coupe classique",
          "Taille de barbe",
          "Rasage à la serviette chaude",
          "Coupe & barbe",
          "Coupe enfant",
        ],
      },
      { name: "message", label: "Votre message", type: "textarea", required: true },
    ],
    submitLabel: "Demander un rendez-vous",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "L'artisanat classique, avec une touche moderne.",
    copyright: "© 2026 Rasoio Barbershop. Tous droits réservés.",
  },
};

const de: DemoContent = {
  seo: {
    title: "Rasoio Barbershop — Premium Barbershop in Sion, Wallis",
    description:
      "Klassisches Barbering mit modernem Stil — präzise Haarschnitte, Bartpflege und Rasur mit heissem Handtuch im Herzen von Sion.",
  },
  brandName: "Rasoio Barbershop",
  tagline: "Klassisches Handwerk, moderner Stil.",
  location: "Sion, Wallis",
  nav: [
    { label: "Start", href: "#home" },
    { label: "Galerie", href: "#gallery" },
    { label: "Barbiere", href: "#team" },
    { label: "Preise", href: "#pricing" },
    { label: "Bewertungen", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    eyebrow: "Traditioneller Barbershop",
    title: "Klassisches Handwerk, moderner Stil.",
    subtitle:
      "Rasoio Barbershop verbindet traditionelle Barbierkunst mit einer stilvollen, modernen Atmosphäre — präzise Schnitte, Rasuren mit heissem Handtuch und Grooming auf höchstem Niveau.",
    ctaPrimary: "Termin buchen",
    ctaSecondary: "Galerie ansehen",
  },
  bookingCta: {
    title: "Bereit für Ihren nächsten Schnitt?",
    subtitle: "Reservieren Sie Ihren Platz online — Walk-ins nach Verfügbarkeit willkommen.",
    cta: "Jetzt buchen",
    variant: "appointment",
  },
  testimonials: {
    title: "Was unsere Kunden sagen",
    items: [
      {
        quote: "Der beste Fade seit Jahren — saubere Linien, ohne Hektik.",
        author: "Yanis Perruchoud",
        role: "Stammkunde",
        rating: 5,
      },
      {
        quote:
          "Allein die Rasur mit heissem Handtuch ist es wert. Fühlt sich wie ein echter Barbershop an, keine Kette.",
        author: "Diego Volken",
        role: "Stammkunde",
        rating: 5,
      },
      {
        quote: "Die Online-Buchung ist mühelos und sie sind immer pünktlich.",
        author: "Rafael Constantin",
        role: "Stammkunde",
        rating: 5,
      },
    ],
  },
  team: {
    title: "Lernen Sie unsere Barbiere kennen",
    subtitle: "Jeder Barbier bei Rasoio beherrscht klassische Technik und modernen Stil.",
    members: [
      {
        id: "leo-berthod",
        name: "Léo Berthod",
        role: "Chefbarbier",
        bio: "Über 10 Jahre Erfahrung mit Fades, Übergängen und traditioneller Rasur mit dem Rasiermesser.",
        photo: images.team![0],
      },
      {
        id: "karim-aziz",
        name: "Karim Aziz",
        role: "Senior-Barbier",
        bio: "Spezialist für texturierte Schnitte und Bartformung, ausgebildet in Mailand und Genf.",
        photo: images.team![1],
      },
      {
        id: "noah-steiner",
        name: "Noah Steiner",
        role: "Barbier & Colorist",
        bio: "Bringt präzise Farbtechnik und kreatives Styling in den klassischen Barbierstuhl.",
        photo: images.team![2],
      },
    ],
  },
  gallery: {
    title: "Unsere aktuellen Arbeiten",
    subtitle: "Ein Einblick in Schnitte, Rasuren und Details, die den Rasoio-Stil ausmachen.",
  },
  pricing: {
    title: "Leistungen & Preise",
    subtitle: "Transparente Preise, keine Überraschungen.",
    items: [
      {
        name: "Klassischer Haarschnitt",
        price: "45 CHF",
        description: "Präziser Schnitt, Haarwäsche und Styling.",
      },
      {
        name: "Bartkonturierung",
        price: "25 CHF",
        description: "Sauber konturierter Bart mit dem Rasiermesser.",
      },
      {
        name: "Rasur mit heissem Handtuch",
        price: "40 CHF",
        description: "Traditionelle Rasiermesser-Rasur mit heissem Handtuch.",
      },
      {
        name: "Schnitt & Bart Kombi",
        price: "60 CHF",
        description: "Unsere beliebteste Leistung — kompletter Schnitt und Bartpflege.",
      },
      {
        name: "Kinderhaarschnitt",
        price: "30 CHF",
        description: "Präziser Schnitt für jüngere Kunden.",
      },
    ],
  },
  hours: {
    title: "Öffnungszeiten",
    entries: [
      { day: "Montag – Freitag", hours: "9:00 – 19:00" },
      { day: "Samstag", hours: "9:00 – 17:00" },
      { day: "Sonntag", hours: "Geschlossen" },
    ],
  },
  contact: {
    title: "Buchen Sie Ihren Besuch",
    subtitle: "Reservieren Sie einen Platz, stellen Sie eine Frage oder sagen Sie einfach Hallo.",
    fields: [
      { name: "name", label: "Ihr Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "phone", label: "Telefon", type: "tel" },
      {
        name: "barber",
        label: "Bevorzugter Barbier",
        type: "select",
        options: ["Option wählen", "Egal wer", "Léo Berthod", "Karim Aziz", "Noah Steiner"],
      },
      {
        name: "service",
        label: "Gewünschte Leistung",
        type: "select",
        options: [
          "Option wählen",
          "Klassischer Haarschnitt",
          "Bartkonturierung",
          "Rasur mit heissem Handtuch",
          "Schnitt & Bart Kombi",
          "Kinderhaarschnitt",
        ],
      },
      { name: "message", label: "Ihre Nachricht", type: "textarea", required: true },
    ],
    submitLabel: "Termin anfragen",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Klassisches Handwerk, moderner Stil.",
    copyright: "© 2026 Rasoio Barbershop. Alle Rechte vorbehalten.",
  },
};

export const content: Record<Locale, DemoContent> = { en, fr, de };
