import type { DemoImageManifest } from "@/types/demo";

function unsplash(id: string, params: string) {
  return `https://images.unsplash.com/${id}?${params}&auto=format&fit=crop`;
}

export const images: DemoImageManifest = {
  hero: {
    src: unsplash("photo-1585747860715-2ba37e788b70", "w=1920&h=1080&q=80"),
    width: 1920,
    height: 1080,
    alt: "Barber giving a precise haircut in a moody, upscale barbershop",
  },
  gallery: [
    {
      src: "/images/demos/rasoio-barbershop/client-fade.jpg",
      width: 960,
      height: 1052,
      alt: "Rasoio client with a precise low taper fade and textured curls",
    },
    {
      src: unsplash("photo-1536520002442-39764a41e987", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Barber using clippers on a client",
    },
    {
      src: unsplash("photo-1567894340315-735d7c361db0", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Straight razor beard shaping",
    },
    {
      src: unsplash("photo-1635273051937-a0ddef9573b6", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Interior of a luxury barbershop with leather chairs",
    },
    {
      src: unsplash("photo-1675599193990-33d71150902b", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Hot towel treatment during a shave",
    },
    {
      src: unsplash("photo-1593702295094-aea22597af65", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Barbershop grooming tools laid out on a counter",
    },
  ],
  team: [
    {
      src: unsplash("photo-1705976062088-5433328c2dcd", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a senior barber",
    },
    {
      src: unsplash("photo-1519500528352-2d1460418d41", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a barbershop stylist",
    },
    {
      src: unsplash("photo-1611313151697-d626e818dddf", "w=800&h=800&q=80"),
      width: 800,
      height: 800,
      alt: "Portrait of a barbershop grooming specialist",
    },
  ],
};
