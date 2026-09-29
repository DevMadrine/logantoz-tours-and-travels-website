import { For } from "solid-js";
import { testimonials } from "~/data/testimonials";
import { IconStar } from "./Icons";
import SampleTag from "./SampleTag";

export default function Testimonials() {
  return (
    <ul class="grid gap-5 md:grid-cols-3">
      <For each={testimonials}>
        {t => (
          <li class="card flex flex-col p-6">
            <div class="flex gap-0.5 text-sun-deep" aria-label={`${t.rating} out of 5 stars`}>
              <For each={Array.from({ length: t.rating })}>{() => <IconStar />}</For>
            </div>
            <p class="mt-4 flex-1 text-[17px] leading-relaxed">{t.quote}</p>
            <div class="mt-5 flex items-center justify-between gap-2">
              <div>
                <p class="font-semibold">{t.name}</p>
                <p class="text-sm text-slate">{t.trip}</p>
              </div>
              {t.sample && <SampleTag />}
            </div>
          </li>
        )}
      </For>
    </ul>
  );
}
