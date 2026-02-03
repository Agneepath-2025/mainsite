# Contributing to Agneepath — Mainsite

Thank you for contributing! This document outlines branch rules, PR expectations, and a short checklist to make reviews quick and consistent.

---

## Branching & PR strategy

- Main branches
  - `main` (or `master`): always deployable; protected.
  - `develop` (optional): integration branch for staging work.

- Feature branches
  - Naming: `feature/<short-description>`, `fix/<short-description>`, `chore/<short-description>`, `refactor/<short-description>`, or `hotfix/<short-description>`.
  - Open small PRs: prefer focused changes under ~200 lines and 1 scope.

- PR workflow
  1. Create a branch from `main` (or `develop` if used).
  2. Push the branch and open a PR against `main` (or `develop`).
  3. Add a clear description, link related issues, and include the checklist below.
  4. Assign reviewers and request at least one approval before merging.
  5. Use a merge method consistent with the repo policy (Squash or Rebase recommended).

---

## Pull Request Checklist

Before requesting review, ensure the PR meets the checklist:

- [ ] Title is descriptive and follows the form: `type(scope): short description` (optional: use Conventional Commits style)
- [ ] PR body includes: what changed, why, and any migration or rollout steps
- [ ] Changes are scoped and small (one feature/fix per PR)
- [ ] All new code includes types and respects existing patterns
- [ ] Linting passes: `pnpm lint` or `npm run lint`
- [ ] Type checking passes (`pnpm build` or rely on CI checks)
- [ ] No sensitive credentials are added (secrets belong in the environment)
- [ ] If the change affects UI, include screenshots or short GIFs
- [ ] If required, update relevant docs (`README.md`, `DEVELOPMENT.md`, or `documentation/`)

Reviewers should check for:
- Correctness and edge cases
- Clear and useful commit messages
- Security considerations and data flow (e.g., Sentry DSN or tokens exposure)

---

## Commit message guidance ✍️

- Use concise messages; consider Conventional Commits (e.g., `feat: add login button`, `fix(api): handle empty response`).
- Keep commits small and logically grouped. Squash fixups before merge if needed.

---

## CI / Code owner expectations

- PRs must pass CI (lint, types). If the repo has branch protection, required checks will be enforced.
- Update or add tests for new behavior where appropriate.

---

## Reporting issues & feature requests

- Open issues in the repository and use templates (if present).
- Provide steps-to-reproduce, expected vs actual behavior, and relevant environment information.

---

## Quick notes for maintainers

- Sentry DSNs are currently present in the repo for convenience — rotate and move them to environment variables in production.
- Add `tailwind.config.js` when adding design tokens or custom variants.

---

Thanks for helping keep this project healthy and maintainable!
