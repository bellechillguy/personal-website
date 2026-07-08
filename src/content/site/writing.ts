import { parseMarkdown } from "@/lib/markdown";

const modules = import.meta.glob("/src/content/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const parsed = parseMarkdown(raw as string);
    return {
      slug: path.split("/").pop()!.replace(".md", ""),
      ...parsed,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
