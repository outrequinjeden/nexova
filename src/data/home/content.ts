import type { Locale } from "@/i18n/routing";
import type { FormField, HomeContent } from "@/types/home";

export const CONTACT_EMAIL = "nexova.website@gmail.com";

function fields(t: {
  name: string;
  businessName: string;
  contact: string;
  contactHint: string;
  message: string;
}): FormField[] {
  return [
    { name: "name", label: t.name, type: "text", required: true, autoComplete: "name" },
    { name: "businessName", label: t.businessName, type: "text", required: true, autoComplete: "organization" },
    {
      name: "contact",
      label: t.contact,
      type: "text",
      required: true,
      autoComplete: "email",
      placeholder: t.contactHint,
    },
    { name: "message", label: t.message, type: "textarea", required: true },
  ];
}

const fr: HomeContent = {
  seo: {
    title: "Nexova — Sites web professionnels pour PME suisses",
    description:
      "Nexova crée des sites web modernes pour les PME suisses, en Suisse romande : design professionnel, visibilité locale et demandes clients simplifiées. Site vitrine dès CHF 750.",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Réalisations", href: "#work" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Processus", href: "#process" },
      { label: "À propos", href: "#about" },
    ],
    cta: "Discuter de mon projet",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  hero: {
    eyebrow: "Agence web pour PME suisses",
    headline: "Votre entreprise mérite une présence en ligne *à la hauteur* de son savoir-faire.",
    body: "Nexova crée des sites web modernes pour les PME suisses. Design professionnel, visibilité locale et demandes clients simplifiées.",
    ctaPrimary: "Discuter de mon projet",
    ctaSecondary: "Voir nos réalisations",
    keywords: ["Design sur mesure", "Pensé pour le mobile", "Prix transparents"],
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
    headline: "Quatre démonstrations, *conçues comme de vrais sites*.",
    note: "Ce sont des concepts fictifs créés par Nexova pour montrer notre travail. Ils ne représentent pas des clients réels : les entreprises, avis, coordonnées et certifications qui y figurent sont des exemples.",
    badge: "Concept fictif",
    cta: "Voir la démo",
    ctaLabel: "Voir la démo de",
  },
  pricing: {
    eyebrow: "Tarifs",
    headline: "Deux formules, *des prix clairs*.",
    intro: "Choisissez le point de départ qui correspond à votre activité. Nous affinons ensuite ensemble selon vos besoins.",
    fromLabel: "à partir de",
    featuredLabel: "Le plus complet",
    packages: [
      {
        id: "vitrine",
        name: "Site vitrine",
        price: "CHF 750.–",
        description: "Pour présenter clairement votre entreprise et permettre à vos clients de vous contacter.",
        includes: [
          "Design sur mesure aux couleurs de votre entreprise",
          "Affichage soigné sur mobile, tablette et ordinateur",
          "Présentation de votre activité, de vos services et de vos coordonnées",
          "Formulaire de contact",
          "Bases de référencement local (SEO)",
          "Mise en ligne du site",
        ],
        cta: "Demander ce site",
      },
      {
        id: "pro",
        name: "Site professionnel",
        price: "CHF 1'250.–",
        description: "Pour une présence plus complète, avec davantage de contenu et de fonctionnalités.",
        includes: [
          "Tout ce qui est compris dans le site vitrine",
          "Structure plus étendue : pages de services et de contenus supplémentaires",
          "Fonctionnalités adaptées à votre activité, par exemple une prise de rendez-vous ou une réservation (selon le projet)",
          "Bases SEO adaptées à la structure du site",
        ],
        cta: "Demander ce site",
      },
    ],
    maintenance: {
      title: "Maintenance mensuelle",
      body: "Proposée en option, séparément du prix du site, pour garder votre site à jour après la mise en ligne. Le tarif vous est communiqué dans le devis.",
    },
    extras: {
      title: "Services additionnels",
      body: "Facturés séparément, sur devis, uniquement si vous en avez besoin :",
      items: [
        "Pages supplémentaires",
        "Système de réservation ou de prise de rendez-vous",
        "Boutique en ligne",
        "Refonte d'un site existant",
        "Modifications après la mise en ligne",
      ],
    },
    note: "Prix de départ en francs suisses. Le tarif définitif dépend de votre projet et vous est confirmé par un devis avant tout engagement.",
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
    headline: "Une agence digitale indépendante, *au service des PME suisses*.",
    body: [
      "Nexova est une agence digitale indépendante. Nous créons des sites web pour les PME suisses, en particulier en Suisse romande, avec une conviction simple : une entreprise sérieuse mérite un site à son image, pas un modèle générique.",
      "Le fondateur suit personnellement chaque projet. Vous savez toujours à qui vous parlez, sans intermédiaire.",
    ],
    pillars: [
      { title: "Communication directe", description: "Un seul interlocuteur, des réponses claires, du premier échange à la mise en ligne." },
      { title: "Solutions sur mesure", description: "Un site pensé pour votre activité et vos clients, pas un gabarit adapté à la hâte." },
      { title: "Prix transparents", description: "Des tarifs affichés, un devis détaillé et aucune surprise en cours de route." },
    ],
  },
  cta: {
    headline: "Votre entreprise mérite *une meilleure* présence digitale.",
    body: "Parlons de votre activité et de vos ambitions. Chaque demande est lue personnellement.",
    button: "Discuter de mon projet",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Construisons quelque chose *d'exceptionnel*.",
    subtitle:
      "Parlez-nous de votre activité et de ce que vous attendez de votre site. Nous vous répondons personnellement.",
    reviewNote: "Chaque demande est examinée personnellement.",
    emailLabel: "Ou écrivez-nous directement",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Nom",
      businessName: "Nom de l'entreprise",
      contact: "E-mail ou téléphone",
      contactHint: "vous@entreprise.ch ou 079 123 45 67",
      message: "Votre message",
    }),
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    confirmationTitle: "Merci, votre demande nous est bien parvenue.",
    confirmationBody:
      "Nous l'examinons personnellement et revenons vers vous dès que possible.",
    error:
      "Votre message n'a pas pu être envoyé. Veuillez réessayer ou nous écrire directement par e-mail.",
    rateLimited:
      "Trop de tentatives en peu de temps. Merci de réessayer dans quelques minutes ou de nous écrire directement par e-mail.",
    invalid:
      "Certaines informations semblent incomplètes ou invalides. Merci de vérifier le formulaire.",
    privacyNote:
      "Vos informations servent uniquement à répondre à votre demande.",
  },
  footer: {
    tagline: "Studio web suisse. Des sites sur mesure pour les entreprises ambitieuses.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    privacy: "Politique de confidentialité",
    notice: "Mentions légales",
    region: "Suisse",
    copyright: "© 2026 Nexova. Tous droits réservés.",
  },
  demoNotice: {
    label: "Concept fictif",
    text: "Démonstration créée par Nexova : l'entreprise, les avis, les coordonnées et les certifications sont des exemples, pas un client réel.",
    back: "Toutes les réalisations",
    cta: "Discuter de mon projet",
  },
};

