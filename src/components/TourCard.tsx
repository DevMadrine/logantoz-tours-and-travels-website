import { A } from "@solidjs/router";
import type { Tour } from "~/data/tours";
import SampleTag from "./SampleTag";

export default function TourCard(props: { tour: Tour }) {
  const duration = () => (props.tour.nights ? `${props.tour.days} days, ${props.tour.nights} nights` : "Day trip");
  return (
    <A href={`/tours/${props.tour.slug}`} class="card group flex flex-col overflow-hidden">
      <div class="relative aspect-4/5 overflow-hidden bg-stone">
        <img
          src={props.tour.image}
          alt=""
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width="800"
          height="1000"
        />
        {props.tour.sample && <SampleTag class="absolute top-3 left-3" />}
        <div class="sticker absolute right-3 bottom-3 text-sm">{duration()}</div>
      </div>
      <div class="flex flex-1 flex-col p-4">
        <p class="text-sm text-slate">Private trip, quoted for your group</p>
        <h3 class="mt-1 text-xl leading-tight font-bold">{props.tour.name}</h3>
        <p class="mt-2 line-clamp-2 text-sm text-slate">{props.tour.tagline}</p>
      </div>
    </A>
  );
}
