# Nexova

Swiss web studio website — Next.js 16, React 19, Tailwind 4, next-intl (FR default, DE, EN).

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm lint
pnpm check:launch # fails while launch-blocking info is missing
pnpm leads        # list stored contact leads (needs Upstash env vars)
```

* Environment variables: see `.env.example`.
* Contact form, lead storage and email: `docs/CONTACT-AND-LEADS.md`.
* Legal publisher identity: `src/data/legal/entity.ts` (left empty until confirmed).
* Only `VERCEL_ENV=production` is indexable; previews send `noindex` and a disallow-all `robots.txt`.
