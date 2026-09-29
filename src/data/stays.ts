export type Stay = {
  slug: string;
  name: string;
  location: string;
  type: string;
  roomTypes: string[];
  amenities: string[];
  rateFrom: number;
  rateNote: string;
  image: string;
  sample: true;
};

/** Partner hotels and lodges. Names are placeholders until the client shares the real partner list. */
export const stays: Stay[] = [
  {
    slug: "mara-riverside-camp",
    name: "Mara riverside tented camp",
    location: "Maasai Mara, Talek gate",
    type: "Tented camp",
    roomTypes: ["Standard tent", "Family tent", "Honeymoon tent"],
    amenities: ["Full board", "En-suite bathrooms", "Campfire", "Game drive pick-up"],
    rateFrom: 12500,
    rateNote: "Per person per night, full board, resident rate.",
    image: "/images/stays/tented-camp.jpg",
    sample: true,
  },
  {
    slug: "amboseli-lodge",
    name: "Amboseli safari lodge",
    location: "Inside Amboseli National Park",
    type: "Safari lodge",
    roomTypes: ["Standard room", "Kilimanjaro-view room", "Suite"],
    amenities: ["Pool", "Restaurant and bar", "Kilimanjaro views", "Wi-Fi in public areas"],
    rateFrom: 14000,
    rateNote: "Per person per night, full board, resident rate.",
    image: "/images/stays/safari-lodge.jpg",
    sample: true,
  },
  {
    slug: "naivasha-lakeside",
    name: "Naivasha lakeside lodge",
    location: "Moi South Lake Road, Naivasha",
    type: "Lakeside lodge",
    roomTypes: ["Garden room", "Lake-view cottage"],
    amenities: ["Boat jetty", "Pool", "Conference room", "Kids' area"],
    rateFrom: 9500,
    rateNote: "Per person per night, half board.",
    image: "/images/destinations/naivasha.jpg",
    sample: true,
  },
  {
    slug: "diani-beach-resort",
    name: "Diani beachfront resort",
    location: "Diani Beach, south coast",
    type: "Beach resort",
    roomTypes: ["Garden room", "Ocean-view room", "Family suite"],
    amenities: ["Beachfront", "Two pools", "Spa", "Water sports desk", "Kids' club"],
    rateFrom: 11000,
    rateNote: "Per person per night, bed and breakfast.",
    image: "/images/stays/beach-resort.jpg",
    sample: true,
  },
  {
    slug: "nairobi-city-hotel",
    name: "Nairobi city hotel",
    location: "Westlands, Nairobi",
    type: "City hotel",
    roomTypes: ["Standard", "Executive", "Apartment"],
    amenities: ["Airport shuttle", "Business centre", "Gym", "Restaurant"],
    rateFrom: 8000,
    rateNote: "Per room per night, bed and breakfast.",
    image: "/images/stays/city-hotel.jpg",
    sample: true,
  },
];
