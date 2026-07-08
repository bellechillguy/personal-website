import matter from "gray-matter";
import { marked } from "marked";

export function parseMarkdown(rawContent: string) {
  const { data, content } = matter(rawContent);

  return {
    title: data.title || "Untitled",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt || "",
    htmlContent: marked.parse(content) as string,
  };
}
