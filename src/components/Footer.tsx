import { A } from "@solidjs/router";
import { For } from "solid-js";
import { site, waLink } from "~/data/site";

const cols = [
  {
    title: "Explore",
    links: [
      { href: "/tours", label: "Tours and packages" },
      { href: "/destinations", label: "Destinations" },
      { href: "/fleet", label: "Fleet and transfers" },
      { href: "/accommodation", label: "Accommodation" },
      { href: "/events", label: "Events" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Logantoz" },
      { href: "/contact", label: "Contact" },
      { href: "/quote", label: "Request a quote" },
      { href: "/faq", label: "Questions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms and conditions" },
      { href: "/cancellation", label: "Cancellation and refunds" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer class="border-t border-stone bg-white text-slate">
      <div class="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <For each={cols}>
          {c => (
            <div>
              <h2 class="font-bold text-black">{c.title}</h2>
              <ul class="mt-4 space-y-2.5 text-[15px]">
                <For each={c.links}>
                  {l => (
                    <li>
                      <A href={l.href} class="hover:text-black">
                        {l.label}
                      </A>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
        <div>
          <h2 class="font-bold text-black">Get in touch</h2>
          <ul class="mt-4 space-y-2.5 text-[15px]">
            <li>
              <a href={`mailto:${site.email}`} class="hover:text-black">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} class="hover:text-black">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={waLink("Hi Logantoz, I'd like to ask about a trip.")} class="hover:text-black" target="_blank" rel="noopener">
                WhatsApp us
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <ul class="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <For each={site.socials}>
              {s => (
                <li>
                  <a href={s.href} class="hover:text-black" target="_blank" rel="noopener">
                    {s.name}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="wrap flex flex-col gap-4 border-t border-stone py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/brand/logo-black.png" alt="" class="h-7 w-auto" width="986" height="408" loading="lazy" />
          <p>
            Logantoz Tours. {site.tagline} Since {site.founded}.
          </p>
        </div>
        <p>{site.hours}</p>
      </div>
    </footer>
  );
}
