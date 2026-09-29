import { A, useParams } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { For, Show } from "solid-js";
import CtaBand from "~/components/CtaBand";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import TourCard from "~/components/TourCard";
import { getDestination } from "~/data/destinations";
import { toursForDestination } from "~/data/tours";

export default function DestinationPage() {
  const params = useParams();
  const dest = () => getDestination(params.slug);
  const trips = () => toursForDestination(params.slug);
  return (
    <Show
      when={dest()}
      fallback={
        <section class="wrap py-24">
          <HttpStatusCode code={404} />
          <Seo title="Destination not found" />
          <h1 class="display text-5xl">Not on the map</h1>
          <p class="mt-4 text-lg text-slate">We don't have a page for that place yet.</p>
          <A href="/destinations" class="btn btn-sun mt-6">
            All destinations
          </A>
        </section>
      }
    >
      {d => (
        <>
          <Seo title={d().name} description={d().tagline} />
          <section class="relative flex min-h-[60svh] items-end bg-ink text-white">
            <img src={d().image} alt="" class="absolute inset-0 h-full w-full object-cover" width="1600" height="1000" fetchpriority="high" />
            <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div class="wrap relative pt-24 pb-10">
              <p class="text-sm">
                <A href="/destinations" class="underline underline-offset-4 hover:text-sun">
                  Destinations
                </A>{" "}
                <span aria-hidden="true">/</span> {d().country}
              </p>
              <h1 class="display mt-4 text-5xl sm:text-6xl lg:text-7xl">{d().name}</h1>
              <p class="mt-4 max-w-2xl text-lg text-white/90">{d().tagline}</p>
            </div>
          </section>

          <section class="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16">
            <div class="lg:col-span-7">
              <p class="prose-basic text-lg">{d().description}</p>
              <h2 class="mt-10 text-xl font-bold">Things to do</h2>
              <ul class="mt-3 grid gap-2 sm:grid-cols-2">
                <For each={d().attractions}>{a => <li class="rounded-xl bg-sun px-4 py-3 text-[15px] font-medium">{a}</li>}</For>
              </ul>
            </div>
            <dl class="space-y-6 lg:col-span-5">
              <div class="card p-6">
                <dt class="text-sm text-slate">Best time to visit</dt>
                <dd class="mt-1 font-semibold">{d().bestTime}</dd>
              </div>
              <div class="card p-6">
                <dt class="text-sm text-slate">Getting there</dt>
                <dd class="mt-1 font-semibold">{d().driveTime}</dd>
              </div>
              <div class="card p-6">
                <dt class="text-sm text-slate">Region</dt>
                <dd class="mt-1 font-semibold">{d().region}</dd>
              </div>
            </dl>
          </section>

          <section class="bg-white py-14 lg:py-20">
            <div class="wrap">
              <SectionHeading
                title={`Trips to ${d().name}`}
                intro={trips().length ? "Set departures and private versions of each." : "No set departure yet. We build this one to order."}
                action={
                  <A href={`/quote?service=tour&item=${encodeURIComponent(d().name)}`} class="btn btn-ink">
                    Plan a trip here
                  </A>
                }
              />
              <Show when={trips().length}>
                <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <For each={trips()}>{t => <TourCard tour={t} />}</For>
                </div>
              </Show>
            </div>
          </section>

          <CtaBand service="tour" />
        </>
      )}
    </Show>
  );
}
