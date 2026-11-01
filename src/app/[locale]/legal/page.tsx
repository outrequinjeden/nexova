import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal/LegalPage";
import { noticeDocs } from "@/data/legal/content";
import { buildPageMeta } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = (await params).locale as Locale;
  const doc = noticeDocs[loc];
  return buildPageMeta({
    path: "/legal",
    locale: loc,
    seo: { title: `${doc.title} — Nexova`, description: doc.description },
  });
}

export default async function Page({ params }: Props) {
  const loc = (await params).locale as Locale;
  setRequestLocale(loc);
  return <LegalPage locale={loc} doc={noticeDocs[loc]} path="/legal" />;
}
