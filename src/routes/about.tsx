import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import PageHero from "~/components/PageHero";
import SectionHeading from "~/components/SectionHeading";
import Seo from "~/components/Seo";
import { company } from "~/data/company";
import { site } from "~/data/site";

export default function About() {
  return (
    <>
      <Seo title="About Talmar Express" description="Talmar Express started in Nairobi in January 2025 after a family holiday was ruined by unsafe hire vehicles. Today it runs transfers, vehicle hire, private safaris and events across Kenya." />
      <PageHero
        title="Your vision, our logistics"
        intro="Talmar Express started in January 2025 with a simple aim: transport in Kenya that is safe, insured and on time. What began with transfers and vehicle hire now covers private safaris, hotel bookings and full event logistics, run by a small team you deal with directly."
        image="/images/brand/team-waterfall.jpg"
        imageAlt="The Talmar Express team in matching outfits at a waterfall"
      />

      <section class="wrap grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div class="lg:col-span-7">
          <h2 class="display-md text-3xl md:text-4xl">How Talmar Express started</h2>
          <div class="prose-basic mt-5">
            <For each={company.story}>{p => <p>{p}</p>}</For>
          </div>
        </div>
        <div class="self-start lg:col-span-5">
          <img src="/images/brand/talmar-mark.png" alt="Talmar Express emblem" class="mx-auto mb-8 w-64 lg:w-72" width="1072" height="728" loading="lazy" />
          <dl class="grid gap-4">
          <For each={company.facts}>
            {f => (
              <div class="card flex items-baseline gap-4 p-5">
                <dd class="display-md text-3xl text-black">{f.value}</dd>
                <dt class="text-sm text-slate">{f.label}</dt>
              </div>
            )}
          </For>
          </dl>
        </div>
      </section>

      <section class="bg-ink py-14 text-white lg:py-20">
        <div class="wrap grid gap-10 md:grid-cols-2">
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
                  <p class="mt-2 text-sm text-white/75">{v.detail}</p>
                </li>
              )}
            </For>
          </ul>
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

      <section class="bg-paper py-14 lg:py-20">
        <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <h2 class="display-md text-3xl md:text-4xl">The team</h2>
            <p class="mt-4 text-slate">Small enough that the person who quotes your trip is the person who makes sure it happens.</p>
            <ul class="mt-6 grid gap-4 sm:grid-cols-3">
              <For each={company.team}>
                {m => (
                  <li>
                    <div class="aspect-square rounded-2xl bg-stone" aria-hidden="true" />
                    <p class="mt-3 font-semibold">{m.name}</p>
                    <p class="text-sm text-slate">{m.role}</p>
                  </li>
                )}
              </For>
            </ul>
            <p class="mt-4 text-xs text-slate">Team photos to follow.</p>
          </div>
          <div class="lg:col-span-6">
            <h2 class="display-md text-3xl md:text-4xl">Credentials</h2>
            <ul class="mt-6 space-y-3">
              <For each={company.credentials}>
                {c => (
                  <li class="card p-4 text-[15px]">{c}</li>
                )}
              </For>
            </ul>
            <p class="mt-4 text-sm text-slate">Registered office: {site.address}.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
