# Agneepath — Mainsite (Detailed Developer Guide)

> A practical and explicit guide for new maintainers: architecture, conventions, key files, and common tasks. Main-Site for public users to find information about the Agneepath Event at Ashoka

---

## TL;DR — What this repo is (at a glance)

- Next.js App Router project (Next v16) powered by TypeScript and Tailwind CSS (via PostCSS).
- Sentry is integrated for client, server, and edge monitoring and replaying.
- UI: small set of atomic components in `components/` and utility helpers in `lib/`.
- Static assets live in `public/` (images, favicons, manifest).

---

## Quick Detailed Overview ✨

- **Tech stack**: Next.js (App Router, v16), React 19, TypeScript, Tailwind CSS (v4), PostCSS, Sentry for monitoring, Framer Motion & GSAP for animations, Lucide icons, and a small set of UI helpers.
- **Opinionated patterns**: Uses the Next.js App Router (server components by default), global layout at `app/layout.tsx`, and `use client` for interactive components. Sentry is wired for client, server, and edge.
- **Scripts** (see `package.json`):
  - `dev` → start dev server (hot reload)
  - `build` → production build
  - `start` → run built app
  - `lint` → run ESLint

---

## Table of Contents

1. Project layout
2. Routing & Components organization
3. Dependencies
4. How to make common changes
5. How the App Works
6. TODOs / recommended improvements

---

## 1) Project layout:

Top-level files/folders and purpose:

```txt
- app/
├── accommodation/
│   └── page.tsx — Page that shows Agneepath accommodations
├── api/
│   └── sentry-example-api/
│       └── route.ts — API route handler; intentionally throws an error to verify server-side Sentry capture
├── contact-us/
│   └── page.tsx — Agneepath Contact Us page
├── gallery/
│   └── page.tsx — Gallery route (uses components/gallery-component.tsx)
├── home-components/
│   ├── about-us.tsx — About Us section in Home page
│   ├── CampusMap.tsx — Campus Map section in Home page
│   ├── ChessboardBackground.tsx — Background transition component (unused)
│   ├── EventSection.tsx — Sports list section in Home page
│   ├── FootballFieldBackground.tsx — Background transition component (unused)
│   ├── ReelSection.tsx — Reel section of Home page
│   ├── SectionActivationContext.tsx — Shared context for section activation
│   └── SwimmingPoolBackground.tsx — Background transition component (unused)
├── live-scores/
│   └── page.tsx — Iframe embed for live scores (TechMin)
├── meet-the-team/
│   └── page.tsx — Meet the Team page (images in public/team)
├── not-found/
│   └── page.tsx — Custom 404 error page
├── policy-guidelines/
│   └── page.tsx — Agneepath policies and guidelines
├── sentry-example-page/
│   └── page.tsx — Dedicated page to test Sentry integration
└── page.tsx — Home page composed of home-components subcomponents
```
  - `layout.tsx` — Root layout: registers fonts, metadata (open graph, icons), and renders global UI components like `<Header />`. All pages are nested beneath `app/`.
  - `globals.css` — Global styles, CSS variables, and Tailwind imports (`@tailwind base; @tailwind components; @tailwind utilities;`).

- components/
  - `Header.tsx` — Top navigation; client component (`use client`) because it uses React state.
  - `gallery-component.tsx` — Fully server-renderable gallery component that uses `next/image` with optimizations and blur placeholders.
  - `AnimatedHeroBackground.tsx` — Small framer-motion client component for animated background accents.
  - `ui/` — Small primitives (e.g., `badge.tsx`, `card.tsx`), often using utilities from `lib/utils.ts`.
  - `scroll-progress.tsx` — Scroll Progress bar used in multiple webpages

- lib/
  - `team-data.ts` — Static team data used on `meet-the-team` page.
  - `utils.ts` — Helper `cn()` combining `clsx` + `tailwind-merge` for className merging.

- public/
  - Static assets: `/images/`, `/gallery/`, `/team/`, `/favicon/`, etc. Use absolute paths (`/images/foo.png`) in code.
  - `/favicon/` — List of Favicons
  - `/team/` — Meet-the-team images
  - `/gallery/` — Gallery images
  - `/images/` — HomePage Event Section images

- documentation/
  - Internal docs (CICD setup, images guide) to help with non-code workflows.

