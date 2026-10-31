import { A } from "@solidjs/router";
import { For, Show, type JSX } from "solid-js";

/**
 * Service page opener, after the reference site's product pages:
 * centred title and one line, two buttons, a large image, then a row of chips.
 */
export default function ServiceHero(props: { title: string; intro: string; image: string; imageAlt: string; chips?: string[]; primary: { href: string; label: string }; secondary?: { href: string; label: string; external?: boolean }; children?: JSX.Element }) {
  return (
    <section class="bg-paper">
      <div class="wrap pt-16 pb-12 text-center lg:pt-24">
        <h1 class="display mx-auto max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{props.title}</h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-slate sm:text-xl">{props.intro}</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <A href={props.primary.href} class="btn btn-sun">
            {props.primary.label}
          </A>
          <Show when={props.secondary}>
            {s => (
              <Show when={s().external} fallback={<A href={s().href} class="btn btn-white">{s().label}</A>}>
                <a href={s().href} class="btn btn-white" target="_blank" rel="noopener">
                  {s().label}
                </a>
              </Show>
            )}
          </Show>
        </div>
        <div class="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl shadow-float">
          <img src={props.image} alt={props.imageAlt} class="aspect-video w-full object-cover" width="1600" height="900" fetchpriority="high" />
        </div>
        <Show when={props.chips?.length}>
          <ul class="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
            <For each={props.chips}>{c => <li class="chip bg-white">{c}</li>}</For>
          </ul>
        </Show>
        {props.children}
      </div>
    </section>
  );
}
