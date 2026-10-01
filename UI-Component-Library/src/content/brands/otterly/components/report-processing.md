---
component: OtterlyAI Report Processing Overview
ui_category: "Feedback and Status > Loading"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The first report displayed a preparation notice, disabled Export, empty chart panel, metric skeletons, ranking table skeleton, and top-prompts skeleton.
---

## Human View

**OBSERVATION:** The first report displayed a preparation notice, disabled Export, empty chart panel, metric skeletons, ranking table skeleton, and top-prompts skeleton.

**Safe interaction:** The report page remained navigable while data prepared. Export was disabled. The loading state was observed after onboarding validation.

**Screenshot:** [Fictional local preview](/evidence/otterly/report-processing-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent feedback and status > loading pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** A fictional chart and metric skeleton with a visible preparation notice.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Completion timing, metric calculation, export behavior, retry, and error states.

## Technical Data

- **OBSERVATION:** The route remained the report overview. The preparing notice said data would appear when ready. No completion timing was inferred.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** A fictional chart and metric skeleton with a visible preparation notice.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
