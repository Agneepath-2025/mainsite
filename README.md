# Agneepath — Mainsite (Detailed Developer Guide)

> A practical and explicit guide for new maintainers: architecture, conventions, key files, and common tasks. Main-Site for public users to find information about the Agneepath Event at Ashoka

---

## TL;DR — What this repo is (at a glance) ✅

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
3. Key files
4. Dependencies
5. Local development & env vars setup
6. Production build & deployment notes
7. Troubleshooting & testing
8. How to make common changes
9. TODOs / recommended improvements

---

## 1) Project layout:

Top-level files/folders and purpose:

- app/
  ├── accommodation/
  │ └── page.tsx — Page that shows Agneepath accomodations
  ├── api/
  │ └── sentry-example-api/
  │ └── route.ts  — API route handlers; e.g. `sentry-example-api/route.ts` throws an error intentionally to verify server-side Sentry capture.
  ├── contact-us/
  │ └── page.tsx — Agneepath Contact-us page
  ├── gallery/
  │ └── page.tsx — Gallery route (uses `components/gallery-component.tsx`).
  ├── home-components/
  │ ├── about-us.tsx — About Us section in HomePage
  │ ├── CampusMap.tsx — Campus Map Section in HomePage
  │ ├── ChessboardBackground.tsx — *
  │ ├── EventSection.tsx — List of Sports in HomePage
  │ ├── FootballFieldBackground.tsx — *
  │ ├── ReelSection.tsx — Reel Section of HomePage
  │ ├── SectionActivationContext.tsx — *
  │ └── SwimmingPoolBackground.tsx — *unutilized transitioning backgrounds for HomePage
  ├── live-scores/
  │ └── page.tsx — Iframe embedd to Live-Scores (TechMin)
  ├── meet-the-team/
  │ └── page.tsx — Meet the team page (images at public/team)
  ├── not-found/
  │ └── page.tsx — 404 Error Page
  ├── policy-guidelines/
  │ └── page.tsx — Agneepath Policy and Guidelines
  ├── sentry-example-page/
  │ └── page.tsx — A dedicated page to test Sentry integration.
  ├── `page.tsx` — Home page composed of `home-components/*` subcomponents.
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

## 3) Key files

### `app/layout.tsx`
- Registers Google `Open Sans` using Next's Font API and sets `metadata` (title, description, open graph image, twitter card).
- Imports `globals.css` and renders `<Header />` and page children.
- Sets `viewport` and HTML lang.

### `app/globals.css`
- Loads Tailwind using `@tailwind` directives and defines CSS variables for color system and fonts.
- Note: There is no `tailwind.config.js` yet — Tailwind still works because PostCSS plugin is configured, but adding a `tailwind.config.js` gives you more control and fixes content paths for Purge.

### `next.config.ts`
- Wrapped with `withSentryConfig(nextConfig, options)`: this enables the Sentry Webpack plugin to upload source maps during CI builds.
- `images.unoptimized = true` is set — this disables Next.js image optimization. It can be changed if you want the platform to handle optimization (Vercel does this automatically).

### Sentry setup: `instrumentation.ts`, `instrumentation-client.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`
- Client: `instrumentation-client.ts` calls `Sentry.init()` with the DSN (currently hard-coded); it also configures Replay sampling and logs.
- Server/Edge: `sentry.server.config.ts` and `sentry.edge.config.ts` call `Sentry.init()` with server/edge-specific configurations.
- `instrumentation.ts` exports a `register()` function that conditionally imports server/edge config based on `process.env.NEXT_RUNTIME` (useful for serverless/edge deployments).

Security note: DSNs are currently hard-coded in the repo. For production, move DSNs and any keys into `.env` or secret management (e.g., use `process.env.SENTRY_DSN` and `NEXT_PUBLIC_SENTRY_DSN` as needed).

### Sentry example page & API
- `app/sentry-example-page/page.tsx` and `app/api/sentry-example-api/route.ts` are included so you can verify Sentry captures for both client (frontend) and server (API route).
- Use the page to test connectivity (the page also runs `Sentry.diagnoseSdkConnectivity()` and logs messages to Sentry).

### `components/gallery-component.tsx`
- Exposes `Gallery` and `GallerySection` types.
- Demonstrates `next/image` usage with `width/height`, `sizes`, `placeholder='blur'` and a small inline `blurDataURL` SVG placeholder.

### `components/ui/*` and `lib/utils.ts`
- Utilities include `cn()` that merges class names via `clsx` and `tailwind-merge`.
- `ui` components use `class-variance-authority` (`cva`) for consistent variant-driven UI.

---

## 4) Dependencies

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

## 5) Local development & env vars setup

1. Install dependencies

```bash
# Recommended: pnpm
pnpm install
# or npm
npm install
```

2. Recommended Node: Node 18+ (LTS). Confirm: `node -v`.

