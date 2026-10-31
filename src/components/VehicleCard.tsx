import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { Vehicle } from "~/data/fleet";
import { IconUsers } from "./Icons";
import SampleTag from "./SampleTag";

export default function VehicleCard(props: { vehicle: Vehicle }) {
  return (
    <article class="card grid overflow-hidden md:grid-cols-12">
      <div class="relative aspect-4/3 bg-stone md:col-span-5 md:aspect-auto">
        <img src={props.vehicle.image} alt={props.vehicle.name} class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" width="800" height="600" />
        <SampleTag class="absolute top-3 left-3" />
      </div>
      <div class="flex flex-col p-5 md:col-span-7 md:p-6">
        <p class="text-sm text-slate">{props.vehicle.type}</p>
        <h3 class="mt-1 text-2xl leading-tight font-bold">{props.vehicle.name}</h3>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div class="flex items-center gap-2">
            <IconUsers />
            <dt class="sr-only">Passengers</dt>
            <dd>{props.vehicle.capacity} passengers</dd>
          </div>
          <div>
            <dt class="sr-only">Luggage</dt>
            <dd>{props.vehicle.luggage}</dd>
          </div>
        </dl>
        <ul class="mt-4 flex flex-wrap gap-1.5">
          <For each={props.vehicle.features}>{f => <li class="chip">{f}</li>}</For>
        </ul>
        <p class="mt-4 text-sm text-slate">Good for {props.vehicle.bestFor.join(", ")}.</p>
        <div class="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5">
          <p class="text-sm text-slate">Day rate quoted per trip. Driver and fuel included.</p>
          <A href={`/quote?service=transport&item=${encodeURIComponent(props.vehicle.name)}`} class="btn btn-sun btn-sm">
            Get a quote
          </A>
        </div>
      </div>
    </article>
  );
}
