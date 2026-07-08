# 𝓑ellechillguy

Welcome to my personal portfolio website.

I wanted to create a website that truly represents who I am, like my work and the things I care about. So, here we are.

![image](https://github.com/user-attachments/assets/9fc79a07-1be8-4e73-b80e-b0b97c8df959)

Live Demo: [bellechillguy.vercel.app](https://bellechillguy.vercel.app)

## What You Can Find Here

- A home page with a short intro and visual notes
- About, experience, projects, and tech stack pages
- A Markdown-powered blog for write-ups, notes, and longer writing
- A resume page with a PDF preview and download link
- Contact links for GitHub, LinkedIn, and Medium
- A small interests page with reading, music, and gallery content
- A dock music button that plays a shuffled local playlist

## Built With

This version of the site is built with:

- Qwik
- Qwik City
- TypeScript
- Vite
- Tailwind CSS v4
- gray-matter
- marked
- zod

The visual system is mostly custom CSS and Tailwind utilities, shaped around a soft macOS-like interface.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

By default, Vite is configured to run on:

```text
http://127.0.0.1:8080/
```

If that port is busy, Vite may choose another nearby port.

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Format the code:

```bash
npm run format
```

## Content

Most of the portfolio content lives in simple TypeScript data files:

```text
src/data/projects.ts
src/data/experiences.ts
src/data/tech-stack.ts
src/data/socials.ts
src/data/interests.ts
```

Blog posts live here:

```text
src/content/blogs/
```

Each blog post is a Markdown file with front matter for the title, date, and excerpt. The blog loader reads those files, parses the metadata, and renders the Markdown into the blog pages.

Static files live in `public/`, including:

- resume PDF
- blog images
- interest gallery images
- local music files used by the dock player

Project screenshots and app-style icons live in `src/assets/`.

## Project Structure

```text
src/
  assets/          Images and icon assets imported by the app
  components/
    icons/         App icons and technology icons
    mac/           Menubar, dock, window, note, and desktop-style UI pieces
    sections/      Reusable page sections
  content/
    blogs/         Markdown blog posts
  data/            Portfolio content sources
  lib/             Small utilities for markdown and error handling
  routes/          Qwik City routes
public/
  images/          Blog and page images served as static files
  interests/       Gallery photos
  music/           Local playlist files
  resume.pdf       Resume preview and download file
```

## Routes

```text
/                 Home
/about            About
/projects         Projects
/tech-stack       Tech stack
/experience       Experience
/blog             Blog index
/blog/:slug       Blog post detail
/interests        Interests
/contact          Contact
/resume           Resume
/sitemap.xml      Generated sitemap
```

## Notes For Future Me

When adding a new blog post, put the Markdown file in `src/content/blogs/` and make sure it has front matter like this:

```md
---
title: "Post Title"
date: "2026-07-08"
excerpt: "A short summary for the blog card."
---
```

When adding a new song, place the file in `public/music/` and add its path to the playlist in `src/components/mac/Dock.tsx`.

When updating portfolio content, start with the files in `src/data/`. The pages are mostly just rendering those data sources.
