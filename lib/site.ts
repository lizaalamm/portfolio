/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything the page renders comes from this file. Update your details here
 *  and the whole site follows, with no component edits required.
 *
 *  Fields flagged with a `TODO` comment are placeholders waiting on your input.
 *  House style: no em dashes and no hyphens in user facing copy.
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
  role: "Full Stack Developer",
  roleDetail: "React, Next.js, TypeScript & Python",
  tagline: "Typed end to end, from the interface to the API that backs it.",
  location: "Islamabad, Pakistan",
  availability: "Open to full stack and AI engineering roles, remote or on site",

  /** Contact. LinkedIn confirmed as linkedin.com/in/lizaalamm */
  contact: {
    email: "hello@lizaalam.dev", // TODO: replace with your real email
    phone: "", // TODO: e.g. "+92 3XX XXXXXXX" (leave empty to hide)
    github: "https://github.com/lizaalamm",
    linkedin: "https://www.linkedin.com/in/lizaalamm/",
    resume: asset("/resume.pdf"), // drop your CV at public/resume.pdf
    resumeLabel: "Download CV",
  },

  hero: {
    /**
     * One entry per line, the line breaks are intentional.
     * Wrap a word in backticks to render it in the accent serif italic.
     */
    headline: [
      "Thoughtful interfaces.",
      "Intelligent systems.",
      "Built `end to end`.",
    ],
    intro:
      "I’m Liza, a full stack developer building at the intersection of product and applied AI. From React interfaces to Python services, I turn complex workflows into clear, usable products.",
    stats: [
      { value: "2", label: "Remote internships, completed" },
      { value: "2", label: "Platforms shipped end to end" },
      { value: "2", label: "Google certifications" },
      { value: "15+", label: "Modules delivered across both platforms" },
    ],
  },

  /**
   * Static technology board that sits under the hero.
   */
  stackBoard: [
    {
      title: "Frontend",
      icon: "layers",
      tone: "teal",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite"],
    },
    {
      title: "Backend",
      icon: "server",
      tone: "indigo",
      items: ["Python", "FastAPI", "Node.js", "Prisma", "REST APIs", "Clerk and JWT auth"],
    },
    {
      title: "Data",
      icon: "database",
      tone: "amber",
      items: ["PostgreSQL", "Qdrant", "Redis", "Elasticsearch", "Cloudinary", "Neon"],
    },
    {
      title: "AI and Security",
      icon: "sparkles",
      tone: "teal",
      items: ["LangChain", "RAG pipelines", "Cohere and OpenAI", "Scikit Learn", "Isolation Forest and LSTM", "MITRE ATT&CK"],
    },
  ],

  /**
   * Experience: both internships were fully remote, three months each,
   * and both are complete.
   */
  experience: [
    {
      company: "CarbonRepro",
      monogram: "CR",
      tone: "teal",
      role: "Full Stack Developer Intern",
      mode: "Remote",
      duration: "3 months",
      period: "Completed",
      summary:
        "Shipped production web platform features for a United States digital agency that builds web apps, ecommerce and AI automation for clients across the country.",
      highlights: [
        "Built and shipped customer facing platform features with React, Next.js and TypeScript, from component to deployment.",
        "Integrated REST APIs and third party services, adding typed client contracts so request and response shapes were validated at compile time.",
        "Worked inside a distributed, multi timezone team using async standups, pull request review and scoped feature branches.",
        "Contributed to performance and accessibility passes, tightening Core Web Vitals and keyboard behaviour on key flows.",
      ],
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "REST APIs", "Git and PR workflow"],
    },
    {
      company: "U Devs",
      monogram: "UD",
      tone: "indigo",
      role: "Software Engineering Intern",
      mode: "Remote",
      duration: "3 months",
      period: "Completed",
      summary:
        "Worked on custom software and AI assisted platforms, building business application features and the API layers underneath them.",
      highlights: [
        "Developed business application modules such as dashboards, data flows and role aware views with React and TypeScript.",
        "Contributed API endpoints and data models in Python, keeping validation schemas explicit at every boundary.",
        "Implemented authentication and role based access flows so permissions were enforced consistently across the UI.",
        "Participated in code reviews and release cycles, shipping incrementally on feature branches with clear pull request descriptions.",
      ],
      stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "REST APIs", "Git"],
    },
  ],

  /** Google certificates. */
  certifications: [
    {
      name: "Build Dynamic User Interfaces (UI) for Websites",
      issuer: "Google",
      monogram: "G",
      issued: "July 2026",
      focus: "UI and UX",
      summary:
        "Interface design and front end delivery for the web: layout systems, responsive behaviour and accessibility aware interface patterns.",
      skills: ["Web interfaces", "Responsive layout", "Accessibility"],
    },
    {
      name: "Foundations of Project Management",
      issuer: "Google",
      monogram: "G",
      issued: "July 2026",
      focus: "Project Management",
      summary:
        "Project lifecycle fundamentals: scoping, scheduling, stakeholder communication and delivery tracking from kickoff to handover.",
      skills: ["Scoping", "Scheduling", "Stakeholder comms"],
    },
  ],

  /** Flagship projects, the deepest proof of work on the page. */
  projects: [
    {
      id: "neuralhub",
      name: "NeuralHub",
      tone: "teal",
      kicker: "Healthcare platform built on multiple AI agents",
      summary:
        "A high contrast clinical workspace for medical professionals: secure patient environments, explicit validation schemas and retrieval across distributed knowledge indices. The client never touches the database. Every read and write flows through verified API controllers.",
      role: "Full Stack Engineer, API layer, agent workspace and retrieval pipeline",
      metrics: [
        { value: "5", label: "Specialised agents" },
        { value: "3", label: "Layers: route, controller, service" },
        { value: "<1s", label: "Vector retrieval target" },
      ],
      flow: ["Upload", "Cloudinary", "Prisma", "FastAPI", "Qdrant"],
      flowLabel: "Document ingestion, from upload to vector index",
      highlights: [
        "Architected a strict three layer split in FastAPI (routes, controllers, services) so no loose connections, raw schema queries or external vector evaluation loops can escape the API layer.",
        "Built the document ingestion pipeline: authenticated multipart upload to Cloudinary, a Prisma audit record, LangChain chunk parsing in an async worker, Cohere embeddings, then a multi tenant vector index in Qdrant.",
        "Modelled patients, clinical files, audit records and deterministic meta logs in PostgreSQL (Neon) with Prisma ORM, including checked migrations.",
        "Owned the agent workspace in the Next.js App Router: per agent feature folders for hooks, reusable modules and modals, with shared UI components in one design system.",
        "Registered every agent router through a single mounting entry point so route ownership stays explicit and reviewable.",
      ],
      architecture: [
        {
          label: "Ingestion pipeline",
          items: [
            "The client streams clinical documents as authenticated multipart form data.",
            "The media service pushes the byte stream to Cloudinary and returns a secure URL with asset metadata.",
            "Prisma writes the file row to PostgreSQL, mapped to the owning patient profile.",
            "An async worker parses text with LangChain loaders and splits it into overlapping token windows.",
            "Cohere embeddings convert chunks to float arrays and push them to Qdrant beside their parent record keys.",
          ],
        },
        {
          label: "Agents in the workspace",
          items: [
            "Medical RAG: retrieval grounded clinical question answering over per agent vector collections.",
            "Therapy agent: multi turn reasoning with prompt state tracking and chunk graphs.",
            "DDx agent: differential diagnosis exploration over structured findings.",
            "Medication adherence: adherence analytics and patient timelines.",
            "AI back office admin: operational tooling with human in the loop review modals.",
          ],
        },
        {
          label: "Frontend conventions",
          items: [
            "hooks/ encapsulate data fetching, state and side effects per feature, such as usePatientCard and useAdherenceAnalytics.",
            "modules/ hold self contained UI units that compose whole pages: dashboard, patient and human in the loop flows.",
            "modals/ keep overlay forms, confirmations and detail views scoped to the feature that owns them.",
            "constants/, lib/ and utils/ stay scoped to their agent, so a new agent can be added without touching shared code.",
          ],
        },
      ],
      stack: [
        "Next.js (App Router)",
        "React",
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
      tone: "indigo",
      kicker: "Intelligent security operations centre with automated response",
      summary:
        "A desktop cybersecurity platform built for Pakistani small and medium businesses, the organisations attacked daily but priced out of enterprise tooling. Cyron delivers behavioural detection, explainable risk scoring and automated incident response on open source foundations, at zero software cost.",
      role: "Project Lead and Full Stack Engineer, detection pipeline, response engine and desktop client",
      metrics: [
        { value: "10", label: "Threat ownership modules" },
        { value: "30s", label: "From log to response" },
        { value: "Five", label: "Risk factors, fully explained" },
      ],
      flow: ["Ingest", "Baseline", "ML detection", "IOC match", "Risk score", "Response"],
      flowLabel: "Detection path, from raw log to automated response",
      highlights: [
        "Designed ten threat ownership modules, each mapped to one detection, scoring or response responsibility: identity and access, insider threat, network intrusion, threat intel correlation, risk prioritisation, automated response, compliance, SOC dashboard, reports and settings.",
        "Implemented 30 day behavioural baselines per user with Isolation Forest and LSTM anomaly detection to surface port scanning, beaconing and command and control activity.",
        "Built the five factor risk engine (time, location, behaviour, peer comparison, threat intelligence) so every alert carries an auditable reason instead of an opaque score.",
        "Shipped automated response that runs in under 30 seconds: IP blocking, endpoint isolation and forced re authentication, with rollback support for safe reversal.",
        "Curated Pakistan specific threat intelligence (JazzCash and Easypaisa fraud patterns, fake NADRA portals, APT36 and SideCopy) alongside URLhaus, AbuseIPDB, MalwareBazaar, FeodoTracker, OpenPhish and ThreatFox feeds mapped to MITRE ATT&CK.",
        "Delivered PCI DSS v4.0 compliance monitoring with continuous control checks and audit ready reporting, plus admin and analyst role separation across the dashboard.",
        "Engineered offline first behaviour: core monitoring keeps running through internet outages and load shedding.",
      ],
      architecture: [
        {
          label: "Detection and response path",
          items: [
            "The ELK stack ingests and normalises endpoint, identity and network logs.",
            "Per user behavioural baselines span 30 days and flag off hours access and data exfiltration patterns.",
            "Isolation Forest and LSTM models score network anomalies and feed the correlation layer.",
            "The IOC repository matches IPs, domains and hashes against regional APT and fraud signatures.",
            "The decision module weights five risk factors, labels severity and hands off to automated response.",
            "Response executes blocking, isolation or forced re authentication, writes an audit trail and supports rollback.",
          ],
        },
        {
          label: "Platform and access",
          items: [
            "Electron wraps the same React front end in a native desktop window, so there is one codebase and no fork.",
            "The FastAPI backend exposes module routers for every threat domain, with interactive /docs.",
            "PostgreSQL in Docker for storage, Redis for caching and real time processing.",
            "JWT issuance with bcrypt hashed passwords and optional Google OAuth 2.0 sign in.",
            "Role based access for admin and analyst, enforced through protected routes and role filtered modules.",
          ],
        },
        {
          label: "Compliance and reporting",
          items: [
            "PCI DSS v4.0 requirement mapping with automated gap analysis.",
            "Daily and weekly summaries, top risk user reporting and PDF export.",
            "Configurable risk thresholds, IP and user whitelisting, an offline mode toggle and notification preferences.",
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
        "Scikit Learn",
        "TensorFlow and Keras",
        "Pandas",
        "NumPy",
        "JWT",
        "bcrypt",
        "Google OAuth 2.0",
        "Docker",
      ],
    },
  ],

  /** Skill groups, ordered so the strongest signals read first. */
  skills: [
    {
      title: "Languages",
      icon: "code",
      tone: "teal",
      span: "lg:col-span-3",
      items: ["TypeScript", "JavaScript (ES2023)", "Python", "SQL", "HTML5 and CSS3"],
    },
    {
      title: "Frontend",
      icon: "layers",
      tone: "teal",
      span: "lg:col-span-5",
      items: [
        "React",
        "Next.js (App Router, SSR)",
        "Tailwind CSS",
        "Shadcn UI",
        "Responsive and accessible UI",
        "Design systems",
        "Vite",
      ],
    },
    {
      title: "Backend and APIs",
      icon: "server",
      tone: "indigo",
      span: "lg:col-span-4",
      items: [
        "FastAPI",
        "Node.js",
        "REST API design",
        "Prisma ORM",
        "Pydantic validation",
        "Async workers and background jobs",
        "Auth flows (Clerk, JWT, OAuth 2.0)",
      ],
    },
    {
      title: "Data and Retrieval",
      icon: "database",
      tone: "amber",
      span: "lg:col-span-4",
      items: [
        "PostgreSQL",
        "Prisma migrations",
        "Qdrant vector search",
        "Redis",
        "Elasticsearch and ELK",
        "Schema design",
      ],
    },
    {
      title: "AI and Agents",
      icon: "sparkles",
      tone: "teal",
      span: "lg:col-span-4",
      items: [
        "LangChain",
        "RAG pipelines",
        "Agent orchestration",
        "Cohere and OpenAI APIs",
        "Prompt state tracking",
        "Scikit Learn",
        "TensorFlow and Keras",
      ],
    },
    {
      title: "Security and Compliance",
      icon: "shield",
      tone: "indigo",
      span: "lg:col-span-4",
      items: [
        "Role based access control",
        "JWT and bcrypt",
        "Google OAuth 2.0",
        "Threat intelligence and IOC matching",
        "MITRE ATT&CK mapping",
        "PCI DSS v4.0 controls",
      ],
    },
    {
      title: "Platform and Tooling",
      icon: "terminal",
      tone: "amber",
      span: "lg:col-span-12",
      items: [
        "Docker and Compose",
        "Git and GitHub flow",
        "Feature branches and PR review",
        "Neon",
        "Cloudinary",
        "Linux and PowerShell",
      ],
    },
  ],

  about: {
    heading: "Engineering that holds up under review",
    paragraphs: [
      "I care about architecture that stays readable six months later. That means typed contracts at every boundary, layered separation of concerns (routes, controllers, services) and folders that tell you where something belongs before you open it.",
      "My work sits where product engineering meets applied AI: agent systems that reason over retrieved context, retrieval pipelines over vector stores and behavioural detection models, all wrapped in interfaces that stay fast, accessible and genuinely pleasant to use.",
      "Both internships were fully remote, which taught me to work asynchronously: scoped feature branches, pull requests with real descriptions and reviews that treat the diff as the unit of communication.",
    ],
    principles: [
      {
        title: "Typed end to end",
        tone: "teal",
        body: "TypeScript on the client, Pydantic and Prisma on the server. The contract is verified at compile time, not discovered in production.",
      },
      {
        title: "Layered by default",
        tone: "indigo",
        body: "The UI talks to controllers, controllers own the logic. No component reaches into the database and no route bypasses the service layer.",
      },
      {
        title: "Explainable systems",
        tone: "amber",
        body: "Models and scoring engines should justify their output. Every alert, match and recommendation carries a reason you can audit.",
      },
      {
        title: "Performance is a feature",
        tone: "teal",
        body: "Fast first paint, sub second retrieval and interfaces that stay responsive on modest hardware.",
      },
    ],
  },

  nav: [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export type Site = typeof site;
export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];
export type SkillGroup = (typeof site.skills)[number];
export type Certification = (typeof site.certifications)[number];
export type StackGroup = (typeof site.stackBoard)[number];