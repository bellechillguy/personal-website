# Qwik City Routes

This directory uses [Qwik City file-based routing](https://qwik.dev/docs/routing/). Route folders map to URL segments, and an `index.tsx` file renders that route.

## Conventions Used in This Project

| File                    | URL            | Purpose                         |
| ----------------------- | -------------- | ------------------------------- |
| `index.tsx`             | `/`            | Home page                       |
| `about/index.tsx`       | `/about`       | Static route                    |
| `blog/index.tsx`        | `/blog`        | Blog index                      |
| `blog/[slug]/index.tsx` | `/blog/:slug`  | Dynamic blog-post route         |
| `sitemap.xml/index.ts`  | `/sitemap.xml` | XML endpoint                    |
| `layout.tsx`            | all pages      | Shared menubar, dock, and shell |

Use Qwik City's `<Slot />` in `layout.tsx` to render the active child route. Route data should be loaded with `routeLoader$`, and page metadata can be exported with `DocumentHead`.

Keep route-specific presentation in the route or a component under `src/components/`. Shared portfolio content belongs in `src/data/`, while Markdown blog posts belong in `src/content/blogs/`.
