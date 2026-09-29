import { children, Show, type JSX } from "solid-js";

/** Inner-page header: heavy title on the left, the deck's rounded-diamond photo on the right. */
export default function PageHero(props: { title: string; intro?: string; image?: string; imageAlt?: string; children?: JSX.Element }) {
  const actions = children(() => props.children);
  return (
    <section class="bg-ink text-white">
      <div class="wrap grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-12 lg:py-16">
        <div class={`min-w-0 ${props.image ? "lg:col-span-7" : "lg:col-span-9"}`}>
          <h1 class="display text-4xl sm:text-6xl lg:text-7xl">{props.title}</h1>
          <Show when={props.intro}>
            <p class="mt-6 max-w-xl text-lg text-stone">{props.intro}</p>
          </Show>
          <Show when={actions()}>
            <div class="mt-8 flex flex-wrap gap-3">{actions()}</div>
          </Show>
        </div>
        <Show when={props.image}>
          <div class="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div class="diamond-box">
              <div class="diamond">
                <img src={props.image} alt={props.imageAlt ?? ""} width="800" height="800" />
              </div>
            </div>
          </div>
        </Show>
      </div>
    </section>
  );
}
