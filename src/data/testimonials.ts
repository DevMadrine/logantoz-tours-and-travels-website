export type Testimonial = { name: string; trip: string; quote: string; rating: number; sample: true };

/** Sample reviews. Replace with real customer words and permission before launch. */
export const testimonials: Testimonial[] = [
  {
    name: "Wanjiru M.",
    trip: "Corporate retreat, Naivasha",
    quote: "Two buses, forty staff, one WhatsApp group. They handled the whole thing and the drivers were early both days.",
    rating: 5,
    sample: true,
  },
  {
    name: "Brian and Achieng",
    trip: "Wedding transport and sound",
    quote: "The bridal car was spotless, the shuttles ran to the minute and the DJ read the room perfectly. Our guests are still talking about it.",
    rating: 5,
    sample: true,
  },
  {
    name: "Daniel O.",
    trip: "Maasai Mara, three days",
    quote: "Our guide found a leopard on the first afternoon. The camp was comfortable and the price was exactly what was quoted.",
    rating: 5,
    sample: true,
  },
];
