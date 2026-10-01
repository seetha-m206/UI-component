---
component: OtterlyAI Citation Changes
ui_category: "Analytics > Citation Changes"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Completed overview includes Citation changes with Top, New, Increased, Stable, Decreased, and Lost scopes, a sort control, a full-list action, and a URL table.
---

## Human View

**OBSERVATION:** Completed overview includes Citation changes with Top, New, Increased, Stable, Decreased, and Lost scopes, a sort control, a full-list action, and a URL table. Selecting New changed the visible panel while keeping overview context.

**Safe interaction:** The local tabs and sort choice change state without fetching or exporting data. The URL is an example-domain fixture.

**Screenshot:** [Fictional local preview](./screenshots/citation-changes-preview.png). Account names, metric values, URLs, and response content are excluded.

## AI Context

- **Component boundary:** Independent completed Brand Report overview module.
- **Action chain:** Overview filter context → module control → changed local state or read-only table.
- **Fixture:** The local tabs and sort choice change state without fetching or exporting data. The URL is an example-domain fixture.
- **Seek lesson (RECOMMENDATION):** Keep metric scope and evidence context visible when comparing brands or sources.

## Structure and States

- **Observed:** Completed overview state on the authenticated report after initial processing.
- **Needs verification:** Pagination, exact sort semantics, full-list destination, and change calculation were not inspected.

## Technical Data

- **OBSERVATION:** The module rendered within the authenticated overview with report date, country, and engine scope.
- **NOT OBSERVED:** DOM implementation, private API schema, source calculation, and export payload.
- **RECONSTRUCTION:** Local React preview with fictional data and no provider requests.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI completed Brand Report overview, 2026-10-01.
- **SCREENSHOT:** Fictional local preview at the linked path.
- **EVIDENCE BOUNDARY:** Provider account data is not reproduced.
