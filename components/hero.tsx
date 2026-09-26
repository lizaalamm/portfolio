import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { IconArrowDown, IconArrowRight, IconDownload, IconGithub, IconLinkedin } from "@/components/icons";

/** Renders `accent` spans for anything wrapped in backticks. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <em key={index} className="font-display font-normal italic text-accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Layered backdrop: soft washes of every tone plus a fading hairline grid */}
      <div className="backdrop-grid" aria-hidden="true" />
      <div
        className="glow -top-24 left-[6%] h-[380px] w-[520px] bg-accent-wash opacity-70"
        aria-hidden="true"
      />
      <div
        className="glow -top-10 right-[4%] h-[320px] w-[420px] bg-indigo-wash opacity-70"
        aria-hidden="true"
      />
      <div
        className="glow top-[280px] right-[26%] h-[240px] w-[320px] bg-amber-wash opacity-60"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ── Identity and headline ─────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {site.name} <span aria-hidden="true">/</span> Full stack &amp; AI engineering
              </p>
            </Reveal>
            <h1 className="text-[clamp(2.15rem,6.4vw,4.1rem)] font-semibold leading-[1.05] tracking-[-0.032em] text-ink">
              {site.hero.headline.map((line, index) => (
                <Reveal as="span" key={line} delay={60 + index * 90} className="block">
                  <RichText text={line} />
                </Reveal>
              ))}
            </h1>

            <Reveal delay={330}>
              <p className="mt-7 max-w-[38rem] text-[16.5px] leading-[1.72] text-muted">
                {site.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={410}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-paper transition-colors duration-300 hover:bg-accent-2"
                >
                  View selected work
                  <IconArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href={site.contact.resume}
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface/70 px-5 py-3 text-[14px] font-medium text-ink-2 transition-colors duration-300 hover:border-accent hover:text-accent-2"
                >
                  <IconDownload size={16} />
                  {site.contact.resumeLabel}
                </a>
                <span className="inline-flex items-center gap-4 pl-1 text-faint">
                  <a
                    href={site.contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    className="transition-colors hover:text-accent-2"
                  >
                    <IconGithub size={19} />
                  </a>
                  <a
                    href={site.contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    className="transition-colors hover:text-accent-2"
                  >
                    <IconLinkedin size={19} />
                  </a>
                </span>
              </div>
            </Reveal>
          </div>

          {/* A project-led editorial index, rather than a mock code editor. */}
          <Reveal delay={240} className="lg:col-span-5">
            <aside aria-labelledby="build-index-title" className="relative overflow-hidden rounded-[1.5rem] border border-line-2 bg-paper-2 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-line-2 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">The build index</span>
                <span className="font-mono text-[10px] text-faint">01 — 02</span>
              </div>
              <h2 id="build-index-title" className="mt-7 text-[2.1rem] font-medium leading-[1.1] tracking-tight text-ink">
                Complex systems.<br />
                <em className="font-display font-normal text-accent">Human outcomes.</em>
              </h2>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
                Two different domains. The same care for everything behind the interface.
              </p>
              <div className="relative mt-8 divide-y divide-line-2 border-y border-line-2">
                {site.projects.map((project, index) => (
                  <a key={project.id} href="#work" className="group flex items-start gap-4 py-5">
                    <span className="pt-1 font-mono text-[10px] text-faint">0{index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-accent">{index === 0 ? "Healthcare × Applied AI" : "Security × Intelligence"}</span>
                      <h3 className="mt-1 text-[23px] font-semibold tracking-tight transition-colors group-hover:text-accent">{project.name}</h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{index === 0 ? "A clinical workspace connecting AI agents and human decisions." : "From behavioural signals to explainable threat response."}</p>
                    </div>
                    <IconArrowRight size={18} className="mt-6 shrink-0 -rotate-45 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-[11px] text-muted">Interface → Intelligence → Infrastructure</span>
                <span className="font-display text-2xl italic text-accent" aria-hidden="true">la.</span>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <Reveal delay={140}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-9 md:grid-cols-4">
            {site.hero.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0"
              >
                <dt className="mt-3 text-[12.5px] leading-snug text-faint">{stat.label}</dt>
                <dd
                  className={[
                    "text-[30px] font-semibold leading-none tracking-[-0.03em] tabular-nums",
                    index === 0 ? "text-accent-2" : index === 1 ? "text-ink" : index === 2 ? "text-amber-deep" : "text-indigo-deep",
                  ].join(" ")}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}