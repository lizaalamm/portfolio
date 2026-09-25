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
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-dark text-paper">
      {/* Depth for the closing band: a teal and indigo wash over near black */}
      <div
        aria-hidden="true"
        className="glow -top-24 left-[10%] h-[320px] w-[420px] opacity-25"
        style={{ background: "#0f766e" }}
      />
      <div
        aria-hidden="true"
        className="glow bottom-[-80px] right-[6%] h-[300px] w-[380px] opacity-20"
        style={{ background: "#4338ca" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/50 to-transparent"
      />

      <div className="shell relative py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-[2.6rem] italic leading-none tabular-nums text-accent-soft/30 md:text-[3.4rem]"
                >
                  06
                </span>
                <span className="flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.18em] text-paper/60">
                  <span className="size-1.5 rounded-full bg-accent-soft" aria-hidden="true" />
                  Contact
                </span>
              </div>
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
                interface down to the query layer, and explain every decision along the way, I would
                like to hear from you.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-paper px-5 py-3 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-accent-wash"
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
                    Full stack and AI engineering roles
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-paper/60">
                    Primary stack
                  </dt>
                  <dd className="text-right text-[14px] text-paper/85">
                    React, Next.js, TypeScript, Python
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