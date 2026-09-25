import { tone as toneStyle } from "@/components/tone";

type Props = {
  label: string;
  nodes: readonly string[];
  tone: string;
};

/**
 * A pipeline strip: numbered nodes joined by arrows. Purely typographic, so it
 * stays legible at every size and needs no image assets.
 */
export default function Flow({ label, nodes, tone }: Props) {
  const t = toneStyle(tone);

  return (
    <div className="rounded-xl border border-line bg-paper-2/40 px-4 py-3.5">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">{label}</p>

      <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {nodes.map((node, index) => (
          <li key={node} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden="true" className="flow-arrow mr-1.5" />
            ) : null}
            <span
              className={[
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium",
                index === 0
                  ? `${t.border} ${t.wash} ${t.text}`
                  : "border-line bg-surface text-ink-2",
              ].join(" ")}
            >
              <span className="font-mono text-[10px] tabular-nums opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              {node}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}