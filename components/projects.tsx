"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import Flow from "@/components/flow";
import { tone as toneStyle } from "@/components/tone";
import { IconChevron, IconFlow } from "@/components/icons";

type Project = (typeof site.projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `${project.id}-architecture`;
  const t = toneStyle(project.tone);

  return (
    <Reveal delay={index * 90}>
      <article className="card relative overflow-hidden">
        {/* Tone wash in the corner, plus an identity bar down the left edge */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-[0.13] blur-[70px]"
          style={{ background: t.hex }}
        />
        <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-[3px] ${t.solid}`} />

        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className={`font-mono text-[12px] tabular-nums ${t.mark}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`h-px w-6 ${t.solid}`} aria-hidden="true" />
              <span
                className={`font-mono text-[11.5px] uppercase tracking-[0.14em] ${t.text}`}
              >
                {project.kicker}
              </span>
            </div>

            <h3 className="mt-4 text-[clamp(1.7rem,3.2vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              {project.name}
            </h3>

            <p className="mt-5 max-w-[46rem] text-[15.5px] leading-[1.75] text-muted">
              {project.summary}
            </p>

            <p className="mt-6 flex flex-wrap items-center gap-2 text-[13px] text-ink-2">
              <IconFlow size={16} className={t.mark} />
              <span className="font-medium">Role</span>
              <span className="text-faint">·</span>
              <span className="text-muted">{project.role}</span>
            </p>

            <div className="mt-7">
              <Flow label={project.flowLabel} nodes={project.flow} tone={project.tone} />
            </div>

            <ul className="mt-8 space-y-3.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3.5 text-[14.5px] leading-[1.7]">
                  <span aria-hidden="true" className={`mt-[0.62em] h-px w-3.5 shrink-0 ${t.solid}`} />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Metric rail ───────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <dl className="grid grid-cols-3 gap-4 rounded-xl border border-line bg-paper-2/50 p-5 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-line lg:p-0">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="lg:px-5 lg:py-4">
                  <dt className="text-[11.5px] uppercase tracking-[0.12em] text-faint">
                    {metric.label}
                  </dt>
                  <dd
                    className={`mt-1.5 text-[21px] font-semibold leading-none tracking-[-0.02em] ${t.text}`}
                  >
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ── Expandable architecture and stack ───────────────────────── */}
        <div className="border-t border-line">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group flex w-full items-center justify-between gap-4 px-7 py-4 text-left transition-colors hover:bg-paper-2/50 md:px-9"
          >
            <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-2">
              Architecture and data flow
            </span>
            <span className="flex items-center gap-2 text-[12.5px] text-muted">
              {open ? "Collapse" : "Expand"}
              <IconChevron
                size={16}
                className={[
                  "transition-transform duration-500",
                  t.mark,
                  open ? "rotate-180" : "",
                ].join(" ")}
              />
            </span>
          </button>

          <div className="disclosure" data-open={open} id={panelId}>
            <div>
              <div className="grid gap-8 border-t border-line px-7 py-8 md:px-9 lg:grid-cols-3">
                {project.architecture.map((group) => (
                  <div key={group.label}>
                    <h4 className="text-[14px] font-semibold text-ink">{group.label}</h4>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[13.5px] leading-[1.65] text-muted">
                          <span
                            aria-hidden="true"
                            className={`mt-[0.55em] size-1.5 shrink-0 rounded-full ${t.solid} opacity-50`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="border-t border-line px-7 py-7 md:px-9">
                <h4 className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-faint">
                  Built with
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="chip">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Two platforms, built end to end."
          description="Both projects run from interface to infrastructure: typed clients, layered APIs, real data models and the retrieval or detection logic that makes them useful. Expand either card for the full architecture."
          tone="teal"
          aside={
            <p className="font-mono text-[12px] leading-relaxed text-faint">
              <span className="text-accent-2">Healthcare</span>
              <span className="text-line-2"> · </span>
              <span className="text-ink-2">Multiple AI agents</span>
              <br />
              <span className="text-indigo-deep">Cybersecurity</span>
              <span className="text-line-2"> · </span>
              <span className="text-ink-2">Detection and response</span>
            </p>
          }
        />

        <div className="mt-14 space-y-8">
          {site.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}