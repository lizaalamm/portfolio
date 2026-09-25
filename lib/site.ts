/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything the page renders comes from this file. Update your details here
 *  and the whole site follows — no component edits required.
 *
 *  Anything wrapped in  /** TODO *\/  is a placeholder waiting on your input.
 */

/**
 * Assets in `public/` are served from the deployment root. When the site is
 * hosted under a base path (e.g. a GitHub Pages project site at /portfolio),
 * this keeps the reference correct instead of 404-ing.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
export const asset = (path: string) =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export const site = {
  name: "Liza Alam",
  initials: "LA",
  role: "Full-Stack Developer",
  roleDetail: "TypeScript · React & Next.js · Python & FastAPI",
  tagline: "Typed end to end — from the interface to the API that backs it.",
  location: "Islamabad, Pakistan",
  availability: "Open to full-stack & AI engineering roles — remote or on-site",

  /** Contact — share your CV/details and these get filled in one pass. */
  contact: {
    email: "hello@lizaalam.dev", // TODO: replace with your real email
    phone: "", // TODO: e.g. "+92 3XX XXXXXXX" (leave empty to hide)
    github: "https://github.com/lizaalamm",
    linkedin: "https://www.linkedin.com/in/lizaalamm/", // TODO: confirm your LinkedIn slug
    resume: asset("/resume.pdf"), // drop your CV at public/resume.pdf
    resumeLabel: "Download CV",
  },

  hero: {
    /**
     * One entry per line — line breaks are intentional.
     * Wrap a word in backticks to render it in the accent serif italic.
     */
    headline: [
      "I build full-stack products",
      "in `TypeScript` — and ship",
      "the systems behind them.",
    ],
    intro:
      "I work across the whole stack: Next.js and React on the client, FastAPI, PostgreSQL and vector databases behind it, wired together with strictly typed contracts. Two remote engineering internships completed, and two production-grade platforms shipped — a multi-agent healthcare system and an AI-driven security operations centre.",
    stats: [
      { value: "2", label: "Remote internships completed" },
      { value: "2", label: "Platforms shipped end to end" },
      { value: "20+", label: "Product modules delivered" },
      { value: "3", label: "Languages: TypeScript, Python, SQL" },
    ],
  },

  /**
   * Experience — both internships were fully remote and are now complete.
   * TODO: confirm company display names + swap the bullets for your real work.
   */
  experience: [
    {
      company: "CarbonRepro",
      role: "Full-Stack Developer Intern",
      mode: "Remote",
      duration: "3 months",
      period: "Completed",
      summary:
        "Shipped production web platform features for a US-based digital agency that builds web apps, e-commerce and AI automation for clients across the USA.",
      highlights: [
        "Built and shipped customer-facing web platform features with React, Next.js and TypeScript, from component to deployment.",
        "Integrated REST APIs and third-party services, adding typed client contracts so request/response shapes were validated at compile time.",
        "Worked inside a distributed, multi-timezone team with async standups, pull-request review and scoped feature branches.",
        "Contributed to performance and accessibility passes — tightening Core Web Vitals and keyboard/screen-reader behaviour on key flows.",
      ],
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "REST APIs", "Git & PR workflow"],
    },
    {
      company: "U Devs",
      role: "Software Engineering Intern",
      mode: "Remote",
      duration: "3 months",
      period: "Completed",
      summary:
        "Worked on custom software and AI-assisted platforms — building business application features and the API layers underneath them.",
      highlights: [
        "Developed business application modules (dashboards, data flows, role-aware views) with React and TypeScript on the front end.",
        "Contributed API endpoints and data models in Python, keeping validation schemas explicit at every boundary.",
        "Implemented authentication and role-based access flows so permissions were enforced consistently across the UI.",
        "Participated in code reviews and release cycles, shipping incrementally on feature branches with clear pull-request descriptions.",
      ],
      stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "REST APIs", "Git"],
    },
  ],

  /**
   * Smaller, supporting builds — real artifacts from the two projects above.
   */
  supporting: [
    {
      name: "Doctor portal — local P0 stack",
      context: "NeuralHub",
      body: "An isolated, production-free review stack: a single compose file brings up PostgreSQL, Redis and the doctor-only backend with explicit demo-data gates and background jobs switched off, so reviewers can exercise the portal from a clean clone.",
      stack: ["Docker Compose", "FastAPI", "PostgreSQL", "Redis", "Next.js"],
    },
    {
      name: "Region-aware threat-intelligence ingestion",
      context: "Cyron",
      body: "One-time import scripts that load URLhaus, AbuseIPDB, MalwareBazaar, FeodoTracker, OpenPhish and ThreatFox feeds, plus Pakistan-specific fraud and APT profiles, into PostgreSQL — persisted in the database volume and re-runnable on a fresh machine.",
      stack: ["Python", "Pandas", "PostgreSQL", "REST APIs", "MITRE ATT&CK"],
    },
  ],

  /** Flagship projects — the deepest proof of work on the page. */
  projects: [
    {
      id: "neuralhub",
      name: "NeuralHub",
      kicker: "Enterprise multi-agent healthcare platform",
      summary:
        "A high-contrast, multi-agent clinical workspace for medical professionals: secure per-patient environments, robust validation schemas, and real-time retrieval across distributed knowledge indices. The client never touches the database — every read and write flows through verified API controllers.",
      role: "Full-Stack Engineer — API layer, agent workspace & RAG pipeline",
      metrics: [
        { value: "5", label: "Specialised agents" },
        { value: "3-layer", label: "Route → controller → service" },
        { value: "Sub-second", label: "Vector retrieval target" },
      ],
      highlights: [
        "Architected a strict three-layer split (routes → controllers → services) in FastAPI so no loose connections, raw schema queries or external vector evaluation loops can escape the API layer.",
        "Built the document ingestion pipeline: authenticated multipart upload → Cloudinary stream sync → Prisma audit record → LangChain chunk parsing in an async worker → Cohere embeddings → Qdrant multi-tenant vector index.",
        "Modelled patients, files, audit records and deterministic meta-logs in PostgreSQL (Neon) with Prisma ORM, including checked migrations.",
        "Owned the agent workspace in the Next.js App Router — per-agent feature folders for hooks, reusable modules and modals, shared UI components in a single design system.",
        "Registered every agent router through one mounting entrypoint so route ownership stays explicit and reviewable.",
      ],
      architecture: [
        {
          label: "Ingestion pipeline (RAG)",
          items: [
            "Client streams clinical documents as authenticated multipart form-data.",
            "Media service pushes the byte stream to Cloudinary and returns a secure URL + asset metadata.",
            "Prisma writes the file row to PostgreSQL, mapped to the owning patient profile.",
            "Async worker parses text with LangChain loaders and splits it into overlapping token windows.",
            "Cohere embeddings convert chunks to float arrays pushed to Qdrant alongside parent record keys.",
          ],
        },
        {
          label: "Agents in the workspace",
          items: [
            "Medical RAG — retrieval-grounded clinical question answering over per-agent vector collections.",
            "Therapy agent — multi-turn reasoning with prompt-state tracking and chunk graphs.",
            "DDx agent — differential diagnosis exploration over structured findings.",
            "Medication adherence — adherence analytics and patient timelines.",
            "AI back-office admin — operational tooling with human-in-the-loop review modals.",
          ],
        },
        {
          label: "Frontend conventions",
          items: [
            "hooks/ encapsulate data fetching, state and side effects per feature (usePatientCard, useAdherenceAnalytics).",
            "modules/ hold self-contained UI units that compose whole pages (Dashboard, Patient, HITL).",
            "modals/ keep overlay forms, confirmations and detail views scoped to the feature that owns them.",
            "constants/, lib/ and utils/ stay agent-scoped, so a new agent can be added without touching shared code.",
          ],
        },
      ],
      stack: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk Auth",
        "Python",
        "FastAPI",
        "PostgreSQL (Neon)",
        "Prisma ORM",
        "Qdrant",
        "Cloudinary",
        "LangChain",
        "Cohere",
        "Redis",
        "Docker",
      ],
    },
    {
      id: "cyron",
      name: "Cyron",
      kicker: "Context-aware intelligent SOC with automated threat response",
      summary:
        "A desktop cybersecurity platform built for Pakistani SMBs — the organisations attacked daily but priced out of enterprise tooling. Cyron delivers behavioural detection, explainable risk scoring and automated incident response on an entirely open-source stack, at zero software cost.",
      role: "Project Lead & Full-Stack Engineer — detection pipeline, response engine & desktop client",
      metrics: [
        { value: "10", label: "Threat-ownership modules" },
        { value: "<30s", label: "Log to response" },
        { value: "5-factor", label: "Explainable risk score" },
      ],
      highlights: [
        "Designed ten threat-ownership modules, each mapped to a single detection, scoring or response responsibility — identity & access, insider threat/UBA, network intrusion, threat intel correlation, risk prioritisation, automated response, compliance, SOC dashboard, reports, settings.",
        "Implemented 30-day behavioural baselines per user with Isolation Forest and LSTM anomaly detection to surface port scanning, beaconing and C2 activity.",
        "Built the five-factor risk engine (Time, Location, Behaviour, Peer Comparison, Threat Intelligence) so every alert carries an auditable, human-readable reason instead of an opaque score.",
        "Shipped automated response that runs in under 30 seconds — IP blocking, endpoint isolation and forced re-authentication — with rollback support for safe reversal.",
        "Curated Pakistan-specific threat intelligence (JazzCash/Easypaisa fraud patterns, fake NADRA portals, APT36/Transparent Tribe, SideCopy) alongside URLhaus, AbuseIPDB, MalwareBazaar, FeodoTracker, OpenPhish and ThreatFox feeds mapped to MITRE ATT&CK.",
        "Delivered PCI DSS v4.0 compliance monitoring with continuous control checks and audit-ready reporting, plus Admin/Analyst role separation across the dashboard.",
        "Engineered offline-first behaviour: core monitoring keeps running through internet outages and load shedding.",
      ],
      architecture: [
        {
          label: "Detection & response path",
          items: [
            "ELK stack ingests and normalises endpoint, identity and network logs.",
            "Per-user behavioural baselines (30 days) flag off-hours access and data-exfiltration patterns.",
            "Isolation Forest + LSTM models score network anomalies and feed the correlation layer.",
            "IOC repository matches IPs, domains and hashes against regional APT and fraud signatures.",
            "The decision module weights five risk factors, labels severity and hands off to automated response.",
            "Response executes blocking, isolation or forced re-auth, writes an audit trail and supports rollback.",
          ],
        },
        {
          label: "Platform & access",
          items: [
            "Electron wraps the same React front end in a native desktop window — one codebase, no fork.",
            "FastAPI backend exposes module routers for every threat domain, with interactive /docs.",
            "PostgreSQL via Docker for storage, Redis for caching and real-time processing.",
            "JWT issuance with bcrypt-hashed passwords and optional Google OAuth 2.0 sign-in.",
            "Role-based access for Admin and Analyst, enforced through protected routes and role-filtered modules.",
          ],
        },
        {
          label: "Compliance & reporting",
          items: [
            "PCI DSS v4.0 requirement mapping with automated gap analysis.",
            "Daily and weekly summaries, top-risky-user reporting and PDF export.",
            "Configurable risk thresholds, IP/user whitelisting, offline-mode toggle and notification preferences.",
          ],
        },
      ],
      stack: [
        "Electron",
        "React 18",
        "Vite",
        "Tailwind CSS",
        "Python 3.10+",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Logstash",
        "Kibana",
        "scikit-learn",
        "TensorFlow / Keras",
        "Pandas",
        "NumPy",
        "JWT",
        "bcrypt",
        "Google OAuth 2.0",
        "Docker",
      ],
    },
  ],

  /** Skill groups — ordered so the strongest signals read first. */
  skills: [
    {
      title: "Languages",
      icon: "code",
      items: ["TypeScript", "JavaScript (ES2023)", "Python", "SQL", "HTML5 & CSS3"],
    },
    {
      title: "Frontend",
      icon: "layers",
      items: [
        "React",
        "Next.js (App Router, SSR)",
        "Tailwind CSS",
        "Shadcn UI",
        "Responsive & accessible UI",
        "Design systems",
        "Vite",
      ],
    },
    {
      title: "Backend & APIs",
      icon: "server",
      items: [
        "FastAPI",
        "Node.js",
        "REST API design",
        "Prisma ORM",
        "Pydantic validation",
        "Async workers & background jobs",
        "Auth flows (Clerk, JWT, OAuth 2.0)",
      ],
    },
    {
      title: "Data & Retrieval",
      icon: "database",
      items: [
        "PostgreSQL",
        "Prisma migrations",
        "Qdrant vector search",
        "Redis",
        "Elasticsearch / ELK",
        "Schema design & normalisation",
      ],
    },
    {
      title: "AI & Agents",
      icon: "sparkles",
      items: [
        "LangChain",
        "RAG pipelines",
        "Agent orchestration",
        "Cohere & OpenAI APIs",
        "Prompt-state tracking",
        "scikit-learn",
        "TensorFlow / Keras",
      ],
    },
    {
      title: "Security & Compliance",
      icon: "shield",
      items: [
        "Role-based access control",
        "JWT & bcrypt",
        "Google OAuth 2.0",
        "Threat intelligence & IOC matching",
        "MITRE ATT&CK mapping",
        "PCI DSS v4.0 controls",
      ],
    },
    {
      title: "Platform & Tooling",
      icon: "terminal",
      items: [
        "Docker & Compose",
        "Git & GitHub flow",
        "Feature branches & PR review",
        "Neon",
        "Cloudinary",
        "Linux & PowerShell",
      ],
    },
  ],

  /** Marquee strip under the hero. Keep it short — it is a rhythm, not a list. */
  marquee: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Prisma",
    "Qdrant",
    "LangChain",
    "Redis",
    "Docker",
    "Electron",
    "scikit-learn",
  ],

  about: {
    heading: "Engineering that holds up under review",
    paragraphs: [
      "I care about architecture that stays readable six months later. In practice that means typed contracts at every boundary, layered separation of concerns (routes → controllers → services), and folders that tell you where something belongs before you open it.",
      "My work sits where product engineering meets applied AI: multi-agent systems, retrieval pipelines over vector stores, and behavioural detection models — wrapped in interfaces that stay fast, accessible and genuinely pleasant to use.",
      "Both of my internships were fully remote and are now complete, which is where I learned to work asynchronously: scoped feature branches, pull requests with real descriptions, and reviews that treat the diff as the unit of communication.",
    ],
    principles: [
      { title: "Typed end to end", body: "TypeScript on the client, Pydantic and Prisma on the server — the contract is verified at compile time, not discovered in production." },
      { title: "Layered by default", body: "UI talks to controllers, controllers own logic. No component reaches into the database, no route bypasses the service layer." },
      { title: "Explainable systems", body: "Models and scoring engines should justify their output — every alert, match and recommendation carries a reason you can audit." },
      { title: "Performance is a feature", body: "Fast first paint, sub-second retrieval, and interfaces that stay responsive on modest hardware." },
    ],
  },

  nav: [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export type Site = typeof site;
export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];
export type SkillGroup = (typeof site.skills)[number];
