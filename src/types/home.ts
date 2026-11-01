export interface HomeContent {
  seo: { title: string; description: string };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bullets: { icon: string; label: string }[];
  };
  services: {
    headline: string;
    subheader: string;
    items: { title: string; description: string }[];
  };
  demosSection: {
    headline: string;
    subheader: string;
    linkLabel: string;
  };
  whyChoose: {
    headline: string;
    subheader: string;
    items: { icon: string; title: string; description: string }[];
  };
  process: {
    headline: string;
    subheader: string;
    steps: { title: string; description: string }[];
  };
  automations: {
    headline: string;
    subheader: string;
    cta: string;
    items: string[];
  };
  seoSection: {
    headline: string;
    subheader: string;
    items: { icon: string; title: string; description: string }[];
  };
  ctaBeforeForm: {
    headline: string;
    subheader: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contactForm: {
    headline: string;
    subheader: string;
    fields: {
      name: string;
      label: string;
      type: "text" | "email" | "textarea" | "select";
      required?: boolean;
      options?: string[];
    }[];
    submitLabel: string;
    confirmationTitle: string;
    confirmationBody: string;
  };
  footer: {
    brand: string;
    tagline: string;
    location: string;
    companyLabel: string;
    contactLabel: string;
    links: { label: string; href: string }[];
    email: string;
    copyright: string;
    builtWith: string;
  };
}
