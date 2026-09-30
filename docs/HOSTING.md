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
