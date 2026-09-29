import { useNavigate } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import { serviceOptions } from "./QuoteForm";

/** The yellow band under the hero. Three questions, then straight to the quote page. */
export default function QuickQuote() {
  const navigate = useNavigate();
  const [service, setService] = createSignal("tour");
  const [date, setDate] = createSignal("");
  const [pax, setPax] = createSignal("2");
  const go = (e: Event) => {
    e.preventDefault();
    const q = new URLSearchParams({ service: service(), pax: pax() });
    if (date()) q.set("date", date());
    navigate(`/quote?${q.toString()}`);
  };
  return (
    <form onSubmit={go} class="grid gap-3 md:grid-cols-[1.6fr_1fr_0.8fr_auto] md:items-end">
      <div>
        <label class="label" for="qq-service">What are you planning?</label>
        <select id="qq-service" class="field" onInput={e => setService(e.currentTarget.value)}>
          <For each={serviceOptions}>{o => <option value={o.value} selected={o.value === service()}>{o.label}</option>}</For>
        </select>
      </div>
      <div>
        <label class="label" for="qq-date">When?</label>
        <input id="qq-date" type="date" class="field" value={date()} onInput={e => setDate(e.currentTarget.value)} />
      </div>
      <div>
        <label class="label" for="qq-pax">How many?</label>
        <input id="qq-pax" type="number" min="1" class="field" value={pax()} onInput={e => setPax(e.currentTarget.value)} />
      </div>
      <button type="submit" class="btn btn-ink h-[50px]">
        Get a quote
      </button>
    </form>
  );
}
