---
component: OtterlyAI Brand Report Overview Screen
ui_category: "Application Layout > Report Overview Composition"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The completed overview contains a report header and common scope filters, then coverage and ranking, top prompts, visibility index, citation changes, domain coverage, and domain sources.
---

## Human View

**OBSERVATION:** The completed overview contains a report header and common scope filters, then coverage and ranking, top prompts, visibility index, citation changes, domain coverage, and domain sources. Report scope applies across modules. An overview can contain completed tables while another module remains in a processing state.

**Safe interaction:** A fictional screen composition shows the information hierarchy. Its small summary blocks link conceptually to the individual records.

**Screenshot:** [Fictional local preview](./screenshots/report-overview-screen-preview.png). No live account prompt, brand, URL, or metric value was copied.

## AI Context

- **Component level:** screen.
- **Boundary:** Composes existing independent report modules into one screen.
- **Action chain:** Report scope applies across modules. An overview can contain completed tables while another module remains in a processing state.
- **Fixture:** A fictional screen composition shows the information hierarchy. Its small summary blocks link conceptually to the individual records.
- **Seek lesson (RECOMMENDATION):** Preserve report scope, data freshness, and drill-down context when reusing this pattern.

## Structure and States

- **Observed:** Authenticated report on 2026-10-01, with the state described above.
- **Needs verification:** Cross-module refresh timing, responsive rearrangement, and the exact effect of every report filter remain unverified.

## Technical Data

- **OBSERVATION:** Browser-visible structure and reversible state change were inspected through the Codex in-app browser.
- **NOT OBSERVED:** Provider source code, network contract, calculation implementation, and export payload.
- **RECONSTRUCTION:** React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI Brand Report, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** This record describes interface behavior, not account performance or a verified metric formula.
