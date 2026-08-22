import { component$, useComputed$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { getAllPosts } from "@/data/blog";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export const usePosts = routeLoader$(async () => {
  return getAllPosts();
});

export default component$(() => {
  const posts = usePosts();
  const query = useSignal("");
  const activeCategory = useSignal("All");
  const searchInput = useSignal<HTMLInputElement>();

  useVisibleTask$(({ cleanup }) => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInput.value?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    cleanup(() => window.removeEventListener("keydown", handleShortcut));
  });

  const categories = useComputed$(() => [
    "All",
    ...Array.from(new Set(posts.value.map((post) => post.category))),
  ]);

  const filteredPosts = useComputed$(() => {
    const normalizedQuery = query.value.trim().toLowerCase();

    return posts.value.filter((post) => {
      const matchesCategory =
        activeCategory.value === "All" || post.category === activeCategory.value;
      const matchesQuery =
        !normalizedQuery ||
        `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  });

  return (
    <MacWindow
      title="Blog"
      subtitle={`${posts.value.length} notes & write-ups`}
      maxWidth="980px"
      bodyClass="blog-window-body"
    >
      <header class="blog-index-header">
        <div class="blog-index-heading">
          <h1 class="blog-index-title">
            <span class="blog-index-title-initial">N</span>
            <span class="blog-index-title-copy">otes from Underground</span>
          </h1>
        </div>

        <div class="blog-search" role="search">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8" />
            <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
          <input
            ref={searchInput}
            type="search"
            value={query.value}
            aria-label="Search blog posts"
            placeholder="Search articles…"
            onInput$={(_, element) => {
              query.value = element.value;
            }}
            onKeyDown$={(event, element) => {
              if (event.key !== "Escape") return;
              query.value = "";
              element.blur();
            }}
          />
        </div>
      </header>

      <div class="blog-filter-row">
        <div class="blog-category-list" aria-label="Filter posts by topic">
          {categories.value.map((category) => (
            <button
              key={category}
              type="button"
              class="blog-category-button"
              data-active={activeCategory.value === category ? "true" : "false"}
              aria-pressed={activeCategory.value === category}
              onClick$={() => {
                activeCategory.value = category;
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <p class="blog-results-count" aria-live="polite">
          {filteredPosts.value.length} {filteredPosts.value.length === 1 ? "article" : "articles"}
        </p>
      </div>

      {filteredPosts.value.length ? (
        <div class="blog-card-grid">
          {filteredPosts.value.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${encodeURIComponent(post.slug)}`}
              class="blog-card animate-window-in"
              data-featured={
                index === 0 && !query.value && activeCategory.value === "All" ? "true" : "false"
              }
              style={{ animationDelay: `${Math.min(index, 8) * 55}ms` }}
            >
              <article>
                <div class="blog-card-meta">
                  <span class="blog-card-category">{post.category}</span>
                  <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                </div>

                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>

                <footer>
                  <span>{post.readingMinutes} min read</span>
                  <span class="blog-card-arrow" aria-hidden="true">
                    Read <span>→</span>
                  </span>
                </footer>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div class="blog-empty-state">
          <span aria-hidden="true">⌕</span>
          <h2>No matching notes</h2>
          <p>Try another keyword or reset the selected topic.</p>
          <button
            type="button"
            onClick$={() => {
              query.value = "";
              activeCategory.value = "All";
            }}
          >
            Clear filters
          </button>
        </div>
      )}
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
