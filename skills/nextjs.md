# Next.js Skill

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Goal

Build a maintainable, performant Next.js application using modern App Router patterns.

## Architecture

Use:

- Next.js App Router
- TypeScript
- Server Components by default

Use Client Components only when necessary.

Do not add `"use client"` unless the component requires client-side behavior.

## Rendering

Prefer static rendering for portfolio content.

Use dynamic rendering only when required.

For content-driven dynamic routes, consider:

- `generateStaticParams`
- static data
- build-time generation

## Components

Keep components:

- small
- readable
- reusable where appropriate

Avoid giant page components.

Prefer composition.

## Data

Keep content separate from UI.

Do not place large amounts of personal information directly inside React components.

Prefer structures such as:

`lib/`
`data/`
or content files.

## Metadata

Use the Next.js Metadata API.

Use:

- `metadata`
- `generateMetadata`

Do not manually inject metadata into pages unless necessary.

## Images

Prefer `next/image`.

Optimize image dimensions and formats.

Do not ship unnecessarily large images.

## Fonts

Prefer `next/font`.

Avoid unnecessary external font requests.

## Navigation

Use Next.js navigation utilities appropriately.

Prefer internal links using `next/link`.

## Dependencies

Before installing a package, ask:

"Can this be implemented cleanly using Next.js, React, TypeScript, or CSS?"

If yes, avoid adding the dependency.

Keep the dependency tree small.

## Performance

Prefer:

- Server Components
- static generation
- optimized images
- optimized fonts
- minimal client JavaScript

Avoid unnecessary:

- client components
- browser-side data fetching
- third-party scripts
- large UI libraries

## Error Handling

Handle:

- missing project pages
- invalid routes
- missing content

Use appropriate Next.js error/not-found patterns.

## Code Quality

Avoid:

- duplicated logic
- unnecessary abstractions
- giant components
- dead code
- unused imports
- unnecessary state

## Validation

After significant changes run:

1. TypeScript checks
2. ESLint
3. Production build

Fix errors before completing the task.