---
component: OtterlyAI Workspace Create Entry
ui_category: "Admin > Workspace Creation"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: New Workspace opened an Add new workspace dialog.
---

## Human View

**OBSERVATION:** New Workspace opened an Add new workspace dialog. The first step contained Workspace Name, an image/icon drag-and-drop or Choose file area, Cancel, Close, and a disabled Next control. No file or name was submitted.

**Safe interaction:** The local preview shows only the first step with a fictional name and no upload.

**Screenshot:** [Fictional local preview](./screenshots/workspace-create-entry-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** The first step contained Workspace Name, an image/icon drag-and-drop or Choose file area, Cancel, Close, and a disabled Next control. No file or name was submitted.
- **Fixture:** The local preview shows only the first step with a fictional name and no upload.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Later wizard steps, image requirements, allocation defaults, and creation result are unverified.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
