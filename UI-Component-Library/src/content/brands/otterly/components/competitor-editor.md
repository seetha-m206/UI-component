---
component: OtterlyAI Competitor Editor
ui_category: "Onboarding > Competitor Review"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Onboarding showed editable competitor name and domain pairs, row delete buttons, Add competitor, Back, Next, and a ranking illustration.
---

## Human View

**OBSERVATION:** Onboarding showed editable competitor name and domain pairs, row delete buttons, Add competitor, Back, Next, and a ranking illustration.

**Safe interaction:** The controls were visibly editable. Next advanced to prompt selection after processing. Delete, Add competitor, and validation were not exercised against the account.

**Screenshot:** [Fictional local preview](/evidence/otterly/competitor-editor-preview.png). The live account screen was visually inspected in the Codex browser. Account-specific report values and prompt text are excluded from this record and fixture.

## AI Context

- **Component boundary:** Independent onboarding > competitor review pattern extracted from the authenticated application.
- **Action chain:** Visible control → local selection or navigation → resulting state described above. Unexercised submissions stay labelled needs verification.
- **Fixture:** Two fictional competitors with local add, edit, remove, Back, and Next actions.
- **Seek lesson (RECOMMENDATION):** Keep user actions, data freshness, and evidence state explicit in the interface.

## Structure and States

- Default and observed states follow the Human View description.
- Local preview uses only fictional data and reversible state.
- **Needs verification:** Competitor inference source, save timing, maximum rows, duplicate validation, and delete persistence.

## Technical Data

- **OBSERVATION:** The live onboarding step used text fields and buttons. The ranking illustration presented a future report concept, not observed metric output.
- **NOT OBSERVED:** DOM implementation details, JavaScript source, private network payloads, backend contracts, and responsive breakpoints. No such values are inferred from the visual structure.
- **RECONSTRUCTION:** Two fictional competitors with local add, edit, remove, Back, and Next actions.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI web application, observed 2026-10-01 through the Codex in-app browser. Screen route and interaction were observed directly.
- **SCREENSHOT:** Fictional local preview capture at the linked project scratch path.
- **EVIDENCE BOUNDARY:** Live account content is not copied into the catalogue. Simulated preview behavior is not a claim about provider behavior.
