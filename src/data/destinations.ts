export type Destination = {
  slug: string;
  name: string;
  country: "Kenya";
  region: string;
  tagline: string;
  description: string;
  attractions: string[];
  bestTime: string;
  driveTime: string;
  image: string;
  sample: true;
};

export const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    country: "Kenya",
    region: "South-west Kenya",
    tagline: "The great migration and Kenya's densest big cat country.",
    description:
      "The Mara is open grassland stretching to the Serengeti, with resident lion prides, cheetah on the termite mounds and leopard along the rivers. Between July and October the wildebeest herds cross the Mara River, and the reserve is busy for good reason.",
    attractions: ["Mara River crossings", "Lion and cheetah sightings", "Balloon safaris at dawn", "Maasai village visits"],
    bestTime: "July to October for the migration. January to March is quieter with excellent game.",
    driveTime: "About 5 to 6 hours from Nairobi, or a 45-minute flight.",
    image: "/images/destinations/maasai-mara.jpg",
    sample: true,
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    region: "Southern Kenya",
    tagline: "Elephants in front of Kilimanjaro.",
    description:
      "A small park with a big backdrop. Amboseli's swamps draw large elephant families all year, and on clear mornings Kilimanjaro fills the horizon behind them. It is the closest classic safari to Nairobi.",
    attractions: ["Kilimanjaro views at dawn", "Large elephant herds", "Observation Hill", "Birdlife on the swamps"],
    bestTime: "June to October and January to February for the clearest mountain views.",
    driveTime: "About 4 hours from Nairobi.",
    image: "/images/destinations/amboseli.jpg",
    sample: true,
  },
  {
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    country: "Kenya",
    region: "Rift Valley",
    tagline: "Rhinos, flamingos and a lake framed by cliffs.",
    description:
      "Nakuru is Kenya's best place to see both black and white rhino, with flamingo flocks on the shoreline when the water level is right and leopard in the acacia woodland. An easy day or overnight trip from Nairobi.",
    attractions: ["Rhino sanctuary", "Flamingos", "Baboon Cliff viewpoint", "Makalia Falls"],
    bestTime: "All year. Flamingo numbers vary with the lake level.",
    driveTime: "About 3 hours from Nairobi.",
    image: "/images/destinations/lake-nakuru.jpg",
    sample: true,
  },
  {
    slug: "lake-naivasha",
    name: "Lake Naivasha",
    country: "Kenya",
    region: "Rift Valley",
    tagline: "Boat rides, hippos and a weekend feel.",
    description:
      "A freshwater lake ringed with lodges and flower farms. Boat trips get close to hippo and fish eagles, Crescent Island is a walking safari among giraffe and zebra, and Hell's Gate is next door for cycling.",
    attractions: ["Boat rides", "Crescent Island walk", "Hell's Gate cycling", "Lakeside lodges"],
    bestTime: "All year. Dry season, June to October, for the clearest weather.",
    driveTime: "About 2 hours from Nairobi.",
    image: "/images/destinations/naivasha.jpg",
    sample: true,
  },
  {
    slug: "hells-gate",
    name: "Hell's Gate",
    country: "Kenya",
    region: "Rift Valley",
    tagline: "Cycle past zebra, walk a red-rock gorge.",
    description:
      "One of the few parks you can explore on foot or by bicycle. Cliffs, steam vents and the narrow Ol Njorowa gorge, with zebra, giraffe and warthog along the road.",
    attractions: ["Cycling safari", "Gorge walk", "Fischer's Tower", "Rock climbing"],
    bestTime: "All year. Avoid the gorge in heavy rain.",
    driveTime: "About 2 hours from Nairobi.",
    image: "/images/destinations/hells-gate.jpg",
    sample: true,
  },
  {
    slug: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    region: "Capital",
    tagline: "The only capital with a national park inside it.",
    description:
      "Lions with skyscrapers behind them, giraffes you can feed by hand, and the Karen Blixen story. Nairobi is the start of most trips and worth a day of its own.",
    attractions: ["Nairobi National Park", "Giraffe Centre", "Karen Blixen Museum", "Bomas of Kenya"],
    bestTime: "All year.",
    driveTime: "You are already here.",
    image: "/images/destinations/nairobi-park.jpg",
    sample: true,
  },
  {
    slug: "diani",
    name: "Diani Beach",
    country: "Kenya",
    region: "South coast",
    tagline: "The coast's best beach, with reef and forest behind it.",
    description:
      "Twenty kilometres of white sand south of Mombasa, protected by a reef. Kite surfing, dhow trips to Wasini, colobus monkeys in the trees and a good line of resorts from boutique to family.",
    attractions: ["Beach and reef", "Kisite marine park snorkelling", "Shimba Hills", "Colobus Conservation"],
    bestTime: "August to March. April and May are the long rains.",
    driveTime: "SGR train to Mombasa, then about an hour, or a direct flight to Ukunda.",
    image: "/images/destinations/diani.jpg",
    sample: true,
  },
  {
    slug: "tsavo",
    name: "Tsavo",
    country: "Kenya",
    region: "South-east Kenya",
    tagline: "Red elephants and the most space you will ever see.",
    description:
      "Tsavo East and West together make Kenya's largest protected area. East is open and dusty red, West is greener with springs and lava fields. It sits on the Nairobi to Mombasa road, so it pairs well with a beach trip.",
    attractions: ["Red-dust elephants", "Mzima Springs", "Shetani lava flow", "Lugard Falls"],
    bestTime: "June to October and January to February.",
    driveTime: "About 4 hours from Nairobi, or a stop on the SGR.",
    image: "/images/destinations/tsavo.jpg",
    sample: true,
  },
  {
    slug: "samburu",
    name: "Samburu",
    country: "Kenya",
    region: "Northern Kenya",
    tagline: "Dry-country wildlife you will not find in the south.",
    description:
      "The Ewaso Nyiro river runs through semi-desert scrub, drawing elephant, leopard and the northern species: reticulated giraffe, Grevy's zebra, gerenuk, beisa oryx and Somali ostrich. Fewer vehicles, strong culture.",
    attractions: ["Samburu special five", "River elephants", "Samburu cultural visits", "Buffalo Springs"],
    bestTime: "June to October and December to March.",
    driveTime: "About 6 hours from Nairobi, or a flight to Kalama.",
    image: "/images/destinations/samburu.jpg",
    sample: true,
  },
  {
    slug: "mount-kenya",
    name: "Mount Kenya",
    country: "Kenya",
    region: "Central Kenya",
    tagline: "Africa's second-highest peak, walkable to 4,985 metres.",
    description:
      "Point Lenana can be reached by any fit walker over four or five days. The Sirimon and Chogoria routes cross moorland, glacial valleys and tarns before a sunrise summit.",
    attractions: ["Point Lenana summit", "Lake Michaelson", "Gorges Valley", "Nanyuki and the equator"],
    bestTime: "January to February and August to September.",
    driveTime: "About 3 to 4 hours to the park gates.",
    image: "/images/destinations/mount-kenya.jpg",
    sample: true,
  },
  {
    slug: "lamu",
    name: "Lamu",
    country: "Kenya",
    region: "North coast",
    tagline: "Dhows, donkeys and a Swahili old town.",
    description:
      "Kenya's oldest living town, a UNESCO site of coral-stone houses and narrow lanes with no cars. Sail a dhow to Manda, eat seafood on Shela beach and slow down.",
    attractions: ["Lamu Old Town", "Shela beach", "Dhow sailing", "Takwa ruins"],
    bestTime: "November to March.",
    driveTime: "Flight from Nairobi to Manda Island, then a short boat ride.",
    image: "/images/destinations/lamu.jpg",
    sample: true,
  },
];

export const getDestination = (slug: string) => destinations.find(d => d.slug === slug);
