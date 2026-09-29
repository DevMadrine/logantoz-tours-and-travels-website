import { A, useParams } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { For, Show } from "solid-js";
import CtaBand from "~/components/CtaBand";
import { IconCalendar, IconCheck, IconClock, IconMinus, IconUsers, IconWhatsApp } from "~/components/Icons";
import SampleTag from "~/components/SampleTag";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import TourCard from "~/components/TourCard";
import { getDestination } from "~/data/destinations";
import { kes, waLink } from "~/data/site";
import { getTour, tours } from "~/data/tours";

export default function TourPage() {
  const params = useParams();
  const tour = () => getTour(params.slug);
  const similar = () => tours.filter(t => t.category === tour()?.category && t.slug !== tour()?.slug).slice(0, 3);
  const duration = (t: NonNullable<ReturnType<typeof tour>>) => (t.nights ? `${t.days} days, ${t.nights} nights` : "1 day");

  return (
    <Show
      when={tour()}
      fallback={
        <section class="wrap py-24">
          <HttpStatusCode code={404} />
          <Seo title="Tour not found" />
          <h1 class="display text-5xl">No such trip</h1>
          <p class="mt-4 text-lg text-slate">That tour isn't on the list. It may have been renamed.</p>
          <A href="/tours" class="btn btn-sun mt-6">
            All tours
          </A>
        </section>
      }
    >
      {t => (
        <>
          <Seo title={t().name} description={t().tagline} />
          <section class="relative flex min-h-[60svh] items-end bg-ink text-white">
            <img src={t().image} alt="" class="absolute inset-0 h-full w-full object-cover" width="1600" height="1000" fetchpriority="high" />
            <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div class="wrap relative pt-24 pb-10">
              <div class="flex flex-wrap items-center gap-2 text-sm">
                <A href="/tours" class="underline underline-offset-4 hover:text-sun">
                  Tours
                </A>
                <span aria-hidden="true">/</span>
                <For each={t().destinationSlugs}>
                  {slug => (
                    <A href={`/destinations/${slug}`} class="underline underline-offset-4 hover:text-sun">
                      {getDestination(slug)?.name ?? slug}
                    </A>
                  )}
                </For>
                {t().sample && <SampleTag />}
              </div>
              <h1 class="display mt-4 text-4xl sm:text-6xl lg:text-7xl">{t().name}</h1>
              <p class="mt-4 max-w-2xl text-lg text-white/90">{t().tagline}</p>
            </div>
          </section>

          <section class="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16">
            <div class="lg:col-span-8">
              <ul class="grid gap-3 sm:grid-cols-3">
                <For each={t().highlights}>
                  {h => (
                    <li class="rounded-xl bg-sun p-4 text-[15px] font-medium">{h}</li>
                  )}
                </For>
              </ul>

              <h2 class="display-md mt-12 text-3xl">Day by day</h2>
              <ol class="mt-6 border-l-4 border-stone pl-6">
                <For each={t().itinerary}>
                  {d => (
                    <li class="relative pb-8 last:pb-0">
                      <span class="absolute top-0 -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-sun">{d.day}</span>
                      <h3 class="text-xl font-bold">{d.title}</h3>
                      <p class="mt-1 text-slate">{d.detail}</p>
                    </li>
                  )}
                </For>
              </ol>

              <div class="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 class="text-xl font-bold">What's included</h2>
                  <ul class="mt-3 space-y-2">
                    <For each={t().included}>
                      {i => (
                        <li class="flex items-start gap-2 text-[15px]">
                          <IconCheck class="mt-0.5 shrink-0" width={18} height={18} /> {i}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
                <div>
                  <h2 class="text-xl font-bold">Not included</h2>
                  <ul class="mt-3 space-y-2">
                    <For each={t().excluded}>
                      {i => (
                        <li class="flex items-start gap-2 text-[15px] text-slate">
                          <IconMinus class="mt-0.5 shrink-0" width={18} height={18} /> {i}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </div>

              <dl class="mt-12 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt class="text-xl font-bold">Where you sleep</dt>
                  <dd class="mt-2 text-slate">{t().accommodation}</dd>
                </div>
                <div>
                  <dt class="text-xl font-bold">How you travel</dt>
                  <dd class="mt-2 text-slate">{t().transport}</dd>
                </div>
                <div>
                  <dt class="text-xl font-bold">Activities</dt>
                  <dd class="mt-2 flex flex-wrap gap-1.5">
                    <For each={t().activities}>{a => <span class="chip">{a}</span>}</For>
                  </dd>
                </div>
                <div>
                  <dt class="text-xl font-bold">When it runs</dt>
                  <dd class="mt-2 text-slate">{t().dates}</dd>
                </div>
              </dl>
            </div>

            <aside class="lg:col-span-4">
              <div class="sticky top-24 card p-6">
                <p class="text-sm text-slate">From</p>
                <p class="display-md text-4xl">{kes(t().priceFrom)}</p>
                <p class="mt-1 text-xs text-slate">{t().priceNote}</p>
                <ul class="mt-5 space-y-2 border-t border-stone pt-5 text-[15px]">
                  <li class="flex items-center gap-2">
                    <IconClock /> {duration(t())}
                  </li>
                  <li class="flex items-center gap-2">
                    <IconUsers /> {t().groupSize.min} to {t().groupSize.max} people
                  </li>
                  <li class="flex items-start gap-2">
                    <IconCalendar class="mt-0.5 shrink-0" /> {t().dates}
                  </li>
                </ul>
                <A href={`/quote?service=tour&item=${encodeURIComponent(t().name)}`} class="btn btn-sun mt-6 w-full">
                  Request this trip
                </A>
                <a href={waLink(`Hi Logantoz, I'm interested in the ${t().name}.`)} class="btn btn-line mt-2 w-full" target="_blank" rel="noopener">
                  <IconWhatsApp width={18} height={18} /> Ask on WhatsApp
                </a>
              </div>
            </aside>
          </section>

          <Show when={similar().length}>
            <section class="bg-white py-14 lg:py-20">
              <div class="wrap">
                <SectionHeading title="Similar trips" />
                <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <For each={similar()}>{s => <TourCard tour={s} />}</For>
                </div>
              </div>
            </section>
          </Show>

          <CtaBand title="Make it yours" body="Change the dates, the lodge or the length. Every trip on this site can be rebuilt around you." service="tour" />
        </>
      )}
    </Show>
  );
}
