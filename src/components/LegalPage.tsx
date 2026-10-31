import type { JSX } from "solid-js";
import Seo from "./Seo";

export default function LegalPage(props: { title: string; description: string; children: JSX.Element }) {
  return (
    <>
      <Seo title={props.title} description={props.description} />
      <section class="bg-ink text-white">
        <div class="wrap py-12">
          <h1 class="display text-4xl sm:text-5xl lg:text-6xl">{props.title}</h1>
          <p class="mt-4 max-w-xl text-stone">
            Draft policy for Talmar Express to review and confirm. Last updated September 2026.
          </p>
        </div>
      </section>
      <section class="wrap py-12">
        <div class="prose-basic">{props.children}</div>
      </section>
    </>
  );
}
