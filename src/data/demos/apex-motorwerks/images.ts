import type { DemoImageManifest } from "@/types/demo";

function unsplash(id: string, params: string) {
  return `https://images.unsplash.com/${id}?${params}&auto=format&fit=crop`;
}

export const images: DemoImageManifest = {
  hero: {
    src: "/images/demos/apex-motorwerks/hero.jpg",
    width: 1136,
    height: 638,
    alt: "Apex Motorwerks technician inspecting an engine bay with a service checklist",
  },
  gallery: [
    {
      src: unsplash("photo-1619505372149-07875c35b313", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Workshop bay with a car on a hydraulic lift",
    },
    {
      src: unsplash("photo-1599256872237-5dcc0fbe9668", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Close-up of precision automotive diagnostic tools",
    },
    {
      src: unsplash("photo-1676018366904-c083ed678e60", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Technician inspecting an engine bay",
    },
    {
      src: unsplash("photo-1613214150132-9606e332d68e", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Clean, organized automotive workshop interior",
    },
    {
      src: unsplash("photo-1723099971299-3789db53604c", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Detail shot of alloy wheel and tire service",
    },
    {
      src: unsplash("photo-1631720040176-0d789a643a78", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Mechanic using a torque wrench on a vehicle",
    },
  ],
  team: [
    {
      src: unsplash("photo-1711386689622-1cda23e10217", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a senior automotive technician",
    },
    {
      src: unsplash("photo-1613214149922-f1809c99b414", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a diagnostics specialist",
    },
    {
      src: unsplash("photo-1637640125496-31852f042a60", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a workshop service advisor",
    },
  ],
  beforeAfter: [
    {
      before: {
        src: unsplash("photo-1780911848917-29453aab8944", "w=1000&h=750&q=80"),
        width: 1000,
        height: 750,
        alt: "Vehicle before bodywork repair",
      },
      after: {
        src: unsplash("photo-1618783129985-dd97dbe4ad99", "w=1000&h=750&q=80"),
        width: 1000,
        height: 750,
        alt: "Vehicle after bodywork repair, fully restored",
      },
    },
    {
      before: {
        src: unsplash("photo-1636761358783-209512dccd98", "w=1000&h=750&q=80"),
        width: 1000,
        height: 750,
        alt: "Engine bay before detailing service",
      },
      after: {
        src: unsplash("photo-1613214150333-53afb7561e6d", "w=1000&h=750&q=80"),
        width: 1000,
        height: 750,
        alt: "Engine bay after detailing service, showroom clean",
      },
    },
  ],
};
