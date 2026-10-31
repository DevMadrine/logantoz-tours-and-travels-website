import { A } from "@solidjs/router";
import { For } from "solid-js";
import DestinationCard from "~/components/DestinationCard";
import Seo from "~/components/Seo";
import { company } from "~/data/company";
import { destinations } from "~/data/destinations";
import { getService, services } from "~/data/services";
import { site, waLink } from "~/data/site";
import { stays } from "~/data/stays";

/** Hero collage: three labelled photo cards, after the reference site's product collage. */
const collage = [
  { label: "Safaris", image: "/images/destinations/maasai-mara-drive.jpg", alt: "Safari vehicles beside a pride of lions", class: "top-0 left-0 w-[54%] rotate-2" },
  { label: "Events", image: "/images/brand/dj.jpg", alt: "A DJ performing at an event", class: "top-[7%] right-0 w-[50%] -rotate-2" },
  { label: "Hotels", image: "/images/brand/toast.jpg", alt: "Champagne glasses and a decorated table", class: "bottom-[6%] left-[5%] w-[46%] -rotate-1" },
  { label: "Transport", image: "/images/brand/executive-fleet.jpg", alt: "A line of executive sedans", class: "bottom-0 right-[3%] w-[54%] rotate-1" },
];

function Card(props: { slug: string; class?: string; wide?: boolean }) {
  const s = getService(props.slug)!;
  return (
    <A href={s.href} class={`group relative flex flex-col overflow-hidden rounded-3xl bg-ink text-white ${props.class ?? ""}`}>
      <div class={`flex flex-1 flex-col p-7 lg:p-9 ${props.wide ? "lg:max-w-[56%]" : ""}`}>
        <h3 class="text-2xl font-bold">{s.name}</h3>
        <p class="mt-3 flex-1 text-[15px] leading-relaxed text-white/75">{s.tagline}.</p>
        <span class="mt-6 text-sm font-semibold text-sun underline-offset-4 group-hover:underline">{s.cta}</span>
      </div>
      <img
        src={s.image}
        alt=""
        class={`h-44 w-full object-cover ${props.wide ? "lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[42%]" : "lg:h-48"}`}
        loading="lazy"
        decoding="async"
        width="800"
        height="500"
      />
    </A>
  );
}

