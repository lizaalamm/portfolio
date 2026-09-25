import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { IconArrowDown, IconDownload, IconGithub, IconLinkedin } from "@/components/icons";

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

const CODE_LINES: { text: string; cls?: string }[] = [
  { text: "interface Engineer {", cls: "text-accent" },
  { text: '  name: "Liza Alam";' },
  { text: '  role: "Full Stack Developer";' },
  { text: "  stack: readonly [", cls: "text-accent" },
  { text: '    "React", "Next.js",' },
  { text: '    "TypeScript", "Python",' },
  { text: "  ];" },
  { text: '  focus: "agent systems";' },
  { text: "  internships: 2; // remote, completed" },
  { text: "  ship(idea: Spec): Production;", cls: "text-accent" },
  { text: "}" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] pb-20">
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

          {/* ── Signature type snippet ────────────────────────────────────── */}
          <Reveal delay={240} className="lg:col-span-5">
            <div className="frame" data-tone="teal">
              <figure className="overflow-hidden rounded-[1.05rem] bg-surface">
                <figcaption className="flex items-center gap-2 border-b border-line bg-paper-2/70 px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-accent/70" />
                    <span className="size-2.5 rounded-full bg-indigo/60" />
                    <span className="size-2.5 rounded-full bg-amber/60" />
                  </span>
                  <span className="ml-1 font-mono text-[11.5px] text-faint">engineer.tsx</span>
                  <span className="ml-auto font-mono text-[11px] text-faint">strict</span>
                </figcaption>

                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.85] text-ink-2">
                  <code>
                    {CODE_LINES.map((line, index) => (
                      <span key={line.text} className={line.cls}>
                        {line.text}
                        {index < CODE_LINES.length - 1 ? "\n" : ""}
                      </span>
                    ))}
                  </code>
                </pre>

                <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3.5">
                  {["typed contracts", "layered architecture", "retrieval pipelines"].map((tag) => (
                    <span
                      key={tag}
                      className="chip font-mono text-[11px] uppercase tracking-[0.08em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </figure>
            </div>
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