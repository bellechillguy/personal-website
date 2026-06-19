import matter from 'gray-matter';
import { marked } from 'marked';

const modules = import.meta.glob("/src/content/blogs/*.md", { 
  query: "?raw", 
  import: "default" 
});

function normalizeMarkdown(rawContent: string): string {
  return rawContent.replace(/<br\s*\/?>(\s*)/gi, '\n\n');
}

function escapeHtml(html: string): string {
  return html
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const renderer = new marked.Renderer();
(renderer as { html?: (html: string) => string }).html = (html: string) => escapeHtml(html);

marked.use({ renderer });

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  htmlContent: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]() as string;

    const { data, content } = matter(rawContent);
    const normalizedContent = normalizeMarkdown(content);
    const htmlContent = marked.parse(normalizedContent);

    posts.push({
      slug: path.split("/").pop()?.replace(".md", "") || "",
      title: data.title || "Untitled",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || "",
      htmlContent: htmlContent as string,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string) {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}