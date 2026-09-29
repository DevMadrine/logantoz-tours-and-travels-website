import { useSearchParams } from "@solidjs/router";
import { createSignal, For, onMount, Show } from "solid-js";
import { site, waLink } from "~/data/site";
import { IconWhatsApp } from "./Icons";

export const serviceOptions = [
  { value: "tour", label: "Safari or tour package" },
  { value: "transport", label: "Vehicle hire or airport transfer" },
  { value: "event", label: "Event: catering, sound and DJ, transport" },
  { value: "accommodation", label: "Hotel or lodge booking" },
  { value: "other", label: "Something else" },
];

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/**
 * Quote request. Version one has no server: it composes the request into a
 * WhatsApp message (and an email fallback). Wire a server action here when the
 * client confirms where enquiries should land.
 */
export default function QuoteForm(props: { compact?: boolean }) {
  const [params] = useSearchParams();
  const [service, setService] = createSignal(first(params.service) || "tour");
  const [item, setItem] = createSignal(first(params.item));
  const [date, setDate] = createSignal(first(params.date));
  const [pax, setPax] = createSignal(first(params.pax) || "2");
  const [name, setName] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [sent, setSent] = createSignal(false);

  // On a prerendered page the router hydrates without the query string, so read it from the browser directly.
  onMount(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("service")) setService(q.get("service")!);
    if (q.get("item")) setItem(q.get("item")!);
    if (q.get("date")) setDate(q.get("date")!);
    if (q.get("pax")) setPax(q.get("pax")!);
  });

  const serviceLabel = () => serviceOptions.find(o => o.value === service())?.label ?? service();

  const text = () =>
    [
      `Hi Logantoz, I'd like a quote.`,
      `Name: ${name()}`,
      `Phone: ${phone()}`,
      email() && `Email: ${email()}`,
      `Looking for: ${serviceLabel()}`,
      item() && `Details: ${item()}`,
      date() && `Date: ${date()}`,
      pax() && `People: ${pax()}`,
      message() && `Notes: ${message()}`,
    ]
      .filter(Boolean)
      .join("\n");

  const mailto = () => `mailto:${site.email}?subject=${encodeURIComponent("Quote request: " + serviceLabel())}&body=${encodeURIComponent(text())}`;

  const submit = (e: Event) => {
    e.preventDefault();
    window.open(waLink(text()), "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={submit} class="card p-5 sm:p-7">
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label class="label" for="q-service">What do you need?</label>
          <select id="q-service" class="field" onInput={e => setService(e.currentTarget.value)}>
            <For each={serviceOptions}>{o => <option value={o.value} selected={o.value === service()}>{o.label}</option>}</For>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="label" for="q-item">Tour, vehicle, hotel or event</label>
          <input id="q-item" class="field" placeholder="For example: Maasai Mara classic safari, or a wedding on 14 March" value={item()} onInput={e => setItem(e.currentTarget.value)} />
        </div>
        <div>
          <label class="label" for="q-date">Date</label>
          <input id="q-date" type="date" class="field" value={date()} onInput={e => setDate(e.currentTarget.value)} />
        </div>
        <div>
          <label class="label" for="q-pax">How many people?</label>
          <input id="q-pax" type="number" min="1" class="field" value={pax()} onInput={e => setPax(e.currentTarget.value)} />
        </div>
        <div>
          <label class="label" for="q-name">Your name</label>
          <input id="q-name" class="field" required autocomplete="name" value={name()} onInput={e => setName(e.currentTarget.value)} />
        </div>
        <div>
          <label class="label" for="q-phone">Phone or WhatsApp number</label>
          <input id="q-phone" type="tel" class="field" required autocomplete="tel" placeholder="07..." value={phone()} onInput={e => setPhone(e.currentTarget.value)} />
        </div>
        <div class="sm:col-span-2">
          <label class="label" for="q-email">Email <span class="font-normal text-slate">(optional)</span></label>
          <input id="q-email" type="email" class="field" autocomplete="email" value={email()} onInput={e => setEmail(e.currentTarget.value)} />
        </div>
        <Show when={!props.compact}>
          <div class="sm:col-span-2">
            <label class="label" for="q-msg">Anything else we should know?</label>
            <textarea id="q-msg" class="field" rows="4" placeholder="Budget, special requests, pick-up point, dietary needs" value={message()} onInput={e => setMessage(e.currentTarget.value)} />
          </div>
        </Show>
      </div>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" class="btn btn-wa">
          <IconWhatsApp /> Send request on WhatsApp
        </button>
        <a href={mailto()} class="btn btn-line">
          Send by email instead
        </a>
      </div>
      <p class="mt-3 text-sm text-slate">We reply with a written quote, usually the same day. No payment is taken on this site.</p>

      <Show when={sent()}>
        <div class="mt-5 rounded-xl bg-sun p-4 text-sm" role="status">
          <p class="font-semibold">WhatsApp should have opened with your request.</p>
          <p class="mt-1">
            If it didn't,{" "}
            <a href={waLink(text())} class="underline" target="_blank" rel="noopener">
              open it here
            </a>{" "}
            or call {site.phoneDisplay}.
          </p>
        </div>
      </Show>
    </form>
  );
}
