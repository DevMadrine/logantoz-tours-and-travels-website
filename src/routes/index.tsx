import { A } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import CtaBand from "~/components/CtaBand";
import DestinationCard from "~/components/DestinationCard";
import SampleTag from "~/components/SampleTag";
import Seo from "~/components/Seo";
import { company } from "~/data/company";
import { destinations } from "~/data/destinations";
import { eventServices } from "~/data/events";
import { vehicles } from "~/data/fleet";
import { kes, site } from "~/data/site";
import { stays } from "~/data/stays";
import { getTour } from "~/data/tours";

const services = [
  { href: "/tours", title: "Safaris and tours", body: "Set departures and private trips, from a day in Nairobi National Park to a week across the Serengeti and Zanzibar.", link: "Explore tours" },
  { href: "/fleet", title: "Transport and fleet", body: "Safari 4x4s, executive sedans and shuttles with professional drivers. Day hire, airport transfers and event convoys.", link: "See the fleet" },
  { href: "/events", title: "Events", body: "Catering, sound and DJ, guest transport and hotel blocks, quoted as one event and run by one team.", link: "Plan an event" },
];

type Start = { key: string; tab: string; title: string; sub: string; body: string; image: string; href: string; link: string; sample: boolean };

function starters(): Start[] {
  const mara = getTour("maasai-mara-classic")!;
  const cruiser = vehicles[0];
  const catering = eventServices[0];
  const camp = stays[0];
  return [
    { key: "tours", tab: "Tours", title: mara.name, sub: `${mara.days} days, ${mara.nights} nights, from ${kes(mara.priceFrom)} per person`, body: mara.tagline + " Four game drives, two nights full board, park fees included.", image: mara.image, href: `/tours/${mara.slug}`, link: "Explore this trip", sample: true },
    { key: "transport", tab: "Transport", title: cruiser.name, sub: `${cruiser.capacity} seats, from ${kes(cruiser.rateDay)} per day with driver-guide`, body: "Pop-up roof for game viewing, high clearance for park roads, and a driver who knows them. Airport transfers start at KES 3,500.", image: cruiser.image, href: "/fleet", link: "See the fleet", sample: true },
    { key: "events", tab: "Events", title: catering.name, sub: "Weddings, corporate days and celebrations", body: catering.blurb, image: catering.image, href: "/events", link: "Plan an event", sample: false },
    { key: "stays", tab: "Stays", title: camp.name, sub: `${camp.location}, from ${kes(camp.rateFrom)} per person per night`, body: "Book a lodge, camp or hotel on its own or as part of a trip. We add the transfers if you want them.", image: camp.image, href: "/accommodation", link: "See places to stay", sample: true },
  ];
}

