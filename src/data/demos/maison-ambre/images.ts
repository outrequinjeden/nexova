import type { DemoImageManifest } from "@/types/demo";

function unsplash(id: string, params: string) {
  return `https://images.unsplash.com/${id}?${params}&auto=format&fit=crop`;
}

export const images: DemoImageManifest = {
  hero: {
    src: "/images/demos/maison-ambre/hero.jpg",
    width: 1056,
    height: 818,
    alt: "A flat-lay spread of Maison Ambre dishes: wood-fired pizza, tagliatelle, caprese, and cured meats",
  },
  gallery: [
    {
      src: unsplash("photo-1565895405140-6b9830a88c19", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Intimate restaurant dining room with warm lighting",
    },
    {
      src: unsplash("photo-1681219916722-bb698acc166a", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Chef plating a dish in the kitchen",
    },
    {
      src: unsplash("photo-1625861910621-e9385ba1d993", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Close-up of a seasonal starter dish",
    },
    {
      src: unsplash("photo-1679993387260-38824cf1a93a", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Set table with fine tableware",
    },
    {
      src: unsplash("photo-1625862692743-3f57873bb37c", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Dessert plate with garnish",
    },
    {
      src: unsplash("photo-1627858034922-72a657d6b3c2", "w=1200&h=1200&q=80"),
      width: 1200,
      height: 1200,
      alt: "Wine being poured at the table",
    },
  ],
  chef: {
    src: unsplash("photo-1676471932681-45fa972d848a", "w=1000&h=1250&q=80"),
    width: 1000,
    height: 1250,
    alt: "Portrait of the head chef in the kitchen",
  },
};
