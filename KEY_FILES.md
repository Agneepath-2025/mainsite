# Key files

## List of Key Files

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
