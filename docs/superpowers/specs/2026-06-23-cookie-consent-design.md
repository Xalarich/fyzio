# Cookie consent (lišta s nastavením kategorií) — návrh

Datum: 2026-06-23 · Status: schváleno uživatelem

## Cíl

Před spuštěním webu (marekcon.cz) přidat GDPR-konformní cookie lištu se správou
kategorií. Vložená mapa Mapy.cz na `/kontakt` nyní nastavuje cookies třetí strany
**před souhlasem** (`app/pages/kontakt.vue`, holý `<iframe>`). Mapa se smí načíst
až po uděleném souhlasu; souhlas musí jít kdykoli změnit/odvolat.

## Kontext (zjištěno)

- Web je statický Nuxt 3 (`npm run generate` → `.output/public`), `srcDir: 'app/'`.
- **Žádná analytika** (GA, FB pixel) na webu není. Jediný zdroj cookies třetích
  stran je vložená mapa Mapy.cz (`https://frame.mapy.cz/s/mobunosopa`).
- `ochrana-udaju.vue` §6 dnes tvrdí „Web používá pouze technicky nezbytné soubory"
  a zmiňuje mapu — text se upraví.
- Není nakonfigurovaný test runner/linter (žádné TDD pro tuto UI komponentu).

## Rozhodnutí

- **Přístup A — vlastní komponenta, bez závislosti.** Štíhlý statický výstup,
  plná kontrola, styl Tailwindem v duchu webu. (Zavrženo: `vanilla-cookieconsent`,
  `nuxt-cookie-control` — zbytečná váha pro jediný volitelný prvek.)
- **Kategorie (YAGNI):**
  - `necessary` — vždy zapnuto, nelze vypnout (ukládá jen volbu souhlasu).
  - `maps` — volitelné; ovládá načtení mapy Mapy.cz. (Přidat „Analytika" později
    = pár řádků v rámci stejného composable.)

## Jednotky

1. **`app/composables/useCookieConsent.ts`** — sdílený reaktivní stav přes
   `useState('cookie-consent')` + perzistence do `localStorage` (klíč
   `fyzio-cookie-consent`, JSON `{ necessary: true, maps: bool, ts: ISO }`).
   API: `consent` (reactive), `decided` (bool), `showSettings` (ref),
   `acceptAll()`, `rejectAll()`, `save(custom)`, `has(category)`,
   `openSettings()`, `hydrate()`.
   - `hydrate()` se volá na klientu při startu; chybí-li záznam → `decided=false`
     → zobrazí se lišta. Volba zapíše stav i do `localStorage`.

2. **`app/components/CookieConsent.client.vue`** — client-only (potřebuje
   `localStorage`). Vložena jednou do `app/layouts/default.vue`.
   - Lišta dole: krátký text + odkaz na `/ochrana-udaju`, tlačítka
     **„Přijmout vše"**, **„Odmítnout"**, **„Nastavení"**.
   - Panel „Nastavení": přepínače `Nezbytné` (disabled, on) a
     `Mapy / vložený obsah` + tlačítko **„Uložit volbu"**.
   - Zobrazí se, když `!decided` nebo `showSettings === true`.

3. **Mapa na `app/pages/kontakt.vue`** — místo holého iframu:
   - `has('maps')` → vykreslit iframe (beze změny vzhledu mapy).
   - jinak placeholder (stejná výška/styl) s textem a tlačítkem
     **„Zobrazit mapu"**, které udělí souhlas `maps` a načte iframe.

4. **Footer (`app/components/AppFooter.vue`)** — odkaz **„Nastavení cookies"**
   volající `openSettings()` (GDPR: odvolatelnost souhlasu).

5. **`app/pages/ochrana-udaju.vue` §6** — upravit text: web používá lištu
   souhlasu cookies; mapa se načítá až po souhlasu; volbu lze změnit přes
   „Nastavení cookies" v patičce.

## Datový tok

volba v liště → `useCookieConsent` zapíše do `useState` (okamžitě reaktivní →
mapa se objeví bez reloadu) i do `localStorage` (přetrvá mezi návštěvami).
Start klienta → `hydrate()` načte `localStorage`; chybí → lišta.

## Mimo rozsah

- Žádná kategorie „Analytika" (zatím neexistuje žádná analytika).
- Google Fonts (zmíněné v zásadách) neřešíme touto lištou — nenastavují cookies.

## Ověření (manuální, není test runner)

- `npm run generate` proběhne bez chyb; `.output/public` se nezvětší výrazně.
- 1. návštěva: lišta vidět; mapa na /kontakt je placeholder, žádné `mapy.cz`
  requesty/cookies (DevTools Network/Application) dokud nedám souhlas.
- „Přijmout vše" / „Zobrazit mapu" → mapa se načte, volba přežije reload.
- „Odmítnout" → mapa zůstane placeholder, žádné cookies.
- Footer „Nastavení cookies" → znovu otevře panel, změna se projeví.