- Configs & root files
  - `next.config.ts` — Next configuration (wrapped with Sentry's `withSentryConfig` for release/source-map uploads and options like `tunnelRoute`).
  - `sentry.server.config.ts`, `sentry.edge.config.ts`, `instrumentation.ts`, `instrumentation-client.ts` — Sentry init and helper exports.
  - `postcss.config.mjs` — PostCSS configuration (Tailwind used as a PostCSS plugin).
  - `tsconfig.json` — TypeScript configuration and path alias `@/*` to project root.
  - `package.json` — Scripts & dependencies.

---

## 2) Routing & Components organization

- Routes: each folder in `app/` with a `page.tsx` becomes a route. Nested layouts can be added via `layout.tsx` files in subfolders.
- Components are server components by default. Add `"use client"` at the top of the file when it uses hooks, state, effects, or browser-only APIs (examples: `Header.tsx`, `ReelSection.tsx`, `AnimatedHeroBackground.tsx`).
- API routes: `app/api/<name>/route.ts` — these are traditional server handlers. Example: `app/api/sentry-example-api/route.ts` throws a server-side error intentionally for Sentry testing.

Tip: If you need runtime-specific behavior (edge vs node), export `export const runtime = 'edge'` from the route or page. The codebase also uses `process.env.NEXT_RUNTIME` in `instrumentation.ts` to decide what to import for Sentry.

---

## 3) Dependencies

- `next` — App framework.
- `react`, `react-dom` — core libraries.
- `typescript` — type safety.
- `tailwindcss`, `@tailwindcss/postcss`, `postcss` — utility-first styling toolchain.
- `@sentry/nextjs` — monitoring & error reporting / replay.
- `framer-motion`, `gsap` — animations (framer for small declarative animations; gsap available for heavier timelines if needed).
- `class-variance-authority`, `clsx`, `tailwind-merge` — utilities for composing and variant-driven classes.
- `lucide-react`, `react-icons` — iconography.

Dev dependencies are standard TypeScript & ESLint tooling.

---

## 4) How to make common changes

- Add a page (App Router)
  1. Create `app/new-route/page.tsx`
  2. Export a React component as default.
  3. If you need client-only behavior, add `"use client"` on top.
  4. Add shared UI in `components/` and primitive controls in `components/ui/`.
  5. Add static assets to `public/` and reference them with absolute paths (e.g., `/images/foo.png`)

Example: app/new-route/page.tsx

```tsx
export default function Page() {
  return <div className="p-8">Hello, new route!</div>
}
```

- Add an API route
  1. Create `app/api/my-api/route.ts` and export HTTP methods (GET/POST/etc.)
  2. To make it run on the Edge runtime: export `export const runtime = 'edge'`.

Example: app/api/hello/route.ts

```ts
export function GET() {
  return new Response(JSON.stringify({ hello: 'world' }), { status: 200 })
}
```

- Add Tailwind config (recommended)

```bash
npx tailwindcss init -p
```

Minimal `tailwind.config.js` example:

```js
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

This ensures PurgeCSS removes unused classes and you can add theme tokens.

- Moving Sentry DSN into env vars
  - Replace the hard-coded DSN in `instrumentation-client.ts` and server/edge configs with `process.env.NEXT_PUBLIC_SENTRY_DSN` and `process.env.SENTRY_DSN` respectively.

---

### Adding new pages (TL;DR)

- To add a page: create a folder under `app/` and add a `page.tsx` (and optionally `layout.tsx` for nested layouts).
- Server-only APIs: add `route.ts` under `app/api/<name>/route.ts` (can be server or edge depending on `export const runtime = 'edge'` or default).
- Add shared UI in `components/` and primitive controls in `components/ui/`.
- Add static assets to `public/` and reference them with absolute paths (e.g., `/images/foo.png`).

---

## 5) How the App Works

- App Router centric: Use folders with a `page.tsx` for routes; layouts can be nested.
- Server vs Client components:
  - Files are server components by default. Add `"use client"` at the top for client-side behavior (hooks, state, event handlers).
- Global styling:
  - `app/globals.css` imports Tailwind utilities and defines CSS variables used across the app.
- Sentry monitoring:
  - Sentry is configured for client (`instrumentation-client.ts`), server (`sentry.server.config.ts`) and edge (`sentry.edge.config.ts`).
  - `next.config.ts` uses `withSentryConfig` so releases/source maps can be uploaded during CI builds.
  - There is a Sentry example page (`app/sentry-example-page`) and API route (`app/api/sentry-example-api`) you can use to test integration.

---

## 6) TODOs / Improvements

- Move hard-coded Sentry DSNs to environment variables.
- Add a `tailwind.config.js` so the content paths are explicit and tree-shaking works in production.

---

## Contacts & License

- License: see `LICENSE` at the repo root.
- For Sentry dashboard usage and issues: use the project/org configured in `next.config.ts` options.

---

© Agneepath — Mainsite