const de: HomeContent = {
  seo: {
    title: "Nexova — Professionelle Websites für Schweizer KMU",
    description:
      "Nexova erstellt moderne Websites für Schweizer KMU: professionelles Design, lokale Sichtbarkeit und einfachere Kundenanfragen. Visitenkarten-Website ab CHF 750.",
  },
  nav: {
    links: [
      { label: "Leistungen", href: "#services" },
      { label: "Projekte", href: "#work" },
      { label: "Preise", href: "#pricing" },
      { label: "Ablauf", href: "#process" },
      { label: "Über uns", href: "#about" },
    ],
    cta: "Mein Projekt besprechen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schliessen",
  },
  hero: {
    eyebrow: "Webagentur für Schweizer KMU",
    headline: "Ihr Unternehmen verdient einen Online-Auftritt, der seinem Können *gerecht wird*.",
    body: "Nexova erstellt moderne Websites für Schweizer KMU. Professionelles Design, lokale Sichtbarkeit und einfachere Kundenanfragen.",
    ctaPrimary: "Mein Projekt besprechen",
    ctaSecondary: "Unsere Projekte ansehen",
    keywords: ["Massgeschneidertes Design", "Mobile First", "Transparente Preise"],
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
    headline: "Vier Demonstrationen, *gestaltet wie echte Websites*.",
    note: "Dies sind fiktive Konzepte, die Nexova erstellt hat, um seine Arbeit zu zeigen. Es sind keine echten Kunden: Unternehmen, Bewertungen, Kontaktdaten und Zertifizierungen sind Beispiele.",
    badge: "Fiktives Konzept",
    cta: "Demo ansehen",
    ctaLabel: "Demo ansehen:",
  },
  pricing: {
    eyebrow: "Preise",
    headline: "Zwei Pakete, *klare Preise*.",
    intro: "Wählen Sie den Ausgangspunkt, der zu Ihrem Geschäft passt. Danach stimmen wir alles gemeinsam auf Ihre Bedürfnisse ab.",
    fromLabel: "ab",
    featuredLabel: "Am umfassendsten",
    packages: [
      {
        id: "vitrine",
        name: "Visitenkarten-Website",
        price: "CHF 750.–",
        description: "Um Ihr Unternehmen klar darzustellen und Ihren Kunden die Kontaktaufnahme zu ermöglichen.",
        includes: [
          "Individuelles Design in den Farben Ihres Unternehmens",
          "Saubere Darstellung auf Smartphone, Tablet und Computer",
          "Vorstellung Ihrer Tätigkeit, Ihrer Leistungen und Ihrer Kontaktdaten",
          "Kontaktformular",
          "Grundlagen der lokalen Suchmaschinenoptimierung (SEO)",
          "Veröffentlichung der Website",
        ],
        cta: "Diese Website anfragen",
      },
      {
        id: "pro",
        name: "Professionelle Website",
        price: "CHF 1'250.–",
        description: "Für einen umfassenderen Auftritt mit mehr Inhalten und Funktionen.",
        includes: [
          "Alles, was in der Visitenkarten-Website enthalten ist",
          "Umfangreichere Struktur: zusätzliche Leistungs- und Inhaltsseiten",
          "Funktionen passend zu Ihrem Geschäft, zum Beispiel Terminvergabe oder Reservierung (je nach Projekt)",
          "SEO-Grundlagen, abgestimmt auf die Struktur der Website",
        ],
        cta: "Diese Website anfragen",
      },
    ],
    maintenance: {
      title: "Monatliche Wartung",
      body: "Optional und getrennt vom Preis der Website, damit Ihre Website nach dem Livegang aktuell bleibt. Den Preis nennen wir Ihnen in der Offerte.",
    },
    extras: {
      title: "Zusätzliche Leistungen",
      body: "Separat und auf Offerte, nur wenn Sie sie brauchen:",
      items: [
        "Zusätzliche Seiten",
        "Buchungs- oder Terminsystem",
        "Online-Shop",
        "Relaunch einer bestehenden Website",
        "Anpassungen nach dem Livegang",
      ],
    },
    note: "Ausgangspreise in Schweizer Franken. Der endgültige Preis hängt von Ihrem Projekt ab und wird Ihnen vor jeder Verpflichtung in einer Offerte bestätigt.",
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
    headline: "Eine unabhängige Digitalagentur, *für Schweizer KMU*.",
    body: [
      "Nexova ist eine unabhängige Digitalagentur. Wir erstellen Websites für Schweizer KMU, insbesondere in der Westschweiz, mit einer einfachen Überzeugung: Ein seriöses Unternehmen verdient eine Website nach seinem Mass, keine Standardvorlage.",
      "Der Gründer begleitet jedes Projekt persönlich. Sie wissen immer, mit wem Sie sprechen, ohne Zwischenstellen.",
    ],
    pillars: [
      { title: "Direkte Kommunikation", description: "Ein Ansprechpartner, klare Antworten, vom ersten Gespräch bis zum Livegang." },
      { title: "Massgeschneiderte Lösungen", description: "Eine Website für Ihr Geschäft und Ihre Kundschaft, keine hastig angepasste Schablone." },
      { title: "Transparente Preise", description: "Ausgewiesene Preise, eine detaillierte Offerte und keine Überraschungen unterwegs." },
    ],
  },
  cta: {
    headline: "Ihr Unternehmen verdient *einen besseren* digitalen Auftritt.",
    body: "Sprechen wir über Ihr Geschäft und Ihre Ziele. Jede Anfrage wird persönlich gelesen.",
    button: "Mein Projekt besprechen",
  },
  contact: {
    eyebrow: "Kontakt",
    headline: "Gestalten wir etwas *Aussergewöhnliches*.",
    subtitle:
      "Erzählen Sie uns von Ihrem Geschäft und davon, was Sie von Ihrer Website erwarten. Wir antworten Ihnen persönlich.",
    reviewNote: "Jede Anfrage wird persönlich geprüft.",
    emailLabel: "Oder schreiben Sie uns direkt",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Name",
      businessName: "Unternehmen",
      contact: "E-Mail oder Telefon",
      contactHint: "sie@unternehmen.ch oder 079 123 45 67",
      message: "Ihre Nachricht",
    }),
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    confirmationTitle: "Vielen Dank, Ihre Anfrage ist bei uns eingegangen.",
    confirmationBody:
      "Wir prüfen sie persönlich und melden uns so bald wie möglich bei Ihnen.",
    error:
      "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
    rateLimited:
      "Zu viele Versuche in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut oder schreiben Sie uns direkt per E-Mail.",
    invalid:
      "Einige Angaben scheinen unvollständig oder ungültig zu sein. Bitte prüfen Sie das Formular.",
    privacyNote:
      "Ihre Angaben verwenden wir ausschliesslich, um Ihre Anfrage zu beantworten.",
  },
  footer: {
    tagline: "Schweizer Webstudio. Individuelle Websites für ambitionierte Unternehmen.",
    navLabel: "Navigation",
    contactLabel: "Kontakt",
    privacy: "Datenschutz",
    notice: "Impressum",
    region: "Schweiz",
    copyright: "© 2026 Nexova. Alle Rechte vorbehalten.",
  },
  demoNotice: {
    label: "Fiktives Konzept",
    text: "Von Nexova erstellte Demonstration: Unternehmen, Bewertungen, Kontaktdaten und Zertifizierungen sind Beispiele, kein echter Kunde.",
    back: "Alle Projekte",
    cta: "Mein Projekt besprechen",
  },
};

