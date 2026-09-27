# Agent notes

- Pure static site (GitHub Pages, `.nojekyll`). No build step, no backend, no secrets.
- Dev: `docker compose -f docker-compose.base44.yml up -d` serves the repo root read-only via `python -m http.server` on port 3000 (nginx got 403s because the sandbox repo dir is mode 700 and nginx workers don't run as root). Edits are live on browser reload (no HMR).
- Pages reference `css/style.css` and `shared/menu.js` (relative paths), but the repo currently has those files at the root as `shared_menu_css.css` / `shared_menu_js.js` — so styles and the sidebar menu don't load until they're moved/renamed.
- `shared/menu.js` derives the site root from its own `src`, so it must live at `shared/menu.js` exactly.
