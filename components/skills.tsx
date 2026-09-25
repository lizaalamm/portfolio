import type { ComponentType } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
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
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="The stack I actually ship with."
          description="Grouped by where it sits in the system — the languages, the interface layer, the services behind it, the data it reads from, and the models it runs on."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((group, index) => {
            const Icon = icons[group.icon] ?? IconCode;
            const wide = index === 0;

            return (
              <Reveal
                key={group.title}
                delay={index * 60}
                className={wide ? "lg:col-span-2" : undefined}
              >
                <div className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-line-2 bg-paper-2/60 text-accent"
                      aria-hidden="true"
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className="text-[15.5px] font-semibold text-ink">{group.title}</h3>
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
