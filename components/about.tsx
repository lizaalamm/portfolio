import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { tone as toneStyle } from "@/components/tone";
import { IconCheck } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="How I work"
          title={site.about.heading}
          tone="indigo"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="frame" data-tone="indigo">
                <blockquote className="relative overflow-hidden rounded-[1.05rem] bg-surface px-7 py-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-10 font-display text-[9rem] italic leading-none text-indigo/10"
                  >
                    &rdquo;
                  </span>
                  <p className="relative font-display text-[clamp(1.3rem,2.3vw,1.7rem)] italic leading-[1.45] tracking-[-0.01em] text-ink">
                    {site.tagline}
                  </p>
                </blockquote>
              </div>
            </Reveal>

            <div className="mt-9 space-y-5">
              {site.about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={80 + index * 70}>
                  <p className="text-[15.5px] leading-[1.8] text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {site.about.principles.map((principle, index) => {
                const t = toneStyle(principle.tone);

                return (
                  <Reveal key={principle.title} delay={index * 70}>
                    <div className="card h-full p-6">
                      <span
                        aria-hidden="true"
                        className={`tile size-7 ${t.wash} ${t.border} ${t.mark}`}
                      >
                        <IconCheck size={14} />
                      </span>
                      <h3 className="mt-4 text-[15px] font-semibold text-ink">{principle.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-[1.65] text-muted">
                        {principle.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}