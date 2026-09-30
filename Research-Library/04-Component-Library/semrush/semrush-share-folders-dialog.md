---
component: Semrush Share Folders Dialog
ui_category: 'Overlays > Sharing Dialog'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Folder sharing dialog with selection count, searchable multi-select, email entry, permission choice, close, and guarded share action.
---

# Component: Semrush Share Folders Dialog

## Human View

Collects the folders, recipients, and role needed for a sharing invitation inside one focused dialog.

## State Fixtures

Open Editor, open Viewer, local folder selection, local email entry, and closed.

## Technical View

- Selected-folder count remains adjacent to the field label.
- Folder choice is represented as a multi-select checklist in the reconstruction.
- Recipient entry is a multi-line field because the live surface accepts multiple addresses.
- Viewer and Editor are explicit permission options.
- Share is disabled so the preview cannot invite anyone.

## AI Context

Opening or filling this dialog is not sharing. Record invitation delivery only after an observed confirmed response.

## Evidence Boundary

- **OBSERVED:** Modal title, close, setup-status chip, folder count, expanded folder selector with search, email-address area, Viewer and Editor permission options, and Share action.
- **RECONSTRUCTION:** Fictional folders, local selection, local recipient text, and disabled Share action.
- **NOT OBSERVED:** Recipient validation, invitation delivery, permission persistence, success, failure, or revocation. No share was submitted.

## Sources

- Authenticated Semrush Home Share folders dialog, 2026-09-30.
- [[semrush-home-folders-workspace]]
