---
layout: post
title: "Notes on keeping a site static"
date: 2026-08-15
---

A second placeholder post, mostly so the list has more than one row in it.
The argument below is real enough, but treat the words as scaffolding.

## The case for static

A personal site has maybe a dozen pages and changes a few times a year.
That workload does not justify a server. Static files have no runtime to
patch, no database to back up, and no bill that scales with attention.

It's also fast in a way that's hard to achieve otherwise. No client-side
router, no hydration, no font fetch from a third-party CDN. The browser
gets HTML and paints it.

## What a generator buys you

Hand-written HTML is the purest version of this, and it's fine right up
until it isn't. The costs show up in three places:

- **Duplication.** The header and footer get copied into every page.
  Change the nav and you change it everywhere by hand.
- **No index generation.** Adding a post means also adding it to the list
  page. Forget that step and the post exists but nobody finds it.
- **No Markdown.** You write paragraphs in tags. Fine for occasional
  posts, tedious at volume.

Jekyll fixes all three and still outputs plain files. The deployed site is
exactly as static as it was before — the machinery runs at build time and
leaves nothing behind.

## Where this one lives

GitHub Pages builds and serves it straight from the repository. A push to
`main` is a deploy; there is no other step and no server to keep alive.
