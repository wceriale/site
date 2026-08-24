---
layout: post
title: "ELI5: How inference works"
date: 2026-08-24
---

<!-- DRAFT: body text is filler. Headings are real so the skeleton is
     usable — replace the Latin underneath each one. -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.

## The one-sentence version

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<figure>
  <img src="{{ '/assets/img/inference-pipeline.svg' | relative_url }}"
       alt="A prompt is split into tokens, run through the model, and one next token comes out; the output is appended and the loop repeats."
       width="720" height="190" loading="lazy" />
  <figcaption>
    Placeholder figure — the loop that produces one token at a time.
  </figcaption>
</figure>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## Tokens, not words

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.

- Ut enim ad minima veniam, quis nostrum exercitationem.
- Nisi ut aliquid ex ea commodi consequatur.
- Quis autem vel eum iure reprehenderit qui in ea voluptate.

## Picking the next one

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
praesentium voluptatum deleniti atque corrupti quos dolores et quas
molestias excepturi sint occaecati cupiditate non provident.

<figure>
  <img src="{{ '/assets/img/token-probabilities.svg' | relative_url }}"
       alt="Bar chart of candidate next tokens and their probabilities."
       width="720" height="220" loading="lazy" />
  <figcaption>
    Placeholder figure — every candidate token gets a score.
  </figcaption>
</figure>

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.

> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
> voluptatibus maiores alias consequatur aut perferendis doloribus.

## Why it costs what it costs

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
assumenda est, omnis dolor repellendus.

```python
# Filler. Replace with something real.
for _ in range(max_new_tokens):
    logits = model(tokens)[-1]
    tokens.append(sample(logits))
```

Et harum quidem rerum facilis est et expedita distinctio. Sed ut
perspiciatis unde omnis iste natus error sit voluptatem accusantium.

## What to take away

Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
nulla pariatur.
