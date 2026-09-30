# Hosting Rally

Rally runs on Cloudflare Pages, connected directly to `ryanseamons/rally` on GitHub.

- Cloudflare project: `rally-debate`
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Node: 22
- Public address: https://rally.ryanseamons.com
- Default address: https://rally-debate.pages.dev

Pushes to main trigger production builds. Pull requests receive preview deployments. The repository check workflow runs storage and browser tests.

The custom domain must be added to the Pages project before its DNS record is switched. Its CNAME points to `rally-debate.pages.dev`. No ChatGPT Sites account, API key, or runtime is required.

Users' notes live in browser local storage for each origin. Keep earlier public versions available while users use notebook backup/restore to migrate. Do not redirect old domains before users can export their notes.

## Routes, headers and offline support

- Section addresses such as `/timer` and `/notebook` are served by Cloudflare Pages' single-page fallback: with no `404.html` in `dist`, unknown paths return `index.html` and the app picks the section from the path. Don't add a top-level `404.html` without adding redirects for these paths.
- `public/_headers` sets the Content Security Policy, other security headers and cache lifetimes. Hashed files in `/assets/` and `/audio/` are cached for a year; fonts and images for a week. If the app ever loads something from another origin, update the policy first.
- `public/sw.js` lets practice pages open without a connection. Pages are network-first, so a deploy shows up on the next load when online. To retire it, replace `sw.js` with a version that unregisters itself and deletes its caches, then deploy.

