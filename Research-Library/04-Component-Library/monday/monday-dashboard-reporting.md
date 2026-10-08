---
component: 'monday.com Dashboard and Reporting'
ui_category: 'Analytics & Reporting > Project Dashboard'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Connected-board dashboard with KPI cards, charts and advanced filters observed.'
---

# Component: monday.com Dashboard and Reporting

## Location

- **OBSERVATION:** Existing dashboard at `/overviews/:id`.
- **RECONSTRUCTION:** Owner identity and provider object IDs are replaced.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-dashboard-reporting.png)

## Structure

- **OBSERVATION:** Dashboard header, connected-board selector, text, people and advanced filters, settings and widget grid.
- **OBSERVATION:** Four KPI cards summarize all tasks, in-progress, stuck and done states.
- **OBSERVATION:** Status pie chart and owner bar chart visualize the same connected board.

## Behavior

- **OBSERVATION:** Advanced filter opens a condition builder with board, column, condition and value selectors.
- **RECONSTRUCTION:** Local filter panel opens without applying or saving anything.

## Actions

- **OBSERVATION:** Export, invite, add widget, settings and per-widget menus are visible.
- **NOT OBSERVED:** Export, invite, widget creation, settings changes, filter application or connected-board changes.

## States

- **OBSERVATION:** One connected board, three tasks and equal status distribution.
- **NEEDS VERIFICATION:** Multi-board rollups, live refresh, widget edit modes and scheduled delivery.

## Rules and Validation

- **RECONSTRUCTION:** Charts use fictional member identity and static values.

## Technical Data

- **OBSERVATION:** Charts expose descriptive image labels and KPI values through accessible content.

## Lessons

- **RECOMMENDATION:** Reuse the same filter language across board and dashboard surfaces, while keeping aggregate and owner views side by side.

## Sources

- **OBSERVATION:** Authenticated monday.com dashboard, 2026-10-08.
- **NOT OBSERVED:** Export payloads, refresh cadence and persistence.
