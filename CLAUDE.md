# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Nuxt dev server on `http://localhost:3000`
- `npm run generate` — **the production command.** Static site generation → outputs a fully static `.output/public/` directory (HTML per route + `sitemap.xml`, `robots.txt`). This is what gets deployed.
- `npm run build` — generic Nuxt build (Node-server output). Not used for deployment; the site is hosted statically.
- `npm run preview` — preview the production build locally

There is no test runner, linter, or formatter configured.

## Architecture

Nuxt 3 site for a Czech physiotherapy practice (Fyzioterapie Marek Cón). All user-facing copy is in Czech (`htmlAttrs.lang = 'cs'`).

**Source layout uses `srcDir: 'app/'`** (Nuxt 4-style). Pages, components, and layouts live under `app/`, not the repo root — keep this in mind when adding files or referencing Nuxt auto-import paths. `app/public/` is the static assets root (images under `app/public/images/`, videos under `app/public/videos/`).

**Routing is file-based** from `app/pages/`. **All public URLs are Czech** (English route slugs were renamed; redirects were intentionally not added):
- Top-level pages: `index.vue`, `o-nas.vue` (`/o-nas`), `kontakt.vue`
- `sluzby/` (services) and `clanky/` (blog/articles, `/clanky`) are static page directories — each `.vue` file is its own route, not driven by markdown content. Blog post slugs are Czech (e.g. `bezecke-koleno`, `bolest-krcni-patere`); the article list + slugs are defined in the `blogData` array in `clanky/index.vue`, which must stay in sync with the filenames.
- Note: `app/public/images/blogs/` and `app/public/videos/blogs/` are asset folders, **not** routes — they kept their English names.

**No `@nuxt/content`.** It was removed (it required Nuxt ≥3.19 and was unused — no `content/` directory existed; pages are hand-authored Vue components). Do **not** reintroduce it without bumping Nuxt. There is no markdown content pipeline.

**No server runtime.** The site is generated to fully static files, so there is **no `server/api/`** and no SSR endpoints. The contact form and its `/api/contact` (nodemailer) endpoint were removed — `nodemailer`/`zod` are gone and there are no `MAIL_*` env vars. The contact page shows phone/e-mail/address only.

**SEO / sitemap / robots**: `@nuxtjs/sitemap` + `@nuxtjs/robots` generate `sitemap.xml` and `robots.txt` at build time into `.output/public/`. The base URL comes from `site.url` (and `runtimeConfig.public.siteUrl`), default `https://marekcon.cz`, overridable via `NUXT_PUBLIC_SITE_URL`. `/zasady-cookies` is excluded from the sitemap and disallowed in robots. Per-route `<link rel="canonical">`, `og:url` and a default `og:image` are set centrally in `app/app.vue`.

**Analytics + cookies**: GA4 via `app/plugins/gtag.client.js` using Google Consent Mode v2 (all storage denied until the visitor opts in). Disabled unless `NUXT_PUBLIC_GTAG_ID` (e.g. `G-XXXXXXXXXX`) is set **at build time**. Consent state lives in `app/composables/useCookieConsent.js`; the banner is `app/components/CookieConsent.client.vue` (in the default layout) and the policy page is `app/pages/zasady-cookies.vue`.

**Components** (`app/components/`, auto-imported):
- `AppHeader.vue`, `AppFooter.vue` — used via `app/layouts/default.vue`
- `HeroSlider.client.vue`, `ImageSlider.client.vue` — Swiper-based sliders. The `.client.vue` suffix makes them client-only (Swiper is not SSR-safe); pages additionally wrap them in `<ClientOnly>`.

**Styling** is Tailwind via `@nuxtjs/tailwindcss`. Two Tailwind configs coexist:
- `tailwind.config.js` at the repo root — has the real `theme.extend` (custom spacing scale `100/200/300/400`, `aspect-ratio` `4/5`, `width.248`, font stack defaulting to Roboto, plus `tailwindcss-textshadow` plugin)
- An inline `tailwindcss.config` block in `nuxt.config.ts` — only sets `content` globs

The Tailwind CSS entry is `assets/css/tailwind.css` (at repo root, not under `app/`).

**Deployment**: static hosting on **Endora** (free Czech hosting, Apache/PHP, **no Node.js**), uploaded over **FTP**. There is no CI/CD — the build is done manually and copied up:
1. Set build-time env vars (a `.env` works; see `.env.example`): `NUXT_PUBLIC_SITE_URL` (default `https://marekcon.cz`) and `NUXT_PUBLIC_GTAG_ID` once a GA4 ID exists.
2. `npm run generate`.
3. Upload the **contents of `.output/public/`** to the FTP web root.

Because env vars are baked in at generate time, the GA4 ID and site URL must be present **before** running `npm run generate` — there is no runtime config on the host.

**Pre-launch TODO** (outstanding before going live):
- Set `NUXT_PUBLIC_GTAG_ID` (real GA4 ID) in `.env` before generating — analytics stays off until then.
- Point `marekcon.cz` DNS at Endora and set up the FTP account.
- Fill the `[DOPLNIT]` placeholders in `app/pages/ochrana-udaju.vue` and `app/pages/obchodni-podminky.vue` (IČO, payment method, cancellation window/fee). These legal texts are drafts and should be reviewed.

## Images / assets

- Source/original photos (from the practice's Google Drive) are kept in `drive-images/` at the repo root, which is **gitignored** (originals are 12–17 MB each). Only web-optimized copies belong under `app/public/images/`.
- **No ImageMagick or `sharp` is installed.** To resize/compress images, use .NET `System.Drawing` via PowerShell (load `System.Drawing`, draw onto a smaller `Bitmap` with `HighQualityBicubic`, save with a JPEG quality `EncoderParameter`). Typical web target: max dimension ~1600 px, JPEG quality ~82 → 80–200 KB.
- Sliders use Swiper and must be **client-only** (`*.client.vue`, wrapped in `<ClientOnly>`): `HeroSlider` (homepage top), `KlinikaSlider` (homepage "Naše filozofie" box, autoplay loop). `ImageSlider.client.vue` exists but is currently unused.
