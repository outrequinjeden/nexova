import type { DemoImageManifest } from "@/types/demo";

function unsplash(id: string, params: string) {
  return `https://images.unsplash.com/${id}?${params}&auto=format&fit=crop`;
}

export const images: DemoImageManifest = {
  hero: {
    src: "/images/demos/nordluft-technik/hero.jpg",
    width: 1136,
    height: 654,
    alt: "Nordluft Technik technician servicing a rooftop air conditioning unit with pressure gauges",
  },
  gallery: [
    {
      src: unsplash("photo-1642749776312-aa42ce20c9f5", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Newly installed heat pump system",
    },
    {
      src: unsplash("photo-1660330589827-da8ab7dd3c02", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Technician inspecting ductwork",
    },
    {
      src: unsplash("photo-1744123146393-4b5438a5d98f", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Modern boiler room installation",
    },
    {
      src: unsplash("photo-1660330590022-9f4ff56b63f6", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Ventilation system components",
    },
    {
      src: unsplash("photo-1748027869634-fc2e545cfb0c", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Technician adjusting a thermostat control panel",
    },
    {
      src: unsplash("photo-1625148230889-8195e85aae6b", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Rooftop HVAC installation",
    },
  ],
};
