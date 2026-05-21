# BLOOM Coffee & Bar — web

Statický web kaviarne BLOOM Coffee & Bar (Trenčín – Zlatovce).
Čisté HTML + CSS, bez build procesu. Hostované na Cloudflare Pages.

## Štruktúra
- `index.html` — domov
- `menu.html` — menu / cenník
- `o-nas.html` — o nás + káva City Blend
- `novinky.html` — novinky a akcie
- `kontakt.html` — kontakt a otváracia doba
- `css/style.css` — spoločné štýly
- `css/main.js` — navigácia a animácie
- `images/` — fotky (zatiaľ placeholdery)

## Úpravy
Texty a ceny upravíš priamo v .html súboroch. Farby sú v `css/style.css` (sekcia `:root`).

## Nasadenie
Pushni na GitHub → Cloudflare Pages automaticky nasadí. Žiadny build command, output adresár = `/` (root).
