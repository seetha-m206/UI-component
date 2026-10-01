---
component: OtterlyAI Citation Trend Status
ui_category: "Data Display > Pending Trend Panels"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The Citations screen shows Top Winners and Top Losers status panels above a populated cited-URL table.
---

## Human View

**OBSERVATION:** The Citations screen shows Top Winners and Top Losers status panels above a populated cited-URL table. Both panels said today’s data was still processing and suggested an earlier date, while the URL table was usable.

**Safe interaction:** The local preview shows the pending state only. It does not simulate completed trend results.

**Screenshot:** [Fictional local preview](./screenshots/citation-trend-status-preview.png). No live account prompt, brand, URL, or metric value was copied.

## AI Context

- **Component level:** individual.
- **Boundary:** Independent reusable pattern within the report screen.
- **Action chain:** Both panels said today’s data was still processing and suggested an earlier date, while the URL table was usable.
- **Fixture:** The local preview shows the pending state only. It does not simulate completed trend results.
- **Seek lesson (RECOMMENDATION):** Preserve report scope, data freshness, and drill-down context when reusing this pattern.

## Structure and States

- **Observed:** Authenticated report on 2026-10-01, with the state described above.
- **Needs verification:** Completed trend values, date-switch results, ranking method, and refresh cadence were not observed.

## Technical Data

- **OBSERVATION:** Browser-visible structure and reversible state change were inspected through the Codex in-app browser.
- **NOT OBSERVED:** Provider source code, network contract, calculation implementation, and export payload.
- **RECONSTRUCTION:** React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI Brand Report, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** This record describes interface behavior, not account performance or a verified metric formula.
