# Liza Alam — Portfolio

A single-page, statically exported portfolio for a **Full-Stack Developer** working in
TypeScript, React/Next.js and Python/FastAPI. Light, editorial, high-contrast — built to read
like a spec sheet rather than a splash page.

Content covers two completed remote internships, a multi-agent healthcare platform (NeuralHub),
and an AI-driven security operations centre (Cyron).

```
Next.js 15 (App Router, static export) · TypeScript (strict) · Tailwind CSS v4 · zero runtime services
```

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on `0.0.0.0:3000` |
| `npm run build` | Production build + static export into `out/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Next.js lint |

The site is deployed as plain HTML — `out/` can be dropped on any static host (Netlify, Vercel,
S3, nginx, Cloudflare Pages, GitHub Pages).

---

## Editing the content

**Everything you read on the page lives in [`lib/site.ts`](lib/site.ts).** No component edits are
needed to change copy, add a project, or reword a bullet.

| Key | What it controls |
| --- | --- |
| `name`, `initials`, `role`, `roleDetail`, `tagline`, `location`, `availability` | Identity used in the nav, hero, footer and metadata |
| `contact` | Email, phone, GitHub, LinkedIn, CV path |
| `hero` | Eyebrow, headline lines, intro paragraph, the four stat counters |
| `experience` | Internship entries — company, role, mode, duration, status, bullets, stack |
| `projects` | The expandable flagship cards: summary, role, metrics, highlights, architecture groups, stack |
| `supporting` | The two smaller "supporting builds" cards |
| `skills` | Skill groups (`icon` maps to a component in `components/icons.tsx`) |
| `marquee` | The scrolling technology strip |
| `about` | Manifesto paragraphs + the four principles |
| `nav` | Navbar links and section targets |

### Placeholders to replace

- [ ] `contact.email` — currently `hello@lizaalam.dev`
- [ ] `contact.linkedin` — confirm the profile URL
- [ ] `contact.phone` — add it and it renders; leave empty to hide
- [ ] `public/resume.pdf` — currently a generated placeholder that tells you to replace it
- [ ] Internship bullets — the wording is written from public information about both companies;
      make it match what *you* actually shipped
- [ ] Hero stat `20+ Product modules delivered` — adjust to a number you're happy defending

### Progressive disclosure note

The `hero.headline` array renders one line per entry. Wrap a word in backticks — `` `TypeScript` ``
— to render it in the accent serif italic.

---

## Design system

Tokens live at the top of [`app/globals.css`](app/globals.css) as Tailwind v4 `@theme` variables,
so every colour is available as a utility (`bg-paper`, `text-ink`, `border-line`, `text-accent`…).

| Token | Value | Role |
| --- | --- | --- |
| `--color-paper` / `--color-paper-2` | `#faf9f7` / `#f4f2ee` | Page background + tinted section bands |
| `--color-ink` / `--color-ink-2` | `#0a0a0b` / `#26282c` | Headlines and body-copy hierarchy |
| `--color-muted` / `--color-faint` | `#5d6166` / `#676c71` | Secondary and tertiary text (both AA on paper) |
| `--color-line` / `--color-line-2` | `#e7e4de` / `#d7d3cb` | Hairline rules and borders |
| `--color-accent` | `#0f766e` | The single accent — 5.2:1 on paper |
| `--color-accent-soft` | `#5dd0be` | Accent for dark surfaces — 10.4:1 on `--color-dark` |
| `--color-dark` | `#0b0d0e` | Contact + footer band |

To re-theme, change `--color-accent` (and `--color-accent-soft` for the dark band) — nothing else
needs touching.

Typography: **Inter** for the interface, **Fraunces italic** for editorial accents. Both are
self-hosted variable fonts in `app/fonts/` (SIL Open Font License — see `licenses/`), so there is
no request to Google Fonts at build or runtime.

---

## Accessibility & performance

Checked rather than assumed:

- **axe-core: 0 violations** on the rendered page.
- All body text meets WCAG AA contrast; decorative hairlines are the only sub-3:1 elements.
- Full keyboard support — skip link, focus-visible rings, `aria-expanded`/`aria-controls` on every
  disclosure, `inert` on the closed mobile sheet so nothing hidden is tabbable.
- `prefers-reduced-motion` disables every transition, animation and the marquee.
- Content stays visible with scripting disabled (`@media (scripting: none)`).
- Semantic structure: one `h1`, ordered `h2 → h3 → h4`, `ol` for the experience timeline, `dl` for
  stats and metadata, `figure`/`figcaption` for the code card.

Runtime cost is ~110 kB of first-load JS for a fully static page; there is no analytics, no
third-party script, and no backend.

---

## Project structure

```
app/
  layout.tsx            metadata, skip link, <html> shell
  page.tsx              section composition
  globals.css           design tokens, @font-face, base + utility CSS
  icon.svg              favicon
  fonts/                self-hosted Inter + Fraunces (woff2)
components/
  nav.tsx               sticky nav, scroll progress, section spy, mobile sheet
  hero.tsx              headline, type-snippet card, stats, marquee
  projects.tsx          expandable flagship cards + supporting builds
  experience.tsx        internship timeline
  skills.tsx            skill groups
  about.tsx             manifesto + working principles
  contact.tsx           dark contact band with copy-to-clipboard email
  footer.tsx            footer
  section-heading.tsx   shared numbered section header
  reveal.tsx            IntersectionObserver fade-in wrapper
  icons.tsx             inline SVG icon set (no icon library)
lib/site.ts             ALL site content
public/                 resume.pdf, .nojekyll
licenses/               Inter + Fraunces OFL licences
```

---

## Deploying to GitHub Pages

A workflow is included at `.github/workflows/deploy.yml` (build → upload `out/` → deploy).

1. Push to `main`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. The workflow builds with `NEXT_PUBLIC_BASE_PATH=/<repo-name>`, which is what a *project* site
   such as `https://<user>.github.io/portfolio/` needs.

> If you rename the repository to `<user>.github.io`, delete the `NEXT_PUBLIC_BASE_PATH` env block
> in the workflow — a user site is served from the domain root and must not have a base path.

Any host that serves static files works the same way: `npm run build`, then publish `out/`.
