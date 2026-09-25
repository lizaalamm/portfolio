import type { NextConfig } from "next";

/**
 * The site is a fully static export, so it can be hosted anywhere
 * (GitHub Pages, Netlify, Vercel, S3, nginx...).
 *
 * For a GitHub Pages *project* site (e.g. https://<user>.github.io/portfolio)
 * the assets need a base path. It is injected at build time:
 *   NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
 * Locally and in preview it stays empty, so the site is served from "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
