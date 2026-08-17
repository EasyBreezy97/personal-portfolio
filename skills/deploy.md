# Deployment Skill

## Goal

Keep the project easy and inexpensive to deploy on Vercel.

## Platform

The target deployment platform is Vercel.

Prefer architecture compatible with the Vercel free tier.

## Before Deployment

Run:

- TypeScript checks
- ESLint
- production build

Verify:

- all routes work
- images work
- metadata works
- sitemap works
- robots works
- no secrets are committed

## Environment Variables

Never commit:

- API keys
- passwords
- tokens
- private credentials

Document required environment variables.

Use `.env.local` for local development.

Provide `.env.example` when environment variables are required.

## Architecture

Avoid unnecessary infrastructure such as:

- persistent servers
- unnecessary databases
- background workers
- paid external services

For static portfolio content, prefer files/build-time generation.

## Vercel

The application should work with standard Next.js deployment settings.

Do not add custom deployment infrastructure unless required.

## Production Checklist

- [ ] Production build passes
- [ ] Environment variables documented
- [ ] No secrets committed
- [ ] All important routes work
- [ ] Sitemap accessible
- [ ] Robots accessible
- [ ] Metadata correct
- [ ] Images load
- [ ] Mobile layout works
- [ ] 404 behavior works