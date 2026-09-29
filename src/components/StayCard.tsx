import { A } from "@solidjs/router";
import { For } from "solid-js";
import { kes } from "~/data/site";
import type { Stay } from "~/data/stays";
import { IconPin } from "./Icons";
import SampleTag from "./SampleTag";

export default function StayCard(props: { stay: Stay }) {
  return (
    <article class="card flex flex-col overflow-hidden">
      <div class="relative aspect-3/2 bg-stone">
        <img src={props.stay.image} alt={props.stay.name} class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" width="800" height="533" />
        <SampleTag class="absolute top-3 left-3" />
        <span class="absolute right-3 bottom-3 rounded-md bg-white px-2 py-1 text-xs font-semibold">{props.stay.type}</span>
      </div>
      <div class="flex flex-1 flex-col p-5">
        <h3 class="text-xl leading-tight font-bold">{props.stay.name}</h3>
        <p class="mt-1 flex items-center gap-1.5 text-sm text-slate">
          <IconPin width={16} height={16} /> {props.stay.location}
        </p>
        <p class="mt-3 text-sm">
          <span class="font-semibold">Rooms:</span> {props.stay.roomTypes.join(", ")}
        </p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <For each={props.stay.amenities}>{a => <li class="chip">{a}</li>}</For>
        </ul>
        <div class="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p class="text-xl font-bold">from {kes(props.stay.rateFrom)}</p>
            <p class="text-xs text-slate">{props.stay.rateNote}</p>
          </div>
          <A href={`/quote?service=accommodation&item=${encodeURIComponent(props.stay.name)}`} class="btn btn-ink btn-sm">
            Enquire
          </A>
        </div>
      </div>
    </article>
  );
}