3. Add a `.env.local` (not checked in). Example variables:

```
# Sentry
SENTRY_DSN=<your_sentry_dsn>             # only for server-side (do not expose public DSN)
NEXT_PUBLIC_SENTRY_DSN=<your_public_dsn> # for browser SDK (optional)
SENTRY_AUTH_TOKEN=<sentry_cli_token>     # required in CI for release uploads
SENTRY_ORG=<sentry_org>
SENTRY_PROJECT=<sentry_project>
```

4. Run dev

```bash
pnpm dev
# or
npm run dev
```

5. Lint & Typecheck

```bash
pnpm lint
# Type errors are surfaced by the editor or on build (Next's type plugin)
```

---

## 6) Production Build and Deployment notes

- Build locally

```bash
pnpm build
pnpm start
```

- Deploying to Production:
  - Add Sentry env vars in Vercel project settings (SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT, etc.) so `withSentryConfig` can upload source maps during CI.
  - Set `CI=true` in the environment during the build to enable Sentry's silent mode (as configured).

- Important: `next.config.ts` sets `images.unoptimized = true`. If you prefer image optimization on the platform, remove or modify this setting and configure allowed domains.

---

## 7) Troubleshooting & testing

- Sentry test (client + server):
  1. Start the app in dev or production.
  2. Visit `/sentry-example-page` and click the "Throw Sample Error" button.
  3. This triggers a client-side error and also calls `/api/sentry-example-api` which throws a server-side error.
  4. Check the Sentry project dashboard to see both events.

- If Sentry events don't show:
  - Make sure the DSN(s) are configured correctly and not blocked by ad blockers for client tests.
  - For source-map / release issues during deploy, ensure `SENTRY_AUTH_TOKEN` and related env vars are present in CI.

- Image quirks: `next/image` is used with `priority`, `placeholder='blur'`, and `sizes` — but `images.unoptimized = true` disables Next's image optimization pipeline, so CDN/platform-level optimization may be desirable.

---

## 8) How to make common changes

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

## 9) TODOs / Improvements

- Move hard-coded Sentry DSNs to environment variables.
- Add a `tailwind.config.js` so the content paths are explicit and tree-shaking works in production.

---

## How the App Works —

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

## Getting Started on Local Development

Recommended: use pnpm (this repo includes `pnpm-lock.yaml`), though `npm` and `yarn` will also work.

1. Clone the repo:

```bash
git clone https://github.com/<org>/mainsite.git
cd mainsite
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run in development mode:

```bash
pnpm dev
# or
npm run dev
```

Open http://localhost:3000 to view the site.

Notes:
- Node >= 18 is recommended for Next.js v16.
- Type checking is enabled (`tsconfig.json` uses `strict: true`). Fix TypeScript errors before committing.

---

## Build & Run in Production Mode

Build the app and run it locally (production emulation):

```bash
pnpm build
pnpm start
# or
npm run build && npm run start
```

For deployment, Vercel is the recommended provider (first-class Next.js support). Ensure Sentry environment variables/tokens are set in your CI/CD to enable automatic source map uploads and release tracking.

Recommended environment variables for Sentry/CI:
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`
- (optional) `NEXT_PUBLIC_SENTRY_DSN`

Note: This repository currently has a Sentry DSN hard-coded in the Sentry config files for convenience; consider moving this to env vars in production for security.

---

## CI / CD & Sentry Release Notes

- `next.config.ts` contains `withSentryConfig(...)` options enabling source map uploads and `tunnelRoute` for replay/monitoring.
- In CI, set `CI=true` and the Sentry env vars (above) so source maps are uploaded and Sentry builds are silent unless errors occur.
- Use the Sentry docs: https://docs.sentry.io/platforms/javascript/guides/nextjs/

---

## Debugging & Troubleshooting Sentry/Lint

- Sentry connectivity issues: visit `/sentry-example-page` and click the sample button to test.
- If Sentry Replays or requests are blocked locally, try disabling ad-blockers or check network policies.
- Image behavior: `next.config.ts` currently sets `images.unoptimized = true` — this avoids Next’s image optimization in production. Adjust if you want platform image optimization.
- Lint: `pnpm lint` (ESLint is configured via `eslint-config-next`).

---

## Adding new pages / components (short)

- To add a page: create a folder under `app/` and add a `page.tsx` (and optionally `layout.tsx` for nested layouts).
- Server-only APIs: add `route.ts` under `app/api/<name>/route.ts` (can be server or edge depending on `export const runtime = 'edge'` or default).
- Add shared UI in `components/` and primitive controls in `components/ui/`.
- Add static assets to `public/` and reference them with absolute paths (e.g., `/images/foo.png`).

---

## Contacts & License

- License: see `LICENSE` at the repo root.
- For Sentry dashboard usage and issues: use the project/org configured in `next.config.ts` options.

---

© Agneepath — Mainsite
