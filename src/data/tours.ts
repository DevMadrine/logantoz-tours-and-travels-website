export type TourCategory = "safari" | "beach" | "adventure" | "day-trip";

export type Tour = {
  slug: string;
  name: string;
  tagline: string;
  category: TourCategory;
  destinationSlugs: string[];
  days: number;
  nights: number;
  image: string;
  featured?: boolean;
  highlights: string[];
  itinerary: { day: number; title: string; detail: string }[];
  included: string[];
  excluded: string[];
  accommodation: string;
  transport: string;
  activities: string[];
  groupSize: { min: number; max: number };
  /** Itineraries are indicative until the client confirms his actual packages. */
  sample: true;
};

export const categoryLabels: Record<TourCategory, string> = {
  safari: "Safaris",
  beach: "Beach",
  adventure: "Adventure",
  "day-trip": "Day trips",
};

/** Applies to every trip: private departures, quoted per group, park fees included, own driver-guides. */
export const tourTerms = {
  pricing: "Every trip is quoted for your group and dates, in Kenyan shillings. Park entry fees are always included.",
  departures: "Private trips on your dates. No fixed group departures.",
  guides: "Our own driver-guides, in vehicles we check ourselves.",
};

const excludedBase = ["Drinks, tips and personal spending", "Travel insurance", "Anything not listed under what's included"];

