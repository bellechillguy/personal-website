import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { getAllPosts } from "@/data/blog";

export const usePosts = routeLoader$(async () => {
  return getAllPosts();
});

export default component$(() => {
  const posts = usePosts();

  return (
    <MacWindow title="Blog" subtitle={`${posts.value.length} posts`} maxWidth="850px">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:p-4">
        {posts.value.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${encodeURIComponent(post.slug)}`}
            class="group flex flex-col justify-between p-6 rounded-[18px] bg-sticky/40 border border-border shadow-[var(--sh-1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-window-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <article class="flex flex-col h-full">
              <div>
                <h2 class="font-display font-bold text-[18px] mb-2 text-foreground group-hover:text-accent-ink dark:group-hover:text-accent-strong transition-colors duration-300">
                  {post.title}
                </h2>
                <p class="text-[14.5px] text-foreground/75 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div class="mt-auto pt-6 text-[13px] font-bold text-foreground/50 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:text-foreground flex items-center gap-1.5 mt-auto">
                Read article
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </MacWindow>
  );
});

export const head: DocumentHead = {
  title: "Blog - bellechillguy",
  meta: [
    { name: "description", content: "Writing and notes by Nisrina Zakiyah." },
    { property: "og:title", content: "Blog - bellechillguy" },
    { property: "og:description", content: "Writing and notes by Nisrina Zakiyah." },
  ],
};
