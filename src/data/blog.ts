import { marked } from "marked";
import { parseFrontmatter } from "@/lib/markdown";

const modules = import.meta.glob("/src/content/blogs/*.md", {
  query: "?raw",
  import: "default",
});

function normalizeMarkdown(rawContent: string): string {
  return rawContent.replace(/<br\s*\/?>(\s*)/gi, "\n\n");
}

function escapeHtml(html: string): string {
  return html
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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
renderer.html = ({ text }) => escapeHtml(text);

marked.use({ renderer });

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  htmlContent: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = (await modules[path]()) as string;

    const { data, content } = parseFrontmatter(rawContent);
    const normalizedContent = normalizeMarkdown(content);
    const htmlContent = marked.parse(normalizedContent);

    const title = data.title || "Untitled";

    posts.push({
      slug: path.split("/").pop()?.replace(".md", "") || "",
      title,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || createExcerpt(normalizedContent),
      category: inferCategory(title),
      readingMinutes: estimateReadingMinutes(normalizedContent),
      htmlContent: htmlContent as string,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string) {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}
