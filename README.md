# Shrihari Haridas — Portfolio

Personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages via GitHub Actions.

Live: https://shrihariharidass.github.io/shrihariharidas/

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll-triggered animations)
- react-icons

## Editing content

All page copy — about text, experience, achievements, certifications, blogs, talks, projects — lives in one file:

```
src/data/content.js
```

Update that file and the site updates everywhere it's used. No need to touch components for text changes.

Images and the resume PDF are hosted in S3 and referenced by URL in `src/data/content.js` (`profile.photoUrl`, `profile.resumeUrl`).

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages via `actions/deploy-pages`.

**One-time setup:** in the repo's Settings → Pages, set "Source" to **GitHub Actions** (not "Deploy from a branch").

`legacy-static/index.html` is the previous single-file HTML version, kept for reference only — it is not built or deployed.
