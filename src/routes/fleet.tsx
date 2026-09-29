import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import VehicleCard from "~/components/VehicleCard";
import { transfers, vehicles } from "~/data/fleet";
import { kes } from "~/data/site";

export default function Fleet() {
  return (
    <>
      <Seo title="Fleet and transfers" description="Safari Land Cruisers, executive sedans, Prados, shuttles and buses with professional drivers. Daily hire rates and airport transfers from Nairobi." />
      <PageHero
        title="Fleet and transfers"
        intro="Where Logantoz began. Every vehicle comes with a professional driver or driver-guide, is serviced by us and is cleaned before every job. Hire by the day, book a transfer, or put a convoy together for an event."
        image="/images/brand/executive-fleet.jpg"
        imageAlt="A line of executive sedans"
      >
        <A href="/quote?service=transport" class="btn btn-sun">
          Book a vehicle
        </A>
      </PageHero>

      <section class="wrap py-14 lg:py-20">
        <SectionHeading title="Vehicles" intro="Day rates include the driver. Fuel, park fees and out-of-town allowances are quoted per trip so you see the full cost before you confirm." />
        <div class="grid gap-5">
          <For each={vehicles}>{v => <VehicleCard vehicle={v} />}</For>
        </div>
      </section>

      <section class="bg-white py-14 lg:py-20">
        <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="min-w-0 lg:col-span-5">
            <h2 class="display-md text-3xl md:text-4xl">Airport transfers and private transport</h2>
            <p class="mt-4 text-lg text-slate">
              Meet and greet at JKIA or Wilson, 24 hours a day. We track your flight, so a delay is our problem, not yours. Private point-to-point transport across Kenya is quoted by distance.
            </p>
            <A href="/quote?service=transport&item=Airport transfer" class="btn btn-ink mt-6">
              Book a transfer
            </A>
          </div>
          <div class="min-w-0 lg:col-span-7">
            <div class="overflow-x-auto">
            <table class="w-full min-w-[32rem] border-collapse text-left text-[15px]">
              <thead>
                <tr class="border-b-2 border-stone">
                  <th class="py-3 pr-3 font-semibold">Route</th>
                  <th class="py-3 pr-3 font-semibold">Vehicle</th>
                  <th class="py-3 text-right font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <For each={transfers}>
                  {t => (
                    <tr class="border-b border-stone">
                      <td class="py-3 pr-3">{t.route}</td>
                      <td class="py-3 pr-3 text-slate">{t.vehicle}</td>
                      <td class="py-3 text-right font-semibold whitespace-nowrap">{kes(t.price)}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
            </div>
            <p class="mt-3 text-sm text-slate">Sample rates, one way, including waiting time of up to one hour at the airport.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Need a vehicle?" body="Tell us the date, the route and how many people. We confirm the vehicle and the driver within the day." service="transport" />
    </>
  );
}
