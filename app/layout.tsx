import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const description = `${site.name} — ${site.role}. ${site.tagline} Two completed remote internships, and two end-to-end platforms: NeuralHub (multi-agent healthcare RAG) and Cyron (AI-powered security operations centre).`;

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Liza Alam",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "RAG",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-[13px] focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
