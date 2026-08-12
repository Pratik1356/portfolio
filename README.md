# Pratik Singh — Developer Journey Portfolio

A single-page portfolio built around a code-editor motif: a VS Code–style tab
bar doubles as section navigation, a line-number gutter runs down the page,
and a live status bar tracks your scroll position — all wrapped around
GSAP-driven scroll animations.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- GSAP + ScrollTrigger
- lucide-react

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/     # Hero, About, Skills, Projects, Education, Contact,
                   # TabBar, StatusBar, Gutter, BrandIcons
  data/
    portfolioData.js   # all copy & content lives here — edit this file
                        # to update projects, skills, education, links
  index.css       # design tokens (colors, fonts) as CSS variables
```

## Customizing

- **Content**: everything (name, projects, skills, education, links) lives in
  `src/data/portfolioData.js`.
- **Colors/fonts**: edit the `@theme` block at the top of `src/index.css`.
- **Resume download**: drop a `resume.pdf` into `public/` and point the
  "Download Resume" affordance at `/resume.pdf` if you want a working button
  (currently the download icon is decorative next to the profile panel).

## Deploying

Push to GitHub and deploy on Vercel: import the repo, framework preset
"Vite", default build command `npm run build`, output directory `dist`.