export default function Home() {
  const items = starters();
  const [active, setActive] = createSignal(items[0].key);
  const current = () => items.find(i => i.key === active()) ?? items[0];
  const homeDestinations = () => destinations.filter(d => ["maasai-mara", "amboseli", "diani", "lake-nakuru"].includes(d.slug));

  return (
    <>
      <Seo title="Safaris, executive transport and events in Kenya" description="Logantoz Tours plans safaris, airport transfers, executive car hire and full event logistics from Nairobi. Plan. Move. Celebrate." />

      {/* Hero */}
      <section class="relative overflow-hidden bg-paper">
        <svg class="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 585 C 200 520, 420 630, 720 585 S 1200 520, 1500 590" fill="none" stroke="#cfcbbd" stroke-width="2" stroke-dasharray="3 12" stroke-linecap="round" />
          <path d="M-40 60 C 300 20, 520 100, 800 55 S 1250 15, 1500 75" fill="none" stroke="#dcd8ca" stroke-width="2" stroke-dasharray="3 12" stroke-linecap="round" />
          <g fill="#ffde59">
            <rect x="153" y="548" width="14" height="14" transform="rotate(45 160 555)" />
            <rect x="1283" y="38" width="12" height="12" transform="rotate(45 1289 44)" />
            <rect x="1333" y="573" width="14" height="14" transform="rotate(45 1340 580)" />
          </g>
        </svg>
        <div class="wrap relative py-20 text-center lg:py-28">
          <h1 class="display mx-auto max-w-4xl text-[2.6rem] sm:text-6xl lg:text-7xl">
            <span class="block">Plan the trip.</span>
            <span class="block">Move the guests.</span>
            <span class="block text-sun">Celebrate.</span>
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-slate sm:text-xl">
            Logantoz Tours runs safaris, executive transport and full event logistics from Nairobi. One quote, one team, from the first mile to the last toast.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <A href="/quote" class="btn btn-sun">
              Get a quote
            </A>
            <A href="/tours" class="btn btn-white">
              See the tours
            </A>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section class="relative overflow-hidden bg-ink text-white">
        <img src="/images/brand/safari-track.jpg" alt="" class="absolute inset-0 h-full w-full object-cover object-[60%_45%]" width="1248" height="1415" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-black/70" />
        <div class="wrap relative py-20 text-center lg:py-24">
          <h2 class="display-md mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl">Trusted on the road since {site.founded}</h2>
          <p class="mx-auto mt-4 max-w-xl text-lg text-white/80">Families, companies and wedding parties travel with Logantoz, and come back for the next one.</p>
          <dl class="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            <For each={company.stats}>
              {s => (
                <div>
                  <dd class="display-md text-3xl text-sun sm:text-4xl">{s.value}</dd>
                  <dt class="mt-1 text-sm text-white/75">{s.label}</dt>
                </div>
              )}
            </For>
          </dl>
        </div>
      </section>

      {/* What we do */}
      <section class="bg-paper py-20 lg:py-24">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl lg:text-5xl">What we do</h2>
            <p class="mt-4 text-lg text-slate">Three services, one team. Most clients start with one and come back for the others.</p>
          </div>
          <div class="mt-12 grid gap-5 md:grid-cols-3">
            <For each={services}>
              {s => (
                <A href={s.href} class="card group flex flex-col p-7 lg:p-8">
                  <span class="h-3.5 w-3.5 rotate-45 rounded-[3px] bg-sun" aria-hidden="true" />
                  <h3 class="mt-5 text-xl font-bold">{s.title}</h3>
                  <p class="mt-3 flex-1 text-[15px] leading-relaxed text-slate">{s.body}</p>
                  <span class="mt-6 font-semibold underline decoration-sun decoration-[3px] underline-offset-[6px] group-hover:decoration-black">{s.link}</span>
                </A>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section class="bg-white py-20 lg:py-24">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl lg:text-5xl">Where we go</h2>
            <p class="mt-4 text-lg text-slate">Kenya first, then Tanzania and Uganda. Ask about anywhere else on the continent.</p>
          </div>
          <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <For each={homeDestinations()}>{d => <DestinationCard destination={d} tall />}</For>
          </div>
          <div class="mt-10 text-center">
            <A href="/destinations" class="btn btn-white">
              All destinations
            </A>
          </div>
        </div>
      </section>

      {/* Where to start */}
      <section class="bg-paper py-20 lg:py-24">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl lg:text-5xl">Where to start</h2>
            <p class="mt-4 text-lg text-slate">The trips and services people ask for most.</p>
          </div>
          <div class="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Featured services">
            <For each={items}>
              {i => (
                <button type="button" role="tab" class="tab" aria-selected={active() === i.key} onClick={() => setActive(i.key)}>
                  {i.tab}
                </button>
              )}
            </For>
          </div>
          <div class="card mx-auto mt-8 grid max-w-5xl overflow-hidden lg:grid-cols-2" role="tabpanel">
            <div class="relative aspect-4/3 bg-stone lg:aspect-auto">
              <img src={current().image} alt={current().title} class="absolute inset-0 h-full w-full object-cover" width="800" height="600" loading="lazy" decoding="async" />
              <Show when={current().sample}>
                <SampleTag class="absolute top-3 left-3" />
              </Show>
            </div>
            <div class="flex flex-col justify-center p-7 lg:p-10">
              <h3 class="text-2xl font-bold">{current().title}</h3>
              <p class="mt-1 text-sm text-slate">{current().sub}</p>
              <p class="mt-5 leading-relaxed text-slate">{current().body}</p>
              <A href={current().href} class="mt-6 font-semibold underline decoration-sun decoration-[3px] underline-offset-[6px] hover:decoration-black">
                {current().link}
              </A>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
