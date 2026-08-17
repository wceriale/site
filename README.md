# site

My personal website — a [Jekyll](https://jekyllrb.com/) site using the
[minima](https://github.com/jekyll/minima) theme, published with GitHub
Pages.

**Live at:** https://wceriale.github.io/site/

## Layout

```
_config.yml             Site settings — title, description, baseurl
Gemfile                 Ruby dependencies
index.md                Home page: intro text, then the post list
404.md                  Custom not-found page
_posts/                 One Markdown file per post
_includes/
  custom-head.html      Injected into <head> on every page (favicon, etc.)
assets/favicon.svg
.github/workflows/deploy.yml   Builds and publishes on push to main
```

Everything else — layouts, stylesheet, header, footer — comes from the
minima gem. Nothing to maintain until you want to change it.

## Writing a post

Create `_posts/YYYY-MM-DD-some-slug.md`:

```markdown
---
layout: post
title: "The title"
date: 2026-08-20
---

Write in Markdown.
```

That's the whole process. The home page picks it up automatically and
sorts by date — there's no index to update. The filename date sets the
URL, which comes out as `/site/2026/08/20/some-slug.html`.

Drafts go in `_drafts/` without a date in the filename; they're excluded
from builds unless you pass `--drafts`.

## Publishing

Push to `main`. The Actions workflow installs gems, runs `jekyll build`,
and deploys the result. Watch it in the **Actions** tab.

## Previewing locally

Needs Ruby (3.1+). First time:

```sh
bundle install
```

Then:

```sh
bundle exec jekyll serve
```

and open <http://localhost:4000/site/>. It rebuilds as you edit. Note the
`/site/` — that's the `baseurl`, and the local server honors it.

## Making it yours

Placeholders are marked `TODO`:

```sh
grep -rn "TODO" _config.yml index.md
```

That covers the site title, author, and description in `_config.yml`, plus
the intro copy in `index.md`.

## Things worth knowing

**`baseurl` must stay `/site`** — it has to match the repository name, or
every link breaks once deployed while still working locally. If you ever
add a custom domain, `baseurl` becomes `""`.

Write internal links as `{% raw %}{{ "/some/path" | relative_url }}{% endraw %}`
rather than hardcoding `/site/...`, so they survive a `baseurl` change.

**An empty `header_pages: []` does not mean "no nav."** Liquid's `default`
filter treats an empty list as unset, so minima falls back to listing every
page that has a `title:`. That's why `404.md` has no title. To add a nav
item, create e.g. `about.md` with a `title:` in its front matter.

## Adding pages

Create a Markdown file at the repo root:

```markdown
---
layout: page
title: About
permalink: /about/
---
```

It appears in the nav automatically, because it has a title.

## Customizing the look

The theme is a gem, so its files aren't in this repo. To override one,
create a file at the same path locally and it wins — e.g. to restyle,
create `assets/main.scss`:

```scss
---
---
@import "minima";

// your overrides here
```

Run `bundle info minima` to find the gem's directory and copy the file you
want to change.

Note that minima 2.5 is light-only; the dark-mode toggle from the earlier
hand-written version of this site is gone.
