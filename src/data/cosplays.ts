export type CosplayCategory = "Videojuegos" | "Series" | "Animación";

export interface Cosplay {
  slug: string;
  name: string;
  source: string;
  category: CosplayCategory;
  photos: string[];
  // Los destacados son los que aparecen en el landing
  featured?: boolean;
}

// TODO: reemplazar los SVG placeholder por las fotos reales de cada cosplay
export const cosplays: Cosplay[] = [
  {
    slug: "aloy",
    name: "Aloy",
    source: "Horizon Forbidden West",
    category: "Videojuegos",
    photos: ["/images/cosplays/aloy.svg"],
    featured: true,
  },
  {
    slug: "malenia",
    name: "Malenia",
    source: "Elden Ring",
    category: "Videojuegos",
    photos: ["/images/cosplays/malenia.svg", "/images/cosplays/malenia-2.svg", "/images/cosplays/malenia-3.svg"],
    featured: true,
  },
  {
    slug: "shera",
    name: "She-Ra",
    source: "She-Ra and the Princesses of Power",
    category: "Animación",
    photos: ["/images/cosplays/shera.svg"],
    featured: true,
  },
  {
    slug: "loki",
    name: "Loki",
    source: "Marvel",
    category: "Series",
    photos: ["/images/cosplays/loki.svg"],
    featured: true,
  },
  {
    slug: "daenerys",
    name: "Daenerys",
    source: "Game of Thrones",
    category: "Series",
    photos: ["/images/cosplays/daenerys.svg"],
    featured: true,
  },
  {
    slug: "arthas",
    name: "Arthas",
    source: "World of Warcraft",
    category: "Videojuegos",
    photos: ["/images/cosplays/arthas.svg", "/images/hero.jpg"],
    featured: true,
  },
  {
    slug: "senua",
    name: "Senua",
    source: "Hellblade II",
    category: "Videojuegos",
    photos: ["/images/cosplays/senua.svg"],
    featured: true,
  },
  {
    slug: "zelda",
    name: "Zelda",
    source: "Tears of the Kingdom",
    category: "Videojuegos",
    photos: ["/images/cosplays/zelda.svg"],
    featured: true,
  },
];
