import { For } from "solid-js";
import type { Faq as FaqItem } from "~/data/faqs";
import { IconChevronDown } from "./Icons";

export default function Faq(props: { items: FaqItem[] }) {
  return (
    <div class="divide-y divide-black/15 border-y border-black/15">
      <For each={props.items}>
        {f => (
          <details class="group">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <IconChevronDown class="shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p class="max-w-3xl pb-5 text-slate">{f.a}</p>
          </details>
        )}
      </For>
    </div>
  );
}
