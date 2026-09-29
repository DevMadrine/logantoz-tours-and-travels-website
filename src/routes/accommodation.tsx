import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import StayCard from "~/components/StayCard";
import { stays } from "~/data/stays";

export default function Accommodation() {
  return (
    <>
      <Seo title="Accommodation" description="Partner lodges, tented camps, beach resorts and city hotels across Kenya. Book with a tour or on their own, with transfers if you want them." />
      <PageHero
        title="Places to stay"
        intro="Lodges, camps and hotels we have stayed in ourselves and send guests to every month. Book them as part of a trip or on their own, and we add transfers if you want them."
        image="/images/stays/tented-camp.jpg"
        imageAlt="Breakfast table on the deck of a tented camp"
      >
        <A href="/quote?service=accommodation" class="btn btn-sun">
          Book a stay
        </A>
      </PageHero>

      <section class="wrap py-14 lg:py-20">
        <SectionHeading title="Partner hotels and lodges" intro="Names, photos and rates below are placeholders until Logantoz confirms its partner list." />
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <For each={stays}>{s => <StayCard stay={s} />}</For>
        </div>
      </section>

      <section class="bg-white py-14 lg:py-20">
        <div class="wrap grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 class="text-xl font-bold">Book stays on their own</h2>
            <p class="mt-2 text-slate">You don't need a tour to book through us. We get group and resident rates most guests can't get direct.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold">Event and group blocks</h2>
            <p class="mt-2 text-slate">Wedding guests, conference delegates, teams on retreat. We hold rooms, manage the rooming list and run the transfers.</p>
          </div>
          <div>
            <h2 class="text-xl font-bold">Upgrades and alternatives</h2>
            <p class="mt-2 text-slate">Every tour has a mid-range stay built in. Ask for luxury, budget or family options and we re-quote.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Need rooms?" body="Send the dates, the number of guests and the area. We reply with two or three options and prices." service="accommodation" />
    </>
  );
}
