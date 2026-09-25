"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { IconClose, IconDownload, IconMenu } from "@/components/icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  /* Scroll state + reading progress */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Section spy */
  useEffect(() => {
    const ids = site.nav.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Body scroll lock while the mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className="progress-bar"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <nav className="shell flex h-[68px] items-center justify-between gap-6" aria-label="Primary">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
            <span className="grid size-9 place-items-center rounded-[10px] border border-line-2 bg-surface text-[13px] font-semibold tracking-[0.08em] text-accent transition-colors duration-300 group-hover:border-accent">
              {site.initials}
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[15px] font-semibold text-ink">{site.name}</span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] text-faint">
                {site.role}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-active={isActive ? "true" : "false"}
                    className={[
                      "link-underline text-[13.5px] transition-colors duration-300",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.contact.resume}
              className="hidden items-center gap-2 rounded-full border border-line-2 px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors duration-300 hover:border-accent hover:text-accent-2 lg:inline-flex"
            >
              <IconDownload size={15} />
              {site.contact.resumeLabel}
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-colors duration-300 hover:bg-accent-2 sm:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-line-2 text-ink-2 transition-colors hover:border-accent hover:text-accent-2 md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <IconMenu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={[
          "fixed inset-0 z-[70] flex flex-col bg-paper transition-[opacity,visibility] duration-300 md:hidden",
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <span className="text-[11.5px] uppercase tracking-[0.18em] text-faint">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full border border-line-2 text-ink-2"
            aria-label="Close menu"
          >
            <IconClose size={18} />
          </button>
        </div>

        <div className="shell flex flex-1 flex-col justify-between pb-10 pt-6">
          <ul className="flex flex-col">
            {site.nav.map((item, index) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 text-[26px] font-medium tracking-[-0.02em] text-ink"
                >
                  {item.label}
                  <span className="font-mono text-[11px] text-faint">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <a
              href={site.contact.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-2 px-5 py-3 text-[14px] font-medium text-ink-2"
            >
              <IconDownload size={16} />
              {site.contact.resumeLabel}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-paper"
            >
              Get in touch
            </a>
            <p className="text-[12.5px] text-faint">{site.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
