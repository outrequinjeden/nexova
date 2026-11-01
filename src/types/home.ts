/** Strings may contain *emphasis* — rendered as the brand's italic accent. */
export type ProjectId = "valmont" | "orme" | "aurele" | "verdane";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "textarea" | "select";
  required?: boolean;
  autoComplete?: string;
  /** For selects: `value` is what the API receives, `label` what the visitor reads. */
  options?: { value: string; label: string }[];
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
  approach: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { title: string; description: string }[];
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
    status: string;
    projects: {
      id: ProjectId;
      name: string;
      industry: string;
      concept: string;
    }[];
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
