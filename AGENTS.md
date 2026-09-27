# Agent notes

- Pure static site (GitHub Pages, `.nojekyll`). No build step, no backend, no secrets.
- Dev: `docker compose -f docker-compose.base44.yml up -d` serves the repo root read-only via `python -m http.server` on port 3000 (nginx got 403s because the sandbox repo dir is mode 700 and nginx workers don't run as root). Edits are live on browser reload (no HMR).
- `shared/menu.js` derives the site root from its own `src`, so it must live at `shared/menu.js` exactly (paired with `css/style.css` for the sidebar look).
- The BPEA pages carry their own embedded `<style>` (cover hero, tables, step cards). The shared stylesheet is linked BEFORE that `<style>` so page styles win; the sidebar `<aside>` + `shared/menu.js` are integrated into both pages.
