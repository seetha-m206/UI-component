---
component: Semrush AI Competitor Setup
ui_category: "Search & Comparison > Competitor Comparison Setup"
source_product: Semrush
last_verified: 2026-09-29
status: complete
summary: Comparison setup row with one owned domain, four competitor slots, Analyze and Clear actions, and a report empty state.
---

## Overview

- **OBSERVATION:** Competitor Research starts with a “You” domain and four competitor inputs.
- **OBSERVATION:** Analyze and Clear actions sit beside the setup controls.
- **OBSERVATION:** Before competitors are added, the report body says “Add competitors to view the report.”

## Structure

Report header → shared report filters → owned-domain field → competitor slots → actions → empty or comparison state.

## Behavior and Actions

Entering at least one competitor enables analysis. Clear removes all competitor selections. The reconstruction converts submission into a complete local comparison state with KPI cards and a domain table, and never contacts Semrush.

## States and Rules

- Zero competitors produces an explicit empty state.
- Up to four comparison targets are visible.
- The own-domain field remains distinct from competitors.
- Actual comparison results were not generated during capture to avoid changing account usage.

## Technical Data

- **NOT OBSERVED:** Domain validation, suggestions, usage charging, error responses, or comparison API.
- **RECOMMENDATION:** Seek should explain required setup inside the empty report area and retain the user’s own domain as an anchored reference.

## Lessons

Comparison tools should expose the comparison frame before asking users to run a potentially expensive query.

## Sources

- Authenticated live application observation, Semrush Competitor Research, 2026-09-29.
