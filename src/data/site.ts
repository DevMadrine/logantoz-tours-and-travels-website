export const site = {
  name: "Logantoz Tours",
  tagline: "Plan. Move. Celebrate.",
  phone: "+254722894647",
  phoneDisplay: "+254 722 894 647",
  whatsapp: "254722894647",
  email: "logantoztour@gmail.com",
  address: "CityPark Estate, Parklands, Nairobi",
  hours: "Monday to Saturday, 8am to 6pm. WhatsApp is answered every day.",
  mapsEmbed: "https://www.google.com/maps?q=City+Park+Estate,+Parklands,+Nairobi&z=14&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=City+Park+Estate+Parklands+Nairobi",
  founded: 2024,
  /** Social handles are placeholders until the client confirms them. */
  socials: [
    { name: "Instagram", href: "https://instagram.com/", sample: true },
    { name: "Facebook", href: "https://facebook.com/", sample: true },
    { name: "TikTok", href: "https://tiktok.com/", sample: true },
    { name: "YouTube", href: "https://youtube.com/", sample: true },
  ],
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function kes(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}
