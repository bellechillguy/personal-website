import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { getPost } from "@/data/blog";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const usePost = routeLoader$(async (event) => {
  const post = await getPost(event.params.slug);

  if (!post) {
    throw event.error(404, "Post not found");
  }

  return post;
});

export default component$(() => {
  const post = usePost();

  return (
    <MacWindow title={post.value.title} maxWidth="900px">
      <div class="mx-auto w-full max-w-[740px] px-1 sm:px-2">
        <div class="mb-8">
          <Link
            href="/blog"
            class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/60 px-3 py-1.5 text-[13px] font-semibold text-foreground/65 transition-colors hover:border-border hover:bg-surface hover:text-foreground"
          >
            ← Back to all blogs
          </Link>
        </div>

        <header class="mb-8 border-b border-border/70 pb-7">
          <p class="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-foreground/45">
            {dateFormatter.format(new Date(post.value.date))}
          </p>
          <h1 class="font-display text-[30px] font-extrabold leading-tight text-foreground sm:text-[40px]">
            {post.value.title}
          </h1>
          {post.value.excerpt ? (
            <p class="mt-4 text-[15.5px] leading-7 text-foreground/65 sm:text-[17px]">
              {post.value.excerpt}
            </p>
          ) : null}
        </header>

        <article class="blog-article pb-10" dangerouslySetInnerHTML={post.value.htmlContent} />
      </div>
    </MacWindow>
  );
});

export const head: DocumentHead = {
  title: "Blog post - bellechillguy",
  meta: [{ name: "description", content: "Blog post by Nisrina Zakiyah." }],
};
