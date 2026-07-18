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


