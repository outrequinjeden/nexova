import type { DemoContent } from "@/types/demo";
import type { Locale } from "@/i18n/routing";
import { images } from "./images";

const ADDRESS = "Rue des Châteaux 5, 1950 Sion, Switzerland";
const PHONE = "+41 27 555 44 12";
const EMAIL = "reservations@maison-ambre.ch";

const en: DemoContent = {
  seo: {
    title: "Maison Ambre — Fine Dining Restaurant in Sion, Valais",
    description:
      "An intimate fine-dining restaurant in Sion pairing seasonal Alpine ingredients with timeless French technique.",
  },
  brandName: "Maison Ambre",
  tagline: "Where Alpine ingredients meet timeless French technique.",
  location: "Sion, Valais",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Chef", href: "#chef" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Fine Dining",
    title: "A table set for unforgettable evenings.",
    subtitle:
      "Maison Ambre pairs seasonal Alpine ingredients with timeless French technique — an intimate dining room, an ambitious kitchen.",
    ctaPrimary: "Reserve a table",
    ctaSecondary: "View the menu",
  },
  bookingCta: {
    title: "Reserve your table",
    subtitle:
      "Tables are limited each evening — we recommend booking at least 48 hours ahead.",
    cta: "Reserve now",
    variant: "reservation",
  },
  testimonials: {
    title: "What our guests say",
    items: [
      {
        quote: "Every plate felt considered — the lamb was the best I've had in Valais.",
        author: "Camille Roduit",
        role: "Regular guest",
        rating: 5,
      },
      {
        quote:
          "Intimate room, flawless service, a menu that changes with the seasons. A must for special occasions.",
        author: "Antoine Délèze",
        role: "Regular guest",
        rating: 5,
      },
      {
        quote: "Chef Élise's cooking is precise without ever feeling fussy.",
        author: "Laura Bruchez",
        role: "Regular guest",
        rating: 5,
      },
    ],
  },
  menu: {
    title: "Our menu",
    subtitle: "A seasonal menu built around Valais produce and classic technique.",
    categories: [
      {
        name: "Starters",
        items: [
          { name: "Charred leek, hazelnut, brown butter", description: "", price: "18 CHF" },
          {
            name: "Alpine trout tartare, dill, crème fraîche",
            description: "",
            price: "22 CHF",
          },
          { name: "Heritage tomato, burrata, basil oil", description: "", price: "19 CHF" },
        ],
      },
      {
        name: "Mains",
        items: [
          { name: "Slow-roasted lamb, root vegetables, jus", description: "", price: "38 CHF" },
          { name: "Pan-seared lake perch, beurre blanc", description: "", price: "34 CHF" },
          {
            name: "Wild mushroom risotto, aged parmesan",
            description: "",
            price: "29 CHF",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Dark chocolate tart, sea salt", description: "", price: "14 CHF" },
          { name: "Poached pear, vanilla mascarpone", description: "", price: "13 CHF" },
        ],
      },
    ],
  },
  chef: {
    title: "Meet the chef",
    name: "Chef Élise Rey",
    bio: "Trained in Lyon and Geneva, Chef Élise Rey brings a decade of fine-dining experience back home to Valais — building a menu around local farmers, foragers, and producers.",
    photo: images.chef!,
  },
  gallery: {
    title: "Inside Maison Ambre",
    subtitle: "A glimpse of the dining room, the kitchen, and the plates that define our table.",
  },
  contact: {
    title: "Reservations & inquiries",
    subtitle:
      "For parties of 6 or more, or special requests, please contact us directly.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "date", label: "Date", type: "text" },
      {
        name: "partySize",
        label: "Party size",
        type: "select",
        options: ["Select an option", "1–2", "3–4", "5–6", "7+"],
      },
      { name: "message", label: "Your message", type: "textarea", required: true },
    ],
    submitLabel: "Send reservation request",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Where Alpine ingredients meet timeless French technique.",
    copyright: "© 2026 Maison Ambre. All rights reserved.",
  },
};

