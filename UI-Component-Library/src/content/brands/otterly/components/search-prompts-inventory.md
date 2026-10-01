---
component: OtterlyAI Search Prompts Inventory
ui_category: "Data Display > Managed Prompt Table"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Search prompts listed quota usage, search, Manage tags, AI Prompt Research, Add prompts, selection boxes, column filters, row overflow, and pagination.
---

## Human View

**OBSERVATION:** Search prompts listed quota usage, search, Manage tags, AI Prompt Research, Add prompts, selection boxes, column filters, row overflow, and pagination.

**Safe interaction:** The row overflow menu exposed Edit Prompt, Similar prompts, and Delete. Those actions were not selected. Intent Volume was shown in a calculating state for some rows.

**Screenshot:** [Fictional local preview](/evidence/otterly/search-prompts-inventory-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent data display > managed prompt table pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional managed prompts with local search, pagination, and action menu feedback.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Bulk actions, edit persistence, similar-prompt generation, deletion recovery, and filtering behavior.

## Technical Data

- **OBSERVATION:** Observed columns were Prompt, Tags, Brand reports, Country, Intent Volume, and Date. Account prompt text is excluded.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional managed prompts with local search, pagination, and action menu feedback.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
