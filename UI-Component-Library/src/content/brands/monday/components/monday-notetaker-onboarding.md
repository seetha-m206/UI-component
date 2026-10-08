---
component: 'monday.com Notetaker Onboarding'
ui_category: 'Productivity > Meeting Intelligence Onboarding'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Notetaker value proposition and demo boundary observed without meeting or calendar access.'
---

# Component: monday.com Notetaker Onboarding

## Location

- **OBSERVATION:** `/product_view/notetaker/meetings-page-product-view` first-use modal.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-notetaker-onboarding.png)

## Structure

- **OBSERVATION:** Welcome heading, product summary and three value sections for actionable summaries, question answering and workflow integration.
- **OBSERVATION:** Watch a demo and close controls are present.

## Behavior

- **OBSERVATION:** The modal blocks the underlying meeting inventory until dismissed.
- **NOT OBSERVED:** Demo playback, calendar connection, recording, transcript, summary, question answering or action-item publication.

## Actions

- **OBSERVATION:** Watch demo or dismiss onboarding.
- **NOT OBSERVED:** Both actions remained unexercised to preserve provider state.

## States

- **OBSERVATION:** First-use onboarding.
- **NEEDS VERIFICATION:** Empty meetings, connected calendar, active recording, processing, summary, failure and permission states.

## Rules and Validation

- **RECONSTRUCTION:** Demo remains disabled and no calendar or meeting data is represented.

## Technical Data

- **OBSERVATION:** Modal dialog and heading association are exposed semantically.

## Lessons

- **RECOMMENDATION:** Explain capture, outputs and downstream workflow value before requesting calendar or recording access.

## Sources

- **OBSERVATION:** Authenticated monday.com Notetaker onboarding, 2026-10-08.
- **NOT OBSERVED:** Meeting capture, external integrations or persistence.
