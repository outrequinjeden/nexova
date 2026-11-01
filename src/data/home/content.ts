import type { Locale } from "@/i18n/routing";
import type { FormField, HomeContent } from "@/types/home";

export const CONTACT_EMAIL = "nexova.website@gmail.com";

/** Option values are the English labels the API / inbox will read. */
const PROJECT_VALUES = [
  "New website",
  "Website redesign",
  "E-commerce",
  "Booking system",
  "Other",
];

const LANGUAGE_OPTIONS = [
  { value: "Français", label: "Français" },
  { value: "Deutsch", label: "Deutsch" },
  { value: "English", label: "English" },
];

function fields(t: {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  projectType: string;
  projectOptions: string[];
  message: string;
  language: string;
  optional: string;
}): FormField[] {
  return [
    { name: "name", label: t.name, type: "text", required: true, autoComplete: "name" },
    { name: "businessName", label: t.businessName, type: "text", required: true, autoComplete: "organization" },
    { name: "email", label: t.email, type: "email", required: true, autoComplete: "email" },
    { name: "phone", label: `${t.phone} (${t.optional})`, type: "tel", autoComplete: "tel" },
    { name: "website", label: `${t.website} (${t.optional})`, type: "url", autoComplete: "url", placeholder: "https://" },
    { name: "industry", label: t.industry, type: "text", required: true },
    {
      name: "projectType",
      label: t.projectType,
      type: "select",
      required: true,
      options: PROJECT_VALUES.map((value, i) => ({ value, label: t.projectOptions[i] })),
    },
    { name: "message", label: t.message, type: "textarea", required: true },
    { name: "preferredLanguage", label: t.language, type: "select", options: LANGUAGE_OPTIONS },
  ];
}

