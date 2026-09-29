import { A } from "@solidjs/router";
import type { Destination } from "~/data/destinations";

export default function DestinationCard(props: { destination: Destination; class?: string; tall?: boolean }) {
  return (
    <A
      href={`/destinations/${props.destination.slug}`}
      class={`group relative block overflow-hidden rounded-2xl bg-stone ${props.tall ? "aspect-4/5" : "aspect-4/3"} ${props.class ?? ""}`}
    >
      <img
        src={props.destination.image}
        alt=""
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
      />
      <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/40 to-transparent p-4 pt-16 text-white">
        <p class="text-xs text-white/75">{props.destination.country}</p>
        <h3 class="mt-0.5 text-xl font-bold">{props.destination.name}</h3>
        <p class="mt-1 text-sm text-white/85">{props.destination.tagline}</p>
      </div>
    </A>
  );
}
