import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import type { DemoContent } from "@/types/demo";

import { SITE_URL } from "@/lib/site";

export { SITE_URL };

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_CH",
  de: "de_CH",
};

function buildPageMetadata({
  path,
  locale,
  seo,
  index = true,
}: {
  path: string;
  locale: Locale;
  seo: { title: string; description: string };
  index?: boolean;
}): Metadata {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
  );
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${path}`;

  return {
    ...(index ? {} : { robots: { index: false, follow: false } }),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${locale}${path}`,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      siteName: "Nexova",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function buildDemoMetadata({
  slug,
  locale,
  content,
}: {
  slug: string;
  locale: Locale;
  content: DemoContent;
}): Metadata {
  return buildPageMetadata({ path: `/demos/${slug}`, locale, seo: content.seo, index: false });
}

export function buildPageMeta(args: {
  path: string;
  locale: Locale;
  seo: { title: string; description: string };
}): Metadata {
  return buildPageMetadata(args);
}

export function buildHomeMetadata({
  locale,
  seo,
}: {
  locale: Locale;
  seo: { title: string; description: string };
}): Metadata {
  return buildPageMetadata({ path: "", locale, seo });
}

export function buildLocalBusinessJsonLd({
  slug,
  locale,
  content,
}: {
  slug: string;
  locale: Locale;
  content: DemoContent;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.brandName,
    description: content.seo.description,
    address: content.contact.address,
    telephone: content.contact.phone,
    email: content.contact.email,
    url: `${SITE_URL}/${locale}/demos/${slug}`,
    inLanguage: locale,
  };
}
