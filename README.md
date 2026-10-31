# Talmar Express website

Draft website for Talmar Express (formerly presented as Logantoz Tours), Nairobi: safaris and tours, transport fleet and airport transfers, partner accommodation, and events (catering, sound and DJ, event transport, guest stays). Built as a proposal for the client to react to; everything marked "Sample" is placeholder content.

Screenshots of the draft are in `docs/screenshots/`.

## Run it

Needs Node 22+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000 (or the next free port)
pnpm build      # production build into .output/
pnpm start      # serve the production build
```

Stack: SolidStart 2 (server-rendered), Tailwind CSS 4, Nitro for deployment. No database, no environment variables.

## Where things live

| What | Where |
| --- | --- |
| Tours and packages | `src/data/tours.ts` |
| Destinations (part of Transport and transfers) | `src/data/destinations.ts` |
| Vehicles and transfer rates | `src/data/fleet.ts` |
| Partner hotels and lodges | `src/data/stays.ts` |
| Event services, event types, gallery | `src/data/events.ts` |
| Reviews | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Mission, vision, values, story, team, facts | `src/data/company.ts` |
| The four services, taglines and bullets | `src/data/services.ts` |
| Phone, WhatsApp, email, address, socials | `src/data/site.ts` |
| Colours, fonts, buttons, brand shapes | `src/app.css` |
| Pages | `src/routes/` (file-based routing) |
| Reusable pieces | `src/components/` |
| Photos | `public/images/` (credits in `public/images/CREDITS.md`) |
| Legal pages | `src/routes/terms.tsx`, `cancellation.tsx`, `privacy.tsx` |

When the client sends real content, edit the data files. The pages read from them; no component changes needed to swap a tour, a vehicle or a price.

## Services structure

Destinations sit under Transport and transfers, not as a top-level section: the transport page has a "Where we drive" section, `/destinations` is framed as road trips from Nairobi with a driver, and each destination page leads with "Book a drive to X". Safari trips that visit a destination are still listed on its page.

Modelled on hydeinnovations.com: a "Services" menu in the header where each entry carries a one-line tagline, a `/services` overview page with one full-width card per service (title, two lines, check-mark bullets, an "Explore" button), and each service page opening with a centred title, a large image and a row of chips, followed by a numbered "How it works" row and a "Who it's for" block. The four services and their taglines live in `src/data/services.ts`; the header, footer, home cards and overview page all read from it.

## Home page

Also modelled on hydeinnovations.com's current home: a dark hero with a left-aligned headline and a collage of three labelled photo cards (Events, Safaris, Transport), a partners strip naming the five hotels, a "What we do" bento of dark service cards ending in a "Not sure where to start?" card, four destination tiles, a dark photo band with three facts, and a full-bleed yellow call to action. The service cards read from `src/data/services.ts`.

## Design decisions

- **Brand from the company profile.** Yellow `#ffde59`, black, the deck's cool off-white, and Poppins for body text. Headlines use Archivo in its wide, heavy cut for a road-sign feel that suits "Plan. Move. Celebrate."
- **Two shapes from the deck.** The diagonal yellow band (hero quote bar, call-to-action band) and the rounded diamond photo frame (inner page headers, About). Used sparingly so they stay recognisable.
- **Yellow marks actions and prices.** Buttons, price tags on tour cards, the quote bar. Large areas stay dark or off-white.
- **Photography first, short copy.** Cards and tiles are photo-led. Copy is plain and specific.
- **Mobile first.** Most customers will arrive from WhatsApp or Instagram on a phone.

## Booking flow

Version one takes quote requests, not payments. The quote form composes a WhatsApp message to the business number (with an email fallback) and the site says clearly that no payment is taken online. This matches how the client quotes today and avoids needing a payment policy before one exists.

To add later, in order of effort:

1. **Email delivery of requests**: a SolidStart server action in `src/components/QuoteForm.tsx` sending through Resend or SMTP. Needs the client's preferred inbox.
2. **Online payment**: M-Pesa (Daraja or Pesapal), Flutterwave or card. Needs a confirmed cancellation policy and a deposit rule.

