import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import Seo from "~/components/Seo";
import TourCard from "~/components/TourCard";
import { categoryLabels, tours, type TourCategory } from "~/data/tours";

const cats = Object.keys(categoryLabels) as TourCategory[];

export default function Tours() {
  const [cat, setCat] = createSignal<TourCategory | "all">("all");
  const list = () => (cat() === "all" ? tours : tours.filter(t => t.category === cat()));
  return (
    <>
      <Seo title="Tours and packages" description="Safaris, beach breaks, treks and trips beyond Kenya. Prices per person at resident rates, every trip available as a private departure." />
      <PageHero
        title="Tours and packages"
        intro="Set departures and private trips, from a day in Nairobi National Park to a week across the Serengeti and Zanzibar. Every price below is a starting point; tell us your group and dates and we quote exactly."
        image="/images/destinations/lions.jpg"
        imageAlt="Three lions resting in the grass"
      >
        <A href="/quote?service=tour" class="btn btn-sun">
          Build a custom trip
        </A>
      </PageHero>

      <section class="wrap py-12 lg:py-16">
        <div class="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter tours by type">
          <button type="button" class="btn btn-sm" classList={{ "btn-ink": cat() === "all", "btn-line": cat() !== "all" }} onClick={() => setCat("all")}>
            All trips
          </button>
          <For each={cats}>
            {c => (
              <button type="button" class="btn btn-sm" classList={{ "btn-ink": cat() === c, "btn-line": cat() !== c }} onClick={() => setCat(c)}>
                {categoryLabels[c]}
              </button>
            )}
          </For>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <For each={list()}>{t => <TourCard tour={t} />}</For>
        </div>
        <p class="mt-8 text-slate">
          Prices are per person sharing at Kenyan resident rates. Non-resident, single and child rates on request.
        </p>
      </section>

      <CtaBand title="Don't see your trip?" body="Most of what we run is custom. Tell us where, when and who, and we build the itinerary." service="tour" />
    </>
  );
}
