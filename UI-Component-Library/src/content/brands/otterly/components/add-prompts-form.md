---
component: OtterlyAI Add Prompts Form
ui_category: "Forms > Prompt Entry"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: Add Prompts displayed a blank prompt row with remove and add controls, Import from file, Cancel, and initially disabled Save prompts.
---

## Human View

**OBSERVATION:** Add Prompts displayed a blank prompt row with remove and add controls, Import from file, Cancel, and initially disabled Save prompts. A helper card linked to AI Prompt Research. No prompt text was entered or saved, and no file was selected.

**Safe interaction:** The preview adds and removes unsaved fictional rows, with a local-only save notice.

**Screenshot:** [Fictional local preview](./screenshots/add-prompts-form-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** A helper card linked to AI Prompt Research. No prompt text was entered or saved, and no file was selected.
- **Fixture:** The preview adds and removes unsaved fictional rows, with a local-only save notice.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Live validation, import parsing, quota handling, duplicate handling, and submission results remain unverified.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
