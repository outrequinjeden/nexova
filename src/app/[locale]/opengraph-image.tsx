import { ImageResponse } from "next/og";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

/**
 * Generated social sharing image (1200×630). To ship a designed image
 * instead, drop `opengraph-image.png` (and `twitter-image.png`) next to this
 * file and delete this one — Next.js picks the static file up automatically.
 */
export const alt = "Nexova — Swiss web studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = homeContent[(locale as Locale) in homeContent ? (locale as Locale) : "fr"];
  const headline = content.hero.headline.replaceAll("*", "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a10",
          color: "#fff",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -120,
            width: 760,
            height: 760,
            borderRadius: 760,
            background: "radial-gradient(circle closest-side, rgba(90,43,212,0.6), rgba(90,43,212,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 40,
            width: 480,
            height: 480,
            borderRadius: 480,
            border: "1px solid rgba(255,255,255,0.18)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, letterSpacing: -1 }}>
          <svg width="46" height="46" viewBox="0 0 32 32">
            <path d="M6 26V6l20 20V6" fill="none" stroke="#fff" strokeWidth="2.6" />
            <circle cx="26" cy="6" r="2.6" fill="#a78bfa" />
          </svg>
          Nexova
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 900 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#a78bfa", textTransform: "uppercase", display: "flex" }}>
            {content.hero.eyebrow}
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2, display: "flex" }}>{headline}</div>
        </div>
      </div>
    ),
    size,
  );
}
