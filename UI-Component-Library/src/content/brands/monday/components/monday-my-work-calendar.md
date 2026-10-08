---
component: 'monday.com My Work Calendar'
ui_category: 'My Work > Calendar'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'My Work Calendar observed as a reusable component family in an authenticated read-only session.'
---

# Component: monday.com My Work Calendar

## Location

- **OBSERVATION:** /my_work.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-my-work-calendar.png)

## Structure

- **OBSERVATION:** month navigation.
- **OBSERVATION:** calendar grid.
- **OBSERVATION:** task event.
- **OBSERVATION:** Table and Calendar tabs.

## Behavior

- **OBSERVATION:** The component family was visible and inspectable in the authenticated interface.
- **RECONSTRUCTION:** The local preview presents fictional labels and inert controls only.

## Actions

- **NOT OBSERVED:** No date or item was changed.

## States

- **OBSERVATION:** The state described above was visible on 2026-10-08.
- **NEEDS VERIFICATION:** Provider persistence, error handling, responsive behavior and consequential outcomes.

## Rules and Validation

- **RECONSTRUCTION:** Preview actions cannot contact monday.com or persist changes.

## Technical Data

- **OBSERVATION:** Route and visible component labels were retained without query strings, payloads, opaque identifiers or account identity.
- **INFERENCE:** Visual grouping suggests a reusable product component, not a verified provider API contract.

## Lessons

- **RECOMMENDATION:** Preserve the observed component hierarchy while keeping write-shaped outcomes disabled in research fixtures.

## Sources

- **OBSERVATION:** Authenticated monday.com interface, 2026-10-08.
- **NOT OBSERVED:** No date or item was changed.
