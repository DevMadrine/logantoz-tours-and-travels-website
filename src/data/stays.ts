export type Stay = {
  slug: string;
  name: string;
  location: string;
  type: string;
  note?: string;
};

/** Partner hotels named by the client, with permission to list them. Booked as part of a trip or event, not on their own. */
export const stays: Stay[] = [
  { slug: "laziz-suites", name: "Laziz Suites Hotel", location: "Parklands, Nairobi", type: "Hotel", note: "Managed by Talmar Express. Minutes from our office." },
  { slug: "radisson-westlands", name: "Radisson, Westlands", location: "Westlands, Nairobi", type: "Hotel" },
  { slug: "trademark-hotel", name: "Trademark Hotel", location: "Village Market, Gigiri", type: "Hotel" },
  { slug: "gem-forest", name: "Gem Forest", location: "Limuru Road, Nairobi", type: "Hotel" },
  { slug: "safari-park", name: "Safari Park Hotel", location: "Thika Road, Nairobi", type: "Hotel and casino resort" },
];
