---
component: 'monday.com Admin Cross-Account Copier'
ui_category: 'Administration > Cross account copier'
source_product: 'monday.com'
last_verified: '2026-10-09'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Admin Cross-Account Copier observed as a reusable component family in an authenticated read-only session.'
---

# Component: monday.com Admin Cross-Account Copier

## Location

- **OBSERVATION:** /admin/cross-account/duplicate.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-admin-cross-account-copier.png)

## Structure

- **OBSERVATION:** folder selector.
- **OBSERVATION:** current and destination account fields.
- **OBSERVATION:** eligibility guidance.
- **OBSERVATION:** Continue action.

## Behavior

- **OBSERVATION:** The component family was visible and inspectable in the authenticated interface.
- **RECONSTRUCTION:** The local preview presents fictional labels and inert controls only.

## Actions

- **NOT OBSERVED:** No destination was entered and no content was copied.

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
- **NOT OBSERVED:** No destination was entered and no content was copied.
