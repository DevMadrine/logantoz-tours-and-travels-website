import { createSignal, Show } from "solid-js";
import { IconClose } from "./Icons";

/** Review-only bar. Remove this component from app.tsx before launch. */
export default function DraftBanner() {
  const [shown, setShown] = createSignal(true);
  return (
    <Show when={shown()}>
      <div class="bg-paper text-slate">
        <div class="wrap flex items-center justify-between gap-4 py-1.5 text-[13px]">
          <p>
            <span class="mr-2 rounded-md bg-sun px-1.5 py-0.5 text-[11px] font-semibold text-black">Draft</span>
            Photos, the vehicle list and the sample itineraries are placeholders until Talmar Express supplies the real ones.
          </p>
          <button type="button" class="shrink-0 rounded-full p-1 hover:bg-black/5" onClick={() => setShown(false)} aria-label="Hide draft notice">
            <IconClose width={16} height={16} />
          </button>
        </div>
      </div>
    </Show>
  );
}
