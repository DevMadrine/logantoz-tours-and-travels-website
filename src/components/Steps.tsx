import { For } from "solid-js";

/** Numbered "How it works" row. Only for content that really is a sequence. */
export default function Steps(props: { title: string; intro?: string; steps: { title: string; detail: string }[] }) {
  return (
    <section class="bg-white py-16 lg:py-20">
      <div class="wrap">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="display-md text-3xl sm:text-4xl">{props.title}</h2>
          {props.intro && <p class="mt-3 text-lg text-slate">{props.intro}</p>}
        </div>
        <ol class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <For each={props.steps}>
            {(s, i) => (
              <li class="card p-6">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sun text-sm font-bold">{i() + 1}</span>
                <h3 class="mt-4 font-bold">{s.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-slate">{s.detail}</p>
              </li>
            )}
          </For>
        </ol>
      </div>
    </section>
  );
}
