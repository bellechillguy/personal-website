import { marked } from "marked";
import { parseFrontmatter } from "@/lib/markdown";

const modules = import.meta.glob<string>("/src/content/blogs/*.md", {
  query: "?raw",
  import: "default",
});

function normalizeMarkdown(rawContent: string): string {
  return rawContent
    .replace(/<br\s*\/?>/gi, "\n\n")
    .replace(/&emsp;/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeHtml(html: string): string {
  return html
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeMarkdownUrl(url: string): string | null {
  const trimmedUrl = url.trim();
  let parsedUrl: URL;

  const hasControlCharacter = Array.from(trimmedUrl).some((character) => {
    const codePoint = character.codePointAt(0) ?? 0;
    return codePoint <= 31 || codePoint === 127;
  });

  if (!trimmedUrl || hasControlCharacter) return null;

  try {
    parsedUrl = new URL(trimmedUrl, "https://portfolio.invalid");
  } catch {
    return null;
  }

  if (!["http:", "https:", "mailto:", "tel:"].includes(parsedUrl.protocol)) return null;

  return trimmedUrl;
}

function imageAltText(text: string, href: string): string {
  if (text.trim()) return text.trim();

  const rawFilename = href.split("/").pop()?.split(/[?#]/)[0] || "article image";
  let filename = rawFilename;

  try {
    filename = decodeURIComponent(rawFilename);
  } catch {
    // Keep the original filename when a repository path contains malformed escapes.
  }

  const readableName = filename
    .replace(/\.[a-z\d]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return readableName ? `Article screenshot: ${readableName}` : "Article screenshot";
}

function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:emsp|nbsp);/gi, " ")
    .replace(/[#>*_`~\\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(markdown: string, maximumLength = 165): string {
  const plainText = toPlainText(markdown);
  if (plainText.length <= maximumLength) return plainText;

  const shortened = plainText.slice(0, maximumLength - 1).replace(/\s+\S*$/, "");
  return `${shortened}…`;
}

function inferCategory(title: string): string {
  if (/\biot\b|embedded|mqtt|sensor|nodered/i.test(title)) return "IoT";
  if (/ctf|osint|cryptography|reverse engineering|pwn|forensics|web exploitation/i.test(title)) {
    return "Cybersecurity";
  }
  if (/movie|review/i.test(title)) return "Review";
  if (/development|platform|docker|infrastructure|moody/i.test(title)) return "Projects";
  return "Notes";
}

function estimateReadingMinutes(markdown: string): number {
  const words = toPlainText(markdown).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const renderer = new marked.Renderer();
const renderDefaultTable = renderer.table;

renderer.html = ({ text }) => escapeHtml(text);
renderer.heading = function ({ tokens, depth }) {
  const articleDepth = Math.min(depth + 1, 6);
  return `<h${articleDepth}>${this.parser.parseInline(tokens)}</h${articleDepth}>\n`;
};
renderer.link = function ({ href, title, tokens }) {
  const safeHref = safeMarkdownUrl(href);
  const label = this.parser.parseInline(tokens);

  if (!safeHref) return label;

  const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";
  return `<a href="${escapeHtml(safeHref)}"${titleAttribute}>${label}</a>`;
};
renderer.image = ({ href, title, text }) => {
  const safeHref = safeMarkdownUrl(href);
  if (!safeHref) return "";

  const alt = imageAltText(text, safeHref);
  const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";

  return `<span class="blog-image-well"><img src="${escapeHtml(safeHref)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async"${titleAttribute}></span>`;
};
renderer.table = function (token) {
  return `<div class="blog-table-scroll" role="region" aria-label="Scrollable table" tabindex="0">${renderDefaultTable.call(this, token)}</div>`;
};

marked.use({ renderer });

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  hasExplicitExcerpt: boolean;
  category: string;
  readingMinutes: number;
  htmlContent: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();

    const { data, content } = parseFrontmatter(rawContent);
    const normalizedContent = normalizeMarkdown(content);
    const htmlContent = marked.parse(normalizedContent, { async: false });

    const title = data.title || "Untitled";
    const hasExplicitExcerpt = Boolean(data.excerpt?.trim());

    posts.push({
      slug: path.split("/").pop()?.replace(".md", "") || "",
      title,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || createExcerpt(normalizedContent),
      hasExplicitExcerpt,
      category: inferCategory(title),
      readingMinutes: estimateReadingMinutes(normalizedContent),
      htmlContent,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string) {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}
