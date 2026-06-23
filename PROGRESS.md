# PROGRESS

Status legend: [ ] todo · [~] in progress · [x] done

- [x] 1. Static generation config (nuxt.config.ts)
- [x] 2. Remove contact backend + form (kontakt.vue, server/, deps)
- [x] 3. SEO/domain (app.vue canonical, og:image, robots.txt, sitemap.xml)
- [x] 4. error.vue (404)
- [x] 5. Build & verify (npm run generate) — 14 pages + 404, canonical per-route OK, marekcon.cz, no /api leftovers
- [x] 6. DEPLOY.md (endora FTP guide) + app/public/.htaccess
- [x] 7. Update CLAUDE.md
- [x] 8. Pre-production asset optimization
      - 5 oversized About images resized (System.Drawing): exp-jablonec 6.5MB→297KB,
        exp-redbull 2.5MB→288KB, exp-parahokej 844KB→178KB; ParaIceHockeyCard PNG→JPG
        1.9MB→191KB (ref updated in o-nas.vue); marekConJunior PNG kept (alpha) 2.1MB→1.08MB.
      - 7 blog videos compressed with ffmpeg (720p H.264 CRF 26, +faststart): 141.4MB→3.9MB,
        quality verified on sample frames, durations/aspect preserved.
      - Removed dead assets: images/slider/ (3 old-design imgs) + marekConJunior.jpg duplicate.
      - Final `npm run generate`: 30 routes, .output/public = 12.7 MB (was ~162 MB).

## Result
DONE — site builds statically to .output/public (12.7 MB), verified ready for endora FTP deploy.
Added legal pages (ochrana-udaju, obchodni-podminky) as templates w/ [DOPLŇTE] placeholders.

## Open items for user
- **[DONE — 2026-06-23] Mapy.cz cookie consent on `/kontakt`.** User chose a **full
  consent banner with category settings** (over click-to-load). Implemented as a
  hand-rolled component (no dependency), approach in
  `docs/superpowers/specs/2026-06-23-cookie-consent-design.md`:
  `app/composables/useCookieConsent.ts` (shared `useState` + localStorage, key
  `fyzio-cookie-consent`), `app/components/CookieConsent.client.vue` (banner +
  settings panel, in `default.vue`), map on `kontakt.vue` gated behind `has('maps')`
  with a "Zobrazit mapu" placeholder, footer "Nastavení cookies" link (`AppFooter.vue`),
  and `ochrana-udaju.vue` §6 updated. Verified in browser via `npm run preview`:
  no `frame.mapy.cz` request before consent (static HTML has no iframe), map loads on
  Accept, choice persists across reload, settings reopen from footer, no console/hydration errors.
- Legal pages filled (Bc. Marek Cón, IČO 47281821); confirm storno/payment/retention match real practice.
- Orphaned pages akutni-stavy / chronicke-stavy: kept + prerendered but unlinked —
  decide whether to link in menu or remove.
- Restart the running `npm run dev` server (it was on now-stale config).
