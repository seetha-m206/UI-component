---
component: "Zoho CRM Deals Sales Guidance List"
ui_category: "Content > Guidance list"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Two concise rows connect sales-cycle definition and pipeline tracking to their supporting setup surfaces."
---

# Component: Zoho CRM Deals Sales Guidance List

## Overview

The Deals onboarding panel explains two foundational tasks before records are added.

## Behavior & States

**OBSERVED:** One row described defining a sales cycle and another described tracking the sales pipeline.

**RECONSTRUCTION:** Local fixtures use neutral sales terminology and non-interactive destinations.

**NEEDS VERIFICATION:** Additional guidance, responsive wrapping, localization and role-specific content were not observed.

## Rules & Validation

Keep each instruction paired with one clearly scoped next step. Do not imply the linked configuration is already complete.

## Technical Data

- **OBSERVED:** Guidance is a two-row list beneath the heading.
- **OBSERVED:** Each row ends in one inline action link.
- **NOT OBSERVED:** Content source or experimentation logic.

### State Fixtures

```json
{"items":[{"prompt":"Define your sales cycle","action":"Configure stages"},{"prompt":"Track your sales pipeline","action":"Create dashboard"}]}
```

## Accessibility

**NEEDS VERIFICATION:** Semantic list structure and whether links retain context when announced independently.

## Sources

Authenticated Zoho CRM Deals, observed 2026-10-07. Private receipt `07-deals-empty-state.png`.
