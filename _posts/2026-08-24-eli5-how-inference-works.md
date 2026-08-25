---
layout: post
title: "ELI5: How inference works"
date: 2026-08-24
# Without this, jekyll-seo-tag uses the first paragraph — the disclaimer —
# as the search-result and link-preview summary.
description: "How an LLM turns your input into a response, one token at a time."
---

*This will not cover model training or fine tuning.*

## At a high level

Inference is the process of taking user input, running it through the
model, and getting back generated content.

At the end of the day, an LLM spits out the next token given a sequence of
previous tokens.

For example:

> How are you \_\_\_\_

This would spit out the following options as a next token: “?”, “today?”,
“doing?”.

Then, it would keep going:

> How are you? \_\_\_\_

Would follow up with answering the question, maybe: “I”, “Today”, “Thank”,
then lead into the following full sentence responses:

- “I am good”
- “Today I’m doing well”
- “Thank you for asking, I’m good”

This happens by a bunch of 1s and 0s computing to predict the next token.

The following highlights the main steps required for this to happen end to
end, and gives a high level overview on the intuition behind how each step
works.

## Converting user input into numbers for the model

*Coming soon…*

## Running the model

*Coming soon…*

## Generating the next token

*Coming soon…*
