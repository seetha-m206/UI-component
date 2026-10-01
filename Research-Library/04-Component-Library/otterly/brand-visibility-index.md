---
component: OtterlyAI Brand Visibility Index
ui_category: "Analytics > Visibility Index"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Completed overview includes a two-axis scatter chart with Brand coverage and Likelihood to buy and named Niche, Leaders, Low performance, and Low conversion quadrants.
---

## Human View

**OBSERVATION:** Completed overview includes a two-axis scatter chart with Brand coverage and Likelihood to buy and named Niche, Leaders, Low performance, and Low conversion quadrants. A companion table lists brands with coverage and likelihood values. Point placement and labels are tied to the report filters.

**Safe interaction:** The local chart uses fictional points and a simple companion table.

**Screenshot:** [Fictional local preview](./screenshots/brand-visibility-index-preview.png). Account names, metric values, URLs, and response content are excluded.

## AI Context

- **Component boundary:** Independent completed Brand Report overview module.
- **Action chain:** Overview filter context → module control → changed local state or read-only table.
- **Fixture:** The local chart uses fictional points and a simple companion table.
- **Seek lesson (RECOMMENDATION):** Keep metric scope and evidence context visible when comparing brands or sources.

## Structure and States

- **Observed:** Completed overview state on the authenticated report after initial processing.
- **Needs verification:** The provider calculation for likelihood to buy, tooltips, and point selection were not inspected.

## Technical Data

- **OBSERVATION:** The module rendered within the authenticated overview with report date, country, and engine scope.
- **NOT OBSERVED:** DOM implementation, private API schema, source calculation, and export payload.
- **RECONSTRUCTION:** Local React preview with fictional data and no provider requests.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI completed Brand Report overview, 2026-10-01.
- **SCREENSHOT:** Fictional local preview at the linked path.
- **EVIDENCE BOUNDARY:** Provider account data is not reproduced.
