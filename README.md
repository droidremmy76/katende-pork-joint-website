# Katende Pork Joint — 2026 Editorial Website Concept

**Live independent site:** https://droidremmy76.github.io/katende-pork-joint-website/

This responsive, single-page website was **written directly in ChatGPT**, hand-coded with semantic HTML, custom CSS, and dependency-free JavaScript. It deploys via GitHub Actions to GitHub Pages. No Lovable runtime, no website-builder dependency, no React build required.

## Structure

- `site-2026/index.html` — original editorial HTML5 website, SEO and accessibility metadata.
- `site-2026/styles.css` — bespoke responsive art direction, mobile composition and transitions.
- `site-2026/app.js` — mobile navigation, gallery, accessible tab selection, hover interactions, motion/reveal controls.
- `src/assets/*.jpg` — illustrative concept food photographs, retained as source assets.
- `public/favicon.svg` — simple concept favicon.
- `.github/workflows/pages.yml` — copies this static site and its assets to GitHub Pages.

## Design references (inspiration, not copied templates)

- [Dribbble](https://dribbble.com/) — premium editorial restaurant composition, typography and photo art direction.
- [Awwwards](https://www.awwwards.com/) — immersive storytelling and hospitality creative direction.
- [MotionSites](https://motionsites.ai/) — intentional motion compositions and hero treatments.
- [21st.dev](https://21st.dev/) — animated text, accessible interaction patterns and components.

## Preview locally

Serve `site-2026/` from a local static server **with the four assets copied** into `site-2026/assets/`. Example, from the repository root:

```bash
mkdir -p site-2026/assets
cp src/assets/*.jpg site-2026/assets/
cp public/favicon.svg site-2026/
python3 -m http.server 8080 --directory site-2026
```

Open http://localhost:8080

Do not commit the temporary asset copies; GitHub Pages assembles them automatically.

## Restaurant details & launch notes

- Katende Pork Joint Makindye, Kampala, Uganda.
- Business contact: +256 754 854668.
- Maps link points to Google Maps search for the restaurant name.
- Menu sections are **examples**, not the real restaurant's price list.
- All current food images are **illustrative concepts**, not verified photos of Katende's actual premises or products.
- Opening hours, delivery, reservations and actual prices require owner verification before official launch.
- This is an **independent demonstration concept**, not an official company website.

Website concept and development: **Habbib Digital Studio**.
