# Adarsh Singh — Portfolio

Personal portfolio of Adarsh Singh, a Junior Node.js Developer at Feat System in Mumbai. It covers my experience, skills and projects, built as a "systems dashboard" with a sticky status bar and an animated boot-log terminal.

**Live:** https://portfolio.adarshdev.pro

## About me

- Junior Node.js Developer at Feat System (04/2026 – present): REST API integrations, PostgreSQL, invoice reconciliation, email and calendar integrations.
- Previously Full Stack Developer Intern at Weblord Infotech (12/2025 – 03/2026): React + Node.js client web application, testing components, REST APIs and database behaviour.
- BE in Civil Engineering, Thakur College of Engineering & Technology (2024), CGPA 7.99.

## Projects shown on the site

- **Stockline** — multi-tenant inventory SaaS in a Turborepo monorepo (Express, Prisma, PostgreSQL, Next.js). [Source](https://github.com/adieesingh/Multi-Tenant-Inventory-SaaS)
- **URL Shortener** — self-hosted full-stack app with Next.js, Express, Prisma and Zod, deployed behind Nginx with PM2. [Live](https://shorturlgenerator.adarshdev.pro) · [Source](https://github.com/adieesingh/shortUrl_Monorepo)

## Tech stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3, `next/font` (Inter and JetBrains Mono). Deployed with GitHub Actions, PM2 and Nginx.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js linting |

### Docker

```bash
docker compose up --build
```

The app is served on http://localhost:3000. The current `Dockerfile` starts the dev server (`npm run dev`), so it is meant for local use, not production.

## Project structure

```
app/
  layout.tsx          Root layout, loads Inter and JetBrains Mono via next/font
  page.tsx            All sections: hero, about, experience, projects, contact
  globals.css         Tailwind directives and the grid background utility
components/
  StatusBar.tsx       Sticky navigation
  Terminal.tsx        Animated boot-log terminal (client component)
  SectionHeading.tsx  Numbered section headings
tailwind.config.ts    Custom colour tokens (bg, teal, amber, ...) and animations
.github/workflows/
  deployment.yml      Deploy workflow
```

## Editing the content

Experience entries, the tech stack chips and the project cards are plain data and JSX in `app/page.tsx`. Update the `stack` and `experience` arrays at the top of the file, and the project cards in the Projects section.

## Deployment

Pushing to `master` runs `.github/workflows/deployment.yml`, which connects to the server over SSH and then:

1. Pulls the latest code.
2. Runs `npm ci` and `npm run build`.
3. Restarts the app with PM2 on port 3003 (or starts it if it isn't running).
4. Reloads Nginx.

The workflow needs two repository secrets: `SSH_HOST` and `SSH_KEY`.
