import { A } from "@solidjs/router";
import Seo from "./Seo";

export default function NotFound() {
  return (
    <section class="wrap py-24">
      <Seo title="Page not found" />
      <h1 class="display text-5xl sm:text-7xl">Wrong turn</h1>
      <p class="mt-6 max-w-md text-lg text-slate">That page doesn't exist. The driver knows the way back.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <A href="/" class="btn btn-sun">
          Home
        </A>
        <A href="/tours" class="btn btn-white">
          Tours
        </A>
      </div>
    </section>
  );
}