const en: HomeContent = {
  seo: {
    title: "Nexova — Professional Websites for Swiss SMEs",
    description:
      "Nexova builds modern websites for Swiss SMEs: professional design, local visibility and simpler customer enquiries. Showcase website from CHF 750.",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ],
    cta: "Discuss my project",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Web agency for Swiss SMEs",
    headline: "Your business deserves an online presence *worthy of* its expertise.",
    body: "Nexova builds modern websites for Swiss SMEs. Professional design, local visibility and simpler customer enquiries.",
    ctaPrimary: "Discuss my project",
    ctaSecondary: "See our work",
    keywords: ["Bespoke design", "Mobile-first", "Transparent pricing"],
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
    headline: "Four demonstrations, *designed like real websites*.",
    note: "These are fictional concepts created by Nexova to show its work. They are not real clients: the businesses, reviews, contact details and certifications shown are examples.",
    badge: "Fictional concept",
    cta: "View the demo",
    ctaLabel: "View the demo of",
  },
  pricing: {
    eyebrow: "Pricing",
    headline: "Two packages, *clear prices*.",
    intro: "Pick the starting point that fits your business. We then refine it together around your needs.",
    fromLabel: "from",
    featuredLabel: "Most complete",
    packages: [
      {
        id: "vitrine",
        name: "Showcase website",
        price: "CHF 750.–",
        description: "To present your business clearly and let your customers get in touch.",
        includes: [
          "Bespoke design in your business's colours",
          "Carefully built for mobile, tablet and desktop",
          "Presentation of your activity, services and contact details",
          "Contact form",
          "Local SEO foundations",
          "Putting the site online",
        ],
        cta: "Request this website",
      },
      {
        id: "pro",
        name: "Professional website",
        price: "CHF 1'250.–",
        description: "For a fuller online presence, with more content and more functionality.",
        includes: [
          "Everything included in the showcase website",
          "A larger structure: additional service and content pages",
          "Features suited to your business, for example appointment booking or reservations (depending on the project)",
          "SEO foundations adapted to the site structure",
        ],
        cta: "Request this website",
      },
    ],
    maintenance: {
      title: "Monthly maintenance",
      body: "Offered as an option, separate from the website price, to keep your site up to date after launch. The rate is given in your quote.",
    },
    extras: {
      title: "Additional services",
      body: "Billed separately, by quote, only if you need them:",
      items: [
        "Additional pages",
        "Booking or appointment system",
        "Online shop",
        "Redesign of an existing website",
        "Changes after launch",
      ],
    },
    note: "Starting prices in Swiss francs. The final price depends on your project and is confirmed in a quote before any commitment.",
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
    headline: "An independent digital agency, *serving Swiss SMEs*.",
    body: [
      "Nexova is an independent digital agency. We build websites for Swiss SMEs, particularly in French-speaking Switzerland, with a simple conviction: a serious business deserves a website made to its measure, not a generic template.",
      "The founder follows every project personally. You always know who you are talking to, with no middlemen.",
    ],
    pillars: [
      { title: "Direct communication", description: "One point of contact and clear answers, from the first conversation to launch." },
      { title: "Tailored solutions", description: "A website designed for your business and your customers, not a template adapted in a hurry." },
      { title: "Transparent pricing", description: "Published prices, a detailed quote and no surprises along the way." },
    ],
  },
  cta: {
    headline: "Your business deserves *a better* digital presence.",
    body: "Let's talk about your business and your ambitions. Every enquiry is read personally.",
    button: "Discuss my project",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Let's build something *exceptional*.",
    subtitle:
      "Tell us about your business and what you expect from your website. We reply personally.",
    reviewNote: "Every enquiry is reviewed personally.",
    emailLabel: "Or write to us directly",
    email: CONTACT_EMAIL,
    fields: fields({
      name: "Name",
      businessName: "Business name",
      contact: "Email or phone",
      contactHint: "you@company.ch or 079 123 45 67",
      message: "Your message",
    }),
    submit: "Send enquiry",
    sending: "Sending…",
    confirmationTitle: "Thank you — your enquiry has been received.",
    confirmationBody:
      "We will review it personally and come back to you as soon as possible.",
    error:
      "Your message could not be sent. Please try again or email us directly.",
    rateLimited:
      "Too many attempts in a short time. Please try again in a few minutes or email us directly.",
    invalid:
      "Some details look incomplete or invalid. Please check the form.",
    privacyNote:
      "Your details are used only to reply to your enquiry.",
  },
  footer: {
    tagline: "Swiss web studio. Bespoke websites for ambitious businesses.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    privacy: "Privacy policy",
    notice: "Legal notice",
    region: "Switzerland",
    copyright: "© 2026 Nexova. All rights reserved.",
  },
  demoNotice: {
    label: "Fictional concept",
    text: "A demonstration created by Nexova: the business, reviews, contact details and certifications are examples, not a real client.",
    back: "All work",
    cta: "Discuss my project",
  },
};

export const homeContent: Record<Locale, HomeContent> = { fr, de, en };
