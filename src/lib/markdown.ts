import { marked } from "marked";

interface FrontmatterResult {
  data: Record<string, string>;
  content: string;
}

function stripWrappingQuotes(value: string) {
  const trimmed = value.trim();
  const quote = trimmed[0];

  if ((quote === '"' || quote === "'") && trimmed.endsWith(quote)) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

export function parseFrontmatter(rawContent: string): FrontmatterResult {
  if (!rawContent.startsWith("---")) {
    return { data: {}, content: rawContent };
  }

  const frontmatterEnd = rawContent.indexOf("\n---", 3);

  if (frontmatterEnd === -1) {
    return { data: {}, content: rawContent };
  }

  const frontmatter = rawContent.slice(3, frontmatterEnd).trim();
  const content = rawContent.slice(frontmatterEnd).replace(/^\n---\r?\n?/, "");
  const data: Record<string, string> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);

    if (key) {
      data[key] = stripWrappingQuotes(value);
    }
  }

  return { data, content };
}

export function parseMarkdown(rawContent: string) {
  const { data, content } = parseFrontmatter(rawContent);

  return {
    title: data.title || "Untitled",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt || "",
    htmlContent: marked.parse(content) as string,
  };
}
