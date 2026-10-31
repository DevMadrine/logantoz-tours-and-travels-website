import { A } from "@solidjs/router";
import { Show } from "solid-js";
import type { Stay } from "~/data/stays";
import { IconPin } from "./Icons";

export default function StayCard(props: { stay: Stay }) {
  return (
    <article class="card flex flex-col p-6">
      <p class="text-sm text-slate">{props.stay.type}</p>
      <h3 class="mt-1 text-xl leading-tight font-bold">{props.stay.name}</h3>
      <p class="mt-2 flex items-center gap-1.5 text-sm text-slate">
        <IconPin width={16} height={16} /> {props.stay.location}
      </p>
      <Show when={props.stay.note}>
        <p class="mt-3 text-sm">{props.stay.note}</p>
      </Show>
      <A href={`/quote?service=accommodation&item=${encodeURIComponent(props.stay.name)}`} class="mt-5 font-semibold underline decoration-sun decoration-[3px] underline-offset-[6px] hover:decoration-black">
        Add to a trip or event
      </A>
    </article>
  );
}
