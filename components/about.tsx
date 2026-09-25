import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { IconCheck } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-paper-2/45 py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="04" eyebrow="How I work" title={site.about.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-display text-[clamp(1.35rem,2.4vw,1.75rem)] italic leading-[1.45] tracking-[-0.01em] text-ink">
                  “{site.tagline}”
                </p>
              </blockquote>
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
              {site.about.principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 70}>
                  <div className="card h-full p-6">
                    <span
                      className="grid size-7 place-items-center rounded-full border border-accent/25 bg-accent-wash text-accent"
                      aria-hidden="true"
                    >
                      <IconCheck size={14} />
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold text-ink">{principle.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.65] text-muted">{principle.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
