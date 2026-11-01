import type { Locale } from "@/i18n/routing";

export interface ImageSlot {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: ImageSlot;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: ImageSlot;
}

export interface ContactFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface OpeningHoursEntry {
  day: string;
  hours: string;
}

export interface BeforeAfterEntry {
  label: string;
  before: ImageSlot;
  after: ImageSlot;
}

export interface PricingItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  icon: string;
}

export interface ServiceAreaItem {
  name: string;
}

export interface DemoSeo {
  title: string;
  description: string;
}

export interface DemoContent {
  seo: DemoSeo;
  brandName: string;
  tagline: string;
  location: string;
  nav: { label: string; href: string }[];
  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary?: string;
  };
  services?: { title: string; subtitle?: string; items: ServiceItem[] };
  bookingCta?: {
    title: string;
    subtitle: string;
    cta: string;
    variant: "reservation" | "appointment" | "emergency";
  };
  emergencyCta?: {
    title: string;
    subtitle: string;
    cta: string;
    variant: "reservation" | "appointment" | "emergency";
  };
  testimonials: { title: string; items: Testimonial[] };
  gallery?: { title: string; subtitle?: string };
  team?: { title: string; subtitle?: string; members: TeamMember[] };
  beforeAfter?: { title: string; subtitle?: string; entries: BeforeAfterEntry[] };
  pricing?: { title: string; subtitle?: string; items: PricingItem[] };
  hours?: { title: string; entries: OpeningHoursEntry[] };
  menu?: { title: string; subtitle?: string; categories: MenuCategory[] };
  chef?: { title: string; name: string; bio: string; photo: ImageSlot };
  certifications?: { title: string; items: CertificationItem[] };
  serviceAreas?: { title: string; subtitle?: string; areas: ServiceAreaItem[] };
  contact: {
    title: string;
    subtitle: string;
    fields: ContactFieldConfig[];
    submitLabel: string;
    address: string;
    phone: string;
    email: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export interface ThemeTokens {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  surface: string;
  surfaceForeground: string;
  fontHeading: string;
  fontBody: string;
}

export interface DemoImageManifest {
  hero: ImageSlot;
  gallery: ImageSlot[];
  team?: ImageSlot[];
  beforeAfter?: { before: ImageSlot; after: ImageSlot }[];
  chef?: ImageSlot;
  [key: string]:
    | ImageSlot
    | ImageSlot[]
    | { before: ImageSlot; after: ImageSlot }[]
    | undefined;
}

export interface DemoDefinition {
  slug: string;
  industry: string;
  content: Record<Locale, DemoContent>;
  theme: ThemeTokens;
  images: DemoImageManifest;
}
