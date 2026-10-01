---
component: OtterlyAI Tag Create Dialog
ui_category: "Overlays > Tag Creation"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The Create tag dialog contained Name, Color, Cancel, Close, and Create controls.
---

## Human View

**OBSERVATION:** The Create tag dialog contained Name, Color, Cancel, Close, and Create controls. Opening the color list exposed named swatches including Magenta, Blue, Cyan, Light blue, Gold, and Green. A color could be selected locally in the form before leaving without creation.

**Safe interaction:** The local dialog uses fictional input and never submits to OtterlyAI.

**Screenshot:** [Fictional local preview](./screenshots/tag-create-dialog-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** Opening the color list exposed named swatches including Magenta, Blue, Cyan, Light blue, Gold, and Green. A color could be selected locally in the form before leaving without creation.
- **Fixture:** The local dialog uses fictional input and never submits to OtterlyAI.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Validation and saved-tag behavior were not tested.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
