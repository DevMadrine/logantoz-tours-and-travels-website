import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import { IconCheck } from "~/components/Icons";
import { eventGallery, eventServices, eventTypes } from "~/data/events";

const steps = [
  { title: "Tell us the event", detail: "Date, venue, guest count and what you need covered. A WhatsApp message is enough to start." },
  { title: "We quote and plan", detail: "One written quote for everything, a menu tasting if there's catering, and a run-sheet for the day." },
  { title: "We run it", detail: "Cars on time, food hot, sound checked before the first guest arrives. You enjoy the event." },
];

export default function Events() {
  return (
    <>
      <Seo title="Events: catering, sound and DJ, transport" description="Logantoz runs weddings, corporate events and celebrations in Kenya: catering, professional sound and DJs, guest transport and accommodation, under one quote." />
      <PageHero
        title="Events, start to finish"
        intro="Catering, sound and DJ, guest transport and hotel blocks, quoted as one event and run by one team. Weddings, corporate days, ruracios and end-of-year parties, in Nairobi and beyond."
        image="/images/brand/dj.jpg"
        imageAlt="A DJ performing at an event"
      >
        <A href="/quote?service=event" class="btn btn-sun">
          Plan an event
        </A>
      </PageHero>

      <section class="wrap py-14 lg:py-20">
        <SectionHeading title="What we bring" intro="Take one service or all four. Most weddings take all four." />
        <div class="grid gap-14">
          <For each={eventServices}>
            {(s, i) => (
              <article class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div class={`overflow-hidden rounded-2xl shadow-soft lg:col-span-6 ${i() % 2 ? "lg:order-2" : ""}`}>
                  <img src={s.image} alt={s.name} class="aspect-4/3 w-full object-cover" loading="lazy" decoding="async" width="800" height="600" />
                </div>
                <div class="lg:col-span-6">
                  <h3 class="display-md text-3xl md:text-4xl">{s.name}</h3>
                  <p class="mt-4 text-lg text-slate">{s.blurb}</p>
                  <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                    <For each={s.includes}>
                      {inc => (
                        <li class="flex items-start gap-2 text-[15px]">
                          <IconCheck class="mt-0.5 shrink-0 text-black" width={18} height={18} /> {inc}
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
      </section>

      <section class="bg-ink py-14 text-white lg:py-20">
        <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <SectionHeading dark title="Events we handle" />
            <ul class="flex flex-wrap gap-2">
              <For each={eventTypes}>{t => <li class="chip">{t}</li>}</For>
            </ul>
          </div>
          <div class="lg:col-span-7">
            <SectionHeading dark title="How it works" />
            <ol class="grid gap-6 sm:grid-cols-3">
              <For each={steps}>
                {(s, i) => (
                  <li>
                    <span class="display text-5xl text-sun">{i() + 1}</span>
                    <h3 class="mt-2 font-semibold">{s.title}</h3>
                    <p class="mt-1 text-sm text-stone">{s.detail}</p>
                  </li>
                )}
              </For>
            </ol>
          </div>
        </div>
      </section>

      <section class="wrap py-14 lg:py-20">
        <SectionHeading title="From recent events" intro="Photos from Logantoz's own events. Higher resolution originals will replace these." />
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
