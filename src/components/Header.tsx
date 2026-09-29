import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, Show } from "solid-js";
import { IconClose, IconMenu } from "./Icons";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/fleet", label: "Fleet" },
  { href: "/accommodation", label: "Stays" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Floating white bar, like the reference site. */
export default function Header() {
  const [open, setOpen] = createSignal(false);
  const location = useLocation();
  createEffect(() => {
    location.pathname;
    setOpen(false);
  });

  return (
    <header class="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div class="mx-auto max-w-6xl rounded-2xl bg-white/95 shadow-float backdrop-blur">
        <div class="flex h-14 items-center justify-between gap-4 pr-2 pl-4 lg:h-16 lg:pr-3 lg:pl-6">
          <A href="/" class="flex shrink-0 items-center" aria-label="Logantoz Tours home">
            <img src="/images/brand/logo-black.png" alt="Logantoz Tours" class="h-8 w-auto lg:h-9" width="986" height="408" />
          </A>

          <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
            <For each={links}>
              {l => (
                <A href={l.href} class="rounded-full px-3 py-2 text-[15px] font-medium text-slate hover:text-black" activeClass="text-black underline decoration-sun decoration-[3px] underline-offset-[6px]">
                  {l.label}
                </A>
              )}
            </For>
          </nav>

          <div class="hidden lg:block">
            <A href="/quote" class="btn btn-sun btn-sm">
              Get a quote
            </A>
          </div>

          <button
            type="button"
            class="rounded-full p-2 hover:bg-black/5 lg:hidden"
            aria-expanded={open()}
            aria-controls="mobile-nav"
            onClick={() => setOpen(v => !v)}
          >
            <span class="sr-only">{open() ? "Close menu" : "Open menu"}</span>
            <Show when={open()} fallback={<IconMenu width={24} height={24} />}>
              <IconClose width={24} height={24} />
            </Show>
          </button>
        </div>

        <Show when={open()}>
          <nav id="mobile-nav" class="border-t border-stone px-4 pt-1 pb-4 lg:hidden" aria-label="Main">
            <For each={links}>
              {l => (
                <A href={l.href} class="block border-b border-stone py-3 font-semibold" activeClass="underline decoration-sun decoration-[3px] underline-offset-4">
                  {l.label}
                </A>
              )}
            </For>
            <A href="/quote" class="btn btn-sun mt-4 w-full">
              Get a quote
            </A>
          </nav>
        </Show>
      </div>
    </header>
  );
}
