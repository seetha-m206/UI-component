---
component: Semrush Prompt Research Entry
ui_category: "Search & Discovery > Prompt Research Entry"
source_product: Semrush
last_verified: 2026-09-29
status: complete
summary: Focused prompt-research entry screen with a topic combobox, Analyze action, and three explanatory benefit cards.
---

## Overview

- **OBSERVATION:** The entry page is dominated by a topic input and Analyze CTA.
- **OBSERVATION:** Supporting content explains AI Volume, Topic Difficulty, and Intent Analysis before the first query.
- **INFERENCE:** The benefit explanations reduce ambiguity around what the query will return.

## Structure

AI Toolkit shell → centered headline and description → topic input and CTA → three benefit cards.

## Behavior and Actions

Typing a topic enables Analyze. The live query was not submitted during capture. The reconstruction returns a local status message without network activity.

## States and Rules

- Empty topic keeps Analyze disabled.
- Entered topic enables analysis.
- Real results, errors, autocomplete, and quota states remain not observed.

## Technical Data

- **NOT OBSERVED:** Topic suggestion source, request payload, results schema, and quota behavior.
- **RECOMMENDATION:** Seek should communicate the shape of the output before spending a research credit or starting a long-running analysis.

## Lessons

An empty research canvas works best when it teaches the value of the query rather than presenting a bare search box.

## Sources

- Authenticated live application observation, Semrush Prompt Research, 2026-09-29.
