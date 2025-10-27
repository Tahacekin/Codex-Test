export const works = [
  {
    id: "1",
    slug: "noir-elegance",
    title: "Noir Elegance",
    description: "An exploration of monochrome couture framed in geometric light.",
    imageUrl: "/images/works/noir-elegance.jpg",
    gallery: [
      "/images/works/noir-elegance-1.jpg",
      "/images/works/noir-elegance-2.jpg",
      "/images/works/noir-elegance-3.jpg"
    ],
    year: 2024,
    location: "Berlin",
    credits: {
      photographer: "Lena Hart",
      stylist: "Marco Ilios",
      models: ["Adeline", "Nyah"]
    }
  },
  {
    id: "2",
    slug: "chrome-dreams",
    title: "Chrome Dreams",
    description: "High contrast futurism with reflective textiles and sharp silhouettes.",
    imageUrl: "/images/works/chrome-dreams.jpg",
    gallery: [
      "/images/works/chrome-dreams-1.jpg",
      "/images/works/chrome-dreams-2.jpg",
      "/images/works/chrome-dreams-3.jpg"
    ],
    year: 2023,
    location: "Tokyo",
    credits: {
      photographer: "Lena Hart",
      stylist: "Rei Nakamoto",
      models: ["Yara", "Ansel"]
    }
  },
  {
    id: "3",
    slug: "desert-veil",
    title: "Desert Veil",
    description: "Rich textures captured at dusk across the Moroccan dunes.",
    imageUrl: "/images/works/desert-veil.jpg",
    gallery: [
      "/images/works/desert-veil-1.jpg",
      "/images/works/desert-veil-2.jpg",
      "/images/works/desert-veil-3.jpg"
    ],
    year: 2022,
    location: "Merzouga",
    credits: {
      photographer: "Lena Hart",
      stylist: "Imani Khalid",
      models: ["Sanaa"]
    }
  },
  {
    id: "4",
    slug: "metro-shadow",
    title: "Metro Shadow",
    description: "City lights, motion blur, and couture pieces woven into urban rhythm.",
    imageUrl: "/images/works/metro-shadow.jpg",
    gallery: [
      "/images/works/metro-shadow-1.jpg",
      "/images/works/metro-shadow-2.jpg",
      "/images/works/metro-shadow-3.jpg"
    ],
    year: 2021,
    location: "New York",
    credits: {
      photographer: "Lena Hart",
      stylist: "Alix Chen",
      models: ["Rosa", "Jun"]
    }
  }
];

export function findWorkById(id) {
  return works.find((work) => work.id === id || work.slug === id);
}
