# Voltaire Tech — voltairtech.com

> Mumbai's AI build studio. Ship AI in 48 hours.

Static, framework-free website for **Voltaire Tech**. Built with React 18 (via Babel standalone) + plain CSS. **No build step required.** Drop on any static host and it works.

## 🚀 Deploy

### Option 1: GitHub Pages (free)
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set Source = **Deploy from branch** → `main` / `/ (root)`.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.
5. To use your custom domain (`voltairtech.com`):
   - The `CNAME` file is already included.
   - In your domain registrar, add these DNS records:
     - **A Records** pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - **CNAME Record**: `www` → `<username>.github.io`
   - Enable **Enforce HTTPS** in GitHub Pages settings.

### Option 2: Vercel
1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other**. Build command: **(leave blank)**. Output dir: **./**.
4. Deploy. Add `voltairtech.com` domain in project settings.

### Option 3: Netlify
1. Drag this folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
2. Or connect the GitHub repo — `netlify.toml` is already configured.
3. Add `voltairtech.com` domain in site settings.

## 🛠 Run Locally

```bash
# Any static server works:
npx serve .
# or
python -m http.server 8000
```

Open `http://localhost:8000`.

## ✏️ Editing Content

All site copy lives in **`content.js`** as plain JS objects (services, FAQ, stats, comparison table, contact info, etc.). Edit values there and reload — no rebuild needed.

## 📁 Files

| File | Purpose |
|---|---|
| `index.html` | Entry point — loads React, Babel, and all components |
| `colors_and_type.css` | Design tokens (colors, typography, spacing, radii) |
| `site.css` | Layout + component styles |
| `content.js` | All editable copy — change text here |
| `app.jsx` | Root React component |
| `atoms.jsx` | Shared primitives (VMark, Brand, Kicker, etc.) |
| `monogram.jsx` | Cursor-reactive hero artwork |
| `sections.jsx` | Nav, Hero, Services, Timeline, RAG, BigInput, Marquee, Process, WhyIndia, FAQ, Footer |
| `logo-mark.png` | V monogram logo |
| `logo-with-text.png` | Logo + wordmark |
| `logo-landscape.jpg` | Starfield mark (hero artwork) |
| `404.html` | Custom 404 error page |
| `robots.txt` | Search engine crawler rules |
| `sitemap.xml` | XML sitemap for SEO |
| `CNAME` | Custom domain config for GitHub Pages |
| `vercel.json` | Vercel deployment config |
| `netlify.toml` | Netlify deployment config |

## ⚙️ Stack

- **React 18** via CDN (no npm)
- **Inter Tight** + **JetBrains Mono** from Google Fonts
- **Babel standalone** for JSX transformation in-browser
- No build tools, no bundlers, no dependencies to install

## 📝 Before Going Live

- [ ] Replace placeholder stats in `content.js` with real numbers
- [ ] Confirm phone/email/address in `content.js`
- [ ] Replace CIN/GSTIN placeholders in footer with real registration numbers
- [ ] Update `sitemap.xml` lastmod date
- [ ] Set up Google Search Console and submit sitemap

---

© 2026 Voltaire Tech · Andheri West, Mumbai · [voltairtech.com](https://voltairtech.com)
