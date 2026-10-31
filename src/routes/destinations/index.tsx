import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import DestinationCard from "~/components/DestinationCard";
import PageHero from "~/components/PageHero";
import Seo from "~/components/Seo";
import { destinations } from "~/data/destinations";

export default function Destinations() {
  return (
    <>
      <Seo title="Destinations we drive to" description="Road trips from Nairobi with a Talmar Express driver: the Maasai Mara, Amboseli, the Rift Valley lakes, Tsavo, Samburu, Mount Kenya, Diani and Lamu. Anywhere in Kenya, quoted by distance." />
      <PageHero
        title="Where we drive"
        intro="Part of our transport and transfers service. Every place below is a road trip from Nairobi with a Talmar Express driver, quoted by distance with the driver's costs included. If it is in Kenya and it is not listed, ask; we do not drive outside the country yet."
        image="/images/destinations/maasai-mara.jpg"
        imageAlt="Savanna with a lone acacia tree"
      >
        <A href="/fleet" class="btn btn-sun">
          Transport and transfers
        </A>
        <A href="/quote?service=transport" class="btn btn-line">
          Get a quote
        </A>
      </PageHero>
      <section class="wrap py-14 lg:py-20">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <For each={destinations}>{d => <DestinationCard destination={d} />}</For>
        </div>
      </section>
      <CtaBand title="Somewhere else in Kenya?" body="Tell us the place and the dates. We quote the drive, pick the vehicle and sort the stays." service="transport" />
    </>
  );
}
