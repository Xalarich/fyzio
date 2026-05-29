# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Nuxt dev server on `http://localhost:3000`
- `npm run build` — production build (Nitro preset is `vercel`, outputs to `.vercel/output`)
- `npm run generate` — static site generate
- `npm run preview` — preview the production build locally

There is no test runner, linter, or formatter configured.

## Architecture

Nuxt 3 site for a Czech physiotherapy practice (Fyzioterapie Marek Cón). All user-facing copy is in Czech (`htmlAttrs.lang = 'cs'`).

**Source layout uses `srcDir: 'app/'`** (Nuxt 4-style). Pages, components, and layouts live under `app/`, not the repo root — keep this in mind when adding files or referencing Nuxt auto-import paths. `app/public/` is the static assets root (images under `app/public/images/`, videos under `app/public/videos/`).

**Routing is file-based** from `app/pages/`. **All public URLs are Czech** (English route slugs were renamed; redirects were intentionally not added):
- Top-level pages: `index.vue`, `o-nas.vue` (`/o-nas`), `kontakt.vue`
- `sluzby/` (services) and `clanky/` (blog/articles, `/clanky`) are static page directories — each `.vue` file is its own route, not driven by markdown content. Blog post slugs are Czech (e.g. `bezecke-koleno`, `bolest-krcni-patere`); the article list + slugs are defined in the `blogData` array in `clanky/index.vue`, which must stay in sync with the filenames.
- Note: `app/public/images/blogs/` and `app/public/videos/blogs/` are asset folders, **not** routes — they kept their English names.

**`@nuxt/content` is installed and configured** (`content.config.ts` defines a single `content` collection of type `page` sourcing `**`), and `.data/content/contents.sqlite` exists, but there is currently **no `content/` directory** — pages are hand-authored Vue components rather than markdown. If adding content-driven pages, create `content/` at the repo root (Nuxt Content sources from there, not from `app/`).

**Server API** lives in `server/api/`. Currently one endpoint:
- `POST /api/contact` (`server/api/contact.post.ts`) — validates `{ name, email, phone, message }` with zod and sends an email via nodemailer. Reads SMTP credentials from `runtimeConfig.mail`, which is populated from env vars: `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_TO` (default `marek.con77@gmail.com`), `MAIL_FROM` (default `no-reply@fyzio.local`). Returns 500 if SMTP config is missing.

**Components** (`app/components/`, auto-imported):
- `AppHeader.vue`, `AppFooter.vue` — used via `app/layouts/default.vue`
- `HeroSlider.client.vue`, `ImageSlider.client.vue` — Swiper-based sliders. The `.client.vue` suffix makes them client-only (Swiper is not SSR-safe); pages additionally wrap them in `<ClientOnly>`.

**Styling** is Tailwind via `@nuxtjs/tailwindcss`. Two Tailwind configs coexist:
- `tailwind.config.js` at the repo root — has the real `theme.extend` (custom spacing scale `100/200/300/400`, `aspect-ratio` `4/5`, `width.248`, font stack defaulting to Roboto, plus `tailwindcss-textshadow` plugin)
- An inline `tailwindcss.config` block in `nuxt.config.ts` — only sets `content` globs

The Tailwind CSS entry is `assets/css/tailwind.css` (at repo root, not under `app/`).

**Deployment**: `nitro.preset = 'vercel'`. Set the `MAIL_*` env vars in the Vercel project before the contact form will work in production.

## Images / assets

- Source/original photos (from the practice's Google Drive) are kept in `drive-images/` at the repo root, which is **gitignored** (originals are 12–17 MB each). Only web-optimized copies belong under `app/public/images/`.
- **No ImageMagick or `sharp` is installed.** To resize/compress images, use .NET `System.Drawing` via PowerShell (load `System.Drawing`, draw onto a smaller `Bitmap` with `HighQualityBicubic`, save with a JPEG quality `EncoderParameter`). Typical web target: max dimension ~1600 px, JPEG quality ~82 → 80–200 KB.
- Sliders use Swiper and must be **client-only** (`*.client.vue`, wrapped in `<ClientOnly>`): `HeroSlider` (homepage top), `KlinikaSlider` (homepage "Naše filozofie" box, autoplay loop). `ImageSlider.client.vue` exists but is currently unused.
