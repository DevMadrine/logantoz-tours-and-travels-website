import { createSignal, For } from "solid-js";
import Audience from "~/components/Audience";
import CtaBand from "~/components/CtaBand";
import Seo from "~/components/Seo";
import ServiceHero from "~/components/ServiceHero";
import Steps from "~/components/Steps";
import TourCard from "~/components/TourCard";
import { categoryLabels, tours, type TourCategory } from "~/data/tours";

const cats = Object.keys(categoryLabels) as TourCategory[];

const steps = [
  { title: "Tell us about the trip", detail: "Where you want to go, when, how many of you there are and what you would like to see. You can also pick one of the trips below as a starting point." },
  { title: "We plan it and send a quote", detail: "We work out the route, the lodges, the vehicle and the driver-guide, and send you one written quote with park fees included." },
  { title: "Confirm with a deposit", detail: "A 50% deposit by M-Pesa secures the dates and the rooms. You pay the balance on the day you leave." },
  { title: "Off you go", detail: "Your driver-guide picks you up in Nairobi and takes care of everything from there." },
];

const audience = [
  { title: "Visitors to Kenya", detail: "Whether it is your first safari or your fifth, we plan it around your flights and include the airport transfer." },
  { title: "Families and groups of friends", detail: "Weekend trips to the lakes and the parks, in one vehicle or a few." },
  { title: "Companies", detail: "Team retreats and incentive trips, and we can add hotel rooms and shuttles if you need them." },
];

export default function Tours() {
  const [cat, setCat] = createSignal<TourCategory | "all">("all");
  const list = () => (cat() === "all" ? tours : tours.filter(t => t.category === cat()));
  return (
    <>
      <Seo title="Safaris and private trips in Kenya" description="Private safaris, city tours, beach breaks and treks anywhere in Kenya, on your dates, with our own driver-guides. Park fees included, quoted per group." />
      <ServiceHero
        title="Safaris and trips"
        intro="We organise private trips on your own dates to any part of Kenya, with our own driver-guides. Each trip is quoted for your group in Kenyan shillings, and park fees are always included."
        image="/images/destinations/maasai-mara-drive.jpg"
        imageAlt="Safari vehicles beside a pride of lions"
        chips={["Private departures", "Park fees included", "Own driver-guides", "Kenya only, for now", "Quoted in KES"]}
        primary={{ href: "/quote?service=tour", label: "Plan my trip" }}
        secondary={{ href: "/destinations", label: "See destinations" }}
      />

      <Steps title="How a trip comes together" steps={steps} />

      <section class="bg-paper py-16 lg:py-20">
        <div class="wrap">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="display-md text-3xl sm:text-4xl">Trips people ask for most</h2>
            <p class="mt-3 text-lg text-slate">Use these as starting points. Any of them can be made shorter or longer, or combined with another.</p>
          </div>
          <div class="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter trips by type">
            <button type="button" class="tab" aria-selected={cat() === "all"} onClick={() => setCat("all")}>
              All trips
            </button>
            <For each={cats}>
              {c => (
                <button type="button" class="tab" aria-selected={cat() === c} onClick={() => setCat(c)}>
                  {categoryLabels[c]}
                </button>
              )}
            </For>
          </div>
          <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <For each={list()}>{t => <TourCard tour={t} />}</For>
          </div>
        </div>
      </section>

      <Audience title="Who it's for" items={audience} dark />

      <CtaBand title="Somewhere else in Kenya?" body="Most of what we run is built to order. Tell us where, when and who, and we plan the route." service="tour" />
    </>
  );
}
