import type { HomeContent } from "@/types/home";
import type { Locale } from "@/i18n/routing";

const en: HomeContent = {
  seo: {
    title: "Nexova — Premium Websites for Local Businesses in Switzerland",
    description:
      "Nexova builds modern, fast, mobile-friendly websites with SEO basics, contact forms, booking systems, and simple automations to help local businesses in Switzerland look professional and capture more clients.",
  },
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Demos", href: "#demos" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get a free idea",
  },
  hero: {
    headline: "Premium websites for local businesses in Switzerland.",
    body: "Nexova builds modern, fast, mobile-friendly websites with SEO basics, contact forms, booking systems, and simple automations to help local businesses look professional and capture more clients.",
    ctaPrimary: "Get a free website idea",
    ctaSecondary: "View demo websites",
    bullets: [
      { icon: "📱", label: "Mobile-first design" },
      { icon: "🔍", label: "SEO basics included" },
      { icon: "📋", label: "Contact and booking ready" },
      { icon: "⚡", label: "Simple automations available" },
    ],
  },
  services: {
    headline: "What we build for you",
    subheader:
      "Every service is tailored to local businesses that want to look professional online.",
    items: [
      {
        title: "One-page website",
        description:
          "A clean, focused single page that presents your business clearly and converts visitors into leads. Perfect for getting started quickly.",
      },
      {
        title: "Full website (3–5 pages)",
        description:
          "A complete website with home, about, services, gallery, and contact pages — fully responsive. Gives your business a solid online presence.",
      },
      {
        title: "SEO basics",
        description:
          "Every site includes proper titles, meta descriptions, heading structure, and local keywords. Helps you get found on Google locally.",
      },
      {
        title: "Contact forms",
        description:
          "A professional contact form that sends leads directly to your email inbox. Never miss a potential client again.",
      },
      {
        title: "Booking systems",
        description:
          "Let clients book appointments or sessions directly on your website. Save time and reduce phone calls.",
      },
      {
        title: "Website automations",
        description:
          "Connect your form to email, Google Sheets, Calendar, or send auto-replies. Run your business smarter with less effort.",
      },
      {
        title: "Monthly maintenance",
        description:
          "We keep your website updated, secure, and running smoothly every month. Focus on your business, not your website.",
      },
    ],
  },
  demosSection: {
    headline: "Real website concepts we build",
    subheader:
      "See the quality we deliver. Every demo represents a real type of project we can build for your business.",
    linkLabel: "View demo →",
  },
  whyChoose: {
    headline: "Why local businesses choose Nexova",
    subheader:
      "We understand local business. We know what matters for restaurants, coaches, instructors, and shops in Switzerland.",
    items: [
      {
        icon: "🇨🇭",
        title: "Swiss quality",
        description:
          "Clean, precise, reliable. Every website reflects the standards your clients expect.",
      },
      {
        icon: "📱",
        title: "Mobile-first always",
        description:
          "Most of your clients search on mobile. Your website performs perfectly on every screen.",
      },
      {
        icon: "🎯",
        title: "Built to convert",
        description:
          "Every design decision is made to turn visitors into leads and clients for your business.",
      },
      {
        icon: "⚡",
        title: "Fast delivery",
        description:
          "We move efficiently. You get a professional website without months of waiting.",
      },
      {
        icon: "💬",
        title: "Clear communication",
        description: "No jargon. We speak plainly and keep you informed at every step.",
      },
      {
        icon: "🔧",
        title: "Easy to update",
        description:
          "Your website stays fresh. We handle updates so you can focus on what you do best.",
      },
    ],
  },
  process: {
    headline: "How we work",
    subheader: "A simple, clear process from first contact to launch.",
    steps: [
      {
        title: "Free idea",
        description:
          "We review your business and suggest a modern website direction — completely free and without obligation.",
      },
      {
        title: "Design & build",
        description:
          "We create a clean, responsive, professional website tailored to your brand and clients.",
      },
      {
        title: "SEO & automations",
        description:
          "We add SEO basics, contact forms, booking tools, or simple automations if needed.",
      },
      {
        title: "Launch & support",
        description:
          "Your website goes live and can be maintained monthly so it stays fresh and functional.",
      },
    ],
  },
  automations: {
    headline: "Simple automations that save you time",
    subheader: "Connect your website to the tools you already use. No complexity, just results.",
    cta: "Ask about automations →",
    items: [
      "Contact form to your email inbox",
      "Contact form to Google Sheets",
      "Automatic confirmation email to your client",
      "Booking system connection",
      "Google Calendar connection",
      "Review request after appointment",
      "Lead notification to your phone or email",
    ],
  },
  seoSection: {
    headline: "SEO basics, built into every website",
    subheader: "We don't just build websites — we build websites that can be found.",
    items: [
      {
        icon: "🏷️",
        title: "Optimized titles & meta descriptions",
        description: "Each page has a unique, keyword-rich title and description.",
      },
      {
        icon: "📐",
        title: "Proper heading structure",
        description: "Clear H1, H2, H3 structure for both users and search engines.",
      },
      {
        icon: "⚡",
        title: "Fast mobile pages",
        description: "Optimized performance on all devices for better rankings.",
      },
      {
        icon: "🖼️",
        title: "Image alt text",
        description: "Every image is labeled so search engines understand your content.",
      },
      {
        icon: "📍",
        title: "Local business keywords",
        description: "Targeting searches specific to Valais, Sion, and your industry.",
      },
      {
        icon: "🗺️",
        title: "Google Maps & contact info",
        description: "Your location and contact are easy to find — for clients and Google.",
      },
      {
        icon: "🔗",
        title: "Local business structured data",
        description: "Schema markup that helps Google understand who you are.",
      },
    ],
  },
  ctaBeforeForm: {
    headline: "Ready to upgrade your online presence?",
    subheader: "Get a free website idea for your business — no pressure, no obligation.",
    ctaPrimary: "Get my free website idea",
    ctaSecondary: "See our demos first",
  },
  contactForm: {
    headline: "Tell us about your project",
    subheader:
      "No pressure. Send your business details and Nexova will suggest a clear website direction.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "businessName", label: "Business name", type: "text" },
      { name: "businessType", label: "Type of business", type: "text" },
      {
        name: "projectType",
        label: "Project type",
        type: "select",
        options: [
          "Select an option",
          "One-page website",
          "Full website",
          "Website redesign",
          "Booking system",
          "Automation setup",
          "Not sure yet",
        ],
      },
      {
        name: "budget",
        label: "Budget",
        type: "select",
        options: ["Select an option", "Under 500 CHF", "500–1000 CHF", "1000–2000 CHF", "2000+ CHF"],
      },
      { name: "message", label: "Your message", type: "textarea", required: true },
    ],
    submitLabel: "Get my free website idea",
    confirmationTitle: "Thanks — message received.",
    confirmationBody: "We'll get back to you with a free website idea shortly.",
  },
  footer: {
    brand: "Nexova",
    tagline:
      "Modern websites for local businesses that want to look professional and get more clients.",
    location: "Sion, Valais — Switzerland",
    companyLabel: "Company",
    contactLabel: "Contact",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Demos", href: "#demos" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    email: "nexova.website@gmail.com",
    copyright: "© 2026 Nexova. All rights reserved.",
    builtWith: "Built with precision in Switzerland.",
  },
};

