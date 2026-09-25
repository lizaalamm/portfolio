import type { ComponentType } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import { tone as toneStyle } from "@/components/tone";
import {
  IconCode,
  IconDatabase,
  IconLayers,
  IconServer,
  IconSparkles,
  IconShield,
  IconTerminal,
} from "@/components/icons";

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  code: IconCode,
  layers: IconLayers,
  server: IconServer,
  database: IconDatabase,
  sparkles: IconSparkles,
  shield: IconShield,
  terminal: IconTerminal,
};

/**
 * Static stand in for the old marquee: the same technologies, laid out as a
 * readable board with an icon, a heading and chips per layer.
 */
export default function StackBoard() {
  return (
    <section aria-label="Technology stack" className="border-y border-line bg-paper-2/50">
      <div className="shell py-14 md:py-16">
        <Reveal>
          <h2 className="flex items-center gap-3 font-mono text-[11.5px] font-normal uppercase tracking-[0.18em] text-faint">
            <span className="h-px w-8 bg-line-2" aria-hidden="true" />
            What I build with
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {site.stackBoard.map((group, index) => {
            const t = toneStyle(group.tone);
            const Icon = icons[group.icon] ?? IconCode;

            return (
              <Reveal key={group.title} delay={index * 70}>
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`tile size-9 ${t.wash} ${t.border} ${t.mark}`}
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[14px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className={`size-1.5 shrink-0 rounded-full ${t.solid} opacity-60`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}