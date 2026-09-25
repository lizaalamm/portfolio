import type { ComponentType } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { tone as toneStyle } from "@/components/tone";
import {
  IconCode,
  IconDatabase,
  IconLayers,
  IconServer,
  IconShield,
  IconSparkles,
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-line bg-paper-2/50 py-20 md:py-28"
    >
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="The stack I actually ship with."
          description="Grouped by where each piece sits in the system: the languages, the interface layer, the services behind it, the data it reads from and the models it runs on."
          tone="teal"
        />

        {/* Bento grid: uneven spans keep the eye moving instead of a flat table */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {site.skills.map((group, index) => {
            const Icon = icons[group.icon] ?? IconCode;
            const t = toneStyle(group.tone);

            return (
              <Reveal key={group.title} delay={index * 60} className={group.span}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`tile size-9 shrink-0 ${t.wash} ${t.border} ${t.mark}`}
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className="text-[15.5px] font-semibold text-ink">{group.title}</h3>
                    <span className="ml-auto font-mono text-[11px] tabular-nums text-faint">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="chip text-[12.5px]">{item}</span>
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