# PLAN — Production prep for endora.cz (static hosting)

## Goal
Make the Nuxt 3 site production-ready as a **fully static** site deployable to
**endora.cz free hosting** (PHP/Apache, **no Node.js**, FTP upload) on the
custom domain **https://marekcon.cz**. Output of `npm run generate`
(`.output/public/`) is uploaded via FTP.

## Decisions (from user, 2026-06-22)
- **Contact form → REMOVED.** Kontakt page keeps phone + clickable email only
  (mailto). No backend at all → site is 100 % static.
- **Domain → `marekcon.cz`** (custom domain on endora). All SEO/canonical/OG
  URLs use this. (Twitter handle `@fyziomarcon` and email `marek.con77@gmail.com`
  are unrelated to the domain — leave as-is.)
- **Deploy → static build + FTP guide** (I don't take FTP credentials).

## Constraints / gotchas
- endora free = PHP 8 / MySQL / Apache-Nginx / FTP / SMTP / CRON. **No Node.**
- Image folders are shared across pages — never move/rename image files
  (see CLAUDE.md). N/A here since we're not moving images.
- Orphaned pages: `/sluzby/akutni-stavy`, `/sluzby/chronicke-stavy` are not
  linked anywhere → must be listed explicitly for prerender, or they won't
  generate. Ask user whether to link or remove (non-blocking).

## Work items
1. **Static generation config** (`nuxt.config.ts`)
   - Remove `nitro.preset = 'vercel'`.
   - Add `nitro.prerender.crawlLinks: true` + explicit routes for the 2 orphaned pages.
   - Remove `runtimeConfig.mail`; add `runtimeConfig.public.siteUrl = 'https://marekcon.cz'`.
   - Remove `@nuxt/content` from modules; drop `./content/**/*.md` tailwind glob.
   - Fix global canonical (currently every page canonicals to homepage).
2. **Remove contact backend + form**
   - Delete `server/api/contact.post.ts` (+ empty `server/`).
   - Rewrite Kontakt form section → email/phone CTA (mailto). Drop submit JS.
   - Remove `nodemailer`, `zod` deps. Remove `@nuxt/content` dep + `content.config.ts` + `.data/`.
3. **SEO / domain**
   - `app/app.vue` with dynamic per-route canonical from `siteUrl`.
   - Global `og:image` (create `app/public/og-image.jpg`, 1200×630).
   - `app/public/robots.txt` + `app/public/sitemap.xml` (all 12 routes, marekcon.cz).
4. **Production polish**
   - `app/error.vue` (branded 404).
5. **Build & verify**
   - `npm install` (after dep changes) → `npm run generate` → confirm all 12
     routes in `.output/public`, no errors.
6. **Deploy guide**
   - `DEPLOY.md`: endora FTP web root, what to upload, custom domain + SSL steps.
7. **Docs**
   - Update `CLAUDE.md` (remove contact-API section; document static deploy).

## Routes (12) to prerender + sitemap
/ , /o-nas , /kontakt , /clanky ,
/clanky/bezecke-koleno , /clanky/bolest-krcni-patere ,
/clanky/patelofemoralni-bolest , /clanky/cviky-na-mobilitu-kycli ,
/sluzby/fyzioterapie-dospelych , /sluzby/prevence-ergonomie ,
/sluzby/akutni-stavy , /sluzby/chronicke-stavy
