---
component: 'Gorgias Rules Onboarding'
ui_category: 'Automation > Rules Onboarding'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Rules workspace with tool navigation, search and three learning paths rather than a configured list.'
---

# Component: Gorgias Rules Onboarding

## Location

- **OBSERVATION:** Workflows > Rules at `/app/workflows/rules`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-rules-onboarding.png)

## Structure

- **OBSERVATION:** Tools navigation includes Rules, Macros, Ticket assignment, Auto-merge, CSAT and SLAs.
- **OBSERVATION:** Fields and tags navigation includes ticket fields, customer fields, conditions and tags.
- **OBSERVATION:** Main surface combines rule search with documentation, video and academy learning entries.

## Actions

| Action | Result or boundary |
| --- | --- |
| Search rules | Field observed but left empty |
| Open learning links | Not exercised |
| Create or edit a rule | No control exercised and no rule changed |

## Behavior & States

- **OBSERVATION:** The page favoured education over an empty-table message.
- **RECONSTRUCTION:** Learning controls cannot leave the local fixture.
- **NOT OBSERVED:** Rule builder, validation, ordering, execution and persistence.

## Technical Data

- **OBSERVATION / DOM:** Navigation groups, search field, image-based video preview and learning links were exposed.

## Evidence Boundary

- **NOT OBSERVED:** No rule was created, edited, enabled, disabled or executed.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
