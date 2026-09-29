export default function SampleTag(props: { class?: string }) {
  return (
    <span class={`inline-flex items-center rounded-md border border-dashed border-black/60 bg-white/90 px-1.5 py-0.5 text-[11px] font-medium text-black ${props.class ?? ""}`}>
      Sample
    </span>
  );
}
