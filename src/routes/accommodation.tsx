import { For } from "solid-js";
import Audience from "~/components/Audience";
import CtaBand from "~/components/CtaBand";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import ServiceHero from "~/components/ServiceHero";
import StayCard from "~/components/StayCard";
import { stays } from "~/data/stays";

const audience = [
  { title: "Travellers passing through Nairobi", detail: "A night before an early safari departure, or a bed after a late flight, booked together with your transfer." },
  { title: "Wedding and conference guests", detail: "We hold a block of rooms in your name, manage the rooming list and run the shuttles to the venue." },
  { title: "Teams on retreat", detail: "Rooms, meeting space and transport arranged together and invoiced as one." },
];

export default function Accommodation() {
  return (
    <>
      <Seo title="Partner hotels" description="The Nairobi hotels Talmar Express books for travellers and event guests, including Laziz Suites, which it manages. Booked as part of a trip or event." />
      <ServiceHero
        title="Partner hotels"
        intro="These are the hotels we book for travellers passing through Nairobi and for event guests. We reserve them as part of your trip or event and arrange the transfers to match. Lodges and camps inside the parks are chosen with you when we plan a safari."
        image="/images/brand/toast.jpg"
        imageAlt="Champagne glasses and a decorated table"
        chips={["Five Nairobi partners", "Booked with a trip or event", "Group blocks", "Transfers included"]}
        primary={{ href: "/quote?service=accommodation", label: "Add a hotel to my trip" }}
      />

      <section class="bg-white py-16 lg:py-20">
        <div class="wrap">
          <SectionHeading title="Hotels we work with" intro="Named with their permission. Rates are a mix of contracted and public rates, so the quote depends on dates and room type." />
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <For each={stays}>{s => <StayCard stay={s} />}</For>
          </div>
          <p class="mt-6 text-slate">Laziz Suites in Parklands is managed by Talmar Express and is a few minutes from our office.</p>
        </div>
      </section>

      <Audience title="Who it's for" items={audience} dark />

      <CtaBand title="Need rooms for a trip or event?" body="Send the dates, the number of guests and the area. We reply with options and prices." service="accommodation" />
    </>
  );
}
