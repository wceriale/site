# site

My personal website. Static HTML and one stylesheet — no build step, no
dependencies, no framework.

**Live at:** https://wceriale.github.io/site/

## Layout

```
index.html              Landing page
404.html                Custom not-found page
blog/
  index.html            Post list — add new posts here too
  hello-world.html      Post
  notes-on-static-sites.html
  _template.html        Copy this to start a new post (unlinked)
assets/
  css/style.css         All styling, including light/dark themes
  js/theme.js           Theme toggle
  favicon.svg
.github/workflows/deploy.yml   Publishes to GitHub Pages on push to main
```

## Publishing

Push to `main`. The Actions workflow uploads the repo as-is and deploys it;
a run takes well under a minute. Watch it in the **Actions** tab.

## Adding a post

1. Copy `blog/_template.html` to `blog/your-slug.html`.
2. Replace `POST_TITLE`, `POST_DESCRIPTION`, `POST_SLUG`, and both dates
   (the `datetime="…"` attribute and the human-readable text).
3. Write the post inside `<div class="post-body">`.
4. Add a `<li>` at the **top** of the list in `blog/index.html`. Optionally
   add one to the Writing section of `index.html` too.

Step 4 is manual and easy to forget — a post nobody links to is a post
nobody reads.

## Previewing locally

Open `index.html` directly in a browser, or serve it so that root-absolute
paths in `404.html` resolve the same way they do in production:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Making it yours

Everything you need to change is marked `TODO` in the HTML:

```sh
grep -rn "TODO" --include="*.html" .
```

That covers your name, the tagline and bio, the projects list, and the
contact links. The contact section ships with a placeholder
`you@example.com` — replace it with a real address only if you want that
address public.

## Customizing the look

The palette lives at the top of `assets/css/style.css` as custom
properties. Light values are on `:root`; the dark overrides appear twice —
once under `prefers-color-scheme` for people who never touch the toggle,
once under `[data-theme="dark"]` for people who do. Change a color in all
the places it's defined and the whole site follows.

`--content-width` controls the column: 800px including its 30px gutters,
so about 740px of text. `--font-base` and `--font-mono` control the type.
All font stacks are system fonts, so nothing is fetched from a third
party.

The design follows Jekyll's `minima` theme — same 800px measure, 16px/1.5
body text, `#2a7ae2` links, and the 5px rule above the header.

## Using a custom domain

1. Add a `CNAME` file at the repo root containing the bare domain, e.g.
   `example.com`.
2. Point DNS at GitHub Pages (an `ALIAS`/`ANAME` for an apex domain, or a
   `CNAME` to `wceriale.github.io` for a subdomain).
3. Set the domain under **Settings → Pages**, then enable **Enforce HTTPS**
   once the certificate is issued.

With a custom domain the site sits at the root, so the `/site/`-prefixed
paths in `404.html` and the `canonical` tags need updating to plain `/`.
