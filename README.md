# Logantoz Tours website

Draft website for Logantoz Tours, Nairobi: safaris and tours, transport fleet and airport transfers, partner accommodation, and events (catering, sound and DJ, event transport, guest stays). Built as a proposal for the client to react to; everything marked "Sample" is placeholder content.

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
| Destinations | `src/data/destinations.ts` |
| Vehicles and transfer rates | `src/data/fleet.ts` |
| Partner hotels and lodges | `src/data/stays.ts` |
| Event services, event types, gallery | `src/data/events.ts` |
| Reviews | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Mission, vision, values, milestones, stats | `src/data/company.ts` |
| Phone, WhatsApp, email, address, socials | `src/data/site.ts` |
| Colours, fonts, buttons, brand shapes | `src/app.css` |
| Pages | `src/routes/` (file-based routing) |
| Reusable pieces | `src/components/` |
| Photos | `public/images/` (credits in `public/images/CREDITS.md`) |
| Legal pages | `src/routes/terms.tsx`, `cancellation.tsx`, `privacy.tsx` |

When the client sends real content, edit the data files. The pages read from them; no component changes needed to swap a tour, a vehicle or a price.

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

## Placeholder inventory

Everything below is sample content until the client confirms it. Cards show a dashed "Sample" tag, and a black bar at the top of every page says the site is a draft. Both are removed before launch (`DraftBanner` in `src/app.tsx`, `SampleTag` in the cards).

| Section | What is placeholder | What we need |
| --- | --- | --- |
| Tours | All 10 trips, itineraries, inclusions, prices | Real package list with prices and dates |
| Destinations | 14 places, descriptions, best-time notes | Confirm the list; add or remove |
| Fleet | 5 vehicle types and day rates; 6 transfer rates | Actual vehicles, seats, rates, photos |
| Accommodation | 5 partner properties and rates | Real partner names, rates, whether bookable alone |
| Events | Service descriptions are drafted from the profile | Confirm services, menus, sound packages, pricing model |
| Reviews | 3 written samples | Real reviews with permission, Google rating link |
| About | Mission, vision, values, milestones are proposed wording | Approve or edit; team names and photos; licence numbers |
| Contact | Social links point at the platforms' home pages | Actual handles; office hours; map pin |
| Legal | Terms, cancellation, privacy are drafts | Review and approve, or supply existing documents |
| Photos | Wikimedia Commons placeholders plus low-res photos from the profile PDF | Original photos, logo as SVG or high-res PNG |

## Questions for the client

1. Which tours do you actually sell today, at what prices, and are prices resident or non-resident?
2. Do you own the fleet or hire in? Which vehicles, and what are the day rates and transfer prices?
3. Which hotels and lodges do you work with, and can customers book them without a tour?
4. Catering, sound and DJ, event transport, guest accommodation: keep all four on the site? Any pricing you want shown?
5. Quote requests only (current build), or online payment? If payment, which methods and what deposit and cancellation rules?
6. Real customer reviews we can quote, with names or initials.
7. Logo file, social media handles, domain name, and the inbox that should receive enquiries.
8. "Tours across the continent": should Tanzania and Uganda stay, and is anywhere else planned?

## Before launch

- Replace all sample data and remove `DraftBanner` and the `Sample` tags.
- Swap placeholder photos for originals and delete `public/images/CREDITS.md` entries that no longer apply.
- Confirm phone, WhatsApp and email in `src/data/site.ts`.
- Set the domain, add a favicon from the real logo, and check the Google Maps pin.
- Deploy (see below).

## Deploying to Netlify

The site is prerendered to plain HTML at build time (`preset: "static"` in `vite.config.ts`), so Netlify serves static files only: no functions, nothing to keep running. `netlify.toml` holds the build command, publish folder and cache headers.

First time, log in (opens a browser):

```bash
pnpm --package=netlify-cli dlx netlify login
pnpm --package=netlify-cli dlx netlify init      # create the site, or link an existing one
```

Then, every time you want to update the client's link:

```bash
pnpm netlify:deploy     # builds and publishes to the live URL
pnpm netlify:preview    # builds and publishes to a throwaway preview URL instead
```

If the project is pushed to GitHub, connect the repository in the Netlify dashboard instead and every push deploys automatically using `netlify.toml`.
