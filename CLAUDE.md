# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Nuxt dev server on `http://localhost:3000`
- `npm run generate` — **production build**: static export to `.output/public/` (this is what gets deployed)
- `npm run build` — full Nuxt/Nitro build (not used for deployment; site ships as static)
- `npm run preview` — preview the production build locally

There is no test runner, linter, or formatter configured.

## Architecture

Nuxt 3 site for a Czech physiotherapy practice (Fyzioterapie Marek Cón). All user-facing copy is in Czech (`htmlAttrs.lang = 'cs'`).

**Source layout uses `srcDir: 'app/'`** (Nuxt 4-style). Pages, components, and layouts live under `app/`, not the repo root — keep this in mind when adding files or referencing Nuxt auto-import paths. `app/public/` is the static assets root (images under `app/public/images/`, videos under `app/public/videos/`).

**Routing is file-based** from `app/pages/`. **All public URLs are Czech** (English route slugs were renamed; redirects were intentionally not added):
- Top-level pages: `index.vue`, `o-nas.vue` (`/o-nas`), `kontakt.vue`
- `sluzby/` (services) and `clanky/` (blog/articles, `/clanky`) are static page directories — each `.vue` file is its own route, not driven by markdown content. Blog post slugs are Czech (e.g. `bezecke-koleno`, `bolest-krcni-patere`); the article list + slugs are defined in the `blogData` array in `clanky/index.vue`, which must stay in sync with the filenames.
- Note: `app/public/images/blogs/` and `app/public/videos/blogs/` are asset folders, **not** routes — they kept their English names.

**No CMS.** Pages are hand-authored Vue components. `@nuxt/content` was removed (it was configured but completely unused — no `content/` dir, no `queryContent` calls). Don't reintroduce it unless you actually add markdown-driven pages.

**Cookie consent**: GDPR consent is hand-rolled (no library). `app/composables/useCookieConsent.ts` holds shared state via `useState` + `localStorage` (key `fyzio-cookie-consent`, shape `{necessary:true, maps:bool, ts}`); `hydrate()` runs client-side `onMounted` (SSR/prerender always renders the "not decided, maps off" state, so static HTML never embeds third-party iframes before consent). `app/components/CookieConsent.client.vue` is the banner + category-settings panel (mounted once in `default.vue`). The only optional category is **`maps`** — the Mapy.cz iframe on `kontakt.vue` renders only behind `has('maps')`, otherwise a "Zobrazit mapu" placeholder. Footer has a "Nastavení cookies" button (`openSettings()`) so consent is re-changeable. To add a new optional category (e.g. analytics): extend `ConsentState`, add a toggle row in the component, gate the script behind `has('<cat>')`. Design doc: `docs/superpowers/specs/2026-06-23-cookie-consent-design.md`.

**No server API — the site is fully static.** The former `POST /api/contact` (zod + nodemailer) endpoint and the whole `server/` dir were removed when the contact form was dropped; the Kontakt page now offers `mailto:`/`tel:` links only. `nodemailer` and `zod` deps were removed. There is no Node/PHP backend — everything is prerendered HTML.

**Components** (`app/components/`, auto-imported):
- `AppHeader.vue`, `AppFooter.vue` — used via `app/layouts/default.vue`
- `HeroSlider.client.vue`, `ImageSlider.client.vue` — Swiper-based sliders. The `.client.vue` suffix makes them client-only (Swiper is not SSR-safe); pages additionally wrap them in `<ClientOnly>`.

**Styling** is Tailwind via `@nuxtjs/tailwindcss`. Two Tailwind configs coexist:
- `tailwind.config.js` at the repo root — has the real `theme.extend` (custom spacing scale `100/200/300/400`, `aspect-ratio` `4/5`, `width.248`, font stack defaulting to Roboto, plus `tailwindcss-textshadow` plugin)
- An inline `tailwindcss.config` block in `nuxt.config.ts` — only sets `content` globs

The Tailwind CSS entry is `assets/css/tailwind.css` (at repo root, not under `app/`).

