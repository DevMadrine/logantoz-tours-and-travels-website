import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import CtaBand from "~/components/CtaBand";
import { IconCheck } from "~/components/Icons";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import ServiceHero from "~/components/ServiceHero";
import Steps from "~/components/Steps";
import { eventGallery, eventPlaces, eventServices, eventTypes } from "~/data/events";

const steps = [
  { title: "Tell us about the event", detail: "The date, the venue, how many guests you expect and what you need us to cover. A WhatsApp message is enough to get started." },
  { title: "We plan it and send a quote", detail: "You get one written quote for everything, a menu tasting if we are doing the catering, and a programme for the day." },
  { title: "Confirm with a deposit", detail: "A 50% deposit by M-Pesa secures the date, the vehicles and the rooms. You pay the balance on the day." },
  { title: "We run the day", detail: "The cars arrive on time, the food is hot and the sound is checked before the first guest walks in. You get to enjoy your event." },
];

const audience = eventTypes.map(t => ({ title: t, detail: "" }));

export default function Events() {
  return (
    <>
      <Seo title="Events: catering, transport, sound, décor and MC" description="Weddings, corporate events and celebrations in Kenya for up to a thousand guests: catering, guest transport and hotels by our own team, sound, décor and MCs through partners, under one quote." />
      <ServiceHero
        title="Events, start to finish"
        intro="Our own team handles the catering, guest transport and hotel bookings, and we bring in partners we trust for sound, décor and MCs. We have handled events of up to a thousand guests, and we quote each one as a single job."
        image="/images/brand/dj.jpg"
        imageAlt="A DJ performing at an event"
        chips={["Up to 1,000 guests", ...eventPlaces, "One quote"]}
        primary={{ href: "/quote?service=event", label: "Plan an event" }}
      />

      <Steps title="How an event comes together" steps={steps} />

      <section class="bg-paper py-16 lg:py-20">
        <div class="wrap">
          <SectionHeading title="What we offer" intro="You can take one service or all six. Most weddings end up taking all of them." />
          <div class="grid gap-14">
            <For each={eventServices}>
              {(s, i) => (
                <article class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  <div class={`overflow-hidden rounded-2xl shadow-soft lg:col-span-6 ${i() % 2 ? "lg:order-2" : ""}`}>
                    <img src={s.image} alt={s.name} class="aspect-4/3 w-full object-cover" loading="lazy" decoding="async" width="800" height="600" />
                  </div>
                  <div class="lg:col-span-6">
                    <h3 class="display-md text-3xl md:text-4xl">{s.name}</h3>
                    <Show when={s.delivery === "partner"}>
                      <p class="mt-2 text-sm text-slate">Delivered with our partners, coordinated by us</p>
                    </Show>
                    <p class="mt-4 text-lg text-slate">{s.blurb}</p>
                    <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                      <For each={s.includes}>
                        {inc => (
                          <li class="flex items-start gap-2 text-[15px]">
                            <IconCheck class="mt-0.5 shrink-0" width={18} height={18} /> {inc}
                          </li>
                        )}
                      </For>
                    </ul>
                    <A href={`/quote?service=event&item=${encodeURIComponent(s.name)}`} class="btn btn-sun mt-6">
                      {s.cta}
                    </A>
                  </div>
                </article>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="bg-ink py-16 text-white lg:py-20">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl">Events we handle</h2>
            <p class="mt-3 text-lg text-white/75">Run so far in {eventPlaces.join(", ")}. The largest had 1,000 guests.</p>
          </div>
          <ul class="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            <For each={audience}>{a => <li class="chip">{a.title}</li>}</For>
          </ul>
        </div>
      </section>

      <section class="wrap py-16 lg:py-20">
        <SectionHeading title="From recent events" intro="Photos from our own events. Higher resolution originals will replace these." />
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3">
          <For each={eventGallery}>
            {g => (
              <li class="aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img src={g.src} alt={g.alt} class="h-full w-full object-cover" loading="lazy" decoding="async" width="600" height="600" />
              </li>
            )}
          </For>
        </ul>
      </section>

      <CtaBand title="Planning something?" body="Send the date and the guest count. We come back with a quote and a plan." service="event" />
    </>
  );
}
