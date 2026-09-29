import { children, Show, type JSX } from "solid-js";

export default function SectionHeading(props: { title: JSX.Element; intro?: string; action?: JSX.Element; dark?: boolean; titleClass?: string; class?: string }) {
  const action = children(() => props.action);
  return (
    <div class={`mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-10 ${props.class ?? ""}`}>
      <div class="max-w-3xl">
        <h2 class={`display-md text-3xl md:text-4xl lg:text-5xl ${props.titleClass ?? ""}`}>{props.title}</h2>
        <Show when={props.intro}>
          <p class={`mt-3 text-lg ${props.dark ? "text-white/85" : "text-slate"}`}>{props.intro}</p>
        </Show>
      </div>
      <Show when={action()}>
        <div class="shrink-0">{action()}</div>
      </Show>
    </div>
  );
}
