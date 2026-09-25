import Reveal from "@/components/reveal";
import { site } from "@/lib/site";
import { IconArrowDown, IconDownload, IconMapPin, IconGithub, IconLinkedin } from "@/components/icons";

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
    <section id="top" className="relative overflow-hidden pt-[120px] pb-0">
      <div className="backdrop-grid" aria-hidden="true" />
      <div
        className="backdrop-glow -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-accent-wash"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ── Left: identity + headline ───────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2.5 pr-3.5 text-[12.5px] text-muted backdrop-blur">
                <span className="relative grid size-2 place-items-center">
                  <span className="absolute size-2 animate-ping rounded-full bg-accent/60" />
                  <span className="size-2 rounded-full bg-accent" />
                </span>
                {site.availability}
              </span>
            </Reveal>

            <h1 className="mt-7 text-[clamp(2.1rem,6.6vw,4.15rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
              {site.hero.headline.map((line, index) => (
                <Reveal
                  as="span"
                  key={line}
                  delay={80 + index * 90}
                  className="block"
                >
                  <RichText text={line} />
                </Reveal>
              ))}
            </h1>

            <Reveal delay={340}>
              <p className="mt-7 max-w-[38rem] text-[16.5px] leading-[1.7] text-muted">
                {site.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-paper transition-colors duration-300 hover:bg-accent-2"
                >
                  View selected work
                  <IconArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href={site.contact.resume}
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-3 text-[14px] font-medium text-ink-2 transition-colors duration-300 hover:border-accent hover:text-accent-2"
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

            <Reveal delay={500}>
              <p className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-faint">
                <IconMapPin size={14} />
                {site.location}
                <span aria-hidden="true" className="text-line-2">
                  /
                </span>
                {site.roleDetail}
              </p>
            </Reveal>
          </div>

          {/* ── Right: signature type snippet ───────────────────────────── */}
          <Reveal delay={280} className="lg:col-span-5 lg:pt-6">
            <figure className="card overflow-hidden shadow-soft">
              <figcaption className="flex items-center gap-2 border-b border-line bg-paper-2/60 px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full border border-line-2" />
                  <span className="size-2.5 rounded-full border border-line-2" />
                  <span className="size-2.5 rounded-full border border-line-2" />
                </span>
                <span className="ml-1 font-mono text-[11.5px] text-faint">engineer.ts</span>
                <span className="ml-auto font-mono text-[11px] text-faint">strict</span>
              </figcaption>

              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.85] text-ink-2">
                <code>
                  <span className="text-accent">interface</span> Engineer {"{"}
                  {"\n  "}name: <span className="text-accent-2">&quot;{site.name}&quot;</span>;
                  {"\n  "}role: <span className="text-accent-2">&quot;{site.role}&quot;</span>;
                  {"\n  "}stack: <span className="text-accent">readonly</span> [
                  {"\n    "}<span className="text-accent-2">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-accent-2">&quot;Next.js&quot;</span>,
                  {"\n    "}<span className="text-accent-2">&quot;FastAPI&quot;</span>,{" "}
                  <span className="text-accent-2">&quot;PostgreSQL&quot;</span>,
                  {"\n  "}];
                  {"\n  "}focus: <span className="text-accent-2">&quot;agentic systems&quot;</span>;
                  {"\n  "}internships: <span className="text-accent-2">2</span>;{" "}
                  <span className="text-faint">// remote, completed</span>
                  {"\n  "}ship(idea: <span className="text-accent">Spec</span>):{" "}
                  <span className="text-accent">Production</span>;
                  {"\n"}
                  {"}"}
                </code>
              </pre>

              <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3.5">
                {["typed contracts", "layered architecture", "RAG pipelines"].map((tag) => (
                  <span key={tag} className="chip font-mono text-[11px] uppercase tracking-[0.08em]">
                    {tag}
                  </span>
                ))}
              </div>
            </figure>
          </Reveal>
        </div>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <Reveal delay={140}>
          <dl className="mt-20 grid grid-cols-2 gap-y-8 border-t border-line pt-9 md:grid-cols-4">
            {site.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse px-0 md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0"
              >
                <dt className="mt-3 text-[12.5px] leading-snug uppercase tracking-[0.12em] text-faint">
                  {stat.label}
                </dt>
                <dd className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-ink tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ── Marquee ───────────────────────────────────────────────────── */}
      <div className="mt-16 border-y border-line bg-paper-2/40 py-4">
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee__track" key={copy}>
              {site.marquee.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex shrink-0 items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.16em] text-faint"
                >
                  {item}
                  <span className="text-line-2">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="sr-only">Technologies: {site.marquee.join(", ")}.</p>
      </div>
    </section>
  );
}
