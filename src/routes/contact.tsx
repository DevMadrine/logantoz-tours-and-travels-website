import { IconMail, IconPhone, IconPin, IconWhatsApp } from "~/components/Icons";
import { clientOnly } from "@solidjs/start";

const QuoteForm = clientOnly(() => import("~/components/QuoteForm"));
import Seo from "~/components/Seo";
import { site, waLink } from "~/data/site";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Call, WhatsApp or email Talmar Express in Parklands, Nairobi. Office hours Monday to Saturday, WhatsApp every day." />
      <section class="bg-ink text-white">
        <div class="wrap py-12 lg:py-16">
          <h1 class="display text-4xl sm:text-6xl lg:text-7xl">Talk to us</h1>
          <p class="mt-5 max-w-xl text-lg text-stone">WhatsApp is fastest and is answered by the head of operations, usually straight away. Calls and email work too, and you are welcome to walk into the office in Parklands.</p>
        </div>
      </section>

      <section class="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16">
        <div class="lg:col-span-5">
          <ul class="space-y-4">
            <li>
              <a href={waLink("Hi Talmar Express, I'd like to ask about a trip.")} class="flex items-center gap-4 rounded-2xl bg-wa p-5 shadow-soft" target="_blank" rel="noopener">
                <IconWhatsApp width={28} height={28} />
                <span>
                  <span class="block font-bold">WhatsApp</span>
                  <span class="text-sm">{site.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} class="flex items-center gap-4 card p-5">
                <IconPhone width={28} height={28} />
                <span>
                  <span class="block font-bold">Call</span>
                  <span class="text-sm text-slate">{site.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} class="flex items-center gap-4 card p-5">
                <IconMail width={28} height={28} />
                <span>
                  <span class="block font-bold">Email</span>
                  <span class="text-sm text-slate">{site.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={site.mapsLink} class="flex items-center gap-4 card p-5" target="_blank" rel="noopener">
                <IconPin width={28} height={28} />
                <span>
                  <span class="block font-bold">Office, walk-ins welcome</span>
                  <span class="text-sm text-slate">{site.address}</span>
                </span>
              </a>
            </li>
          </ul>
          <div class="mt-8 overflow-hidden rounded-2xl shadow-soft">
            <iframe title="Map to the Talmar Express office" src={site.mapsEmbed} class="h-72 w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen />
          </div>
        </div>
        <div class="lg:col-span-7">
          <h2 class="display-md mb-5 text-3xl">Send a message</h2>
          <QuoteForm fallback={<div class="card min-h-[32rem]" aria-busy="true" />} />
        </div>
      </section>
    </>
  );
}
