# Sondre Webb Olsen — nettside

Next.js (App Router) + TypeScript + Tailwind. Static-first, no database.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne http://localhost:3000

## Struktur

- `app/` — sider (App Router). Hver mappe = én rute.
- `app/bestill/sandvika/route.ts` og `app/bestill/liertoppen/route.ts` —
  server-side redirects til de eksterne bookingsystemene (Limbra / Styrk
  Helse). Her legger du inn analytics-eventet før redirect, se TODO-
  kommentarene i filene.
- `content/articles.ts` — alt artikkelinnhold som strukturert data. Legg
  til en ny artikkel her, så dukker den automatisk opp på `/artikler` og
  får sin egen side på `/artikler/<slug>`.
- `components/` — Nav, Footer, MobileSticky (delt på alle sider).
- `lib/constants.ts` — bookinglenker og site-URL. Oppdater `SITE_URL` når
  domenet er live (brukes i sitemap/metadata).
- `app/globals.css` — designsystemet (farger, knapper, kort osv.), portet
  fra den opprinnelige HTML-prototypen.

## Bilder

Bildeplasser er foreløpig stilte placeholders (`.hero-photo`,
`.photo-placeholder`) i riktig bildeforhold. Når ekte bilder er klare:
legg dem i `public/images/`, og bytt placeholder-elementene med
`next/image`-komponenter som peker dit.

## Deploy

Anbefalt: koble repoet til Vercel. `npm run build` fungerer også hvor som
helst som støtter Node.
