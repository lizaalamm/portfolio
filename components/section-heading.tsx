import type { ReactNode } from "react";
import Reveal from "@/components/reveal";

type Props = {
  /** Small mono label, e.g. "Selected work". */
  eyebrow: string;
  title: string;
  description?: string;
  /** Two-digit section number shown before the eyebrow. */
  index?: string;
  /** Optional right-hand column (a note, a link, a count). */
  aside?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description, index, aside }: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-faint">
            {index ? (
              <>
                <span className="text-accent">{index}</span>
                <span className="h-px w-8 bg-line-2" aria-hidden="true" />
              </>
            ) : null}
            {eyebrow}
          </p>
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