export default function Home() {
  const homeDestinations = () => destinations.filter(d => ["maasai-mara", "amboseli", "lake-nakuru", "diani"].includes(d.slug));
  return (
    <>
      <Seo title="Travel and events in Kenya, from one team" description="Talmar Express handles transport and airport transfers, private safaris, partner hotels and events across Kenya from Nairobi. One quote, one WhatsApp thread, one team." />

      {/* Hero */}
      <section class="relative overflow-hidden bg-ink text-white">
        <div class="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 70% at 85% 30%, rgba(255,222,89,0.18), transparent 60%), radial-gradient(40% 50% at 10% 90%, rgba(255,222,89,0.08), transparent 60%)" }} aria-hidden="true" />
        <div class="wrap relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div class="lg:col-span-7">
            <h1 class="display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
              <span class="block">We take care of travel</span>
              <span class="block">and events</span>
              <span class="block text-sun">across Kenya.</span>
            </h1>
            <p class="mt-6 max-w-lg text-lg text-white/75">
              Talmar Express is based in Nairobi. We do airport transfers and car hire with a driver, organise private safaris to any part of Kenya, book hotels for you or your guests, and run events, from the catering to the sound system.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <A href="/services" class="btn btn-sun">
                See what we do
              </A>
              <a href={waLink(`Hi ${site.name}, I'd like to ask about your services.`)} class="btn btn-line text-white" target="_blank" rel="noopener">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
          <div class="relative mx-auto aspect-[5/4] w-full max-w-xl lg:col-span-5 lg:max-w-none">
            <For each={collage}>
              {c => (
                <figure class={`absolute overflow-hidden rounded-2xl shadow-float ring-1 ring-white/15 ${c.class}`}>
                  <img src={c.image} alt={c.alt} class="aspect-[16/10] w-full object-cover" width="640" height="400" fetchpriority="high" />
                  <figcaption class="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-black">
                    <span class="h-1.5 w-1.5 rounded-full bg-sun-deep" aria-hidden="true" />
                    {c.label}
                  </figcaption>
                </figure>
              )}
            </For>
          </div>
        </div>
        {/* Partners strip */}
        <div class="relative border-t border-white/10">
          <div class="wrap flex flex-col gap-3 py-6 text-sm text-white/70 lg:flex-row lg:items-center lg:gap-8">
            <p class="shrink-0 font-semibold text-white lg:border-r lg:border-white/15 lg:pr-8">Hotels we work with</p>
            <ul class="flex flex-wrap gap-x-8 gap-y-2">
              <For each={stays}>{s => <li>{s.name}</li>}</For>
            </ul>
          </div>
        </div>
      </section>

      {/* What we do: bento of dark cards */}
      <section class="bg-white py-20 lg:py-24">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl lg:text-5xl">What we do</h2>
            <p class="mt-4 text-lg text-slate">We offer four services, and they work well together. Use just one, or let us organise everything for you.</p>
          </div>
          <div class="mt-12 grid gap-5 lg:grid-cols-2">
            <Card slug="transport" wide class="lg:min-h-[16rem]" />
            <Card slug="safaris" wide class="lg:min-h-[16rem]" />
            <Card slug="events" wide class="lg:min-h-[16rem]" />
            <Card slug="hotels" wide class="lg:min-h-[16rem]" />
            <div class="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-ink p-7 text-white lg:col-span-2 lg:p-9">
              <img src="/images/brand/talmar-mark-480.png" alt="" class="pointer-events-none absolute -right-10 -bottom-12 w-64 opacity-15" aria-hidden="true" />
              <h3 class="text-2xl font-bold">Not sure where to start?</h3>
              <p class="mt-3 max-w-md text-[15px] text-white/75">Just tell us what you need and we will get back to you with the best option.</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <A href="/quote" class="btn btn-sun btn-sm">
                  Get a quote
                </A>
                <A href="/services" class="btn btn-line btn-sm text-white">
                  Browse services
                </A>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section class="bg-paper py-20 lg:py-24">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl lg:text-5xl">Across Kenya</h2>
            <p class="mt-4 text-lg text-slate">From airport transfers and road trips to full safaris, these are the places our clients ask for most.</p>
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

      {/* Photo band with facts */}
      <section class="relative overflow-hidden bg-ink text-white">
        <img src="/images/brand/safari-track.jpg" alt="" class="absolute inset-0 h-full w-full object-cover object-[60%_45%]" width="1248" height="1415" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-black/70" />
        <div class="wrap relative py-24 text-center lg:py-32">
          <h2 class="display-md mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl">One team for the whole journey</h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-white/80">Whether you need a ride from the airport, a week in the parks, rooms for your guests or a wedding for a thousand people, you deal with one person and get one quote. We have been on the road since {site.foundedLabel}.</p>
          <dl class="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-10">
            <For each={company.facts}>
              {f => (
                <div>
                  <dd class="display-md text-3xl text-sun sm:text-4xl">{f.value}</dd>
                  <dt class="mt-1 text-sm text-white/70">{f.label}</dt>
                </div>
              )}
            </For>
          </dl>
        </div>
      </section>

      {/* Full-bleed yellow call to action */}
      <section class="relative overflow-hidden bg-sun">
        <img src="/images/brand/talmar-mark.png" alt="" class="pointer-events-none absolute -right-20 -bottom-24 w-[30rem] opacity-20" aria-hidden="true" />
        <div class="wrap relative py-20 lg:py-24">
          <h2 class="display max-w-2xl text-4xl sm:text-5xl lg:text-6xl">Let's plan your next trip</h2>
          <p class="mt-5 max-w-lg text-lg">Tell us the date, how many people are travelling and what you have in mind, and we will send you a written quote.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <A href="/quote" class="btn btn-ink">
              Get a quote
            </A>
            <a href={`tel:${site.phone}`} class="btn btn-line">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