const fr: HomeContent = {
  seo: {
    title: "Nexova — Création de sites web sur mesure en Suisse",
    description:
      "Studio web suisse : création de sites internet professionnels, refonte de sites web et SEO pour PME et entreprises ambitieuses en Suisse romande et alémanique.",
  },
  nav: {
    links: [
      { label: "Approche", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Réalisations", href: "#work" },
      { label: "Processus", href: "#process" },
      { label: "À propos", href: "#about" },
    ],
    cta: "Discuter de votre projet",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  hero: {
    eyebrow: "Studio web suisse",
    headline: "L'excellence digitale, *construite autour* de votre entreprise.",
    body: "Nexova conçoit et développe des sites sur mesure pour les entreprises ambitieuses : un design singulier, une technique rigoureuse et des bases de référencement posées dès le départ.",
    ctaPrimary: "Discuter de votre projet",
    ctaSecondary: "Découvrir nos réalisations",
    keywords: ["Design sur mesure", "Pensé pour le mobile", "SEO dès la conception"],
  },
  approach: {
    eyebrow: "Notre approche",
    headline: "Pas de modèle. *Un site pensé* pour votre activité.",
    body: "Chaque entreprise a sa propre histoire, ses clients et ses ambitions. Nous commençons par les comprendre, puis nous concevons un site qui leur ressemble — jamais un gabarit adapté à la hâte.",
    pillars: [
      {
        title: "Une approche personnalisée",
        description:
          "Un échange direct, du premier rendez-vous à la mise en ligne. Le fondateur suit personnellement chaque projet.",
      },
      {
        title: "Un design sur mesure",
        description:
          "Typographie, couleurs, mise en page et images composées pour votre marque, pas pour un catalogue.",
      },
      {
        title: "Une exigence technique",
        description:
          "Un code propre, des pages rapides, une expérience mobile soignée et des bases SEO intégrées.",
      },
      {
        title: "Une relation durable",
        description:
          "Une fois le site en ligne, nous restons disponibles pour qu'il évolue avec votre activité.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    headline: "Tout ce qu'il faut pour une présence en ligne *à la hauteur*.",
    items: [
      {
        title: "Design de site sur mesure",
        description:
          "Une identité visuelle et une expérience conçues pour votre marque et vos clients.",
      },
      {
        title: "Développement web",
        description:
          "Des sites rapides, accessibles et maintenables, construits avec des technologies modernes.",
      },
      {
        title: "Refonte de site",
        description:
          "Repenser un site existant — image, structure, performance — sans perdre ce qui fonctionne.",
      },
      {
        title: "Sites d'entreprise",
        description:
          "Une présence professionnelle claire pour présenter votre activité, vos services et vos références.",
      },
      {
        title: "Réservation et rendez-vous",
        description:
          "Des parcours de réservation ou de prise de rendez-vous intégrés naturellement à votre site.",
      },
      {
        title: "Bases SEO",
        description:
          "Structure, contenus et technique préparés pour que votre site soit bien référencé.",
      },
    ],
  },
  work: {
    eyebrow: "Réalisations",
    headline: "Des concepts conçus *comme de vrais projets*.",
    note: "Ces quatre projets sont des démonstrations conceptuelles imaginées par Nexova. Ce ne sont pas des clients réels. Les aperçus complets sont en préparation.",
    status: "Aperçu en préparation",
    projects: [
      {
        id: "valmont",
        name: "Valmont Automobiles",
        industry: "Garage automobile de prestige",
        concept:
          "Une vitrine sombre et cinématique pour un atelier haut de gamme : galerie de véhicules, présentation des prestations, prise de contact discrète.",
      },
      {
        id: "orme",
        name: "Studio Orme",
        industry: "Architecture et construction",
        concept:
          "Un site éditorial et minimal où la photographie d'architecture raconte chaque projet, du plan à la livraison.",
      },
      {
        id: "aurele",
        name: "Maison Aurèle",
        industry: "Salon de beauté",
        concept:
          "Une identité douce et élégante, un parcours de réservation simple et des visuels d'intérieur soignés.",
      },
      {
        id: "verdane",
        name: "Verdane Paysages",
        industry: "Paysagisme et aménagements extérieurs",
        concept:
          "Une expérience immersive en grands formats, aux teintes naturelles, pour présenter jardins et réalisations.",
      },
    ],
  },
  process: {
    eyebrow: "Processus",
    headline: "Un parcours clair, *de la première idée* à la mise en ligne.",
    body: "Chaque étape a un but précis. Vous savez toujours où en est votre projet et ce qui vient ensuite.",
    steps: [
      { title: "Découverte", description: "Comprendre votre activité, vos clients et vos objectifs." },
      { title: "Stratégie", description: "Définir la direction digitale : structure, message et priorités." },
      { title: "Design", description: "Créer l'expérience visuelle, du premier écran jusqu'aux détails." },
      { title: "Développement", description: "Construire le site avec exigence : performance, accessibilité, mobile." },
      { title: "Lancement", description: "Tester, corriger et mettre en ligne avec soin." },
      { title: "Accompagnement", description: "Rester disponible après la mise en ligne, selon vos besoins." },
    ],
  },
  about: {
    eyebrow: "À propos",
    headline: "Un studio web suisse, *une relation directe*.",
    body: [
      "Nexova est un studio web moderne, né d'une conviction simple : une entreprise sérieuse mérite un site à son image, pas un modèle générique.",
      "Le fondateur est personnellement impliqué dans chaque projet et dans chaque relation client. Vous savez toujours à qui vous parlez.",
    ],
  },
  cta: {
    headline: "Votre entreprise mérite *une meilleure* présence digitale.",
    body: "Parlons de votre activité et de vos ambitions. Chaque demande est lue personnellement.",
    button: "Discuter de votre projet",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Construisons quelque chose *d'exceptionnel*.",
    subtitle:
      "Chaque entreprise est différente. Parlez-nous de votre projet et voyons comment créer une expérience digitale à la hauteur de vos ambitions.",
    reviewNote: "Chaque demande est examinée personnellement.",
    emailLabel: "Ou écrivez-nous directement",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Nom complet",
      businessName: "Nom de l'entreprise",
      email: "Adresse e-mail",
      phone: "Téléphone",
      website: "Site web actuel",
      industry: "Secteur d'activité",
      projectType: "Quel type de projet envisagez-vous ?",
      projectOptions: ["Nouveau site web", "Refonte de site", "E-commerce", "Système de réservation", "Autre"],
      message: "Parlez-nous de votre projet",
      language: "Langue préférée",
      optional: "facultatif",
    }),
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    confirmationTitle: "Merci, votre demande nous est bien parvenue.",
    confirmationBody:
      "Nous l'examinons personnellement et revenons vers vous dès que possible.",
    error:
      "Votre message n'a pas pu être envoyé. Veuillez réessayer ou nous écrire directement par e-mail.",
    privacyNote:
      "Vos informations servent uniquement à répondre à votre demande.",
  },
  footer: {
    tagline: "Studio web suisse. Des sites sur mesure pour les entreprises ambitieuses.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    region: "Suisse",
    copyright: "© 2026 Nexova. Tous droits réservés.",
  },
};

const de: HomeContent = {
  seo: {
    title: "Nexova — Webdesign und Website-Erstellung in der Schweiz",
    description:
      "Schweizer Webstudio: massgeschneiderte, professionelle Websites für KMU und ambitionierte Unternehmen. Webdesign, Relaunch und SEO-Grundlagen in der ganzen Schweiz.",
  },
  nav: {
    links: [
      { label: "Ansatz", href: "#approach" },
      { label: "Leistungen", href: "#services" },
      { label: "Projekte", href: "#work" },
      { label: "Ablauf", href: "#process" },
      { label: "Über uns", href: "#about" },
    ],
    cta: "Projekt besprechen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schliessen",
  },
  hero: {
    eyebrow: "Schweizer Webstudio",
    headline: "Digitale Exzellenz, *massgeschneidert* für Ihr Unternehmen.",
    body: "Nexova gestaltet und entwickelt individuelle Websites für ambitionierte Unternehmen: eigenständiges Design, saubere Technik und eine solide SEO-Basis von Anfang an.",
    ctaPrimary: "Projekt besprechen",
    ctaSecondary: "Projekte entdecken",
    keywords: ["Massgeschneidertes Design", "Mobile First", "SEO von Anfang an"],
  },
  approach: {
    eyebrow: "Unser Ansatz",
    headline: "Keine Vorlage. *Eine Website,* die zu Ihnen passt.",
    body: "Jedes Unternehmen hat seine eigene Geschichte, seine Kundschaft und seine Ziele. Wir verstehen sie zuerst und gestalten dann eine Website, die dazu passt — nie eine hastig angepasste Schablone.",
    pillars: [
      {
        title: "Persönliche Betreuung",
        description:
          "Direkter Austausch vom ersten Gespräch bis zum Livegang. Der Gründer begleitet jedes Projekt persönlich.",
      },
      {
        title: "Individuelles Design",
        description:
          "Typografie, Farben, Layout und Bildwelt, entwickelt für Ihre Marke und nicht für einen Katalog.",
      },
      {
        title: "Technische Sorgfalt",
        description:
          "Sauberer Code, schnelle Seiten, ein überzeugendes Mobile-Erlebnis und integrierte SEO-Grundlagen.",
      },
      {
        title: "Langfristige Partnerschaft",
        description:
          "Auch nach dem Livegang bleiben wir für Sie da, damit Ihre Website mit Ihrem Geschäft wächst.",
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    headline: "Alles für einen *überzeugenden* Auftritt im Web.",
    items: [
      {
        title: "Individuelles Webdesign",
        description:
          "Eine visuelle Identität und ein Nutzungserlebnis, entwickelt für Ihre Marke und Ihre Kundschaft.",
      },
      {
        title: "Website-Entwicklung",
        description:
          "Schnelle, barrierearme und wartbare Websites auf Basis moderner Technologien.",
      },
      {
        title: "Website-Relaunch",
        description:
          "Eine bestehende Website neu denken — Auftritt, Struktur, Performance — und bewahren, was funktioniert.",
      },
      {
        title: "Unternehmenswebsites",
        description:
          "Ein klarer, professioneller Auftritt, der Ihr Angebot, Ihre Leistungen und Referenzen überzeugend zeigt.",
      },
      {
        title: "Buchung und Terminvergabe",
        description:
          "Buchungs- und Terminabläufe, die sich selbstverständlich in Ihre Website einfügen.",
      },
      {
        title: "SEO-Grundlagen",
        description:
          "Struktur, Inhalte und Technik, damit Ihre Website in Suchmaschinen gut gefunden wird.",
      },
    ],
  },
  work: {
    eyebrow: "Projekte",
    headline: "Konzepte, entwickelt *wie echte Projekte*.",
    note: "Diese vier Projekte sind konzeptionelle Demonstrationen von Nexova. Es handelt sich nicht um reale Kunden. Die vollständigen Vorschauen sind in Vorbereitung.",
    status: "Vorschau in Vorbereitung",
    projects: [
      {
        id: "valmont",
        name: "Valmont Automobiles",
        industry: "Premium-Autowerkstatt",
        concept:
          "Ein dunkler, filmischer Auftritt für eine exklusive Werkstatt: Fahrzeuggalerie, Leistungsübersicht und diskrete Kontaktaufnahme.",
      },
      {
        id: "orme",
        name: "Studio Orme",
        industry: "Architektur und Bau",
        concept:
          "Eine redaktionelle, minimalistische Website, auf der Architekturfotografie jedes Projekt erzählt — vom Plan bis zur Übergabe.",
      },
      {
        id: "aurele",
        name: "Maison Aurèle",
        industry: "Beautysalon",
        concept:
          "Eine sanfte, elegante Identität mit einfacher Online-Buchung und sorgfältig komponierten Interieur-Bildern.",
      },
      {
        id: "verdane",
        name: "Verdane Paysages",
        industry: "Landschaftsbau und Aussengestaltung",
        concept:
          "Ein immersives Erlebnis in grossen Formaten und natürlichen Farben, das Gärten und Projekte in Szene setzt.",
      },
    ],
  },
  process: {
    eyebrow: "Ablauf",
    headline: "Ein klarer Weg *von der ersten Idee* bis zum Livegang.",
    body: "Jeder Schritt hat ein konkretes Ziel. Sie wissen jederzeit, wo Ihr Projekt steht und was als Nächstes folgt.",
    steps: [
      { title: "Entdeckung", description: "Ihr Geschäft, Ihre Kundschaft und Ihre Ziele verstehen." },
      { title: "Strategie", description: "Die digitale Richtung festlegen: Struktur, Botschaft, Prioritäten." },
      { title: "Design", description: "Das visuelle Erlebnis gestalten — vom ersten Screen bis ins Detail." },
      { title: "Entwicklung", description: "Die Website sorgfältig bauen: Performance, Zugänglichkeit, Mobile." },
      { title: "Livegang", description: "Testen, verfeinern und mit Sorgfalt veröffentlichen." },
      { title: "Betreuung", description: "Nach dem Livegang für Sie da, wenn Sie uns brauchen." },
    ],
  },
  about: {
    eyebrow: "Über uns",
    headline: "Ein Schweizer Webstudio, *direkter Kontakt*.",
    body: [
      "Nexova ist ein modernes Webstudio mit einer einfachen Überzeugung: Ein seriöses Unternehmen verdient eine Website nach seinem Mass — keine Standardvorlage.",
      "Der Gründer ist persönlich in jedes Projekt und jede Kundenbeziehung eingebunden. Sie wissen immer, mit wem Sie sprechen.",
    ],
  },
  cta: {
    headline: "Ihr Unternehmen verdient *einen besseren* digitalen Auftritt.",
    body: "Sprechen wir über Ihr Geschäft und Ihre Ziele. Jede Anfrage wird persönlich gelesen.",
    button: "Projekt besprechen",
  },
  contact: {
    eyebrow: "Kontakt",
    headline: "Gestalten wir etwas *Aussergewöhnliches*.",
    subtitle:
      "Jedes Unternehmen ist anders. Erzählen Sie uns von Ihrem Projekt, und wir klären gemeinsam, wie ein digitaler Auftritt entsteht, der Ihren Ansprüchen gerecht wird.",
    reviewNote: "Jede Anfrage wird persönlich geprüft.",
    emailLabel: "Oder schreiben Sie uns direkt",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Vollständiger Name",
      businessName: "Unternehmen",
      email: "E-Mail-Adresse",
      phone: "Telefon",
      website: "Aktuelle Website",
      industry: "Branche",
      projectType: "Welche Art von Projekt planen Sie?",
      projectOptions: ["Neue Website", "Website-Relaunch", "E-Commerce", "Buchungssystem", "Anderes"],
      message: "Erzählen Sie uns von Ihrem Projekt",
      language: "Bevorzugte Sprache",
      optional: "optional",
    }),
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    confirmationTitle: "Vielen Dank, Ihre Anfrage ist bei uns eingegangen.",
    confirmationBody:
      "Wir prüfen sie persönlich und melden uns so bald wie möglich bei Ihnen.",
    error:
      "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
    privacyNote:
      "Ihre Angaben verwenden wir ausschliesslich, um Ihre Anfrage zu beantworten.",
  },
  footer: {
    tagline: "Schweizer Webstudio. Individuelle Websites für ambitionierte Unternehmen.",
    navLabel: "Navigation",
    contactLabel: "Kontakt",
    region: "Schweiz",
    copyright: "© 2026 Nexova. Alle Rechte vorbehalten.",
  },
};

const en: HomeContent = {
  seo: {
    title: "Nexova — Premium Web Design & Development in Switzerland",
    description:
      "Swiss web studio creating bespoke, high-performance websites for ambitious businesses. Premium web design, website redesign and SEO foundations in Switzerland.",
  },
  nav: {
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ],
    cta: "Discuss your project",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Swiss web studio",
    headline: "Digital excellence, *built around* your business.",
    body: "Nexova designs and builds bespoke websites for ambitious businesses: distinctive design, rigorous engineering and SEO foundations in place from day one.",
    ctaPrimary: "Discuss your project",
    ctaSecondary: "Explore our work",
    keywords: ["Bespoke design", "Mobile-first", "SEO built in"],
  },
  approach: {
    eyebrow: "Our approach",
    headline: "No templates. *A website shaped* around your business.",
    body: "Every business has its own story, its own clients and its own ambitions. We start by understanding them, then design a website that reflects them — never a template adapted in a hurry.",
    pillars: [
      {
        title: "A personal approach",
        description:
          "Direct conversation from the first call to launch. The founder follows every project personally.",
      },
      {
        title: "Bespoke design",
        description:
          "Typography, colour, layout and imagery composed for your brand, not for a catalogue.",
      },
      {
        title: "Technical rigour",
        description:
          "Clean code, fast pages, a considered mobile experience and SEO foundations built in.",
      },
      {
        title: "A lasting relationship",
        description:
          "Once the site is live, we stay available so it can grow with your business.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    headline: "Everything a *serious* online presence needs.",
    items: [
      {
        title: "Bespoke website design",
        description:
          "A visual identity and an experience designed for your brand and your clients.",
      },
      {
        title: "Website development",
        description:
          "Fast, accessible, maintainable websites built with modern technology.",
      },
      {
        title: "Website redesign",
        description:
          "Rethinking an existing site — image, structure, performance — without losing what works.",
      },
      {
        title: "Business websites",
        description:
          "A clear, professional presence that showcases your business, services and references.",
      },
      {
        title: "Booking and reservations",
        description:
          "Booking and appointment journeys integrated naturally into your website.",
      },
      {
        title: "SEO foundations",
        description:
          "Structure, content and technical groundwork so your site can be found.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    headline: "Concepts designed *like real projects*.",
    note: "These four projects are conceptual demonstrations created by Nexova. They are not real clients. Full previews are in preparation.",
    status: "Preview in preparation",
    projects: [
      {
        id: "valmont",
        name: "Valmont Automobiles",
        industry: "Luxury automotive garage",
        concept:
          "A dark, cinematic showcase for a high-end workshop: vehicle gallery, service presentation, discreet enquiry.",
      },
      {
        id: "orme",
        name: "Studio Orme",
        industry: "Architecture and construction",
        concept:
          "An editorial, minimal site where architectural photography tells each project, from plan to handover.",
      },
      {
        id: "aurele",
        name: "Maison Aurèle",
        industry: "Beauty salon",
        concept:
          "A soft, elegant identity with a simple booking journey and carefully composed interior imagery.",
      },
      {
        id: "verdane",
        name: "Verdane Paysages",
        industry: "Landscaping and exterior design",
        concept:
          "An immersive, large-format experience in natural tones that presents gardens and completed projects.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    headline: "A clear path, *from first idea* to launch.",
    body: "Every step has a precise purpose. You always know where your project stands and what comes next.",
    steps: [
      { title: "Discovery", description: "Understanding your business, your clients and your goals." },
      { title: "Strategy", description: "Defining the digital direction: structure, message and priorities." },
      { title: "Design", description: "Creating the visual experience, from the first screen to the details." },
      { title: "Development", description: "Building the site with care: performance, accessibility, mobile." },
      { title: "Launch", description: "Testing, refining and going live with care." },
      { title: "Support", description: "Staying available after launch, as you need us." },
    ],
  },
  about: {
    eyebrow: "About",
    headline: "A Swiss web studio, *a direct relationship*.",
    body: [
      "Nexova is a modern web studio built on a simple conviction: a serious business deserves a website made to its measure, not a generic template.",
      "The founder is personally involved in every project and every client relationship. You always know who you are talking to.",
    ],
  },
  cta: {
    headline: "Your business deserves *a better* digital presence.",
    body: "Let's talk about your business and your ambitions. Every enquiry is read personally.",
    button: "Discuss your project",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Let's build something *exceptional*.",
    subtitle:
      "Every business is different. Tell us about your project, and let's explore how we can create a digital experience that reflects your ambitions.",
    reviewNote: "Every enquiry is reviewed personally.",
    emailLabel: "Or write to us directly",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Full name",
      businessName: "Business name",
      email: "Email address",
      phone: "Phone",
      website: "Current website",
      industry: "Business industry",
      projectType: "What type of project are you considering?",
      projectOptions: ["New website", "Website redesign", "E-commerce", "Booking system", "Other"],
      message: "Tell us about your project",
      language: "Preferred language",
      optional: "optional",
    }),
    submit: "Send enquiry",
    sending: "Sending…",
    confirmationTitle: "Thank you — your enquiry has been received.",
    confirmationBody:
      "We will review it personally and come back to you as soon as possible.",
    error:
      "Your message could not be sent. Please try again or email us directly.",
    privacyNote:
      "Your details are used only to reply to your enquiry.",
  },
  footer: {
    tagline: "Swiss web studio. Bespoke websites for ambitious businesses.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    region: "Switzerland",
    copyright: "© 2026 Nexova. All rights reserved.",
  },
};

export const homeContent: Record<Locale, HomeContent> = { fr, de, en };
