# Repository Guidelines

## Project Structure & Module Organization
This Next.js 14 app router project keeps routes under `src/app`, with each folder exposing a `page.tsx` and optional `loading.tsx` or `layout.tsx`. Shared UI lives in `src/components` (domain folders such as `sections`, `ui`, `forms`), while `src/lib`, `src/hooks`, and `src/types` host cross-cutting utilities, hooks, and TypeScript contracts. Global styling primitives and Tailwind tokens sit in `src/styles`. Static assets reside in `public`; long-form specs, rollout notes, and deployment docs live in `docs`. Automation utilities (e.g., image compression) are in `scripts`.

## Build, Test, and Development Commands
- `npm run dev`: start the local Next.js dev server with hot reloading.
- `npm run build`: create the production bundle and regenerate the sitemap.
- `npm run start`: serve the production build locally for smoke testing.
- `npm run lint`: run ESLint with the Next.js + TypeScript ruleset.
- `npm test`: execute Jest with jsdom and Testing Library helpers.
- `npm run optimize:images`: batch recompress `public/images` and emit WebP/AVIF variants.

## Coding Style & Naming Conventions
TypeScript is compiled in strict mode; keep `noUnused` and `noImplicitReturns` clean. Follow existing formatting: two-space indentation, trailing commas, and Tailwind utility ordering consistent with current files. Name React components in PascalCase, hooks in camelCase prefixed with `use`, route segment folders in kebab-case, and shared utilities under `src/lib` in camelCase filenames. Use the `@/` path alias for intra-project imports. Run `npm run lint` before pushing to ensure ESLint and TypeScript rules pass.

## Testing Guidelines
Write component and hook tests with Jest and Testing Library, using file names like `ComponentName.test.tsx` colocated with the code or in a nearby `__tests__` folder. Reuse the `jest.setup.ts` helpers (jest-dom matchers) and the `@/` alias. Mock external email or CMS integrations to keep tests deterministic. Aim for coverage on rendering logic, data transforms in `src/lib`, and critical booking flows; add regression tests when fixing bugs.

## Commit & Pull Request Guidelines
Commits follow Conventional Commits (`type(scope): summary`), with scopes such as `ui` or `build`, and optional issue references (`(#65)`) when closing tickets. Keep messages in the imperative mood and split unrelated changes. For pull requests, describe the user-facing outcome, list validation steps (dev server, lint, tests), and attach screenshots or recordings for UI changes. Link relevant docs in `docs/` when updating processes, and ensure environment changes are called out explicitly.

## Environment & Secrets
Create `.env.local` (ignored by git) with SMTP credentials and salon contact data before running the app. Never commit secrets. When adding new configuration keys, document them in `docs/` and provide sensible fallbacks for non-production usage.
