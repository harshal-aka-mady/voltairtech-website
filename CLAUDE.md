# Voltairtech Website — CLAUDE.md

## Project overview
Marketing website for **Voltair Tech** (voltairtech.com) — Mumbai's AI build studio. Tagline: "Ship AI in 48 hours."

Originally a static Babel/JSX single-page site; fully migrated to **Next.js 14 App Router with TypeScript**.

## Stack
- **Next.js** 14.2.29 (App Router, fully static output)
- **React** 18, **TypeScript** 5
- **next/font** — Inter Tight + JetBrains Mono (no Google Fonts CDN)
- No UI library, no Tailwind — custom CSS only

## Key files
| Path | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — fonts, global metadata, viewport |
| `app/page.tsx` | Home page with JSON-LD (Organization, LocalBusiness, FAQPage) |
| `app/privacy/page.tsx` | Privacy policy |
| `app/terms/page.tsx` | Terms of service |
| `app/dpdp/page.tsx` | DPDP Act compliance page |
| `app/contact/page.tsx` | Contact page |
| `app/services/page.tsx` | Services detail page |
| `app/work/page.tsx` | Case studies / portfolio page |
| `app/rag/page.tsx` | RAG showcase page |
| `app/faq/page.tsx` | FAQ page |
| `app/timeline/page.tsx` | Timeline/process page |
| `app/sitemap.ts` | Auto-generated XML sitemap |
| `app/robots.ts` | Auto-generated robots.txt |
| `app/not-found.tsx` | Custom 404 |
| `lib/content.ts` | All site copy as typed TS exports (was `window.VT_CONTENT`) |
| `styles/globals.css` | All styles — CSS variables at top of `:root` block |
| `components/` | Section components; client components: Monogram, RagShowcase, BigInput, Faq |
| `next.config.mjs` | Redirects: /privacy.html → /privacy, /terms.html → /terms, /dpdp.html → /dpdp |
| `public/` | Static assets (logos, app-ads.txt) |

## Development
```bash
npm run dev      # localhost:3000 (or next available port)
npm run build    # production build (fully static, all ○ routes)
npm run lint     # ESLint
```

## Content edits
- **Copy / text changes** → edit `lib/content.ts`
- **Style / colour changes** → edit `styles/globals.css` (CSS variables in `:root`)
- **New pages** → create `app/<route>/page.tsx`, add to `app/sitemap.ts`

## SEO
- JSON-LD structured data lives in `app/page.tsx`
- Canonical domain: `voltairtech.com`
- `CNAME` file present for GitHub Pages compatibility
- `app-ads.txt` in `public/` for Google AdMob

## Deployment
- **Primary:** Vercel (zero-config, auto-deploys on push to `master`)
- **Fallback:** GitHub Pages (static export)
- `vercel.json` and `netlify.toml` both present

## Conventions
- No comments unless the WHY is non-obvious
- TypeScript strict mode — no `any`
- All new components go in `components/`; client components get `"use client"` at top
- CSS: use existing variables from `globals.css` `:root`, don't add inline styles
