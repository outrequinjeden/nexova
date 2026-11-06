import type { Metadata } from "next";
import { homeContent } from "@/data/home/content";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexova Demos",
    default: "Nexova Demos",
  },
};

/**
 * Every demo is a fictional concept. This bar stays visible on all of them so a
 * visitor can never mistake invented reviews, phone numbers or certifications
 * for a real business.
 */
export default async function DemosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { demoNotice } = homeContent[locale as Locale];

  return (
    <>
      <div className="flex flex-1 flex-col pb-24 sm:pb-16">{children}</div>
      <aside
        aria-label={demoNotice.label}
        className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/15 bg-[#0b0a10]/95 text-white backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="leading-snug text-white/80">
            <strong className="mr-2 font-semibold text-[#a78bfa]">{demoNotice.label}</strong>
            {demoNotice.text}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/#work"
              locale={locale as Locale}
              className="text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              {demoNotice.back}
            </Link>
            <Link
              href="/#contact"
              locale={locale as Locale}
              className="bg-[#5a2bd4] px-4 py-2 font-medium text-white hover:bg-[#3b1a9c]"
            >
              {demoNotice.cta}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
