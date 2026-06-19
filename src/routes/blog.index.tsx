import { createFileRoute, Link } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { getAllPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  loader: async () => ({ posts: await getAllPosts() }),
  component: BlogIndex,
});

function BlogIndex() {
  const { posts } = Route.useLoaderData();
  
  return (
    <MacWindow title="Blog" subtitle={`${posts.length} posts`} maxWidth="850px">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
        {posts.map((p) => (
          <Link 
            key={p.slug} 
            to="/blog/$slug" 
            params={{ slug: p.slug }} 
            className="group flex flex-col justify-between p-5 rounded-2xl bg-surface-1 border border-zinc-200 dark:border-zinc-800 hover:border-slate-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h2 className="font-bold text-[18px] mb-2 group-hover:text-black-500 transition-colors">
                {p.title}
              </h2>
              <p className="text-[14px] text-foreground/70 line-clamp-3">
                {p.excerpt}
              </p>
            </div>
            
            <div className="mt-4 text-[13px] font-semibold text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Read article <span>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </MacWindow>
  );
}