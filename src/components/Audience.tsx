import { For } from "solid-js";
import { IconCheck } from "./Icons";

/** "Who it's for" block: three or four short columns with a check mark each. */
export default function Audience(props: { title: string; intro?: string; items: { title: string; detail: string }[]; dark?: boolean }) {
  return (
    <section class={`py-16 lg:py-20 ${props.dark ? "bg-ink text-white" : "bg-paper"}`}>
      <div class="wrap">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="display-md text-3xl sm:text-4xl">{props.title}</h2>
          {props.intro && <p class={`mt-3 text-lg ${props.dark ? "text-white/75" : "text-slate"}`}>{props.intro}</p>}
        </div>
        <ul class="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <For each={props.items}>
            {a => (
              <li class="flex gap-3">
                <span class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun text-black">
                  <IconCheck width={12} height={12} />
                </span>
                <div>
                  <h3 class="font-bold">{a.title}</h3>
                  <p class={`mt-1 text-sm leading-relaxed ${props.dark ? "text-white/75" : "text-slate"}`}>{a.detail}</p>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </section>
  );
}
