import type { ReactNode } from "react";
import Reveal from "@/components/reveal";
import { tone as toneStyle } from "@/components/tone";

type Props = {
  /** Small mono label, e.g. "Selected work". */
  eyebrow: string;
  title: string;
  description?: string;
  /** Two digit section number, drawn as an oversized ghost numeral. */
  index?: string;
  /** teal | indigo | amber, controls the numeral and the rule. */
  tone?: string;
  /** Optional right hand column (a note, a link, a count). */
  aside?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  tone = "teal",
  aside,
}: Props) {
  const t = toneStyle(tone);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <Reveal>
          <div className="flex items-center gap-4">
            {index ? (
              <span
                aria-hidden="true"
                className={`font-display text-[2.6rem] italic leading-none tabular-nums md:text-[3.4rem] ${t.ghost}`}
              >
                {index}
              </span>
            ) : null}
            <span className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-faint">
              <span className={`size-1.5 rounded-full ${t.solid}`} aria-hidden="true" />
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
        </Reveal>

        {description ? (
          <Reveal delay={130}>
            <p className="mt-5 max-w-[42rem] text-[16px] leading-[1.75] text-muted">{description}</p>
          </Reveal>
        ) : null}
      </div>

      {aside ? (
        <Reveal delay={180} className="lg:col-span-4 lg:justify-self-end lg:text-right">
          {aside}
        </Reveal>
      ) : null}
    </div>
  );
}