## What the client has confirmed (questionnaire, 31 October 2026)

Logan Ontita, head of operations, answered the website questionnaire. The site now reflects his answers:

- Transport and airport transfers are the core business and lead the site. JKIA, Wilson and the Nairobi SGR terminus; transfers by arrangement including night arrivals; no self-drive; day rates include driver, fuel, driver's meals and accommodation, parking, tolls and park entry. He owns part of the fleet and hires the rest; 15+ vehicles on one day.
- Safaris: Kenya only, private trips on the customer's dates, KES, park fees included, own driver-guides. Sold through partner operators.
- Hotels: five named partners in Nairobi (Laziz Suites, Radisson Westlands, Trademark, Gem Forest, Safari Park), booked only as part of a trip or event. Talmar Express manages Laziz Suites.
- Events: catering, event transport and guest accommodation in-house; sound and DJ, décor and MC through partners. All event types; Nairobi, Naivasha, Nakuru, Nanyuki; largest event 1,000 guests.
- Booking: quote requests only. M-Pesa Buy Goods till, 50% deposit, balance on the day. One contact point: +254 722 894 647 and logantoz@gmail.com (the profile PDF used logantoztour@gmail.com; confirm).
- About: mission, vision, values and differentiators approved as drafted; founding story and team names supplied; started trading January 2025; KATA member; commercial vehicle insurance with passenger cover.
- Policies: use the drafts once reviewed. Office address shown, walk-ins welcome.

## Still placeholder

| Section | What is placeholder | What we need |
| --- | --- | --- |
| Prices | None shown anywhere; everything says "quoted per trip" | Any starting prices he is willing to publish |
| Trips | 8 sample itineraries, marked "Sample" | His real packages, or confirmation the samples are fine |
| Vehicles | Vehicle types and photos, marked "Sample" | Actual fleet list with seats and photos |
| Photos | Wikimedia Commons placeholders plus low-resolution photos from the profile PDF | Originals and team photos. The emblem was supplied on 31 October 2026 (`public/images/brand/talmar-logo-original.jpg`); the header mark is cut from it |
| Office hours | Generic wording | Actual hours |
| Credentials | TRA licence and business registration numbers not shown | The numbers, if he wants them on the site |
| Social media | Removed until links are supplied | Platform links for the handles he gave |
| Reviews | Removed | Review text and permission |

## Open questions for the client

1. "Talmar Express Delicacy" appears in his answers and social handles as an in-house service. What is it, and should it be on the site?
2. "Ambulance transfers" is in his top five sellers. Advertise it?
3. Which inbox is live: logantoz@gmail.com or logantoztour@gmail.com?
4. Office hours.
5. The sample itineraries and vehicle list: keep as shown, or replace with his own?

## Before launch

- Replace the sample itineraries and vehicle list, then remove `DraftBanner` and the `Sample` tags.
- Swap placeholder photos for originals and delete `public/images/CREDITS.md` entries that no longer apply.
- Confirm phone, WhatsApp and email in `src/data/site.ts`.
- Set the domain, add a favicon from the real logo, and check the Google Maps pin.
- Deploy (see below).

## Deploying to Netlify

The site is prerendered to plain HTML at build time (the `prerender` option in `vite.config.ts`), so Netlify serves static files only from `.output/public`: no functions, nothing to keep running. `netlify.toml` holds the build command, publish folder and cache headers.

First time, log in (opens a browser). The first deploy then asks whether to create a new site or link an existing one, and remembers the answer in `.netlify/` (ignored by git):

```bash
pnpm --package=netlify-cli dlx netlify login
```

Every time you want to update the client's link:

```bash
pnpm netlify:deploy     # builds and publishes to the live URL
pnpm netlify:preview    # builds and publishes to a throwaway preview URL instead
```

If the project is pushed to GitHub, connect the repository in the Netlify dashboard instead and every push deploys automatically using `netlify.toml`.
