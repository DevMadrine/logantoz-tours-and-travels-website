import { For } from "solid-js";
import { IconPhone, IconWhatsApp } from "~/components/Icons";
import QuoteForm from "~/components/QuoteForm";
import Seo from "~/components/Seo";
import { site, waLink } from "~/data/site";

const next = [
  { title: "We read it", detail: "A real person, not an autoresponder. Usually within an hour in office hours." },
  { title: "You get a written quote", detail: "One price with everything listed, and two or three options if it helps." },
  { title: "A deposit confirms", detail: "50% by M-Pesa or bank transfer holds the date, vehicle and rooms. Balance seven days before." },
];

export default function Quote() {
  return (
    <>
      <Seo title="Request a quote" description="Tell Logantoz Tours what you're planning and get a written quote back, usually the same day." />
      <section class="bg-ink text-white">
        <div class="wrap py-12 lg:py-16">
          <h1 class="display text-4xl sm:text-6xl lg:text-7xl">Get a quote</h1>
          <p class="mt-5 max-w-xl text-lg text-stone">Tours, transport, stays or an event. Fill in what you know; we ask about the rest.</p>
        </div>
      </section>
      <section class="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16">
        <div class="lg:col-span-7">
          <QuoteForm />
        </div>
        <aside class="lg:col-span-5">
          <h2 class="display-md text-2xl">What happens next</h2>
          <ol class="mt-5 space-y-5">
            <For each={next}>
              {(n, i) => (
                <li class="flex gap-4">
                  <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black font-bold text-sun">{i() + 1}</span>
                  <div>
                    <h3 class="font-bold">{n.title}</h3>
                    <p class="text-sm text-slate">{n.detail}</p>
                  </div>
                </li>
              )}
            </For>
          </ol>
          <div class="mt-8 rounded-2xl bg-sun p-6">
            <h2 class="font-bold">Prefer to talk?</h2>
            <div class="mt-4 flex flex-wrap gap-2">
              <a href={waLink("Hi Logantoz, I'd like a quote.")} class="btn btn-ink btn-sm" target="_blank" rel="noopener">
                <IconWhatsApp width={18} height={18} /> WhatsApp
              </a>
              <a href={`tel:${site.phone}`} class="btn btn-line btn-sm">
                <IconPhone width={18} height={18} /> {site.phoneDisplay}
              </a>
            </div>
            <p class="mt-3 text-sm">{site.hours}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
