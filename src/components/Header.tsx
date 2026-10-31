import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { services } from "~/data/services";
import { site } from "~/data/site";
import { IconChevronDown, IconClose, IconMenu } from "./Icons";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Logo(props: { class?: string }) {
  return (
    <span class={`inline-flex items-center gap-2.5 ${props.class ?? ""}`}>
      <img src="/images/brand/talmar-mark-480.png" alt="" class="h-9 w-auto lg:h-10" width="480" height="326" />
      <span class="display-md text-lg leading-none tracking-tight">{site.name}</span>
    </span>
  );
}

/** Floating white bar with a Services menu, after the reference site. */
export default function Header() {
  const [open, setOpen] = createSignal(false);
  const [menu, setMenu] = createSignal(false);
  const [mobileServices, setMobileServices] = createSignal(true);
  const location = useLocation();
  let menuRef!: HTMLDivElement;
  createEffect(() => {
    location.pathname;
    setOpen(false);
    setMenu(false);
  });
  onMount(() => {
    const onDoc = (e: MouseEvent) => {
      if (menuRef && !menuRef.contains(e.target as Node)) setMenu(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    onCleanup(() => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    });
  });
  const servicesActive = () => services.some(s => location.pathname.startsWith(s.href)) || location.pathname.startsWith("/services");

  return (
    <header class="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div class="mx-auto max-w-6xl rounded-2xl bg-white/95 shadow-float backdrop-blur">
        <div class="flex h-14 items-center justify-between gap-4 pr-2 pl-4 lg:h-16 lg:pr-3 lg:pl-6">
          <A href="/" aria-label={`${site.name} home`}>
            <Logo />
          </A>

          <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
            <A href="/" end class="rounded-full px-3 py-2 text-[15px] font-medium text-slate hover:text-black" activeClass="text-black underline decoration-sun decoration-[3px] underline-offset-[6px]">
              Home
            </A>
            <div class="relative" ref={menuRef}>
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium text-slate hover:text-black"
                classList={{ "text-black underline decoration-sun decoration-[3px] underline-offset-[6px]": servicesActive() }}
                aria-expanded={menu()}
                aria-haspopup="true"
                onClick={() => setMenu(v => !v)}
              >
                Services <IconChevronDown width={16} height={16} class={menu() ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              <Show when={menu()}>
                <div class="absolute top-full left-0 mt-3 w-[22rem] rounded-2xl bg-white p-2 shadow-float">
                  <For each={services}>
                    {s => (
                      <A href={s.href} class="block rounded-xl px-4 py-3 hover:bg-paper">
                        <span class="block font-semibold">{s.name}</span>
                        <span class="block text-sm text-slate">{s.tagline}</span>
                      </A>
                    )}
                  </For>
                  <A href="/services" class="mt-1 block rounded-xl border-t border-stone px-4 py-3 text-sm font-semibold hover:bg-paper">
                    All services
                  </A>
                </div>
              </Show>
            </div>
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

          <button type="button" class="rounded-full p-2 hover:bg-black/5 lg:hidden" aria-expanded={open()} aria-controls="mobile-nav" onClick={() => setOpen(v => !v)}>
            <span class="sr-only">{open() ? "Close menu" : "Open menu"}</span>
            <Show when={open()} fallback={<IconMenu width={24} height={24} />}>
              <IconClose width={24} height={24} />
            </Show>
          </button>
        </div>

        <Show when={open()}>
          <nav id="mobile-nav" class="border-t border-stone px-4 pt-1 pb-4 lg:hidden" aria-label="Main">
            <A href="/" end class="block border-b border-stone py-3 font-semibold" activeClass="underline decoration-sun decoration-[3px] underline-offset-4">
              Home
            </A>
            <button type="button" class="flex w-full items-center justify-between border-b border-stone py-3 font-semibold" aria-expanded={mobileServices()} onClick={() => setMobileServices(v => !v)}>
              Services <IconChevronDown width={18} height={18} class={mobileServices() ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            <Show when={mobileServices()}>
              <ul class="border-b border-stone py-1">
                <For each={services}>
                  {s => (
                    <li>
                      <A href={s.href} class="block py-2 pl-3">
                        <span class="block font-medium">{s.name}</span>
                        <span class="block text-xs text-slate">{s.tagline}</span>
                      </A>
                    </li>
                  )}
                </For>
                <li>
                  <A href="/services" class="block py-2 pl-3 text-sm font-semibold">
                    All services
                  </A>
                </li>
              </ul>
            </Show>
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
