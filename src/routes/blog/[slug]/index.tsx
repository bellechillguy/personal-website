import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
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
  const readingProgress = useSignal(0);

  useVisibleTask$(({ cleanup }) => {
    const updateProgress = () => {
      const article = document.querySelector<HTMLElement>(".blog-article");
      if (!article) return;

      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleEnd = articleTop + article.offsetHeight - window.innerHeight * 0.55;
      const distance = Math.max(1, articleEnd - articleTop);
      readingProgress.value = Math.min(1, Math.max(0, (window.scrollY - articleTop) / distance));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    cleanup(() => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    });
  });

  return (
    <>
      <div class="blog-reading-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${readingProgress.value})` }} />
      </div>

      <MacWindow
        title={post.value.title}
        subtitle={`${post.value.readingMinutes} min read`}
        maxWidth="940px"
        bodyClass="blog-post-window"
      >
        <div id="article-top" class="blog-post-shell">
          <nav class="blog-post-toolbar" aria-label="Blog navigation">
            <Link href="/blog" class="blog-back-link">
              <span aria-hidden="true">←</span>
              All articles
            </Link>
            <span>{post.value.category}</span>
          </nav>

          <header class="blog-post-header">
            <div class="blog-post-meta">
              <span>{post.value.category}</span>
              <time dateTime={post.value.date}>
                {dateFormatter.format(new Date(post.value.date))}
              </time>
              <span aria-hidden="true">•</span>
              <span>{post.value.readingMinutes} min read</span>
            </div>

            <h1>{post.value.title}</h1>
            <p>{post.value.excerpt}</p>
          </header>

          <article class="blog-article" dangerouslySetInnerHTML={post.value.htmlContent} />

          <footer class="blog-post-footer">
            <div>
              <p>That’s all for this note.</p>
              <span>Thanks for reading ♡</span>
            </div>
            <div class="blog-post-footer-actions">
              <Link href="/blog">More articles</Link>
              <a href="#article-top">Back to top ↑</a>
            </div>
          </footer>
        </div>
      </MacWindow>
    </>
  );
});

export const head: DocumentHead = {
  title: "Blog post - bellechillguy",
  meta: [{ name: "description", content: "Blog post by Nisrina Zakiyah." }],
};
