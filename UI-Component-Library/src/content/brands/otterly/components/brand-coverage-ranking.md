---
component: OtterlyAI Brand Coverage and Ranking
ui_category: "Analytics > Brand Coverage and Ranking"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Completed overview pairs a coverage-over-time chart with own-brand mention and average-position cards and a ranked comparison table.
---

## Human View

**OBSERVATION:** Completed overview pairs a coverage-over-time chart with own-brand mention and average-position cards and a ranked comparison table. The comparison scope offers Me + Top 5 competitors and Me + all competitors. The ranking table exposes sentiment, mentions, brand coverage, and share of voice. A More Detected Brands action is visible.

**Safe interaction:** Comparison scope changes the visible chart cohort. The preview keeps the choice locally and uses fictional brand names and values.

**Screenshot:** [Fictional local preview](./screenshots/brand-coverage-ranking-preview.png). Account names, metric values, URLs, and response content are excluded.

## AI Context

- **Component boundary:** Independent completed Brand Report overview module.
- **Action chain:** Overview filter context → module control → changed local state or read-only table.
- **Fixture:** Comparison scope changes the visible chart cohort. The preview keeps the choice locally and uses fictional brand names and values.
- **Seek lesson (RECOMMENDATION):** Keep metric scope and evidence context visible when comparing brands or sources.

## Structure and States

- **Observed:** Completed overview state on the authenticated report after initial processing.
- **Needs verification:** Historical calculations, chart hover details, and the result of More Detected Brands were not inspected.

## Technical Data

- **OBSERVATION:** The module rendered within the authenticated overview with report date, country, and engine scope.
- **NOT OBSERVED:** DOM implementation, private API schema, source calculation, and export payload.
- **RECONSTRUCTION:** Local React preview with fictional data and no provider requests.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI completed Brand Report overview, 2026-10-01.
- **SCREENSHOT:** Fictional local preview at the linked path.
- **EVIDENCE BOUNDARY:** Provider account data is not reproduced.
