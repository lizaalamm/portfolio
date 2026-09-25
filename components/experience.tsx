import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { tone as toneStyle } from "@/components/tone";
import { IconCheck, IconClock, IconGlobe } from "@/components/icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-line bg-paper-2/50 py-20 md:py-28"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Two remote internships, both completed."
          description="Two three month remote engineering internships, run fully distributed with async standups, scoped feature branches and pull request review. Both are finished."
          tone="indigo"
          aside={
            <ul className="inline-flex flex-col gap-2.5 text-left font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint lg:text-right">
              <li className="flex items-center gap-2 lg:justify-end">
                <IconGlobe size={14} className="text-indigo" /> Fully remote
              </li>
              <li className="flex items-center gap-2 lg:justify-end">
                <IconClock size={14} className="text-indigo" /> 3 months each
              </li>
              <li className="flex items-center gap-2 lg:justify-end">
                <IconCheck size={14} className="text-indigo" /> Completed
              </li>
            </ul>
          }
        />

        {/* Timeline: a hairline rail with a tone coloured node per role */}
        <ol className="mt-14 space-y-0">
          {site.experience.map((job, index) => {
            const t = toneStyle(job.tone);

            return (
              <li key={job.company} className="relative">
                <Reveal delay={index * 90}>
                  <div className="grid gap-8 border-t border-line-2 pb-12 pl-10 pt-10 md:pl-14 lg:grid-cols-12 lg:gap-12">
                    {/* Rail stops at the last entry so the timeline has an end */}
                    {index < site.experience.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[9px] top-12 bottom-0 w-px bg-line-2 md:left-[13px]"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-[46px] grid size-[19px] place-items-center rounded-full border border-line-2 bg-surface md:left-1`}
                    >
                      <span className={`size-[9px] rounded-full ${t.solid}`} />
                    </span>

                    {/* Company and meta */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`tile size-10 ${t.wash} ${t.border} ${t.text} text-[13px] font-semibold tracking-[0.06em]`}
                        >
                          {job.monogram}
                        </span>
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          {job.company}
                        </h3>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="chip">
                          <IconGlobe size={13} className={t.mark} />
                          {job.mode}
                        </span>
                        <span className="chip">
                          <IconClock size={13} className={t.mark} />
                          {job.duration}
                        </span>
                        <span className={`chip ${t.border} ${t.wash} ${t.text}`}>
                          <IconCheck size={13} />
                          {job.period}
                        </span>
                      </div>

                      <p className="mt-5 text-[14px] leading-[1.7] text-muted">{job.summary}</p>
                    </div>

                    {/* Role, contribution, stack */}
                    <div className="lg:col-span-8">
                      <h4 className="text-[17px] font-semibold text-ink">{job.role}</h4>

                      <ul className="mt-5 space-y-3.5">
                        {job.highlights.map((item) => (
                          <li key={item} className="flex gap-3.5 text-[14.5px] leading-[1.7]">
                            <span
                              aria-hidden="true"
                              className={`mt-[0.62em] h-px w-3.5 shrink-0 ${t.solid}`}
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
            );
          })}
        </ol>
      </div>
    </section>
  );
}