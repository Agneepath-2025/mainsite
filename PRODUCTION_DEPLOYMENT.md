# DEPLOYMENT.md

## Overview

This project is deployed to a **Hetzner server** using **Node.js and PM2**.
Deployments are triggered from **GitHub Actions**, which SSH into the server and run the production build and restart the app.

The live site is available at:

```
https://agneepath.co.in
```

---

## High-Level Deployment Flow

1. Code is pushed to the `main` branch on GitHub
2. GitHub Actions runs:

   * Dependency install
   * Linting
   * `next build` (CI validation)
3. GitHub Actions connects to the Hetzner server via SSH
4. On the server:

   * The repository is updated (`git pull`)
   * Dependencies are installed
   * A production build is created
   * The app is restarted using PM2

---

## Server Environment

* **Hosting provider**: Hetzner
* **Operating system**: Ubuntu (VM)
* **Process manager**: PM2
* **Runtime**: Node.js 20.x
* **Reverse proxy**: Nginx
* **App port**: 3000 (proxied by Nginx)

---

## Repository on Server

The repository is cloned directly onto the server and updated in-place during deployment.

Example (actual path may vary):

```bash
/mnt/HC_Volume_103871510/mainsite
```

---

## Environment Variables

Production environment variables are defined on the server in:

```bash
.env.production
```

This file is **not committed** to the repository.

### Required variables

```env
NODE_ENV=production

# Sentry (server-side)
SENTRY_DSN=...
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=...
SENTRY_PROJECT=...

# Sentry (client-side, optional)
NEXT_PUBLIC_SENTRY_DSN=...
```

These variables must be available when running `npm run build` on the server.

---

## GitHub Actions (Deployment)

The deployment workflow:

* Runs on GitHub Actions
* Uses `appleboy/ssh-action` to connect to the Hetzner server
* Executes deployment commands remotely

### Actions performed on the server

The SSH step effectively runs the following commands:

```bash
git pull origin main
npm install
npm run build
pm2 restart mainsite
pm2 save
```

> Note: `next build` is executed both in CI and again on the server.
> The **server build** is the one actually used in production.

---

## PM2 Configuration

* The app is managed by **PM2** under the name:

```
mainsite
```

### Common PM2 commands

```bash
pm2 list
pm2 restart mainsite
pm2 logs mainsite
pm2 save
```

PM2 is configured in **fork mode** (single process).

---

## Reverse Proxy (Nginx)

Nginx proxies incoming traffic to the Next.js app running on port 3000.

Example configuration:

```nginx
server {
  server_name agneepath.co.in;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## Sentry

Sentry is configured for both client-side and server-side error tracking.

### Notes

* Sentry warnings may appear during the **CI build** due to missing auth tokens.
* The **production build on the server** is responsible for:

  * Uploading source maps
  * Creating releases (if `SENTRY_AUTH_TOKEN` is present)

---

## Rollback Procedure

To roll back to a previous commit:

```bash
git checkout <commit-hash>
npm install
npm run build
pm2 restart mainsite
pm2 save
```

---

## Troubleshooting

### App is down

```bash
pm2 list
pm2 logs mainsite
```

### Build failures

* Ensure `.env.production` exists and is readable
* Verify Node.js version matches expected runtime
* Check disk space on the server

---

## Notes for Future Maintainers

* Deployment is **server-driven**, not containerized
* The production environment is mutable (in-place builds)
* Package manager usage is currently **npm-based**
* CI is used for validation and deployment triggering, not artifact delivery

---

## References

* Next.js documentation
  [https://nextjs.org/docs](https://nextjs.org/docs)
* PM2 documentation
  [https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)
* Sentry + Next.js
  [https://docs.sentry.io/platforms/javascript/guides/nextjs/](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

---
