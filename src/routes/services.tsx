import { A } from "@solidjs/router";
import { For } from "solid-js";
import CtaBand from "~/components/CtaBand";
import { IconCheck } from "~/components/Icons";
import Seo from "~/components/Seo";
import { services } from "~/data/services";

export default function Services() {
  return (
    <>
      <Seo title="Our services" description="Transport and airport transfers, private safaris, events and partner hotels in Kenya, from one team in Nairobi." />
      <section class="bg-paper">
        <div class="wrap py-16 text-center lg:py-24">
          <h1 class="display mx-auto max-w-3xl text-4xl sm:text-6xl lg:text-7xl">Our services</h1>
          <p class="mx-auto mt-5 max-w-2xl text-lg text-slate sm:text-xl">We offer four services that work well together: transport, safaris, events and hotels. One team plans them and you get one quote.</p>
        </div>
      </section>

      <section class="wrap space-y-6 py-12 lg:py-16">
        <For each={services}>
          {s => (
            <article class="grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-12">
              <div class="flex flex-col p-8 lg:col-span-7 lg:p-12">
                <h2 class="display-md text-3xl sm:text-4xl">{s.name}</h2>
                <p class="mt-3 max-w-xl text-white/80">{s.blurb}</p>
                <ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
                  <For each={s.bullets}>
                    {b => (
                      <li class="flex items-start gap-2.5 text-[15px]">
                        <span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun text-black">
                          <IconCheck width={12} height={12} />
                        </span>
                        {b}
                      </li>
                    )}
                  </For>
                </ul>
                <div class="mt-8">
                  <A href={s.href} class="btn btn-sun">
                    {s.cta}
                  </A>
                </div>
              </div>
              <div class="relative min-h-64 lg:col-span-5">
                <img src={s.image} alt={s.imageAlt} class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" width="800" height="600" />
              </div>
            </article>
          )}
        </For>
      </section>

      <CtaBand title="Not sure which service you need?" body="A short chat on WhatsApp is usually enough to work it out." />
    </>
  );
}
