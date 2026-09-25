import { site } from "@/lib/site";
import { IconArrowRight, IconGithub, IconLinkedin, IconMail } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-dark-line bg-dark text-paper">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-[10px] border border-paper/20 text-[13px] font-semibold tracking-[0.08em] text-paper/80">
            {site.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[14.5px] font-medium text-paper">{site.name}</span>
            <span className="font-mono text-[11.5px] text-paper/55">{site.roleDetail}</span>
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-paper/70">
          <a
            href={`mailto:${site.contact.email}`}
            aria-label="Email"
            className="transition-colors hover:text-paper"
          >
            <IconMail size={18} />
          </a>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-paper"
          >
            <IconGithub size={18} />
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="transition-colors hover:text-paper"
          >
            <IconLinkedin size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-dark-line">
        <div className="shell flex flex-col gap-4 py-6 text-[12.5px] text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript &amp; Tailwind
            CSS.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            Back to top
            <IconArrowRight
              size={15}
              className="-rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
