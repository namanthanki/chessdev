# chessdev.org

chessdev.org is a community reference for chess engine programming.

The site is static, git-reviewed, and built with Astro and Starlight. Articles live as MDX files in `src/content/docs/`. Each article includes frontmatter metadata showing who wrote it, who reviewed it, whether it was verified, and when it was updated.

## Tech stack

- Astro
- Starlight for documentation navigation, search, and MDX rendering
- Static output to `dist`
- Cloudflare Pages deployment

## Requirements

Requires Node 22.12 or newer.

```bash
nvm use
npm install
```

## Local development

```bash
npm run dev
npm run build
npm run check
```

## Topics

Articles are grouped into six main topics:

- `board-representation`
- `move-generation`
- `search`
- `evaluation`
- `endgames`
- `engines`

## Frontmatter requirement

Every article requires frontmatter:

```yaml
pageType: "article"
topic: "search"
authors: ["handle"]
reviewedBy: ["maintainer"]
verified: false
lastUpdated: 2026-08-07
```

Include `summary` and `references` for reviewer verification.

## Deployment

Deploy using Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

GitHub Actions deploys to Cloudflare Pages on pushes to `main`. Require secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Site URL: `https://chessdev.org`
