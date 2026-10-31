import { A } from "@solidjs/router";
import { For } from "solid-js";
import { services } from "~/data/services";
import { site, waLink } from "~/data/site";
import { Logo } from "./Header";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request a quote" },
  { href: "/faq", label: "Questions" },
];
const legal = [
  { href: "/terms", label: "Terms and conditions" },
  { href: "/cancellation", label: "Cancellation and refunds" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer class="border-t border-stone bg-white text-slate">
      <div class="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo class="text-black" />
          <p class="mt-4 max-w-xs text-[15px]">Airport transfers, vehicle hire, private safaris and events across Kenya, from one team in Nairobi. {site.tagline}</p>
        </div>
        <div>
          <h2 class="font-bold text-black">Services</h2>
          <ul class="mt-4 space-y-2.5 text-[15px]">
            <For each={services}>
              {s => (
                <li>
                  <A href={s.href} class="hover:text-black">
                    {s.name}
                  </A>
                </li>
              )}
            </For>
            <li>
              <A href="/destinations" class="hover:text-black">
                Destinations we drive to
              </A>
            </li>
            <li>
              <A href="/services" class="hover:text-black">
                All services
              </A>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-black">Company</h2>
          <ul class="mt-4 space-y-2.5 text-[15px]">
            <For each={companyLinks}>
              {l => (
                <li>
                  <A href={l.href} class="hover:text-black">
                    {l.label}
                  </A>
                </li>
              )}
            </For>
          </ul>
          <h2 class="mt-6 font-bold text-black">Legal</h2>
          <ul class="mt-4 space-y-2.5 text-[15px]">
            <For each={legal}>
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
              <a href={waLink(`Hi ${site.name}, I'd like to ask about a trip.`)} class="hover:text-black" target="_blank" rel="noopener">
                WhatsApp us
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div class="wrap border-t border-stone py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} {site.name}. Registered in Kenya. On the road since {site.foundedLabel}.
        </p>
      </div>
    </footer>
  );
}
