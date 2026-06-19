# bellechillguy Portfolio

A personal portfolio website for **Nisrina Zakiyah**.  
This project uses a Mac-style desktop layout, with each page presented like a window on a desktop. It is built to show my work, experience, tech stack, writing, and a few things I enjoy outside of coding.

## What’s inside

- Home page with a short intro and visual cards
- About page with a personal profile
- Projects page with selected works
- Tech stack page grouped by category
- Experience page with education, certifications, organizations, and volunteer roles
- Blog page powered by Markdown files
- Contact page with social links
- Resume page with PDF preview and download
- Interests page with reading, music, and a small gallery

## Main features

- Mac-inspired interface with menubar, dock, and window styling
- Responsive layout for desktop and mobile
- Animated transitions using Motion
- File-based routing with TanStack Router / TanStack Start
- Blog content written in Markdown and rendered from `src/content/blogs`
- Audio toggle for background music
- Custom icon set and image assets for portfolio content

## Tech stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- TanStack Query
- Vite
- Tailwind CSS v4
- Motion
- gray-matter
- marked
- zod
- sonner

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

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

## Content sources

The portfolio content is mostly driven by data files in `src/data/`:

- `projects.ts` for project cards
- `experiences.ts` for timeline items
- `tech-stack.ts` for grouped tools and languages
- `socials.ts` for contact links
- `interests.ts` for reading, music, and gallery content
- `blog.ts` for loading Markdown blog posts

Blog posts live in `src/content/blogs/` and use front matter for metadata such as title, date, and excerpt.

## Project structure

```text
src/
  components/
    mac/         # Desktop-inspired UI pieces
    sections/    # Page content sections
    icons/       # App and tech icons
  content/
    blogs/       # Markdown blog posts
  context/       # Shared React context
  data/          # Portfolio data sources
  routes/        # TanStack file-based routes
public/          # Static assets like resume, music, images, and gallery files
```

## Routes

- `/` Home
- `/about` About
- `/projects` Projects
- `/tech-stack` Tech stack
- `/experience` Experience
- `/blog` Blog index
- `/blog/:slug` Blog post detail
- `/contact` Contact
- `/resume` Resume
- `/interests` Interests

## Notes

- The app uses `public/resume.pdf` for the resume page.
- Background audio comes from `public/music.mp3`.
- Static images for the portfolio live in `src/assets` and `public/`.

## License

No license file is included in this archive.