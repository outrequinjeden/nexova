import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { DemoNav } from "@/components/layout/DemoNav";
import { DemoFooter } from "@/components/layout/DemoFooter";
import { theme } from "@/data/demos/maison-ambre/theme";
import { content } from "@/data/demos/maison-ambre/content";
import { buildDemoMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

const SLUG = "maison-ambre";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-demo-heading",
});

const body = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-demo-body",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return buildDemoMetadata({ slug: SLUG, locale: loc, content: content[loc] });
}

export default async function MaisonAmbreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as Locale];

  return (
    <div
      data-demo-theme={SLUG}
      className={`${heading.variable} ${body.variable} flex min-h-full flex-1 flex-col bg-[var(--demo-surface)] text-[var(--demo-surface-foreground)]`}
      style={
        {
          fontFamily: "var(--font-demo-body)",
          "--demo-primary": theme.primary,
          "--demo-primary-foreground": theme.primaryForeground,
          "--demo-accent": theme.accent,
          "--demo-accent-foreground": theme.accentForeground,
          "--demo-surface": theme.surface,
          "--demo-surface-foreground": theme.surfaceForeground,
        } as React.CSSProperties
      }
    >
      <DemoNav content={c} slug={SLUG} locale={locale as Locale} />
      {children}
      <DemoFooter content={c} />
    </div>
  );
}