export const tours: Tour[] = [
  {
    slug: "maasai-mara-classic",
    name: "Maasai Mara classic safari",
    tagline: "Big cats, open plains and the wildebeest crossing in season. The safari most people picture first.",
    category: "safari",
    destinationSlugs: ["maasai-mara"],
    days: 3,
    nights: 2,
    image: "/images/destinations/maasai-mara-drive.jpg",
    featured: true,
    highlights: ["Four game drives in a pop-up roof 4x4", "Optional Maasai village visit", "Migration crossings July to October"],
    itinerary: [
      { day: 1, title: "Nairobi to the Mara", detail: "Depart 7am, stop at the Rift Valley viewpoint, lunch at camp, afternoon game drive." },
      { day: 2, title: "Full day in the reserve", detail: "Morning and afternoon drives with a picnic lunch by the Mara River. Optional balloon flight at dawn." },
      { day: 3, title: "Last drive and return", detail: "Sunrise drive, breakfast, drive back to Nairobi arriving late afternoon." },
    ],
    included: ["Transport in a 4x4 safari vehicle with driver-guide", "Two nights full board", "Park entry fees", "Game drives as listed", "Bottled water in the vehicle"],
    excluded: ["Balloon safari", "Maasai village visit", ...excludedBase],
    accommodation: "Mid-range tented camp on the reserve edge. Lodge upgrade available.",
    transport: "Toyota Land Cruiser 4x4 with pop-up roof.",
    activities: ["Game drives", "Sunrise photography", "Maasai cultural visit", "Balloon safari (optional)"],
    groupSize: { min: 2, max: 7 },
    sample: true,
  },
  {
    slug: "amboseli-kilimanjaro",
    name: "Amboseli under Kilimanjaro",
    tagline: "Elephant herds against Africa's highest mountain. Short drive, huge views.",
    category: "safari",
    destinationSlugs: ["amboseli"],
    days: 2,
    nights: 1,
    image: "/images/destinations/amboseli.jpg",
    featured: true,
    highlights: ["Clearest Kilimanjaro views at dawn", "Observation Hill lookout", "Large elephant families"],
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", detail: "Morning drive via Emali, check in, afternoon game drive around the swamps." },
      { day: 2, title: "Dawn drive and return", detail: "Early drive for the mountain views, breakfast, return to Nairobi by mid-afternoon." },
    ],
    included: ["4x4 transport with driver-guide", "One night full board", "Park entry fees", "Game drives as listed"],
    excluded: [...excludedBase],
    accommodation: "Safari lodge inside the park.",
    transport: "Toyota Land Cruiser 4x4 or Prado depending on group size.",
    activities: ["Game drives", "Observation Hill walk", "Photography"],
    groupSize: { min: 2, max: 7 },
    sample: true,
  },
  {
    slug: "lakes-weekend",
    name: "Lakes weekend: Nakuru and Naivasha",
    tagline: "Flamingos, rhinos, a boat among hippos and a cycle through Hell's Gate. The easy weekend out of Nairobi.",
    category: "safari",
    destinationSlugs: ["lake-nakuru", "lake-naivasha", "hells-gate"],
    days: 2,
    nights: 1,
    image: "/images/destinations/lake-nakuru.jpg",
    featured: true,
    highlights: ["Rhino sanctuary at Nakuru", "Boat ride on Naivasha", "Cycling with zebras at Hell's Gate"],
    itinerary: [
      { day: 1, title: "Lake Nakuru", detail: "Drive to Nakuru, full game drive around the lake, Baboon Cliff viewpoint, overnight at Naivasha." },
      { day: 2, title: "Naivasha and Hell's Gate", detail: "Morning boat ride and Crescent Island walk, then cycle Hell's Gate gorge. Back in Nairobi by evening." },
    ],
    included: ["Transport with driver-guide", "One night half board", "Park fees for Nakuru and Hell's Gate", "Boat ride", "Bicycle hire"],
    excluded: ["Crescent Island entry", ...excludedBase],
    accommodation: "Lakeside lodge at Naivasha.",
    transport: "Toyota Prado or Hiace shuttle depending on group size.",
    activities: ["Game drive", "Boat ride", "Walking safari", "Cycling", "Gorge walk"],
    groupSize: { min: 2, max: 14 },
    sample: true,
  },
  {
    slug: "nairobi-in-a-day",
    name: "Nairobi city tour",
    tagline: "Lions before breakfast, giraffes by lunch, Karen Blixen after. The city's wild side without leaving town.",
    category: "day-trip",
    destinationSlugs: ["nairobi"],
    days: 1,
    nights: 0,
    image: "/images/destinations/nairobi-park.jpg",
    featured: true,
    highlights: ["Nairobi National Park at opening time", "Giraffe Centre", "Karen Blixen Museum"],
    itinerary: [
      { day: 1, title: "The full loop", detail: "6am hotel pick-up, three-hour game drive, Giraffe Centre, lunch in Karen, Karen Blixen Museum, optional Kazuri beads or Bomas of Kenya, drop-off by 5pm." },
    ],
    included: ["Private vehicle with driver-guide", "Hotel pick-up and drop-off", "Park and centre entry fees"],
    excluded: ["Lunch", "Bomas of Kenya show", ...excludedBase],
    accommodation: "Not included. We can add a partner hotel in Nairobi.",
    transport: "Prado or Land Cruiser for the park section.",
    activities: ["Game drive", "Giraffe feeding", "Museum visit", "Shopping stop"],
    groupSize: { min: 1, max: 7 },
    sample: true,
  },
  {
    slug: "diani-beach-break",
    name: "Diani beach break",
    tagline: "White sand, warm water and a train ride down. The reset trip.",
    category: "beach",
    destinationSlugs: ["diani"],
    days: 4,
    nights: 3,
    image: "/images/destinations/diani.jpg",
    highlights: ["SGR train from Nairobi", "Beachfront hotel", "Optional Wasini dhow and snorkelling day"],
    itinerary: [
      { day: 1, title: "Train to the coast", detail: "Transfer to the Nairobi SGR terminus, morning train, transfer from Mombasa to Diani, afternoon on the beach." },
      { day: 2, title: "Free day", detail: "Beach, pool or a spa. Optional Shimba Hills or Wasini Island excursions." },
      { day: 3, title: "Ocean day", detail: "Optional dhow trip to Kisite marine park with snorkelling and a seafood lunch." },
      { day: 4, title: "Back to Nairobi", detail: "Late checkout, transfer to Mombasa, afternoon SGR to Nairobi, transfer home." },
    ],
    included: ["SGR tickets both ways", "All transfers, including to and from the Nairobi terminus", "Three nights bed and breakfast"],
    excluded: ["Lunches and dinners", "Excursions", ...excludedBase],
    accommodation: "Beachfront hotel in Diani, chosen with you.",
    transport: "SGR train plus private transfers at both ends.",
    activities: ["Beach", "Snorkelling", "Dhow sailing", "Spa"],
    groupSize: { min: 2, max: 20 },
    sample: true,
  },
  {
    slug: "tsavo-east-west",
    name: "Tsavo East and West",
    tagline: "Red elephants, Mzima Springs and a lot of wild space. Kenya's biggest park in one trip.",
    category: "safari",
    destinationSlugs: ["tsavo"],
    days: 3,
    nights: 2,
    image: "/images/destinations/tsavo.jpg",
    highlights: ["Red-dust elephants of Tsavo East", "Mzima Springs underwater hippo viewing", "Shetani lava flow"],
    itinerary: [
      { day: 1, title: "Nairobi to Tsavo East", detail: "Drive via Voi, afternoon game drive along the Galana River." },
      { day: 2, title: "Across to Tsavo West", detail: "Morning drive, transfer to Tsavo West, Mzima Springs and Shetani lava flow." },
      { day: 3, title: "Return", detail: "Dawn drive, then the road back to Nairobi via Mtito Andei." },
    ],
    included: ["4x4 transport with driver-guide", "Two nights full board", "Park fees for both parks", "Game drives as listed"],
    excluded: [...excludedBase],
    accommodation: "Safari lodges in each park.",
    transport: "Toyota Land Cruiser 4x4.",
    activities: ["Game drives", "Springs walk", "Lava flow visit"],
    groupSize: { min: 2, max: 7 },
    sample: true,
  },
  {
    slug: "samburu-special-five",
    name: "Samburu special five",
    tagline: "Gerenuk, Grevy's zebra, reticulated giraffe, Somali ostrich and beisa oryx. Wildlife you only find up north.",
    category: "safari",
    destinationSlugs: ["samburu"],
    days: 3,
    nights: 2,
    image: "/images/destinations/samburu.jpg",
    highlights: ["Ewaso Nyiro river elephants", "Samburu cultural visit", "Quieter than the Mara"],
    itinerary: [
      { day: 1, title: "North to Samburu", detail: "Drive via Nanyuki with a stop at the equator, afternoon game drive." },
      { day: 2, title: "Full day in the reserve", detail: "Morning and afternoon drives, optional Samburu village visit." },
      { day: 3, title: "Return", detail: "Morning drive, then back to Nairobi." },
    ],
    included: ["4x4 transport with driver-guide", "Two nights full board", "Park entry fees", "Game drives as listed"],
    excluded: ["Village visit", ...excludedBase],
    accommodation: "Riverside lodge in the reserve.",
    transport: "Toyota Land Cruiser 4x4.",
    activities: ["Game drives", "Cultural visit", "Bird watching"],
    groupSize: { min: 2, max: 7 },
    sample: true,
  },
  {
    slug: "mount-kenya-trek",
    name: "Mount Kenya trek, Sirimon to Chogoria",
    tagline: "Point Lenana at sunrise and the prettiest descent on the mountain.",
    category: "adventure",
    destinationSlugs: ["mount-kenya"],
    days: 5,
    nights: 4,
    image: "/images/destinations/mount-kenya.jpg",
    highlights: ["Point Lenana, 4,985m", "Lake Michaelson and the Gorges Valley", "Full mountain crew"],
    itinerary: [
      { day: 1, title: "Nairobi to Old Moses", detail: "Drive to Sirimon gate, walk to Old Moses camp at 3,300m." },
      { day: 2, title: "Shipton's camp", detail: "Long day through Mackinder's Valley to Shipton's at 4,200m." },
      { day: 3, title: "Summit and Lake Michaelson", detail: "3am start for Point Lenana at sunrise, descend the Chogoria side." },
      { day: 4, title: "Meru bandas", detail: "Walk down through the Gorges Valley to the bandas." },
      { day: 5, title: "Return", detail: "Walk out to Chogoria gate and drive back to Nairobi." },
    ],
    included: ["Transport from Nairobi", "Park fees and camping fees", "Guide, cook and porters", "All meals on the mountain", "Tents and mattresses"],
    excluded: ["Sleeping bag hire", "Personal kit", ...excludedBase],
    accommodation: "Mountain huts and tents.",
    transport: "Hiace shuttle to and from the gates.",
    activities: ["Trekking", "Summit hike", "Camping"],
    groupSize: { min: 2, max: 12 },
    sample: true,
  },
];

export const getTour = (slug: string) => tours.find(t => t.slug === slug);
export const featuredTours = () => tours.filter(t => t.featured);
export const toursForDestination = (slug: string) => tours.filter(t => t.destinationSlugs.includes(slug));
