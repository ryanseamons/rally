# Recovery record

Recovered September 29, 2026 at the owner's request from the public deployment at https://rally-debate-studio.ryanseamons.chatgpt.site/ after its temporary checkout became unavailable and the current Sites account could not access its project.

The public application's JavaScript, stylesheet, illustrations, fonts, and seven MP3 readings supplied the baseline. Application code was separated from bundled dependencies, formatted, and given descriptive component names. Bundled library implementations were replaced with declared npm dependencies: React, Motion, Radix, Lucide, Zod, clsx, tailwind-merge, and class-variance-authority. The recovered UI wrappers preserve existing classes and behavior.

This repository does not contain the original TypeScript files, original commit history, Inworld credentials, or users' notebooks. It is a maintainable recovery of the client application, with a new Vite build and the replacement account's Sites identity. The old project was neither modified nor deleted.

Additions: student-wide wording; validated notebook backup/restore; an optional local-only bookmark export guide for the original site's notes; browser and storage tests.

Keep the original site available while students move their notebooks. A new web address cannot directly read another origin's local storage. The export bookmark only reads `rally-notebook` on the exact original hostname and downloads it locally.

On September 30, 2026, the owner requested migration to the current Sites account (ryan@latitude.io). The new project identity is recorded in .openai/hosting.json. Earlier public deployments remain available for notebook migration.

Hosting was subsequently moved to Cloudflare Pages, directly connected to the public GitHub repository. ChatGPT Sites is no longer required to build, deploy, or serve Rally.
