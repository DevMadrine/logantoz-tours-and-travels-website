export type EventService = {
  slug: string;
  name: string;
  blurb: string;
  includes: string[];
  image: string;
  cta: string;
  /** Who delivers it, as confirmed by the client. */
  delivery: "in-house" | "partner";
};

export const eventServices: EventService[] = [
  {
    slug: "catering",
    name: "Catering",
    cta: "Ask about catering",
    delivery: "in-house",
    blurb:
      "From finger food for a networking evening to a buffet for a thousand. Our own kitchen team, fresh local ingredients, and a menu built around your occasion.",
    includes: ["Menu tasting and planning", "Chefs and service staff", "Buffet, plated or canapé service", "Crockery, cutlery and glassware", "Halal and vegetarian menus"],
    image: "/images/brand/buffet.jpg",
  },
  {
    slug: "event-transport",
    name: "Event transport",
    cta: "Ask about event transport",
    delivery: "in-house",
    blurb:
      "Bridal cars, guest shuttles and executive transfers timed to the programme. This is where Talmar Express started, and it is still the part people notice.",
    includes: ["Decorated bridal and executive cars", "Guest shuttles from hotels and churches", "Airport pick-ups for out-of-town guests", "Convoy coordination"],
    image: "/images/brand/wedding-convoy.jpg",
  },
  {
    slug: "guest-accommodation",
    name: "Guest accommodation",
    cta: "Ask about guest accommodation",
    delivery: "in-house",
    blurb:
      "We block-book our partner hotels for your guests, handle the rooming list and make sure everyone lands softly the night before and after.",
    includes: ["Hotel sourcing and group rates", "Rooming list management", "Airport and venue transfers", "Welcome packs"],
    image: "/images/brand/toast.jpg",
  },
  {
    slug: "sound-and-dj",
    name: "Sound and DJ",
    cta: "Ask about sound and DJ",
    delivery: "partner",
    blurb:
      "Professional sound systems, engineers who know the venue, and DJs for weddings, corporate nights and parties, through the sound partners we work with on every event.",
    includes: ["PA and line array systems", "Wireless microphones", "DJ", "Stage lighting", "Sound engineer on site"],
    image: "/images/brand/dj-deck.jpg",
  },
  {
    slug: "decor",
    name: "Décor",
    cta: "Ask about décor",
    delivery: "partner",
    blurb: "Venue styling, floral and table décor, stage and backdrop design, arranged through our décor partners and coordinated by us.",
    includes: ["Venue styling", "Floral and table décor", "Stage and backdrop", "Setup and teardown"],
    image: "/images/brand/event-hall.jpg",
  },
  {
    slug: "mc",
    name: "MC",
    cta: "Ask about an MC",
    delivery: "partner",
    blurb: "Experienced masters of ceremony for weddings, corporate functions and traditional ceremonies, matched to your audience and language.",
    includes: ["Programme planning with you", "English and Swahili", "Coordination with DJ and sound"],
    image: "/images/brand/guests-bw.jpg",
  },
];

export const eventTypes = [
  "Weddings",
  "Corporate events and conferences",
  "Team retreats",
  "Birthdays and private parties",
  "Church and community events",
  "End-of-year parties",
  "Ruracio and traditional ceremonies",
];

export const eventPlaces = ["Nairobi", "Naivasha", "Nakuru", "Nanyuki"];

export const eventGallery = [
  { src: "/images/brand/event-hall.jpg", alt: "Event hall set with red carpet and gold chairs" },
  { src: "/images/brand/bridesmaids.jpg", alt: "Bridal party laughing at a waterfall" },
  { src: "/images/brand/dj.jpg", alt: "DJ at the decks" },
  { src: "/images/brand/catering-table.jpg", alt: "Catering table with decorated bottles" },
  { src: "/images/brand/wedding-prado.jpg", alt: "Toyota Prado decorated for a wedding" },
  { src: "/images/brand/team-at-car.jpg", alt: "Groomsmen beside an executive car" },
];
