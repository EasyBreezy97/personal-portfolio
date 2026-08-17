# Performance Skill

## Goal

Keep the website fast and efficient, especially on mobile devices.

## Rendering

Prefer Server Components.

Prefer static generation for portfolio content.

Avoid unnecessary client-side rendering.

## JavaScript

Minimize client-side JavaScript.

Do not convert an entire page to a Client Component just to implement a small interactive element.

Keep interactive components isolated.

## Images

Use `next/image` where appropriate.

Optimize:

- dimensions
- formats
- loading behavior

Do not load huge images when smaller assets are sufficient.

## Fonts

Use `next/font`.

Avoid unnecessary external font requests.

## Dependencies

Keep dependencies minimal.

Before installing a package, consider whether native CSS, React, or Next.js can solve the problem.

## Third-Party Scripts

Avoid unnecessary:

- analytics scripts
- tracking scripts
- widgets
- external libraries

Every third-party script should have a clear purpose.

## CSS

Avoid unnecessarily large CSS.

Prefer reusable styles and existing Tailwind utilities.

## Performance Review

Check for:

- [ ] Unnecessary Client Components
- [ ] Large dependencies
- [ ] Large images
- [ ] Unoptimized fonts
- [ ] Excessive JavaScript
- [ ] Unnecessary network requests
- [ ] Third-party scripts
- [ ] Layout shifts
- [ ] Slow-loading content

## Principle

Do not optimize blindly.

Measure or identify a real performance problem before introducing complexity.