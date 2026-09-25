"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { IconChevron, IconFlow } from "@/components/icons";

type Project = (typeof site.projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `${project.id}-architecture`;

  return (
    <Reveal delay={index * 90}>
      <article className="card overflow-hidden">
        {/* ── Card head ───────────────────────────────────────────────── */}
        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[12px] tabular-nums text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-6 bg-line-2" aria-hidden="true" />
              <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-accent-2">
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
              <IconFlow size={16} className="text-accent" />
              <span className="font-medium">Role</span>
              <span className="text-faint">·</span>
              <span className="text-muted">{project.role}</span>
            </p>

            <ul className="mt-8 space-y-3.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3.5 text-[14.5px] leading-[1.7] text-ink-2">
                  <span
                    aria-hidden="true"
                    className="mt-[0.62em] h-px w-3.5 shrink-0 bg-accent"
                  />
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
                  <dd className="mt-1.5 text-[21px] font-semibold leading-none tracking-[-0.02em] text-ink">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ── Expandable architecture + stack ─────────────────────────── */}
        <div className="border-t border-line">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group flex w-full items-center justify-between gap-4 px-7 py-4 text-left transition-colors hover:bg-paper-2/50 md:px-9"
          >
            <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-2">
              Architecture &amp; data flow
            </span>
            <span className="flex items-center gap-2 text-[12.5px] text-muted">
              {open ? "Collapse" : "Expand"}
              <IconChevron
                size={16}
                className={[
                  "text-accent transition-transform duration-500",
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
                        <li
                          key={item}
                          className="flex gap-3 text-[13.5px] leading-[1.65] text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-line-2"
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
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Two systems, built end to end."
          description="Both projects run from interface to infrastructure: typed clients, layered APIs, real data models, and the retrieval or detection logic that makes them useful. Expand either card for the architecture."
          aside={
            <p className="font-mono text-[12px] leading-relaxed text-faint">
              <span className="text-ink-2">Healthcare · Agentic RAG</span>
              <br />
              <span className="text-ink-2">Cybersecurity · Detection &amp; response</span>
            </p>
          }
        />

        <div className="mt-14 space-y-8">
          {site.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Supporting builds ────────────────────────────────────────── */}
        <div className="mt-16">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-faint">
              <span className="h-px w-8 bg-line-2" aria-hidden="true" />
              Supporting builds
            </p>
          </Reveal>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {site.supporting.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <article className="card relative h-full overflow-hidden p-6 pl-7">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-6 left-0 w-[3px] rounded-r-full bg-accent/70"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    {item.context}
                  </p>
                  <h3 className="mt-3 text-[17.5px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-muted">{item.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <span className="chip font-mono text-[11.5px]">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
