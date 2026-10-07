<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Crown & Coast Roofing — repository workflow

Durable instructions for DeepSeek Harness sessions working on this repository.

## Autonomy

- Work autonomously on requested website changes once the task is clear.
- Inspect the existing project before changing it.
- If a test fails, investigate and attempt to fix it yourself rather than immediately asking the user to diagnose it, unless proceeding would require a risky/destructive action or information only the user can provide.

## Design

- Preserve the established Crown & Coast visual language once the initial design has been created unless the task specifically requests a redesign.
- Prioritise excellent mobile usability, accessibility, performance and clear conversion paths.

## Verification

- Run appropriate lint, type and production build checks after changes.
- Do not consider a task complete merely because the code compiles.

## Browser QA

- For final browser QA, DO NOT rely on the Next.js development server because Playwright in this environment has an HMR/WebSocket issue that can prevent hydration.
- Run a clean production build and start Next.js production mode on an available port, normally 3001.
- Use Playwright browser tools to inspect and interact with the rendered site.
- Test relevant desktop and mobile viewport sizes.
- Scroll through all affected pages and test navigation, forms, interactive controls, responsive layout and browser console errors.
- If browser QA finds problems, diagnose and fix them yourself and rerun the tests.
- Browser-test artifacts under `.playwright-mcp/` are disposable and must never be committed.

## Git and deployment

- For implementation work, create and use a feature branch rather than working directly on `main`.
- Before Git operations, check `git status` and ensure only intended project changes are included.
- After successful testing, commit intended changes and push the feature branch to GitHub so Vercel can create a Preview deployment.
- Test the Vercel Preview with browser tools when practical.
- Never merge into `main`, push directly to `main`, or trigger Production unless the user explicitly approves it.
