# Website Package — Tishan Malinga

This package contains:
- `index.html` — Quick visual refresh (uses `styles.css` and `ai.js`)
- `styles.css` — Styles for the site
- `ai.js` — Simple embeddable AI widgets (chat placeholder, rec card, voice hook)
- `react-starter/` — React (Vite) starter files: `HomePage.jsx`, `package.json`, `README.md`
- `images/` — placeholder images (you should replace with your optimized hero.jpg and profile.jpg)
- `README-deploy.md` — quick deploy instructions

## How to use (Static site)
1. Replace `images/hero.jpg` and `images/profile.jpg` with your optimized images.
   - Recommended sizes: hero 1600–2000px wide, profile 800x800.
   - Use the ImageMagick commands in `README-deploy.md` for optimization.
2. Upload the contents to your hosting root (GitHub Pages / Netlify / any static host).
3. Open `index.html` in browser to preview.

## React starter (quick)
See `react-starter/README.md` for instructions to create a Vite + Tailwind project and where to place `HomePage.jsx`.

## AI widgets
- Chat: floating chat button opens a placeholder iframe. To wire a real backend:
  - Host a chat UI at `/chat/` on your domain, or change `iframe.src` in `ai.js`.
  - Keep API keys on server side; frontend should call your server endpoints.

- Recommendation card: add `<div id="rec-card"></div>` where you want it.
- Voice: call `startVoiceCommand()` from a button to begin speech recognition (browser support needed).

