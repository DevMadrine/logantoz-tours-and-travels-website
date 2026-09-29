export type EventService = {
  slug: string;
  name: string;
  blurb: string;
  includes: string[];
  image: string;
  cta: string;
};

export const eventServices: EventService[] = [
  {
    slug: "catering",
    name: "Catering",
    cta: "Ask about catering",
    blurb:
      "From finger food for a networking evening to a multi-course buffet for three hundred. Fresh, locally sourced ingredients and a menu built around your occasion.",
    includes: ["Menu tasting and planning", "Chefs and service staff", "Buffet, plated or canapé service", "Crockery, cutlery and glassware", "Halal and vegetarian menus"],
    image: "/images/brand/buffet.jpg",
  },
  {
    slug: "sound-and-dj",
    name: "Sound and DJ",
    cta: "Ask about sound and DJ",
    blurb:
      "Professional sound systems, engineers who know the venue, and a roster of DJs for weddings, corporate nights and parties.",
    includes: ["PA and line array systems", "Wireless microphones", "DJ and MC", "Stage lighting", "Sound engineer on site"],
    image: "/images/brand/dj-deck.jpg",
  },
  {
    slug: "event-transport",
    name: "Event transport",
    cta: "Ask about event transport",
    blurb:
      "Bridal cars, guest shuttles and executive transfers timed to the programme. This is where Logantoz started, and it is still the part people notice.",
    includes: ["Decorated bridal and executive cars", "Guest shuttles from hotels and churches", "Airport pick-ups for out-of-town guests", "Convoy coordination"],
    image: "/images/brand/wedding-convoy.jpg",
  },
  {
    slug: "guest-accommodation",
    name: "Guest accommodation",
    cta: "Ask about guest accommodation",
    blurb:
      "We block-book hotels for your guests, handle the rooming list and make sure everyone lands softly the night before and after.",
    includes: ["Hotel sourcing and group rates", "Rooming list management", "Airport and venue transfers", "Welcome packs"],
    image: "/images/brand/toast.jpg",
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

export const eventGallery = [
  { src: "/images/brand/event-hall.jpg", alt: "Event hall set with red carpet and gold chairs" },
  { src: "/images/brand/bridesmaids.jpg", alt: "Bridal party laughing at a waterfall" },
  { src: "/images/brand/dj.jpg", alt: "DJ at the decks" },
  { src: "/images/brand/catering-table.jpg", alt: "Catering table with decorated bottles" },
  { src: "/images/brand/wedding-prado.jpg", alt: "Toyota Prado decorated for a wedding" },
  { src: "/images/brand/team-at-car.jpg", alt: "Groomsmen beside an executive car" },
];
