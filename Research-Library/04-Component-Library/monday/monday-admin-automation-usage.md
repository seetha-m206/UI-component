---
component: 'monday.com Admin Automation Usage'
ui_category: 'Administration > Usage stats > Automations'
source_product: 'monday.com'
last_verified: '2026-10-09'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Admin Automation Usage observed as a reusable component family in an authenticated read-only session.'
---

# Component: monday.com Admin Automation Usage

## Location

- **OBSERVATION:** /admin/stats/automations.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-admin-automation-usage.png)

## Structure

- **OBSERVATION:** action usage.
- **OBSERVATION:** daily graph.
- **OBSERVATION:** top boards, creators and automations.
- **OBSERVATION:** CSV export actions.
- **OBSERVATION:** automation table.

## Behavior

- **OBSERVATION:** The component family was visible and inspectable in the authenticated interface.
- **RECONSTRUCTION:** The local preview presents fictional labels and inert controls only.

## Actions

- **NOT OBSERVED:** No report was exported and no automation was changed.

## States

- **OBSERVATION:** The state described above was visible on 2026-10-09.
- **NEEDS VERIFICATION:** Provider persistence, error handling, responsive behavior and consequential outcomes.

## Rules and Validation

- **RECONSTRUCTION:** Preview actions cannot contact monday.com or persist changes.

## Technical Data

- **OBSERVATION:** Route and visible component labels were retained without query strings, payloads, opaque identifiers or account identity.
- **INFERENCE:** This is an AI-related surface. Visible controls do not establish model behavior, provider contracts or recurring execution.

## Lessons

- **RECOMMENDATION:** Preserve the observed component hierarchy while keeping write-shaped outcomes disabled in research fixtures.

## Sources

- **OBSERVATION:** Authenticated monday.com interface, 2026-10-09.
- **NOT OBSERVED:** No report was exported and no automation was changed.
