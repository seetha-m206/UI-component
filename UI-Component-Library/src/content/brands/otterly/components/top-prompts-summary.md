---
component: OtterlyAI Top Prompts Summary
ui_category: "Data Display > Ranked Prompt Summary"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The overview shows a compact top-prompts table with rank, prompt, and own-brand mention count.
---

## Human View

**OBSERVATION:** The overview shows a compact top-prompts table with rank, prompt, and own-brand mention count. A View full report action sits below the summary. The live prompt strings and counts are account-specific and omitted.

**Safe interaction:** The local action gives a fictional notice. It does not navigate or load live data.

**Screenshot:** [Fictional local preview](./screenshots/top-prompts-summary-preview.png). No live account prompt, brand, URL, or metric value was copied.

## AI Context

- **Component level:** individual.
- **Boundary:** Independent reusable pattern within the report screen.
- **Action chain:** A View full report action sits below the summary. The live prompt strings and counts are account-specific and omitted.
- **Fixture:** The local action gives a fictional notice. It does not navigate or load live data.
- **Seek lesson (RECOMMENDATION):** Preserve report scope, data freshness, and drill-down context when reusing this pattern.

## Structure and States

- **Observed:** Authenticated report on 2026-10-01, with the state described above.
- **Needs verification:** The clicked destination and ranking tie-breaks were not exercised.

## Technical Data

- **OBSERVATION:** Browser-visible structure and reversible state change were inspected through the Codex in-app browser.
- **NOT OBSERVED:** Provider source code, network contract, calculation implementation, and export payload.
- **RECONSTRUCTION:** React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI Brand Report, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** This record describes interface behavior, not account performance or a verified metric formula.