const fr: DemoContent = {
  seo: {
    title: "Maison Ambre — Restaurant gastronomique à Sion, Valais",
    description:
      "Un restaurant gastronomique intimiste à Sion, alliant produits alpins de saison et technique française intemporelle.",
  },
  brandName: "Maison Ambre",
  tagline: "Là où les produits alpins rencontrent la technique française intemporelle.",
  location: "Sion, Valais",
  nav: [
    { label: "Accueil", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Galerie", href: "#gallery" },
    { label: "Chef", href: "#chef" },
    { label: "Avis", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Gastronomie",
    title: "Une table dressée pour des soirées inoubliables.",
    subtitle:
      "Maison Ambre associe des produits alpins de saison à une technique française intemporelle — une salle intimiste, une cuisine ambitieuse.",
    ctaPrimary: "Réserver une table",
    ctaSecondary: "Découvrir le menu",
  },
  bookingCta: {
    title: "Réservez votre table",
    subtitle:
      "Le nombre de tables est limité chaque soir — nous recommandons de réserver au moins 48 heures à l'avance.",
    cta: "Réserver maintenant",
    variant: "reservation",
  },
  testimonials: {
    title: "Ce que disent nos clients",
    items: [
      {
        quote:
          "Chaque assiette était réfléchie — le meilleur agneau que j'ai mangé en Valais.",
        author: "Camille Roduit",
        role: "Cliente régulière",
        rating: 5,
      },
      {
        quote:
          "Salle intimiste, service impeccable, un menu qui change avec les saisons. Incontournable pour les grandes occasions.",
        author: "Antoine Délèze",
        role: "Client régulier",
        rating: 5,
      },
      {
        quote: "La cuisine de la Cheffe Élise est précise sans jamais être compliquée.",
        author: "Laura Bruchez",
        role: "Cliente régulière",
        rating: 5,
      },
    ],
  },
  menu: {
    title: "Notre menu",
    subtitle: "Un menu de saison construit autour des produits du Valais et d'une technique classique.",
    categories: [
      {
        name: "Entrées",
        items: [
          { name: "Poireau grillé, noisette, beurre noisette", description: "", price: "18 CHF" },
          {
            name: "Tartare de truite alpine, aneth, crème fraîche",
            description: "",
            price: "22 CHF",
          },
          { name: "Tomate ancienne, burrata, huile de basilic", description: "", price: "19 CHF" },
        ],
      },
      {
        name: "Plats",
        items: [
          { name: "Agneau mijoté, légumes racines, jus", description: "", price: "38 CHF" },
          { name: "Perche du lac poêlée, beurre blanc", description: "", price: "34 CHF" },
          {
            name: "Risotto aux champignons sauvages, parmesan affiné",
            description: "",
            price: "29 CHF",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Tarte au chocolat noir, fleur de sel", description: "", price: "14 CHF" },
          { name: "Poire pochée, mascarpone à la vanille", description: "", price: "13 CHF" },
        ],
      },
    ],
  },
  chef: {
    title: "Rencontrez le chef",
    name: "Chef Élise Rey",
    bio: "Formée à Lyon et à Genève, la Cheffe Élise Rey ramène une décennie d'expérience en gastronomie au Valais — un menu construit autour des producteurs, cueilleurs et fermiers locaux.",
    photo: images.chef!,
  },
  gallery: {
    title: "À l'intérieur de Maison Ambre",
    subtitle: "Un aperçu de la salle, de la cuisine et des assiettes qui définissent notre table.",
  },
  contact: {
    title: "Réservations & renseignements",
    subtitle:
      "Pour les groupes de 6 personnes ou plus, ou toute demande particulière, merci de nous contacter directement.",
    fields: [
      { name: "name", label: "Votre nom", type: "text", required: true },
      { name: "email", label: "Adresse e-mail", type: "email", required: true },
      { name: "phone", label: "Téléphone", type: "tel" },
      { name: "date", label: "Date", type: "text" },
      {
        name: "partySize",
        label: "Nombre de convives",
        type: "select",
        options: ["Choisir une option", "1–2", "3–4", "5–6", "7+"],
      },
      { name: "message", label: "Votre message", type: "textarea", required: true },
    ],
    submitLabel: "Envoyer la demande de réservation",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Là où les produits alpins rencontrent la technique française intemporelle.",
    copyright: "© 2026 Maison Ambre. Tous droits réservés.",
  },
};

const de: DemoContent = {
  seo: {
    title: "Maison Ambre — Gehobenes Restaurant in Sion, Wallis",
    description:
      "Ein intimes Gourmet-Restaurant in Sion, das saisonale alpine Zutaten mit zeitloser französischer Technik verbindet.",
  },
  brandName: "Maison Ambre",
  tagline: "Wo alpine Zutaten auf zeitlose französische Technik treffen.",
  location: "Sion, Wallis",
  nav: [
    { label: "Start", href: "#home" },
    { label: "Menü", href: "#menu" },
    { label: "Galerie", href: "#gallery" },
    { label: "Küchenchefin", href: "#chef" },
    { label: "Bewertungen", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
  ],
  hero: {
    eyebrow: "Gehobene Küche",
    title: "Ein Tisch für unvergessliche Abende.",
    subtitle:
      "Maison Ambre verbindet saisonale alpine Zutaten mit zeitloser französischer Technik — ein intimer Speisesaal, eine ambitionierte Küche.",
    ctaPrimary: "Tisch reservieren",
    ctaSecondary: "Menü ansehen",
  },
  bookingCta: {
    title: "Reservieren Sie Ihren Tisch",
    subtitle:
      "Die Tischanzahl ist jeden Abend begrenzt — wir empfehlen, mindestens 48 Stunden im Voraus zu reservieren.",
    cta: "Jetzt reservieren",
    variant: "reservation",
  },
  testimonials: {
    title: "Was unsere Gäste sagen",
    items: [
      {
        quote: "Jeder Teller war durchdacht — das beste Lamm, das ich im Wallis hatte.",
        author: "Camille Roduit",
        role: "Stammgast",
        rating: 5,
      },
      {
        quote:
          "Intimer Raum, tadelloser Service, ein Menü, das sich mit den Jahreszeiten ändert. Ein Muss für besondere Anlässe.",
        author: "Antoine Délèze",
        role: "Stammgast",
        rating: 5,
      },
      {
        quote: "Die Küche von Chefin Élise ist präzise, ohne je überladen zu wirken.",
        author: "Laura Bruchez",
        role: "Stammgästin",
        rating: 5,
      },
    ],
  },
  menu: {
    title: "Unser Menü",
    subtitle: "Ein saisonales Menü rund um Walliser Produkte und klassische Technik.",
    categories: [
      {
        name: "Vorspeisen",
        items: [
          { name: "Gegrillter Lauch, Haselnuss, Nussbutter", description: "", price: "18 CHF" },
          {
            name: "Alpenforellen-Tatar, Dill, Crème fraîche",
            description: "",
            price: "22 CHF",
          },
          { name: "Ochsenherztomate, Burrata, Basilikumöl", description: "", price: "19 CHF" },
        ],
      },
      {
        name: "Hauptgänge",
        items: [
          { name: "Geschmortes Lamm, Wurzelgemüse, Jus", description: "", price: "38 CHF" },
          { name: "Gebratener Felchen, Beurre blanc", description: "", price: "34 CHF" },
          {
            name: "Risotto mit Wildpilzen, gereiftem Parmesan",
            description: "",
            price: "29 CHF",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Zartbitterschokoladentarte, Fleur de Sel", description: "", price: "14 CHF" },
          { name: "Pochierte Birne, Vanille-Mascarpone", description: "", price: "13 CHF" },
        ],
      },
    ],
  },
  chef: {
    title: "Lernen Sie die Küchenchefin kennen",
    name: "Chef Élise Rey",
    bio: "Ausgebildet in Lyon und Genf, bringt Küchenchefin Élise Rey ein Jahrzehnt Erfahrung in der gehobenen Küche zurück ins Wallis — ein Menü rund um lokale Bauern, Sammler und Produzenten.",
    photo: images.chef!,
  },
  gallery: {
    title: "Einblick in Maison Ambre",
    subtitle: "Ein Einblick in den Speisesaal, die Küche und die Teller, die unseren Tisch ausmachen.",
  },
  contact: {
    title: "Reservierungen & Anfragen",
    subtitle: "Für Gruppen ab 6 Personen oder besondere Wünsche kontaktieren Sie uns bitte direkt.",
    fields: [
      { name: "name", label: "Ihr Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "phone", label: "Telefon", type: "tel" },
      { name: "date", label: "Datum", type: "text" },
      {
        name: "partySize",
        label: "Anzahl Gäste",
        type: "select",
        options: ["Option wählen", "1–2", "3–4", "5–6", "7+"],
      },
      { name: "message", label: "Ihre Nachricht", type: "textarea", required: true },
    ],
    submitLabel: "Reservierungsanfrage senden",
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  footer: {
    tagline: "Wo alpine Zutaten auf zeitlose französische Technik treffen.",
    copyright: "© 2026 Maison Ambre. Alle Rechte vorbehalten.",
  },
};

export const content: Record<Locale, DemoContent> = { en, fr, de };
