import { tone as toneStyle } from "@/components/tone";

type Props = {
  label: string;
  nodes: readonly string[];
  tone: string;
};

/**
 * The request path, written as a plain technical caption rather than a stepped
 * widget: a quiet label, then the stages in reading order with the endpoint
 * emphasised. No numbers, no pills.
 */
export default function Flow({ label, nodes, tone }: Props) {
  const t = toneStyle(tone);
  const last = nodes.length - 1;

  return (
    <figure className={`border-l-2 pl-4 ${t.border}`}>
      <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
        {label}
      </figcaption>

      <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13.5px] leading-relaxed">
        {nodes.map((node, index) => (
          <span key={node} className="inline-flex items-baseline gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-[12px] text-line-2">
                →
              </span>
            ) : null}
            <span
              className={
                index === last
                  ? `font-medium ${t.text}`
                  : index === 0
                    ? "text-ink"
                    : "text-muted"
              }
            >
              {node}
            </span>
          </span>
        ))}
      </p>
    </figure>
  );
}