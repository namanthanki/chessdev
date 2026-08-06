# Contributing

chessdev.org is a community reference for chess engine programming.

Every change goes through a pull request reviewed by a topic maintainer before merging.

## Before opening a PR

1. Check `src/content/docs/<topic>/` for existing content.
2. Update an existing page if possible instead of adding a duplicate.
3. Run and test all code examples before submitting.
4. Add checkable references (papers, engine code, benchmarks, or forum posts).

## Frontmatter

All articles require frontmatter:

```yaml
pageType: "article"
title: "Article title"
description: "Short description for search results."
summary: "Short summary for topic lists."
topic: "move-generation"
authors: ["your-handle"]
reviewedBy: ["maintainer-handle"]
verified: false
references:
  - "https://example.com/source"
lastUpdated: 2026-08-07
```

Use real handles. Do not list AI tools as authors.

If an LLM helped write your draft, say so in your PR description. You must understand and verify all technical details yourself.

## What gets closed

PRs will be closed if they:
- Use vague filler with no technical detail.
- Make claims without tests, benchmarks, or source code.
- Rewrite pages without adding code, data, or clarity.
- Use long explanations where a short code snippet works better.

## Writing style

- Write for developers who know code but are new to chess engine techniques.
- Explain the mechanism directly.
- Use working code and real positions over general claims.
- Keep sentences short.
- Credit original sources, papers, or engines.

## Maintainers

Maintainers are listed in `MAINTAINERS.md`. Status is given to contributors with merged work or chess engine projects elsewhere.

## Issues

Open an issue or PR to fix errors or outdated text.
