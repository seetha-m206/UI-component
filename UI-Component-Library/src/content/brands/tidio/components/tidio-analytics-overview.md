---
component: "Tidio Analytics Overview"
ui_category: "Analytics > Support Overview"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Paid analytics navigation, date range, KPI grid and no-activity visualization."
---

# Component: Tidio Analytics Overview

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/analyticsv2/overview` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-analytics-overview.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Overview, Human support, AI support, Sales and Leads tabs.
- **OBSERVATION:** Last-30-days range.
- **OBSERVATION:** Zero KPI cards and chart.

## Actions

| Action               | Result or boundary           |
| -------------------- | ---------------------------- |
| Change analytics tab | Read-only navigation only    |
| Change date range    | Visible only and not changed |

## Behavior & States

- **OBSERVATION:** Paid feature badge.
- **OBSERVATION:** No activity in the selected period.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Metric definitions, aggregation, export and non-zero visualizations remain unverified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
