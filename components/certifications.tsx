import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { IconAward, IconCheck } from "@/components/icons";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Certifications"
          title="Google certified, twice over."
          description="Two Google certificates completed in July 2026, covering interface design for the web and the foundations of project delivery."
          tone="amber"
          aside={
            <p className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint lg:justify-end">
              <IconAward size={15} className="text-amber" />
              Verified credentials
            </p>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {site.certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 90}>
              <article className="card relative h-full overflow-hidden p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-amber-wash opacity-90 blur-[50px]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber via-amber/30 to-transparent"
                />

                <div className="relative flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="tile size-14 shrink-0 border-amber/30 bg-amber-wash text-[19px] font-semibold text-amber-deep"
                  >
                    {cert.monogram}
                  </span>

                  <div>
                    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      <span className="text-amber-deep">{cert.issuer}</span>
                      <span className="text-line-2">·</span>
                      <span>Issued {cert.issued}</span>
                    </p>

                    <h3 className="mt-2.5 text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                      {cert.name}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.7] text-muted">{cert.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="chip border-amber/30 bg-amber-wash text-amber-deep">
                        <IconCheck size={13} />
                        {cert.focus}
                      </span>
                      {cert.skills.map((skill) => (
                        <span key={skill} className="chip font-mono text-[11.5px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}