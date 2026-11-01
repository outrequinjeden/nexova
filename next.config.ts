import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/demos/casa-lume",
      destination: "/en/demos/maison-ambre",
      permanent: true,
    },
    {
      source: "/demos/studio-corte",
      destination: "/en/demos/rasoio-barbershop",
      permanent: true,
    },
    {
      source: "/demos/alpine-motion",
      destination: "/en",
      permanent: true,
    },
    {
      source: "/demos/coreup-coaching",
      destination: "/en",
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
