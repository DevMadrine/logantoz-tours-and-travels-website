import { waLink } from "~/data/site";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Talmar Express, I'd like to ask about a trip.")}
      target="_blank"
      rel="noopener"
      class="fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 rounded-full bg-wa py-3 pr-4 pl-3 font-semibold text-black shadow-float md:right-6 md:bottom-6"
      aria-label="Chat with Talmar Express on WhatsApp"
    >
      <IconWhatsApp width={22} height={22} />
      <span class="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
