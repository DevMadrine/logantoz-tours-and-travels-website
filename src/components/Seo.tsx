import { Meta, Title } from "@solidjs/meta";
import { Show } from "solid-js";

export default function Seo(props: { title: string; description?: string }) {
  return (
    <>
      <Title>{props.title} | Logantoz Tours</Title>
      <Show when={props.description}>
        <Meta name="description" content={props.description} />
      </Show>
    </>
  );
}
