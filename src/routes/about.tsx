import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import SampleTag from "~/components/SampleTag";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import { company } from "~/data/company";
import { site } from "~/data/site";

export default function About() {
  return (
    <>
      <Seo title="About Logantoz Tours" description="Founded in Nairobi in 2024 as a transport company, Logantoz now runs safaris, events and accommodation for clients across Kenya and East Africa." />
      <PageHero
        title="Your vision, our logistics"
        intro="Logantoz Tours started in 2024 with a simple, bold aim: to raise the standard of travel and event logistics in Kenya. What began as a transport service is now a full experience provider, from elite events and catering to luxury tours across the continent."
        image="/images/brand/team-waterfall.jpg"
        imageAlt="The Logantoz team in matching outfits at a waterfall"
      />

      <section class="wrap grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div class="lg:col-span-7">
          <h2 class="display-md text-3xl md:text-4xl">Select the best. Sacrifice nothing.</h2>
          <div class="prose-basic mt-5 text-slate">
            <p>
              We bridge the gap between inspired planning and flawless execution. A premium fleet for transport, high-end catering, professional sound and DJs, and hotel hosting once the event is over. Every detail is covered by one team.
            </p>
            <p>
              Since launch we have prioritised results over promises. That shows in an 85% customer satisfaction rating and 80% growth in sales, and in the number of clients who come back for the next event or the next trip.
            </p>
            <p>At Logantoz we don't just plan events. We move them.</p>
          </div>
        </div>
        <dl class="grid grid-cols-3 gap-4 self-start lg:col-span-5">
          <For each={company.stats}>
            {s => (
              <div class="rounded-2xl bg-sun p-4">
                <dd class="display-md text-2xl sm:text-4xl">{s.value}</dd>
                <dt class="mt-1 text-sm">{s.label}</dt>
              </div>
            )}
          </For>
        </dl>
      </section>

      <section class="bg-ink py-14 text-white lg:py-20">
        <div class="wrap grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 class="text-sm font-semibold text-sun">Mission</h2>
            <p class="display-md mt-3 text-2xl sm:text-3xl">{company.mission}</p>
          </div>
          <div>
            <h2 class="text-sm font-semibold text-sun">Vision</h2>
            <p class="display-md mt-3 text-2xl sm:text-3xl">{company.vision}</p>
          </div>
        </div>
        <div class="wrap mt-14">
          <SectionHeading dark title="What we hold to" />
          <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <For each={company.values}>
              {v => (
                <li class="border-t-4 border-sun pt-4">
                  <h3 class="text-lg font-bold">{v.name}</h3>
                  <p class="mt-2 text-sm text-stone">{v.detail}</p>
                </li>
              )}
            </For>
          </ul>
          <p class="mt-6 text-sm text-stone/70">Mission, vision and values are proposed wording for Logantoz to approve or edit.</p>
        </div>
      </section>

      <section class="wrap py-14 lg:py-20">
        <SectionHeading title="Why clients pick us" />
        <ul class="grid gap-5 md:grid-cols-2">
          <For each={company.different}>
            {d => (
              <li class="card p-6">
                <h3 class="text-xl font-bold">{d.name}</h3>
                <p class="mt-2 text-slate">{d.detail}</p>
              </li>
            )}
          </For>
        </ul>
      </section>

      <section class="bg-white py-14 lg:py-20">
        <div class="wrap">
          <SectionHeading title="The journey so far" />
          <ol class="grid gap-8 md:grid-cols-4">
            <For each={company.milestones}>
              {m => (
                <li class="border-l-4 border-sun pl-4">
                  <span class="display text-4xl">{m.year}</span>
                  <h3 class="mt-2 font-bold">{m.title}</h3>
                  <p class="mt-1 text-sm text-slate">{m.detail}</p>
                </li>
              )}
            </For>
          </ol>
        </div>
      </section>

      <section class="wrap grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div class="lg:col-span-6">
          <div class="flex items-center gap-3">
            <h2 class="display-md text-3xl md:text-4xl">The team</h2>
            <SampleTag />
          </div>
          <p class="mt-4 text-slate">Names, roles and photos of the Logantoz team go here. Driver-guides, event managers and the kitchen lead, with a line each.</p>
          <ul class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <For each={["Founder and director", "Operations lead", "Head driver-guide", "Events manager", "Head chef", "Sound lead"]}>
              {role => (
                <li>
                  <div class="aspect-square rounded-2xl bg-stone" />
                  <p class="mt-2 text-sm font-semibold">Name</p>
                  <p class="text-xs text-slate">{role}</p>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class="lg:col-span-6">
          <div class="flex items-center gap-3">
            <h2 class="display-md text-3xl md:text-4xl">Licences and memberships</h2>
            <SampleTag />
          </div>
          <p class="mt-4 text-slate">Tourism Regulatory Authority licence, business registration, insurance and any association memberships (KATO, TSA) go here once confirmed.</p>
          <div class="mt-6 card p-6">
            <p class="font-semibold">Registered office</p>
            <p class="text-slate">{site.address}</p>
            <p class="mt-3 font-semibold">Tourism licence number</p>
            <p class="text-slate">To be supplied</p>
          </div>
          <A href="/contact" class="btn btn-ink mt-6">
            Get in touch
          </A>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