const fr: HomeContent = {
  seo: {
    title: "Nexova — Sites web premium pour entreprises locales en Suisse",
    description:
      "Nexova conçoit des sites web modernes, rapides et adaptés au mobile, avec bases SEO, formulaires de contact, réservation et automatisations simples pour les entreprises locales en Suisse.",
  },
  nav: {
    links: [
      { label: "Accueil", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Démos", href: "#demos" },
      { label: "Processus", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Obtenir une idée gratuite",
  },
  hero: {
    headline: "Des sites web premium pour les entreprises locales en Suisse.",
    body: "Nexova conçoit des sites web modernes, rapides et adaptés au mobile, avec les bases SEO, formulaires de contact, systèmes de réservation et automatisations simples pour aider les entreprises locales à paraître professionnelles et à attirer plus de clients.",
    ctaPrimary: "Obtenir une idée de site gratuite",
    ctaSecondary: "Voir les sites de démonstration",
    bullets: [
      { icon: "📱", label: "Design mobile-first" },
      { icon: "🔍", label: "Bases SEO incluses" },
      { icon: "📋", label: "Contact et réservation prêts" },
      { icon: "⚡", label: "Automatisations simples disponibles" },
    ],
  },
  services: {
    headline: "Ce que nous créons pour vous",
    subheader:
      "Chaque service est pensé pour les entreprises locales qui veulent une image professionnelle en ligne.",
    items: [
      {
        title: "Site une page",
        description:
          "Une page unique, claire et efficace qui présente votre entreprise et convertit les visiteurs en clients. Idéal pour démarrer rapidement.",
      },
      {
        title: "Site complet (3–5 pages)",
        description:
          "Un site complet avec accueil, à propos, services, galerie et contact — entièrement responsive. Une présence en ligne solide pour votre entreprise.",
      },
      {
        title: "Bases SEO",
        description:
          "Chaque site inclut des titres soignés, des méta-descriptions, une structure de titres et des mots-clés locaux. Pour être trouvé sur Google localement.",
      },
      {
        title: "Formulaires de contact",
        description:
          "Un formulaire de contact professionnel qui envoie les demandes directement dans votre boîte mail. Ne manquez plus jamais un client potentiel.",
      },
      {
        title: "Systèmes de réservation",
        description:
          "Permettez à vos clients de réserver directement sur votre site. Gagnez du temps et réduisez les appels téléphoniques.",
      },
      {
        title: "Automatisations du site",
        description:
          "Connectez votre formulaire à un e-mail, Google Sheets, un calendrier, ou envoyez des réponses automatiques. Gérez votre entreprise plus intelligemment.",
      },
      {
        title: "Maintenance mensuelle",
        description:
          "Nous gardons votre site à jour, sécurisé et performant chaque mois. Concentrez-vous sur votre entreprise, pas sur votre site.",
      },
    ],
  },
  demosSection: {
    headline: "Des concepts de sites réels que nous créons",
    subheader:
      "Découvrez la qualité que nous livrons. Chaque démo représente un type de projet concret que nous pouvons réaliser pour votre entreprise.",
    linkLabel: "Voir la démo →",
  },
  whyChoose: {
    headline: "Pourquoi les entreprises locales choisissent Nexova",
    subheader:
      "Nous comprenons les entreprises locales. Nous savons ce qui compte pour les restaurants, coachs, moniteurs et commerces en Suisse.",
    items: [
      {
        icon: "🇨🇭",
        title: "Qualité suisse",
        description:
          "Propre, précis, fiable. Chaque site reflète les standards que vos clients attendent.",
      },
      {
        icon: "📱",
        title: "Toujours mobile-first",
        description:
          "La plupart de vos clients naviguent sur mobile. Votre site fonctionne parfaitement sur tous les écrans.",
      },
      {
        icon: "🎯",
        title: "Pensé pour convertir",
        description: "Chaque choix de design est fait pour transformer vos visiteurs en clients.",
      },
      {
        icon: "⚡",
        title: "Livraison rapide",
        description:
          "Nous travaillons efficacement. Vous obtenez un site professionnel sans des mois d'attente.",
      },
      {
        icon: "💬",
        title: "Communication claire",
        description: "Pas de jargon. Nous parlons simplement et vous tenons informé à chaque étape.",
      },
      {
        icon: "🔧",
        title: "Facile à mettre à jour",
        description:
          "Votre site reste à jour. Nous gérons les mises à jour pour que vous puissiez vous concentrer sur votre métier.",
      },
    ],
  },
  process: {
    headline: "Comment nous travaillons",
    subheader: "Un processus simple et clair, du premier contact au lancement.",
    steps: [
      {
        title: "Idée gratuite",
        description:
          "Nous étudions votre entreprise et proposons une direction de site moderne — entièrement gratuit et sans engagement.",
      },
      {
        title: "Design & développement",
        description:
          "Nous créons un site propre, responsive et professionnel, adapté à votre marque et à vos clients.",
      },
      {
        title: "SEO & automatisations",
        description:
          "Nous ajoutons les bases SEO, formulaires de contact, outils de réservation ou automatisations simples si besoin.",
      },
      {
        title: "Lancement & support",
        description:
          "Votre site est mis en ligne et peut être maintenu mensuellement pour rester frais et fonctionnel.",
      },
    ],
  },
  automations: {
    headline: "Des automatisations simples qui vous font gagner du temps",
    subheader: "Connectez votre site aux outils que vous utilisez déjà. Pas de complexité, juste des résultats.",
    cta: "En savoir plus sur les automatisations →",
    items: [
      "Formulaire de contact vers votre boîte mail",
      "Formulaire de contact vers Google Sheets",
      "E-mail de confirmation automatique pour votre client",
      "Connexion au système de réservation",
      "Connexion à Google Calendar",
      "Demande d'avis après rendez-vous",
      "Notification de prospect sur votre téléphone ou e-mail",
    ],
  },
  seoSection: {
    headline: "Les bases SEO, intégrées à chaque site",
    subheader: "Nous ne créons pas seulement des sites — nous créons des sites que l'on peut trouver.",
    items: [
      {
        icon: "🏷️",
        title: "Titres & méta-descriptions optimisés",
        description: "Chaque page a un titre et une description uniques, riches en mots-clés.",
      },
      {
        icon: "📐",
        title: "Structure de titres adaptée",
        description: "Une structure H1, H2, H3 claire, pour les utilisateurs comme pour les moteurs de recherche.",
      },
      {
        icon: "⚡",
        title: "Pages mobiles rapides",
        description: "Performance optimisée sur tous les appareils pour un meilleur classement.",
      },
      {
        icon: "🖼️",
        title: "Texte alternatif des images",
        description: "Chaque image est décrite pour que les moteurs de recherche comprennent votre contenu.",
      },
      {
        icon: "📍",
        title: "Mots-clés locaux",
        description: "Ciblage des recherches spécifiques au Valais, à Sion et à votre secteur.",
      },
      {
        icon: "🗺️",
        title: "Google Maps & coordonnées",
        description: "Votre emplacement et vos coordonnées sont faciles à trouver — pour vos clients comme pour Google.",
      },
      {
        icon: "🔗",
        title: "Données structurées d'entreprise locale",
        description: "Un balisage schema.org qui aide Google à comprendre qui vous êtes.",
      },
    ],
  },
  ctaBeforeForm: {
    headline: "Prêt à moderniser votre présence en ligne ?",
    subheader: "Obtenez une idée de site gratuite pour votre entreprise — sans pression, sans obligation.",
    ctaPrimary: "Obtenir mon idée de site gratuite",
    ctaSecondary: "Voir nos démos d'abord",
  },
  contactForm: {
    headline: "Parlez-nous de votre projet",
    subheader:
      "Sans pression. Envoyez les détails de votre entreprise et Nexova vous proposera une direction claire pour votre site.",
    fields: [
      { name: "name", label: "Votre nom", type: "text", required: true },
      { name: "email", label: "Adresse e-mail", type: "email", required: true },
      { name: "businessName", label: "Nom de l'entreprise", type: "text" },
      { name: "businessType", label: "Type d'entreprise", type: "text" },
      {
        name: "projectType",
        label: "Type de projet",
        type: "select",
        options: [
          "Choisir une option",
          "Site une page",
          "Site complet",
          "Refonte de site",
          "Système de réservation",
          "Mise en place d'automatisation",
          "Pas encore sûr",
        ],
      },
      {
        name: "budget",
        label: "Budget",
        type: "select",
        options: ["Choisir une option", "Moins de 500 CHF", "500–1000 CHF", "1000–2000 CHF", "2000+ CHF"],
      },
      { name: "message", label: "Votre message", type: "textarea", required: true },
    ],
    submitLabel: "Obtenir mon idée de site gratuite",
    confirmationTitle: "Merci — votre message a bien été reçu.",
    confirmationBody: "Nous reviendrons vers vous rapidement avec une idée de site gratuite.",
  },
  footer: {
    brand: "Nexova",
    tagline:
      "Des sites web modernes pour les entreprises locales qui veulent une image professionnelle et plus de clients.",
    location: "Sion, Valais — Suisse",
    companyLabel: "Entreprise",
    contactLabel: "Contact",
    links: [
      { label: "Accueil", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Démos", href: "#demos" },
      { label: "Processus", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    email: "nexova.website@gmail.com",
    copyright: "© 2026 Nexova. Tous droits réservés.",
    builtWith: "Conçu avec précision en Suisse.",
  },
};

const de: HomeContent = {
  seo: {
    title: "Nexova — Premium-Websites für lokale Unternehmen in der Schweiz",
    description:
      "Nexova erstellt moderne, schnelle und mobilfreundliche Websites mit SEO-Grundlagen, Kontaktformularen, Buchungssystemen und einfachen Automatisierungen für lokale Unternehmen in der Schweiz.",
  },
  nav: {
    links: [
      { label: "Start", href: "#home" },
      { label: "Leistungen", href: "#services" },
      { label: "Demos", href: "#demos" },
      { label: "Prozess", href: "#process" },
      { label: "Kontakt", href: "#contact" },
    ],
    cta: "Kostenlose Idee erhalten",
  },
  hero: {
    headline: "Premium-Websites für lokale Unternehmen in der Schweiz.",
    body: "Nexova erstellt moderne, schnelle und mobilfreundliche Websites mit SEO-Grundlagen, Kontaktformularen, Buchungssystemen und einfachen Automatisierungen, damit lokale Unternehmen professionell wirken und mehr Kunden gewinnen.",
    ctaPrimary: "Kostenlose Website-Idee erhalten",
    ctaSecondary: "Demo-Websites ansehen",
    bullets: [
      { icon: "📱", label: "Mobile-First-Design" },
      { icon: "🔍", label: "SEO-Grundlagen inklusive" },
      { icon: "📋", label: "Kontakt & Buchung startklar" },
      { icon: "⚡", label: "Einfache Automatisierungen verfügbar" },
    ],
  },
  services: {
    headline: "Was wir für Sie erstellen",
    subheader:
      "Jede Leistung ist auf lokale Unternehmen zugeschnitten, die online professionell auftreten möchten.",
    items: [
      {
        title: "One-Page-Website",
        description:
          "Eine klare, fokussierte Einzelseite, die Ihr Unternehmen übersichtlich präsentiert und Besucher in Kunden verwandelt. Ideal für einen schnellen Start.",
      },
      {
        title: "Komplette Website (3–5 Seiten)",
        description:
          "Eine vollständige Website mit Startseite, Über uns, Leistungen, Galerie und Kontakt — vollständig responsive. Eine solide Online-Präsenz für Ihr Unternehmen.",
      },
      {
        title: "SEO-Grundlagen",
        description:
          "Jede Website enthält passende Titel, Meta-Beschreibungen, Überschriftenstruktur und lokale Keywords. So werden Sie bei Google lokal gefunden.",
      },
      {
        title: "Kontaktformulare",
        description:
          "Ein professionelles Kontaktformular, das Anfragen direkt in Ihr E-Mail-Postfach sendet. Verpassen Sie nie wieder einen potenziellen Kunden.",
      },
      {
        title: "Buchungssysteme",
        description:
          "Lassen Sie Kunden Termine direkt auf Ihrer Website buchen. Sparen Sie Zeit und reduzieren Sie Telefonanrufe.",
      },
      {
        title: "Website-Automatisierungen",
        description:
          "Verbinden Sie Ihr Formular mit E-Mail, Google Sheets, Kalender oder automatischen Antworten. Führen Sie Ihr Unternehmen smarter.",
      },
      {
        title: "Monatliche Wartung",
        description:
          "Wir halten Ihre Website aktuell, sicher und reibungslos laufend — jeden Monat. Konzentrieren Sie sich auf Ihr Geschäft, nicht auf Ihre Website.",
      },
    ],
  },
  demosSection: {
    headline: "Echte Website-Konzepte, die wir umsetzen",
    subheader:
      "Überzeugen Sie sich von unserer Qualität. Jede Demo steht für einen realen Projekttyp, den wir für Ihr Unternehmen umsetzen können.",
    linkLabel: "Demo ansehen →",
  },
  whyChoose: {
    headline: "Warum lokale Unternehmen sich für Nexova entscheiden",
    subheader:
      "Wir verstehen lokale Unternehmen. Wir wissen, worauf es für Restaurants, Coaches, Lehrpersonen und Geschäfte in der Schweiz ankommt.",
    items: [
      {
        icon: "🇨🇭",
        title: "Schweizer Qualität",
        description: "Sauber, präzise, zuverlässig. Jede Website erfüllt die Standards, die Ihre Kunden erwarten.",
      },
      {
        icon: "📱",
        title: "Immer Mobile-First",
        description: "Die meisten Ihrer Kunden suchen mobil. Ihre Website funktioniert auf jedem Bildschirm einwandfrei.",
      },
      {
        icon: "🎯",
        title: "Auf Conversion ausgelegt",
        description: "Jede Design-Entscheidung zielt darauf ab, Besucher in Kunden zu verwandeln.",
      },
      {
        icon: "⚡",
        title: "Schnelle Lieferung",
        description: "Wir arbeiten effizient. Sie erhalten eine professionelle Website ohne monatelange Wartezeit.",
      },
      {
        icon: "💬",
        title: "Klare Kommunikation",
        description: "Kein Fachjargon. Wir sprechen klar und halten Sie bei jedem Schritt auf dem Laufenden.",
      },
      {
        icon: "🔧",
        title: "Einfach zu aktualisieren",
        description:
          "Ihre Website bleibt frisch. Wir kümmern uns um Updates, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
      },
    ],
  },
  process: {
    headline: "So arbeiten wir",
    subheader: "Ein einfacher, klarer Prozess vom Erstkontakt bis zum Launch.",
    steps: [
      {
        title: "Kostenlose Idee",
        description:
          "Wir prüfen Ihr Unternehmen und schlagen eine moderne Website-Richtung vor — komplett kostenlos und unverbindlich.",
      },
      {
        title: "Design & Entwicklung",
        description:
          "Wir erstellen eine saubere, responsive, professionelle Website, abgestimmt auf Ihre Marke und Kunden.",
      },
      {
        title: "SEO & Automatisierungen",
        description:
          "Wir ergänzen bei Bedarf SEO-Grundlagen, Kontaktformulare, Buchungstools oder einfache Automatisierungen.",
      },
      {
        title: "Launch & Support",
        description:
          "Ihre Website geht live und kann monatlich gewartet werden, damit sie frisch und funktionsfähig bleibt.",
      },
    ],
  },
  automations: {
    headline: "Einfache Automatisierungen, die Ihnen Zeit sparen",
    subheader: "Verbinden Sie Ihre Website mit den Tools, die Sie bereits nutzen. Keine Komplexität, nur Ergebnisse.",
    cta: "Mehr über Automatisierungen erfahren →",
    items: [
      "Kontaktformular an Ihr E-Mail-Postfach",
      "Kontaktformular an Google Sheets",
      "Automatische Bestätigungs-E-Mail an Ihren Kunden",
      "Anbindung an ein Buchungssystem",
      "Anbindung an Google Calendar",
      "Bewertungsanfrage nach dem Termin",
      "Lead-Benachrichtigung auf Ihr Telefon oder per E-Mail",
    ],
  },
  seoSection: {
    headline: "SEO-Grundlagen, in jede Website integriert",
    subheader: "Wir bauen nicht einfach Websites — wir bauen Websites, die gefunden werden.",
    items: [
      {
        icon: "🏷️",
        title: "Optimierte Titel & Meta-Beschreibungen",
        description: "Jede Seite hat einen einzigartigen, keyword-reichen Titel und eine Beschreibung.",
      },
      {
        icon: "📐",
        title: "Passende Überschriftenstruktur",
        description: "Klare H1-, H2-, H3-Struktur — für Nutzer wie für Suchmaschinen.",
      },
      {
        icon: "⚡",
        title: "Schnelle mobile Seiten",
        description: "Optimierte Performance auf allen Geräten für ein besseres Ranking.",
      },
      {
        icon: "🖼️",
        title: "Alt-Text für Bilder",
        description: "Jedes Bild ist beschriftet, damit Suchmaschinen Ihren Inhalt verstehen.",
      },
      {
        icon: "📍",
        title: "Lokale Keywords",
        description: "Ausrichtung auf Suchanfragen speziell für Wallis, Sion und Ihre Branche.",
      },
      {
        icon: "🗺️",
        title: "Google Maps & Kontaktdaten",
        description: "Ihr Standort und Ihre Kontaktdaten sind leicht zu finden — für Kunden wie für Google.",
      },
      {
        icon: "🔗",
        title: "Strukturierte Daten für lokale Unternehmen",
        description: "Schema-Markup, das Google hilft zu verstehen, wer Sie sind.",
      },
    ],
  },
  ctaBeforeForm: {
    headline: "Bereit, Ihren Online-Auftritt zu modernisieren?",
    subheader: "Holen Sie sich eine kostenlose Website-Idee für Ihr Unternehmen — ohne Druck, ohne Verpflichtung.",
    ctaPrimary: "Meine kostenlose Website-Idee erhalten",
    ctaSecondary: "Zuerst unsere Demos ansehen",
  },
  contactForm: {
    headline: "Erzählen Sie uns von Ihrem Projekt",
    subheader:
      "Kein Druck. Senden Sie uns die Details zu Ihrem Unternehmen und Nexova schlägt eine klare Richtung für Ihre Website vor.",
    fields: [
      { name: "name", label: "Ihr Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "businessName", label: "Firmenname", type: "text" },
      { name: "businessType", label: "Art des Unternehmens", type: "text" },
      {
        name: "projectType",
        label: "Projektart",
        type: "select",
        options: [
          "Option wählen",
          "One-Page-Website",
          "Komplette Website",
          "Website-Redesign",
          "Buchungssystem",
          "Einrichtung von Automatisierungen",
          "Noch unsicher",
        ],
      },
      {
        name: "budget",
        label: "Budget",
        type: "select",
        options: ["Option wählen", "Unter 500 CHF", "500–1000 CHF", "1000–2000 CHF", "2000+ CHF"],
      },
      { name: "message", label: "Ihre Nachricht", type: "textarea", required: true },
    ],
    submitLabel: "Meine kostenlose Website-Idee erhalten",
    confirmationTitle: "Danke — Ihre Nachricht wurde empfangen.",
    confirmationBody: "Wir melden uns in Kürze mit einer kostenlosen Website-Idee bei Ihnen.",
  },
  footer: {
    brand: "Nexova",
    tagline: "Moderne Websites für lokale Unternehmen, die professionell auftreten und mehr Kunden gewinnen möchten.",
    location: "Sion, Wallis — Schweiz",
    companyLabel: "Unternehmen",
    contactLabel: "Kontakt",
    links: [
      { label: "Start", href: "#home" },
      { label: "Leistungen", href: "#services" },
      { label: "Demos", href: "#demos" },
      { label: "Prozess", href: "#process" },
      { label: "Kontakt", href: "#contact" },
    ],
    email: "nexova.website@gmail.com",
    copyright: "© 2026 Nexova. Alle Rechte vorbehalten.",
    builtWith: "Mit Präzision in der Schweiz entwickelt.",
  },
};

export const homeContent: Record<Locale, HomeContent> = { en, fr, de };
