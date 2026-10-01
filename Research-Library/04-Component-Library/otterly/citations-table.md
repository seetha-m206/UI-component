---
component: OtterlyAI Citations Table
ui_category: "Data Display > Citation Evidence Table"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Citations showed Top Winners, Top Losers, an all-cited-URLs table, search, filters, a download control, and pagination.
---

## Human View

**OBSERVATION:** Citations showed Top Winners, Top Losers, an all-cited-URLs table, search, filters, a download control, and pagination.

**Safe interaction:** The screen reported that today's data was still processing for winners and losers. The table populated independently with cited URLs, counts, mention flag, domain, domain category, and competitors.

**Screenshot:** [Fictional local preview](./screenshots/citations-table-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent data display > citation evidence table pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional .example sources and local search/filter behavior.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Citation counting rules, source freshness, ranking logic, download format, and click-through details.

## Technical Data

- **OBSERVATION:** Observed table columns included URL, Cited, Brand mentioned, Domain, Domain category, and Competitors. External citation links were displayed but not opened.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional .example sources and local search/filter behavior.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
