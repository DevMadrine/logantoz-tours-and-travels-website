export const site = {
  name: "Talmar Express",
  legalName: "Talmar Express",
  tagline: "Plan. Move. Celebrate.",
  phone: "+254722894647",
  phoneDisplay: "+254 722 894 647",
  whatsapp: "254722894647",
  /** Given on the questionnaire. The profile PDF used logantoztour@gmail.com; confirm which one is live. */
  email: "logantoz@gmail.com",
  address: "CityPark Estate, Parklands, Nairobi",
  /** Client confirmed walk-ins are welcome but gave no hours yet; these are placeholders. */
  hours: "Visitors welcome at the office in working hours. WhatsApp is answered every day.",
  mapsEmbed: "https://www.google.com/maps?q=City+Park+Estate,+Parklands,+Nairobi&z=14&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=City+Park+Estate+Parklands+Nairobi",
  founded: 2025,
  foundedLabel: "January 2025",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
