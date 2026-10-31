import { A } from "@solidjs/router";
import { For } from "solid-js";
import Audience from "~/components/Audience";
import CtaBand from "~/components/CtaBand";
import { IconCheck } from "~/components/Icons";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import ServiceHero from "~/components/ServiceHero";
import Steps from "~/components/Steps";
import VehicleCard from "~/components/VehicleCard";
import DestinationCard from "~/components/DestinationCard";
import { destinations } from "~/data/destinations";
import { dayRateIncludes, transferPoints, vehicles } from "~/data/fleet";
import { site, waLink } from "~/data/site";

const steps = [
  { title: "Send us the details", detail: "Your flight or train number, the date, where you are staying and how many of you there are. A WhatsApp message is fine." },
  { title: "Get a written quote", detail: "We send one price for the trip, with the driver, fuel, parking and tolls included. You will usually have it within the hour." },
  { title: "Confirm with a deposit", detail: "A 50% deposit by M-Pesa secures the vehicle. You pay the balance on the day." },
  { title: "Meet your driver", detail: "Your driver will be waiting in arrivals with your name, or at your door. We track your flight, so if it is delayed, we adjust." },
];

const audience = [
  { title: "Visitors arriving in Kenya", detail: "A reliable pick-up at JKIA at any hour, and if you like, the same driver for your days in Nairobi or the drive to the parks." },
  { title: "Companies and organisations", detail: "Staff shuttles, transfers for visiting guests, and vehicles for retreats and field trips, invoiced per trip." },
  { title: "Weddings and families", detail: "Decorated bridal cars, shuttles for guests from the church to the venue, and a safe ride home afterwards." },
];

export default function Fleet() {
  return (
    <>
      <Seo title="Transport and airport transfers" description="Airport transfers from JKIA, Wilson and the Nairobi SGR terminus, and vehicle hire with a professional driver anywhere in Kenya. Quoted per trip, driver and fuel included." />
      <ServiceHero
        title="Transport and transfers"
        intro="We do airport pick-ups, car hire around town and long-distance trips, always with a professional driver and in vehicles we check and insure ourselves. Every trip is quoted on its own, with the driver and fuel included."
        image="/images/brand/executive-fleet.jpg"
        imageAlt="A line of executive sedans"
        chips={["JKIA", "Wilson Airport", "Nairobi SGR", "Anywhere in Kenya by road", "Driver included", "No self-drive"]}
        primary={{ href: "/quote?service=transport", label: "Get a quote" }}
        secondary={{ href: waLink(`Hi ${site.name}, I'd like to book a transfer.`), label: `WhatsApp ${site.phoneDisplay}`, external: true }}
      />

      <Steps title="How a transfer works" steps={steps} />

      <section class="bg-paper py-16 lg:py-20">
        <div class="wrap">
          <SectionHeading title="Airport and station transfers" intro="We arrange transfers in advance, including for night arrivals. Your driver will be waiting with your name on a board." />
          <div class="grid gap-5 md:grid-cols-3">
            <For each={transferPoints}>
              {t => (
                <div class="card p-6">
                  <h3 class="text-lg font-bold">{t.place}</h3>
                  <p class="mt-2 text-sm text-slate">{t.detail}</p>
                </div>
              )}
            </For>
          </div>
          <p class="mt-6 text-slate">We also do point-to-point transport anywhere in Kenya, quoted by distance.</p>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="wrap">
          <SectionHeading
            title="Where we drive"
            intro="All of these are road trips from Nairobi with one of our drivers. We quote by distance, with the driver's costs included."
            action={
              <A href="/destinations" class="btn btn-white">
                All destinations
              </A>
            }
          />
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <For each={destinations.filter(d => ["maasai-mara", "amboseli", "lake-naivasha", "diani"].includes(d.slug))}>{d => <DestinationCard destination={d} />}</For>
          </div>
        </div>
      </section>

      <section class="bg-paper py-16 lg:py-20">
        <div class="wrap">
          <SectionHeading title="Vehicles" intro="We own some of our vehicles and hire the rest from partners we trust, so we can put together a convoy of fifteen as easily as a single car. Every vehicle comes with a driver. The types below give you an idea of what we use; the exact list is being confirmed." />
          <div class="grid gap-5">
            <For each={vehicles}>{v => <VehicleCard vehicle={v} />}</For>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 lg:py-20">
        <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <h2 class="display-md text-3xl md:text-4xl">What a day rate includes</h2>
            <p class="mt-4 text-lg text-slate">One price covers the car, the driver and the running costs, so the amount on the quote is the amount you pay.</p>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <For each={dayRateIncludes}>
              {i => (
                <li class="card flex items-start gap-3 p-4">
                  <IconCheck class="mt-0.5 shrink-0" width={20} height={20} /> {i}
                </li>
              )}
            </For>
          </ul>
        </div>
      </section>

      <Audience title="Who it's for" items={audience} dark />

      <CtaBand title="Need a ride?" body="Tell us the date, the route and how many people. You get a written quote back, usually straight away." service="transport" />
    </>
  );
}
