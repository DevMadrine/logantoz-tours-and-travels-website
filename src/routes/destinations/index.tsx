import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import DestinationCard from "~/components/DestinationCard";
import PageHero from "~/components/PageHero";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import { destinations } from "~/data/destinations";

const countries = ["Kenya", "Tanzania", "Uganda"] as const;

export default function Destinations() {
  return (
    <>
      <Seo title="Destinations" description="Where Logantoz Tours operates: the Maasai Mara, Amboseli, the Rift Valley lakes, the Kenyan coast, Mount Kenya, and across the border into Tanzania and Uganda." />
      <PageHero
        title="Where we go"
        intro="Every place below has a trip we run regularly, a driver who knows the road and a lodge we trust. Ask about anywhere not listed."
        image="/images/destinations/serengeti.jpg"
        imageAlt="Acacia tree at sunset on the savanna"
      />
      <For each={countries}>
        {(c, i) => (
          <section class={`py-14 lg:py-20 ${i() % 2 ? "bg-white" : ""}`}>
            <div class="wrap">
              <SectionHeading title={c} />
              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <For each={destinations.filter(d => d.country === c)}>{d => <DestinationCard destination={d} />}</For>
              </div>
            </div>
          </section>
        )}
      </For>
      <CtaBand title="Somewhere else in mind?" body="Rwanda, Ethiopia, South Africa. If it's on the continent we can plan it." service="tour" />
    </>
  );
}
