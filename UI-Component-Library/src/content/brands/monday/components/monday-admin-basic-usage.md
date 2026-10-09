---
component: 'monday.com Admin Basic Usage Stats'
ui_category: 'Administration > Usage stats > Basic'
source_product: 'monday.com'
last_verified: '2026-10-09'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Admin Basic Usage Stats observed as a reusable component family in an authenticated read-only session.'
---

# Component: monday.com Admin Basic Usage Stats

## Location

- **OBSERVATION:** /admin/stats/basic.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-admin-basic-usage.png)

## Structure

- **OBSERVATION:** 60-day summary.
- **OBSERVATION:** boards updated, people posted and updates metrics.
- **OBSERVATION:** storage used.
- **OBSERVATION:** people activity.
- **OBSERVATION:** boards created breakdown.

## Behavior

- **OBSERVATION:** The component family was visible and inspectable in the authenticated interface.
- **RECONSTRUCTION:** The local preview presents fictional labels and inert controls only.

## Actions

- **NOT OBSERVED:** Usage values were observed only and provider identities were not retained.

## States

- **OBSERVATION:** The state described above was visible on 2026-10-09.
- **NEEDS VERIFICATION:** Provider persistence, error handling, responsive behavior and consequential outcomes.

## Rules and Validation

- **RECONSTRUCTION:** Preview actions cannot contact monday.com or persist changes.

## Technical Data

- **OBSERVATION:** Route and visible component labels were retained without query strings, payloads, opaque identifiers or account identity.
- **INFERENCE:** Visual grouping suggests a reusable product component, not a verified provider API contract.

## Lessons

- **RECOMMENDATION:** Preserve the observed component hierarchy while keeping write-shaped outcomes disabled in research fixtures.

## Sources

- **OBSERVATION:** Authenticated monday.com interface, 2026-10-09.
- **NOT OBSERVED:** Usage values were observed only and provider identities were not retained.
