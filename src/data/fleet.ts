export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  capacity: number;
  luggage: string;
  features: string[];
  rateDay: number;
  rateNote: string;
  bestFor: string[];
  image: string;
  sample: true;
};

export const vehicles: Vehicle[] = [
  {
    slug: "land-cruiser-safari",
    name: "Toyota Land Cruiser safari 4x4",
    type: "Safari 4x4, pop-up roof",
    capacity: 7,
    luggage: "7 soft bags",
    features: ["Pop-up roof for game viewing", "4x4 with high clearance", "Charging points", "Cooler box", "Radio contact with other guides"],
    rateDay: 18000,
    rateNote: "Per day with driver-guide. Fuel and park fees quoted per trip.",
    bestFor: ["the Maasai Mara", "Samburu", "any park road"],
    image: "/images/fleet/land-cruiser.jpg",
    sample: true,
  },
  {
    slug: "prado",
    name: "Toyota Prado",
    type: "Executive 4x4",
    capacity: 4,
    luggage: "4 suitcases",
    features: ["Leather interior", "Air conditioning", "4x4", "Tinted windows", "Wedding decoration on request"],
    rateDay: 15000,
    rateNote: "Per day with driver. Fuel quoted per trip.",
    bestFor: ["weddings", "Amboseli and Naivasha", "VIP transfers"],
    image: "/images/brand/wedding-prado.jpg",
    sample: true,
  },
  {
    slug: "executive-sedan",
    name: "Mercedes-Benz executive sedan",
    type: "Executive sedan",
    capacity: 3,
    luggage: "3 suitcases",
    features: ["Chauffeur in uniform", "Bottled water", "Air conditioning", "Phone charging"],
    rateDay: 20000,
    rateNote: "Per day with chauffeur. Airport transfers priced separately.",
    bestFor: ["corporate guests", "airport transfers", "weddings"],
    image: "/images/brand/executive-fleet.jpg",
    sample: true,
  },
  {
    slug: "hiace-shuttle",
    name: "Toyota Hiace shuttle",
    type: "Minivan",
    capacity: 14,
    luggage: "Roof rack",
    features: ["Air conditioning", "Reclining seats", "PA system", "Roof rack"],
    rateDay: 12000,
    rateNote: "Per day with driver. Fuel quoted per trip.",
    bestFor: ["team outings", "wedding guest shuttles", "Naivasha and Nakuru"],
    image: "/images/fleet/hiace.jpg",
    sample: true,
  },
  {
    slug: "coaster-bus",
    name: "Toyota Coaster bus",
    type: "Mini bus",
    capacity: 29,
    luggage: "Rear compartment",
    features: ["Air conditioning", "PA and music system", "Reclining seats", "Large luggage bay"],
    rateDay: 22000,
    rateNote: "Per day with driver. Fuel quoted per trip.",
    bestFor: ["church and school trips", "corporate retreats", "large wedding parties"],
    image: "/images/fleet/coaster.jpg",
    sample: true,
  },
];

export type Transfer = { route: string; vehicle: string; price: number };

export const transfers: Transfer[] = [
  { route: "JKIA to Nairobi (CBD, Westlands, Parklands, Karen)", vehicle: "Executive sedan, up to 3", price: 3500 },
  { route: "JKIA to Nairobi", vehicle: "Hiace shuttle, up to 14", price: 6000 },
  { route: "Wilson Airport to Nairobi", vehicle: "Executive sedan", price: 3000 },
  { route: "Nairobi SGR station to Nairobi", vehicle: "Executive sedan", price: 3000 },
  { route: "Nairobi to Naivasha", vehicle: "Prado", price: 12000 },
  { route: "Nairobi to Nanyuki", vehicle: "Prado", price: 18000 },
];

export const getVehicle = (slug: string) => vehicles.find(v => v.slug === slug);
