---
component: "Zapier Task Usage and Plan Gates"
ui_category: "Usage and Billing > Automation Consumption"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Task chart, plan meter, trial boundary and cross-product usage explanation."
---

# Component: Zapier Task Usage and Plan Gates

## Location

- **OBSERVATION:** Authenticated route `/app/history/usage` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-task-usage-plan-gates.png)

## Structure

- **OBSERVATION:** Zap history tabs for runs and task usage
- **OBSERVATION:** Date and Zap filters
- **OBSERVATION:** Task chart and sortable table
- **OBSERVATION:** Plan task meter spanning Zaps, MCP and Lead Router
- **OBSERVATION:** Manage plan entry

## Actions

| Action               | Result or boundary                     |
| -------------------- | -------------------------------------- |
| Change range         | Would update the usage window          |
| Sort by Zap or tasks | Would reorder the table                |
| Manage plan          | Crosses into billing and plan settings |

## Behavior & States

- **OBSERVATION:** Zero-use chart
- **OBSERVATION:** Loading usage state
- **OBSERVATION:** Professional trial plan meter
- **OBSERVATION:** Pay-per-task explanation
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** The chart exposed repeated numeric labels but no useful chart summary. Table headings were buttons for sorting.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Account-specific counts, dates and prices are replaced with fictional values. Billing, pay-per-task and upgrade behavior were not exercised.

## Sources

- **SOURCE REVIEWED:** https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits
- **RECONSTRUCTION:** Fictional local fixture in this library.
