# 𝓑ellechillguy

A personal portfolio presented as a responsive, macOS-inspired desktop. It brings together my projects, experience, technical interests, writing, resume, and contact links in one playful interface.

**Live site:** [bellechillguy.vercel.app](https://bellechillguy.vercel.app)

## Features

- Responsive macOS-style menubar, windows, photo cards, sticky notes, and dock
- Light and dark themes with an accessible pull-cord control
- Theme persistence through `localStorage`, system-preference fallback, and an inline boot script that prevents an incorrect-theme flash
- Pinkie Pie and Twilight Sparkle cutie-mark rain during theme changes, with reduced-motion support
- Portfolio pages for About, Projects, Tech Stack, Experience, Interests, Contact, and Resume
- Markdown-powered blog with search, category filters, automatic excerpts, reading-time estimates, and reading progress
- Resume preview and download
- Dock music player backed by local audio files

## Tech Stack

- [Qwik](https://qwik.dev/) and Qwik City
- TypeScript
- Vite 7
- Tailwind CSS 4 and custom CSS
- [marked](https://marked.js.org/) for Markdown rendering
- Vercel Edge adapter

## Local Development

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm

No environment variables are required to run the site locally.

### Setup

Install the locked dependency versions:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The app is available at [http://127.0.0.1:8080](http://127.0.0.1:8080). If the port is unavailable, Vite may select another port.

## Available Scripts

| Command                  | Purpose                                                  |
| ------------------------ | -------------------------------------------------------- |
| `npm run dev`            | Start the local SSR development server                   |
| `npm run build`          | Build both the client and Vercel Edge server bundles     |
| `npm run build.client`   | Build only the browser bundle                            |
| `npm run build.server`   | Build only the Vercel Edge server bundle                 |
| `npm run build:dev`      | Create a development-mode Vite build                     |
| `npm run preview`        | Preview a production build locally                       |
| `npm run lint`           | Run ESLint                                               |
| `npm run format`         | Format the repository with Prettier; this modifies files |
| `npm run deploy:preview` | Build and create a Vercel preview deployment             |
| `npm run deploy:prod`    | Build and deploy to Vercel production                    |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
  assets/              Imported app icons and project artwork
  components/
    icons/             System and technology icons
    mac/               Menubar, dock, windows, cards, and theme control
    sections/          Reusable portfolio page sections
  content/
    blogs/             Markdown blog posts
  data/                Portfolio, experience, project, and interest data
  lib/                 Markdown and utility helpers
  routes/              Qwik City routes
public/
  images/
    cutie-marks/       Pull-cord and theme-rain SVG assets
    interests/         Interest gallery images
    projects/          Blog and project documentation images
  music/               Local dock-player audio
  resume.pdf           Resume preview and download source
```

## Content and Assets

Portfolio copy and structured content primarily live in:

```text
src/data/projects.ts
src/data/experiences.ts
src/data/tech-stack.ts
src/data/socials.ts
src/data/interests.ts
```

Imported UI and project-card assets live in `src/assets/`. Files that must be served directly by URL belong in `public/` and should be referenced from the site root, for example:

```text
/images/projects/example.png
/images/cutie-marks/pinkie-pie.svg
```

### Adding a Blog Post

Create a Markdown file in `src/content/blogs/` with front matter:

```md
---
title: "Post title"
date: "2026-07-08"
excerpt: "An optional summary for the blog card."
---

Post content starts here.
```

The excerpt is generated from the content when omitted. The blog loader also infers a category from the title and calculates reading time automatically.

### Adding Music

Place the audio file in `public/music/`, then add its root-relative path to the playlist in `src/components/mac/Dock.tsx`.

## Routes

| Route          | Page              |
| -------------- | ----------------- |
| `/`            | Home              |
| `/about`       | About             |
| `/projects`    | Projects          |
| `/tech-stack`  | Tech Stack        |
| `/experience`  | Experience        |
| `/blog`        | Blog index        |
| `/blog/:slug`  | Blog post         |
| `/interests`   | Interests         |
| `/contact`     | Contact           |
| `/resume`      | Resume            |
| `/sitemap.xml` | Generated sitemap |

## Deployment

The repository includes a Vercel Edge adapter and `vercel.json`. Authenticate the Vercel CLI before using the deployment scripts:

```bash
npx vercel login
npm run deploy:preview
```

Deploy the production build with:

```bash
npm run deploy:prod
```

Vercel can also deploy automatically from the connected Git repository.
