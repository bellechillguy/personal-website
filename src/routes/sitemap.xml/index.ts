import type { RequestHandler } from "@builder.io/qwik-city";
import { getAllPosts } from "@/data/blog";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const onGet: RequestHandler = async ({ send, headers, url }) => {
  const today = new Date().toISOString().slice(0, 10);
  const staticPaths = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/projects", changefreq: "weekly", priority: "0.9" },
    { path: "/tech-stack", changefreq: "monthly", priority: "0.7" },
    { path: "/experience", changefreq: "monthly", priority: "0.7" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/interests", changefreq: "monthly", priority: "0.5" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
    { path: "/resume", changefreq: "monthly", priority: "0.6" },
  ];
  const posts = await getAllPosts();
  const postEntries = posts.map((p) => ({
    path: `/blog/${encodeURIComponent(p.slug)}`,
    lastmod: p.date,
    changefreq: "monthly",
    priority: "0.6",
  }));
  const entries = [...staticPaths.map((s) => ({ ...s, lastmod: today })), ...postEntries];
  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries.map(
      (e) =>
        `  <url>\n    <loc>${escapeXml(new URL(e.path, url.origin).href)}</loc>\n    <lastmod>${escapeXml(e.lastmod.slice(0, 10))}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    ),
    `</urlset>`,
  ].join("\n");

  headers.set("Content-Type", "application/xml");
  headers.set("Cache-Control", "public, max-age=3600");
  send(200, xml);
};
