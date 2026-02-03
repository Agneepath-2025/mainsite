# Development — Agneepath Mainsite

A short, practical guide to set up, run, and test the project locally.

---

## Requirements

- Node.js >= 18 (LTS recommended)
- pnpm (recommended) or npm/yarn
- Git
- A modern browser (Chrome/Firefox/Edge)

---

## Setup (first time)

1. Clone and enter repo

```bash
git clone https://github.com/<org>/mainsite.git
cd mainsite
```

2. Install

```bash
pnpm install
# or
npm install
```

3. Create a `.env.local` for secrets (do not commit)

```
# Example
NEXT_PUBLIC_SENTRY_DSN=<your_public_dsn>
SENTRY_DSN=<your_server_dsn>
SENTRY_AUTH_TOKEN=<sentry_cli_token>
SENTRY_ORG=<org>
SENTRY_PROJECT=<project>
```

Notes:
- Keep production DSNs and tokens in your CI / secret manager, not in repository.

---

## Local run (development)

```bash
pnpm dev
# or
npm run dev
```

Visit http://localhost:3000

Developer quick commands:
- `pnpm dev` — start dev server
- `pnpm build` — build for production
- `pnpm start` — start built app locally
- `pnpm lint` — run ESLint

---

## Useful checks & debug steps :

- Lint: `pnpm lint`
- If build fails: run `pnpm build` to see TypeScript errors
- Clear Next cache: delete `.next/` and restart dev server
- If images behave unexpectedly: check `next.config.ts` (`images.unoptimized = true`) and `public/` image paths

---

## Sentry: how to test your integration

1. Add `NEXT_PUBLIC_SENTRY_DSN` and `SENTRY_DSN` to `.env.local` (or use existing dev DSNs).
2. Start app (`pnpm dev`) and visit: `/sentry-example-page`.
3. Click **Throw Sample Error** to trigger a client-side error and an API call to `/api/sentry-example-api` which throws server-side.
4. Check the Sentry dashboard for client + server events.

Note: Ad-blockers can block Sentry; disable them for local testing.

---

## Adding pages & API routes (examples)

- Add a new page (App Router): create `app/new-route/page.tsx` and export a default React component.
- Add an API route: create `app/api/my-route/route.ts` and export `GET`, `POST`, etc.
- Make client-only components by adding `"use client"` at the top for components that use hooks or browser APIs.

Example API route:
```ts
export function GET() {
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
```

---

## Tailwind & Styling notes

- Tailwind is used via PostCSS plugin. There is no `tailwind.config.js` in the repo yet.
- To add a config:

```bash
npx tailwindcss init -p
```

Minimal `tailwind.config.js` suggestion:
```js
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

Add any design tokens or variant settings to this config.

---

## Tests

- There are currently no unit or integration tests. Add Jest + React Testing Library for UI components and small unit tests for `lib/*` utilities.

Suggested quick test commands to add in the future:
- `pnpm test` to run Jest
- `pnpm test:watch` for TDD mode

---

## Editor & recommended tools

- Recommended VS Code extensions: ESLint, TypeScript, Prettier, Tailwind CSS Intellisense
- Use `format on save` and enable `ESLint: Auto Fix On Save` to reduce friction.

---

## CI / Deploy notes

- Make sure Sentry environment variables are in CI to upload source maps during build.
- Make sure `CI=true` is set (some Sentry options look for this variable).

---
