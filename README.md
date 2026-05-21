# Best Practices Marketplace Framework

A reusable, de-branded framework for running an **AI-native marketplace of best
practices** — skills, agents, and MCP servers that are discoverable on a website
and installable directly into AI coding tools (Claude Code, and others).

Fork it, change a handful of config values, fill out one JSON file, and you have
your own marketplace.

## What you get

- A [Docusaurus](https://docusaurus.io/) website that browses, searches, and
  filters a catalog of best practices.
- A **multi-marketplace** browser: federate your own catalog with any number of
  remote registries (the picker appears automatically when more than one is
  configured).
- A **registry-driven build**: you hand-author one file, `static/data/registry.json`,
  and the Claude Code plugin manifest (`.claude-plugin/marketplace.json`) is
  generated from it automatically.

## Architecture

This repository follows a **single source of truth** philosophy:

- **`static/data/registry.json`** — the hand-authored source of truth. It
  describes the marketplace identity and every skill / agent / MCP server.
- **`.claude-plugin/marketplace.json`** — **generated** from `registry.json` by
  `src/conf/generate-marketplace.js`. This is what Claude Code reads when a user
  runs `/plugin marketplace add <repo>`. It is committed so consumers can use it
  without building the site.
- **`static/marketplace/`** — the actual content of each best practice
  (`SKILL.md`, assets, scripts). One folder per entry.
- The Docusaurus website renders the registry into a searchable catalog.

```
registry.json  ──(npm run prebuild)──▶  marketplace.json
   (you edit)                              (generated, committed)
```

## Getting started

```bash
npm ci          # install dependencies
npm start       # local dev server
npm run build   # production build (runs the generators first)
```

`npm run build` runs `prebuild`, which:

1. `generate-marketplace.js` — reads `registry.json`, hydrates derived fields,
   and writes `.claude-plugin/marketplace.json`.
2. `generate-file-manifests.js` — indexes the `static/marketplace/` file trees.
3. `create-marketplace-zips.js` — packages each entry as a downloadable zip.

## Customize it for your project

1. **`docusaurus.config.js`** — edit the values under the `CUSTOMIZE ME` banner:
   `title`, `tagline`, `url`, `baseUrl`, `organizationName`, `projectName`, the
   navbar/footer links, and `marketplaceConfig.registries`.
2. **`static/data/registry.json`** — edit the top-level `marketplace` block
   (`name`, `owner`, `metadata`) and add your entries to `skills` / `agents` /
   `mcp`.
3. **`static/img/`** — replace `logo.svg` and `favicon.ico` with your own.
4. **`docs/`** — update the About / FAQ / Contribute pages.

## Adding a best practice

1. Create the content folder, e.g. `static/marketplace/skills/<name>/SKILL.md`
   (plus any `assets/` and `scripts/`).
2. Add an entry to the `skills` array in `static/data/registry.json`:
   ```json
   {
     "name": "<name>",
     "displayName": "Human Readable Name",
     "description": "What it does and when to use it",
     "category": "documentation",
     "tags": ["docs", "templates"],
     "example": "Generate a README for this project",
     "lastUpdated": "2026-01-01"
   }
   ```
   Derived fields (`type`, `skill_file_url`, `zip_file_path`) are filled in by the
   build — you do not write them.
3. Run `npm run prebuild` to regenerate `.claude-plugin/marketplace.json`, then
   commit both files.

See [`docs/contribute/submit-best-practice.md`](docs/contribute/submit-best-practice.md)
for the full guide.

## Federating other marketplaces

Add remote registry URLs to `marketplaceConfig.registries` in
`docusaurus.config.js`. The website loads each one and shows a registry picker:

```js
registries: [
  "./static/data/registry.json",                          // your local catalog
  "https://nasa-ammos.github.io/slim/data/registry.json",  // a remote marketplace
],
```

## License

Apache 2.0 — see [LICENSE](LICENSE).

## Credits

- UI components adapted from [aitmpl.com](https://aitmpl.com) (MIT License).
- Derived from the open-source SLIM Best Practices marketplace
  ([NASA-AMMOS/slim](https://github.com/NASA-AMMOS/slim), Apache 2.0).
