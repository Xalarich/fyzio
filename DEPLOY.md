# Nasazení na endora.cz (statický web)

Tento web je **statický** (Nuxt `generate`). Nasazuje se nahráním hotových
souborů přes **FTP** do free hostingu endora.cz. Žádný Node.js / PHP backend
už web nepotřebuje (kontaktní formulář byl nahrazen e-mailem/telefonem).

Produkční doména: **https://marekcon.cz**

---

## 1. Sestavení webu (lokálně)

```bash
npm install
npm run generate
```

Hotový web vznikne ve složce **`.output/public/`**. Tato složka je to jediné,
co se nahrává na hosting.

> Při každé další změně webu znovu spusťte `npm run generate` a nahrané soubory
> přepište.

## 2. Připojení přes FTP

1. V administraci endory najděte **FTP přístup** (adresa serveru, uživatel, heslo).
2. Připojte se FTP klientem — doporučeně **FileZilla** (zdarma).
   - Host: FTP server uvedený v administraci endory
   - Uživatel / heslo: z administrace
   - Port: 21 (FTP) nebo dle endory

## 3. Nahrání souborů

Na endoře se obsah webu nahrává **pouze do složky `web/`** vaší domény
(ostatní složky jsou jen pro čtení):

```
marekcon.cz/
└── web/        ← sem nahrajte OBSAH složky .output/public
    ├── index.html
    ├── .htaccess
    ├── 404.html
    ├── _nuxt/
    ├── images/
    ├── clanky/ , sluzby/ , o-nas/ , kontakt/ , ...
    ├── sitemap.xml
    └── robots.txt
```

> Důležité: nahrávejte **obsah** složky `.output/public` (tedy `index.html`,
> `_nuxt/`, …), **ne** složku `.output/public` jako celek. Po zadání domény se
> musí v kořeni `web/` zobrazit `index.html`, jinak endora ukáže informační
> stránku o chybějícím `index.html`.
>
> Nahrajte i skrytý soubor **`.htaccess`** (ve FileZille zapněte zobrazení
> skrytých souborů: *Server → Vynutit zobrazení skrytých souborů*).

## 4. Doména a HTTPS

1. V administraci endory přiřaďte k hostingu doménu **marekcon.cz**
   (registrace/převod domény, případně nasměrování DNS dle pokynů endory).
2. Zapněte **bezplatný SSL certifikát** (Let's Encrypt) pro doménu.
3. Až bude SSL aktivní, funguje i přesměrování na HTTPS z `.htaccess`.
   (Dokud SSL není hotové, prohlížeč u `https://` hlásí chybu certifikátu —
   je to očekávané, vyřeší se aktivací certifikátu.)

## 5. Kontrola po nasazení

- [ ] `https://marekcon.cz` načte úvodní stránku
- [ ] Funguje menu, podstránky (`/o-nas`, `/sluzby/...`, `/clanky/...`, `/kontakt`)
- [ ] Neexistující URL (např. `/neco`) ukáže vlastní 404 stránku
- [ ] `https://marekcon.cz/sitemap.xml` a `/robots.txt` se zobrazí
- [ ] Na stránce Kontakt fungují tlačítka e-mail/telefon a mapa

## 6. Právní stránky — zkontrolovat před spuštěním

Stránky **Ochrana osobních údajů** (`/ochrana-udaju`) a **Obchodní podmínky**
(`/obchodni-podminky`) jsou vyplněné: provozovatel **Bc. Marek Cón, IČO 47281821**,
sídlo Prusíkova 2402/8, Praha 5, ordinace Budějovická 1126/9. Storno podmínky
(24 h / 100 % ceny), způsob platby (hotově/kartou) a doby uchování (5 let) jsou
obvyklé hodnoty — ověřte, že odpovídají reálné praxi. Nejde o právní poradenství.

---

### Rychlé opětovné nasazení

1. `npm run generate`
2. Nahrát obsah `.output/public/` do `marekcon.cz/web/` (přepsat existující)
