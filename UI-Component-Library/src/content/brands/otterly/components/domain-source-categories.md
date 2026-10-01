---
component: OtterlyAI Domain Source Categories
ui_category: "Filters > Source Category Selector"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The Domain sources module pairs a category distribution with selectable category labels and a linked domain table.
---

## Human View

**OBSERVATION:** The Domain sources module pairs a category distribution with selectable category labels and a linked domain table. Selecting a category visibly restricted the adjacent table to that category. Clearing it restored a mixed-category table.

**Safe interaction:** The local checkbox applies a reversible filter to fictional .example domains.

**Screenshot:** [Fictional local preview](./screenshots/domain-source-categories-preview.png). No live account prompt, brand, URL, or metric value was copied.

## AI Context

- **Component level:** individual.
- **Boundary:** Independent reusable pattern within the report screen.
- **Action chain:** Selecting a category visibly restricted the adjacent table to that category. Clearing it restored a mixed-category table.
- **Fixture:** The local checkbox applies a reversible filter to fictional .example domains.
- **Seek lesson (RECOMMENDATION):** Preserve report scope, data freshness, and drill-down context when reusing this pattern.

## Structure and States

- **Observed:** Authenticated report on 2026-10-01, with the state described above.
- **Needs verification:** Multi-category selection semantics, aggregation rules, and category classification are unverified.

## Technical Data

- **OBSERVATION:** Browser-visible structure and reversible state change were inspected through the Codex in-app browser.
- **NOT OBSERVED:** Provider source code, network contract, calculation implementation, and export payload.
- **RECONSTRUCTION:** React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI Brand Report, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** This record describes interface behavior, not account performance or a verified metric formula.
