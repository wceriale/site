---
layout: post
title: "ELI5: How inference works"
date: 2026-08-24
# Without this, jekyll-seo-tag uses the first paragraph — the disclaimer —
# as the search-result and link-preview summary.
description: "How an LLM turns your input into a response, one token at a time."
---

*This will not cover model training or fine tuning.*

After reading this, you'll have a rough idea of how "inference" works in
Large Language Models, or LLMs.

At the end of the day, an LLM spits out the next token given a sequence of
previous tokens. "Inference" is this process. There are three main steps
this will cover.

## 1. Converting user input into numbers

Computers use 1s and 0s. When you ask ChatGPT a question, a process called
"tokenization" occurs that converts your message into "tokens". We can
think of "tokens" as a word, part of a word, or punctuation. Most "tokens"
you can think of have a representation in 1s and 0s, or an "embedding". The
embedding is what the model uses.

## 2. Running the model

Now that we have the input 1s and 0s, we feed that into the "model". Think
of a "model" as a giant program. It takes input, the "embeddings" from
above, and outputs possible next tokens. For example, with "Hello, how are
you \_\_\_" we may see something like:

```
{
    "?": 50%,
    "doing": 40%,
    "today": 10%
}
```

This process is complicated, and comes down to crunching a bunch of
numbers. Something that GPUs excel at!

## 3. Picking the next token

With a probability distribution of what possible tokens are next, we pick
one randomly weighted by its probability. So if we did this 10 times, we'd
expect half of them to be "?".

Once we pick the token, we perform the process again.

"Hello, how are you? \_\_\_" may yield:

```
{
    "I": 50%,
    "Good": 40%,
    "Bad": 10%
}
```

When we discuss "inference" and optimization, we're mainly focused on
step 2. How do we make this as fast and efficient as possible?
