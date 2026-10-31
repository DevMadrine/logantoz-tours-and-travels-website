/** The four services, in the order the client ranks them. Drives the nav menu, the services overview and the service pages. */
export type Service = {
  slug: string;
  href: string;
  name: string;
  tagline: string;
  blurb: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  cta: string;
  quoteService: string;
};

export const services: Service[] = [
  {
    slug: "transport",
    href: "/fleet",
    name: "Transport and transfers",
    tagline: "Airport pick-ups and car hire with a driver, anywhere in Kenya",
    blurb: "This is where Talmar Express started. We pick you up at JKIA, Wilson Airport or the SGR terminus, hire out cars with a driver by the day, and do long-distance trips, all in vehicles we check and insure ourselves.",
    bullets: ["JKIA, Wilson and Nairobi SGR transfers", "Driver, fuel, parking and tolls included", "Road trips to every destination in Kenya", "15+ vehicles available on one day"],
    image: "/images/brand/executive-fleet.jpg",
    imageAlt: "A line of executive sedans",
    cta: "Explore transport",
    quoteService: "transport",
  },
  {
    slug: "safaris",
    href: "/tours",
    name: "Safaris and trips",
    tagline: "Private trips on your own dates, anywhere in Kenya, with park fees included",
    blurb: "From a day in Nairobi National Park to three days in the Maasai Mara, we plan the trip around your group and our own driver-guides take you there. Each trip is quoted separately, in Kenyan shillings.",
    bullets: ["Private departures, no fixed groups", "Park entry fees always included", "Our own driver-guides", "Kenya's parks, lakes, mountains and coast"],
    image: "/images/destinations/maasai-mara-drive.jpg",
    imageAlt: "Safari vehicles beside a pride of lions",
    cta: "Explore safaris",
    quoteService: "tour",
  },
  {
    slug: "events",
    href: "/events",
    name: "Events",
    tagline: "Catering, transport, hotels, sound and décor, all under one quote",
    blurb: "We handle weddings, corporate functions, ruracios and end-of-year parties for up to a thousand guests. Our own team does the catering, guest transport and hotel bookings, and we bring in trusted partners for sound, décor and MCs.",
    bullets: ["Catering by our own kitchen team", "Bridal cars and guest shuttles", "Hotel blocks and rooming lists", "Sound, décor and MC with partners"],
    image: "/images/brand/buffet.jpg",
    imageAlt: "Guests being served at a buffet",
    cta: "Explore events",
    quoteService: "event",
  },
  {
    slug: "hotels",
    href: "/accommodation",
    name: "Partner hotels",
    tagline: "Nairobi hotels booked together with your trip or event",
    blurb: "We work with five hotels in Nairobi, including Laziz Suites, which we manage ourselves. We book them as part of your trip or event and arrange the transfers to go with the rooms.",
    bullets: ["Laziz Suites, Radisson, Trademark, Gem Forest, Safari Park", "Group blocks for weddings and conferences", "Transfers arranged with the room", "Lodges inside the parks chosen with you"],
    image: "/images/brand/toast.jpg",
    imageAlt: "Champagne glasses and a decorated table",
    cta: "Explore partner hotels",
    quoteService: "accommodation",
  },
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
