export type PostType = "foto" | "carrusel" | "reel";
export type PostCategory = "Cosplay" | "Evento" | "Unboxing" | "Review" | "Diseño";

export interface Post {
  slug: string;
  type: PostType;
  category: PostCategory;
  date: string;
  images: string[];
  caption: string;
  url?: string;
}

export const instagramUrl = "https://www.instagram.com/ice_fire.cosplay/";

// TODO: reemplazar por los posts reales (fotos, textos y link de cada post en Instagram)
export const posts: Post[] = [
  {
    slug: "transformacion-senua",
    type: "reel",
    category: "Cosplay",
    date: "2026-10-28",
    images: ["/images/cosplays/senua.svg"],
    caption: "De Camila a Senua en un minuto. Pintura corporal, trenzas y mucha paciencia.",
  },
  {
    slug: "copa-aorus",
    type: "carrusel",
    category: "Evento",
    date: "2026-10-14",
    images: ["/images/posts/copa-aorus-1.svg", "/images/posts/copa-aorus-2.svg", "/images/posts/copa-aorus-3.svg"],
    caption: "Así se vivió la final de la Copa Aorus de CS. Gracias por la invitación a cubrir el torneo, ¡qué final!",
  },
  {
    slug: "malenia-sesion",
    type: "carrusel",
    category: "Cosplay",
    date: "2026-09-30",
    images: ["/images/cosplays/malenia.svg", "/images/cosplays/malenia-2.svg", "/images/cosplays/malenia-3.svg"],
    caption: "Soy Malenia, Espada de Miquella. Sesión completa en el carrusel.",
  },
  {
    slug: "unboxing-setup",
    type: "reel",
    category: "Unboxing",
    date: "2026-09-18",
    images: ["/images/posts/unboxing.svg"],
    caption: "Unboxing de lo nuevo que llegó para el setup. ¿Qué les parece?",
  },
  {
    slug: "concept-art",
    type: "foto",
    category: "Diseño",
    date: "2026-09-05",
    images: ["/images/posts/concept-art.svg"],
    caption: "Concept art del próximo cosplay. ¿Adivinan quién es?",
  },
  {
    slug: "jurado-ags-flow",
    type: "foto",
    category: "Evento",
    date: "2026-08-22",
    images: ["/images/posts/ags-flow.svg"],
    caption: "Otra vez jurado en el concurso de cosplay de AGS Flow. Qué nivel tuvieron todos.",
  },
  {
    slug: "review-auriculares",
    type: "reel",
    category: "Review",
    date: "2026-08-09",
    images: ["/images/posts/review.svg"],
    caption: "Review honesta de los auriculares que uso para stremear: sonido, comodidad y micrófono.",
  },
  {
    slug: "aloy",
    type: "foto",
    category: "Cosplay",
    date: "2026-07-27",
    images: ["/images/cosplays/aloy.svg"],
    caption: "Aloy, Horizon Forbidden West. Una de las armaduras que más disfruté hacer.",
  },
  {
    slug: "piezas-3d",
    type: "carrusel",
    category: "Unboxing",
    date: "2026-07-12",
    images: ["/images/posts/impresion-3d-1.svg", "/images/posts/impresion-3d-2.svg"],
    caption: "Llegaron las piezas impresas en 3D para la próxima armadura. Deslizá para ver el detalle.",
  },
  {
    slug: "programa-olga",
    type: "foto",
    category: "Evento",
    date: "2026-06-30",
    images: ["/images/posts/olga.svg"],
    caption: "Segunda vez invitada en OLGA. Hablamos de cosplay, premios y todo lo que se viene.",
  },
  {
    slug: "zelda",
    type: "reel",
    category: "Cosplay",
    date: "2026-06-14",
    images: ["/images/cosplays/zelda.svg"],
    caption: "Zelda · Tears of the Kingdom. Detrás de escena de la sesión.",
  },
  {
    slug: "arthas",
    type: "foto",
    category: "Cosplay",
    date: "2026-05-31",
    images: ["/images/hero.jpg"],
    caption: "Arthas, el Rey Exánime. Frío, nieve y Frostmourne.",
  },
];
