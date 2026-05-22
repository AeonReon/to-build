# To Build — Project Rules

A personal PWA listing every project idea waiting to be built. The pool sits in `/THE_FORGE.md` at the workspace root; this app is the friendly browse + add surface for it on the phone.

## Voice and content

- One-line hook per idea (under ~80 chars).
- Body is the raw riff — paragraphs, no headers inside an entry, no marketing tone.
- Status pills come straight from the readiness note on the source entry.

## Scope discipline

- **No accounts, no cloud, no sign-in.** localStorage only.
- **No AI assist inside the app.** Ideas are added as-is; organising happens later in a chat session.
- **No editing of seed entries from the app.** Seed entries are read-only; user-added entries (localStorage) can be edited + deleted.
- **Phone-first.** Layout must work in a single column on a 390px viewport. iOS dictation in the textarea is the "voice in" path.

## Stack

- Plain HTML, CSS, vanilla JS. No build step.
- Seed data lives in `assets/ideas-data.js` (hand-derived from `/THE_FORGE.md`).
- PWA via `manifest.json` and `sw.js` at the root.
- Deploy: GitHub AeonReon → Vercel aeonreon (static site).

## When new ideas land

- Chat-side brain-dump → I append to `/THE_FORGE.md` → I also append the entry to `assets/ideas-data.js` → commit + push → Vercel picks it up.
- In-app brain-dump → localStorage only. The user can hit "Copy as markdown" on any user-added entry to paste it into a chat for promotion.

## Design

Same vocabulary as `APPS/CHILDREN/new-beginnings` / `APPS/classical-mind`:
- Warm cream background with soft sun/pink sunbursts
- System sans throughout, heavy weights, tight letter-spacing
- Gradient-outline tiles per idea (colour chosen by category)
- Three tile sections by default: Software & AI, Physical builds, Share with community
- Detail view = single-column, generous line-height, captured date at the bottom

## Adding content

- New idea → append to `assets/ideas-data.js` (id slug, name, hook, category, color, colorDeep, icon key, captured ISO date, body string)
- Also append the canonical entry to `/THE_FORGE.md` so both sources stay in sync
- Body uses `\n\n` to separate paragraphs; intro line wrapped in `*…*` becomes the blockquote hook
