import { Meta, Title } from "@solidjs/meta";
import { Show } from "solid-js";
import { site } from "~/data/site";

export default function Seo(props: { title: string; description?: string }) {
  return (
    <>
      <Title>{props.title} | {site.name}</Title>
      <Show when={props.description}>
        <Meta name="description" content={props.description} />
      </Show>
    </>
  );
}
