# Adarsh Singh — Portfolio (Next.js + Tailwind)

Same "systems dashboard" design as the static version, rebuilt with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx      — root layout, loads Inter + JetBrains Mono via next/font
  page.tsx         — all sections (hero, about, experience, projects, contact)
  globals.css      — Tailwind directives + grid background utility
components/
  StatusBar.tsx    — sticky nav
  Terminal.tsx     — animated boot-log terminal (client component)
  SectionHeading.tsx
tailwind.config.ts — custom color tokens (bg, teal, amber, etc.) + animations
```

## Before deploying

- Swap the placeholder `mailto:`, LinkedIn, and X links in `app/page.tsx` (search for `href="#"` and `you@example.com`)
- Update the "open to work" line in the hero if that's no longer accurate
- `npm run build && npm start` for production, or deploy to Vercel / your own Nginx+PM2 setup like the URL shortener

## Notes

- Colors and type scale live in `tailwind.config.ts` — edit there rather than hardcoding hexes in components
- The terminal's boot sequence is in `components/Terminal.tsx` if you want to change the "services" it lists