**Deployment**: static export to **endora.cz** free hosting (PHP/Apache, **no Node.js**) via FTP. Run `npm run generate`, then upload the contents of `.output/public/` into the `marekcon.cz/web/` folder. Full steps in **`DEPLOY.md`**. An `app/public/.htaccess` ships with the build (custom 404, HTTPS redirect, gzip/caching).

**Production URL / SEO** (all use `https://marekcon.cz`):
- The site URL is a single config value: `runtimeConfig.public.siteUrl` in `nuxt.config.ts`. Change it there if the domain changes.
- `app/app.vue` sets a correct **per-route** canonical + default OG image/URL from `siteUrl` (previously a global head canonical wrongly pointed every page at the homepage). Per-page `useSeoMeta()` overrides title/description.
- `app/public/sitemap.xml` and `app/public/robots.txt` are **hand-maintained static files** — when you add/remove a route, update `sitemap.xml` (and the URLs if the domain changes). `app/public/og-image.jpg` is the 1200×630 social card.
- `app/error.vue` is the branded 404 (exported as `404.html`).

**Orphaned pages**: `sluzby/akutni-stavy` and `sluzby/chronicke-stavy` exist but are **not linked** from any nav/footer. They're listed explicitly in `nitro.prerender.routes` so they still generate (the link-crawler can't find them). Decide whether to link them in the menu or delete them.

**Legal pages**: `app/pages/ochrana-udaju.vue` (GDPR) and `app/pages/obchodni-podminky.vue` identify the controller/provider as **Bc. Marek Cón, IČO 47281821** (OSVČ), sídlo Prusíkova 2402/8, Stodůlky, 155 00 Praha 5, with the **ordinace** at Budějovická 1126/9, Praha 4-Michle (note: sídlo ≠ ordinace). Storno terms (24 h / 100 %), payment (hotově/kartou) and retention (5 let) are customary defaults — confirm against real practice. Not legal advice.

## Images / assets

- Source/original photos (from the practice's Google Drive) are kept in `drive-images/` at the repo root, which is **gitignored** (originals are 12–17 MB each). Only web-optimized copies belong under `app/public/images/`.
- **No ImageMagick or `sharp` is installed.** To resize/compress images, use .NET `System.Drawing` via PowerShell (load `System.Drawing`, draw onto a smaller `Bitmap` with `HighQualityBicubic`, save with a JPEG quality `EncoderParameter`). Typical web target: max dimension ~1600 px, JPEG quality ~82 → 80–200 KB. Keep PNG only when the image has real transparency (e.g. cutouts like `marekConJunior.png`); flat photos saved as PNG should be converted to JPG.
- **No ffmpeg installed either.** The blog videos (`app/public/videos/blogs/`) were phone exports at ~14 Mbps. To compress, download a static build (BtbN `FFmpeg-Builds` GitHub release zip → `bin/ffmpeg.exe`) and re-encode to 720p H.264: `-vf "scale=-2:'min(720,ih)'" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k`. This took the 7 clips from 141 MB → 3.9 MB with no visible quality loss. They are now optimized; don't re-compress.
- **Final deploy artifact `.output/public` is ~12.7 MB.** If it balloons again, check `app/public/videos/` (re-added uncompressed clips) and run the orphan-asset audit (grep every filename under `app/public` against the source corpus) before uploading — the old `images/slider/` folder and a `marekConJunior.jpg` duplicate were dead weight that has been removed.
- Sliders use Swiper and must be **client-only** (`*.client.vue`, wrapped in `<ClientOnly>`): `HeroSlider` (homepage top), `KlinikaSlider` (homepage "Naše filozofie" box, autoplay loop). `ImageSlider.client.vue` exists but is currently unused.
- **Image folder names do NOT map 1:1 to pages — the same file is referenced from multiple pages.** The "modern photoshoot" lives in `prevence-ergonomie/` but is shown on the homepage (`index.vue`, `KlinikaSlider`) AND the Ambulantní page (`fyzioterapie-dospelych.vue`); the older clinic shoot in `fyzio-dospelych/` is shown on the Firmy page (`prevence-ergonomie.vue`) AND `chronicke-stavy`/`akutni-stavy`. Always `grep` an image path across the repo before moving/renaming/deleting it, or you'll silently break another page. To re-assign which photo shows on a page, change the `src` in that page only — don't move the file.
