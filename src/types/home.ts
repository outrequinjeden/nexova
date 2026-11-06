/** Strings may contain *emphasis* — rendered as the brand's italic accent. */

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
  placeholder?: string;
}

export interface HomeContent {
  seo: { title: string; description: string };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    keywords: string[];
  };
  services: {
    eyebrow: string;
    headline: string;
    items: { title: string; description: string }[];
  };
  work: {
    eyebrow: string;
    headline: string;
    note: string;
    badge: string;
    cta: string;
    ctaLabel: string;
  };
  pricing: {
    eyebrow: string;
    headline: string;
    intro: string;
    fromLabel: string;
    featuredLabel: string;
    packages: {
      id: "vitrine" | "pro";
      name: string;
      price: string;
      description: string;
      includes: string[];
      cta: string;
    }[];
    maintenance: { title: string; body: string };
    extras: { title: string; body: string; items: string[] };
    note: string;
  };
  process: {
    eyebrow: string;
    headline: string;
    body: string;
    steps: { title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    headline: string;
    body: string[];
    pillars: { title: string; description: string }[];
  };
  cta: {
    headline: string;
    body: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    reviewNote: string;
    emailLabel: string;
    email: string;
    fields: FormField[];
    submit: string;
    sending: string;
    confirmationTitle: string;
    confirmationBody: string;
    error: string;
    rateLimited: string;
    invalid: string;
    privacyNote: string;
  };
  demoNotice: { label: string; text: string; back: string; cta: string };
  footer: {
    tagline: string;
    navLabel: string;
    contactLabel: string;
    region: string;
    privacy: string;
    notice: string;
    copyright: string;
  };
}
