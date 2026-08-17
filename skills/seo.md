# SEO Skill

## Goal

Build a technically strong, crawlable, indexable website that provides useful content to search engines and humans.

## Core Rules

- SEO is a first-class requirement.
- Never use keyword stuffing.
- Never create fake or misleading content for SEO.
- Every important page should have a clear search intent.
- Prefer useful content over artificially increasing page count.
- Use semantic HTML.

## Page Metadata

Every indexable page should have:

- Unique `<title>`
- Unique meta description
- Canonical URL when appropriate
- Open Graph metadata
- Appropriate social metadata

Use the Next.js Metadata API.

For dynamic pages, use `generateMetadata` where appropriate.

## URLs

Use descriptive, stable URLs.

Good:

- `/about`
- `/projects`
- `/projects/my-project`
- `/blog/nextjs-seo`

Avoid:

- `/page1`
- `/project?id=123`
- unnecessarily deep URLs

## Headings

- One clear H1 per primary page.
- Maintain logical H2/H3 hierarchy.
- Never choose heading tags purely for visual styling.
- Do not skip heading levels unnecessarily.

## Internal Linking

Important pages should be reachable through internal links.

Link naturally between:

- Homepage
- About
- Projects
- Individual projects
- Blog posts

Use descriptive anchor text.

## Sitemap

Create and maintain:

`app/sitemap.ts`

Include public, indexable pages.

Do not include:

- private pages
- duplicate URLs
- irrelevant routes

## Robots

Create:

`app/robots.ts`

Allow search engine crawling of public pages.

Do not accidentally block the entire website.

## Structured Data

Use JSON-LD when it genuinely describes the page.

Potential schemas:

- Person
- WebSite
- Article
- BreadcrumbList

Never invent:

- reviews
- ratings
- organizations
- achievements
- statistics

## Images

Use meaningful alt text for informative images.

Decorative images should use appropriate empty alt text.

Use `next/image` when appropriate.

## Content

Portfolio pages should contain useful information.

A project page should explain things such as:

- What the project is
- The problem
- The solution
- My role
- Technologies
- Important technical decisions
- Results, if real
- Lessons learned

Never invent results.

## SEO Audit

When auditing a page, check:

- [ ] URL
- [ ] Title
- [ ] Meta description
- [ ] Canonical
- [ ] H1
- [ ] Heading hierarchy
- [ ] Internal links
- [ ] Images
- [ ] Alt text
- [ ] Open Graph
- [ ] Structured data
- [ ] Sitemap
- [ ] Robots
- [ ] Indexability

Fix real issues rather than making unnecessary changes.
