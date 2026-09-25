"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
} from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-dark text-paper">
      <div className="shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-paper/60">
                <span className="text-accent-soft">05</span>
                <span className="h-px w-8 bg-paper/20" aria-hidden="true" />
                Contact
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-paper">
                Let&apos;s build something
                <br />
                that holds up in review.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-[36rem] text-[16px] leading-[1.75] text-paper/60">
                {site.availability}. If you need someone who can own a feature from the typed
                interface down to the query layer — and explain every decision on the way — I&apos;d
                like to hear from you.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-accent-wash"
                >
                  <IconMail size={16} />
                  Email me
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 px-4 py-3 font-mono text-[12.5px] text-paper/70 transition-colors duration-300 hover:border-paper/45 hover:text-paper"
                  aria-live="polite"
                >
                  {copied ? <IconCheck size={15} /> : <IconCopy size={15} />}
                  {copied ? "Copied" : site.contact.email}
                </button>

                <a
                  href={site.contact.resume}
                  className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 px-4 py-3 text-[13.5px] text-paper/70 transition-colors duration-300 hover:border-paper/45 hover:text-paper"
                >
                  <IconDownload size={15} />
                  {site.contact.resumeLabel}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Details rail ─────────────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <Reveal delay={160}>
              <dl className="divide-y divide-dark-line border-y border-dark-line">
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/60">
                    Based in
                  </dt>
                  <dd className="flex items-center gap-2 text-[14px] text-paper/85">
                    <IconMapPin size={15} className="text-accent-soft" />
                    {site.location}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/60">
                    Looking for
                  </dt>
                  <dd className="text-right text-[14px] text-paper/85">
                    Full-stack / AI engineering roles
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/60">
                    Primary stack
                  </dt>
                  <dd className="text-right text-[14px] text-paper/85">
                    TypeScript · React · Next.js · Python
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/60">
                    Elsewhere
                  </dt>
                  <dd className="flex items-center gap-4 text-paper/70">
                    <a
                      href={site.contact.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-[13.5px] transition-colors hover:text-paper"
                    >
                      <IconGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href={site.contact.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-[13.5px] transition-colors hover:text-paper"
                    >
                      <IconLinkedin size={16} />
                      LinkedIn
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
