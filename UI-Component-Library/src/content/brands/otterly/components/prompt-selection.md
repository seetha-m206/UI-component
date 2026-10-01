---
component: OtterlyAI Prompt Selection
ui_category: "Onboarding > Prompt Selection"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The final onboarding step listed suggested prompts as checked rows with a selected counter, Add Prompt, Back, and Next.
---

## Human View

**OBSERVATION:** The final onboarding step listed suggested prompts as checked rows with a selected counter, Add Prompt, Back, and Next.

**Safe interaction:** Next entered a checking state, then opened the report. Checkbox deselection and Add Prompt were not exercised against the account.

**Screenshot:** [Fictional local preview](/evidence/otterly/prompt-selection-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent onboarding > prompt selection pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Three fictional prompts with reversible local checkboxes and counter.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Minimum enforcement, maximum count, generated prompt source, persistence, and validation errors.

## Technical Data

- **OBSERVATION:** The observed step showed 15 selected prompts and recommended at least 15 for better data. Exact account prompt text is excluded here.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Three fictional prompts with reversible local checkboxes and counter.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
