---
component: OtterlyAI Prompt Report Table
ui_category: "Data Display > Prompt Performance Table"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The report Prompts view displayed a title, description, CSV export, date, tag, engine and country filters, a search field, table columns, and pagination.
---

## Human View

**OBSERVATION:** The report Prompts view displayed a title, description, CSV export, date, tag, engine and country filters, a search field, table columns, and pagination.

**Safe interaction:** Navigation from the report sidebar loaded the table. Search and column filters were present. A live export and search submission were not performed.

**Screenshot:** [Fictional local preview](./screenshots/prompt-report-table-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent data display > prompt performance table pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional prompts with local search, filter notice, pagination, and row actions.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Search debounce, sort semantics, CSV payload, and provider response lineage. Prompt row selection opened the separately documented detail panel.

## Technical Data

- **OBSERVATION:** Observed columns were Prompt, Brand coverage, Brand sentiment, Intent volume, Brand mentions, Total brand mentions, Domain citations, Total citations, Competitors, and Tags.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional prompts with local search, filter notice, pagination, and row actions.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
