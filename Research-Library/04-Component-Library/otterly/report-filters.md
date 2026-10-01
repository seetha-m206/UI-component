---
component: OtterlyAI Report Filter Bar
ui_category: "Filtering > Date Engine Country"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The report toolbar combined date range, tags, AI engine, and country controls.
---

## Human View

**OBSERVATION:** The report toolbar combined date range, tags, AI engine, and country controls.

**Safe interaction:** Opening the date control exposed presets and a two-month calendar. Engine menu showed ChatGPT, Google AI Overview, Perplexity, Microsoft Copilot, with Google AI Mode, Google Gemini, and Claude API marked add-ons. Country menu showed Canada. Tag menu showed All tags.

**Screenshot:** [Fictional local preview](./screenshots/report-filters-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent filtering > date engine country pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Fictional local filter menus, date presets, and engine selection. Add-on options are informational only.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Filter request contract, date limits, tag creation, engine availability on other plans, and persistence.

## Technical Data

- **OBSERVATION:** The current report URL carried country, startDate, endDate, and rangePreset query parameters. Filter result changes were not exercised.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Fictional local filter menus, date presets, and engine selection. Add-on options are informational only.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
