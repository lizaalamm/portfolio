import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { IconCheck, IconClock, IconGlobe } from "@/components/icons";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-line bg-paper-2/45 py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Two remote internships, both completed."
          description="Two three-month remote engineering internships, run fully distributed — async standups, scoped feature branches and pull-request review. Both have been completed."
          aside={
            <ul className="inline-flex flex-col gap-2.5 text-left font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint lg:text-right">
              <li className="flex items-center gap-2 lg:justify-end">
                <IconGlobe size={14} className="text-accent" /> 100% remote
              </li>
              <li className="flex items-center gap-2 lg:justify-end">
                <IconClock size={14} className="text-accent" /> 3 months each
              </li>
              <li className="flex items-center gap-2 lg:justify-end">
                <IconCheck size={14} className="text-accent" /> Completed
              </li>
            </ul>
          }
        />

        <ol className="mt-14">
          {site.experience.map((job, index) => (
            <li key={job.company}>
              <Reveal delay={index * 90}>
                <div className="grid gap-8 border-t border-line-2 py-10 lg:grid-cols-12 lg:gap-12">
                  {/* Left rail — company + meta */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] tabular-nums text-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
                        {job.company}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="chip">
                        <IconGlobe size={13} className="text-accent" />
                        {job.mode}
                      </span>
                      <span className="chip">
                        <IconClock size={13} className="text-accent" />
                        {job.duration}
                      </span>
                      <span className="chip border-accent/30 bg-accent-wash text-accent-2">
                        <IconCheck size={13} />
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-5 text-[14px] leading-[1.7] text-muted">{job.summary}</p>
                  </div>

                  {/* Right — role, contribution, stack */}
                  <div className="lg:col-span-8">
                    <h4 className="text-[17px] font-semibold text-ink">{job.role}</h4>

                    <ul className="mt-5 space-y-3.5">
                      {job.highlights.map((item) => (
                        <li key={item} className="flex gap-3.5 text-[14.5px] leading-[1.7]">
                          <span
                            aria-hidden="true"
                            className="mt-[0.62em] h-px w-3.5 shrink-0 bg-accent"
                          />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li key={tech}>
                          <span className="chip font-mono text-[11.5px]">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
