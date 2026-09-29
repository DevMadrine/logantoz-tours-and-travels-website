import { A } from "@solidjs/router";
import { site, waLink } from "~/data/site";

/** Soft yellow card, centred. Closes every page. */
export default function CtaBand(props: { title?: string; body?: string; service?: string }) {
  const quoteHref = () => (props.service ? `/quote?service=${props.service}` : "/quote");
  return (
    <section class="wrap py-16 lg:py-20">
      <div class="rounded-3xl border border-stone px-6 py-14 text-center sm:px-10 lg:py-20" style={{ background: "linear-gradient(135deg, #fff7cf 0%, #ffffff 45%, #fff3b0 100%)" }}>
        <h2 class="display-md mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-5xl">{props.title ?? "Tell us what you're planning"}</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-slate">{props.body ?? "Send the date, the people and the plan. You get a written quote back, usually the same day."}</p>
        <div class="mt-8 flex flex-col items-center gap-3">
          <A href={quoteHref()} class="btn btn-sun">
            Get a quote
          </A>
          <a href={waLink("Hi Logantoz, I'd like a quote.")} class="text-sm text-slate underline underline-offset-4 hover:text-black" target="_blank" rel="noopener">
            or WhatsApp {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
