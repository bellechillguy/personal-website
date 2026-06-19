import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { getPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <MacWindow title={post.title} maxWidth="720px">
      <div className="mb-6 px-4 pt-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground/60 hover:text-foreground transition-colors px-0 py-1.5 rounded-lg hover:bg-surface-2"
        >
          &larr; Back to all blogs
        </Link>
      </div>

      <article
        className="prose prose-sm dark:prose-invert px-4 pb-8"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />
    </MacWindow>
  );
}