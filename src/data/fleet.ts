export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  capacity: number;
  luggage: string;
  features: string[];
  bestFor: string[];
  image: string;
  /** Vehicle list is indicative until the client confirms the actual fleet. */
  sample: true;
};

/** Everything a day rate covers, as confirmed by the client. */
export const dayRateIncludes = [
  "Professional driver",
  "Fuel",
  "Driver's meals and accommodation outside Nairobi",
  "Parking and tolls",
  "Park entry for the vehicle",
];

export const vehicles: Vehicle[] = [
  {
    slug: "executive-sedan",
    name: "Executive sedan",
    type: "Airport transfers and city hire",
    capacity: 3,
    luggage: "3 suitcases",
    features: ["Chauffeur in uniform", "Air conditioning", "Bottled water", "Phone charging"],
    bestFor: ["airport transfers", "corporate guests", "weddings"],
    image: "/images/brand/executive-fleet.jpg",
    sample: true,
  },
  {
    slug: "prado",
    name: "Toyota Prado",
    type: "Executive 4x4",
    capacity: 4,
    luggage: "4 suitcases",
    features: ["Leather interior", "Air conditioning", "4x4", "Wedding decoration on request"],
    bestFor: ["weddings", "Amboseli and Naivasha", "VIP transfers"],
    image: "/images/brand/wedding-prado.jpg",
    sample: true,
  },
  {
    slug: "land-cruiser-safari",
    name: "Toyota Land Cruiser safari 4x4",
    type: "Safari 4x4, pop-up roof",
    capacity: 7,
    luggage: "7 soft bags",
    features: ["Pop-up roof for game viewing", "4x4 with high clearance", "Charging points", "Cooler box"],
    bestFor: ["the Maasai Mara", "Samburu", "any park road"],
    image: "/images/fleet/land-cruiser.jpg",
    sample: true,
  },
  {
    slug: "hiace-shuttle",
    name: "Toyota Hiace shuttle",
    type: "Minivan",
    capacity: 14,
    luggage: "Roof rack",
    features: ["Air conditioning", "Reclining seats", "PA system"],
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
    features: ["Air conditioning", "PA and music system", "Reclining seats"],
    bestFor: ["church and school trips", "corporate retreats", "large wedding parties"],
    image: "/images/fleet/coaster.jpg",
    sample: true,
  },
];

export type TransferPoint = { place: string; detail: string };

export const transferPoints: TransferPoint[] = [
  { place: "Jomo Kenyatta International Airport (JKIA)", detail: "Meet and greet in arrivals. We track your flight, so a delay is our problem, not yours." },
  { place: "Wilson Airport", detail: "Pick-ups for domestic and safari flights." },
  { place: "Nairobi SGR terminus", detail: "Pick-ups and drop-offs for the Madaraka Express." },
];

export const getVehicle = (slug: string) => vehicles.find(v => v.slug === slug);
