---
component: "DocuSign Uploaded Document Card"
ui_category: "Files > Uploaded Document Cards"
source_product: "DocuSign"
last_verified: "2026-10-09"
evidence_state: "runtime_observed"
status: "partial"
summary: "Uploaded PDF card with preview, filename, page count and document actions."
---

# Component: DocuSign Uploaded Document Card

## Location

- **OBSERVED:** Authenticated DocuSign Set Up Envelope route after uploading two fictional PDFs, 2026-10-09.
- **RECONSTRUCTION:** The preview uses a synthetic Cedar Lane fixture with no legal effect.

## Screenshot

![Fictional local preview](/research/docusign/fixtures/docusign-uploaded-document-card.png)

## Structure

- **OBSERVED:** The completed card exposed a generated thumbnail, filename, page count, preview control and More Options menu.
- **OBSERVED:** The same slot first displayed loading and finishing progress.

## Behavior & States

- **OBSERVED:** A one-page PDF moved from upload progress to a sortable document card.
- **OBSERVED:** The filename seeded the message subject.
- **NOT OBSERVED:** Reordering multiple documents, replacement, conversion errors and destructive removal.

## Actions

- **OBSERVED:** View document and More Options were available.
- **RECONSTRUCTION:** Local upload and destructive controls are disabled.

### State boundaries

- **OBSERVED:** Empty drop zone, loading, finishing and ready states.
- **NOT OBSERVED:** Unsupported file, password-protected PDF and timeout states.

## Rules & Validation

- Show conversion progress, resulting page count and the exact document selected before continuing.

## Best Observed Approach

- Preserve a stable card position while progress resolves into preview and document actions.

## Accessibility

- **OBSERVED / Accessibility:** The provider exposed the document as a sortable item with labelled preview and options controls.
- **NEEDS VERIFICATION:** Reorder announcements and keyboard movement.

## Technical Data

- **OBSERVED:** Two synthetic one-page PDFs were accepted and rendered with thumbnails.
- **NOT OBSERVED:** File-processing service, upload request details and storage lifecycle.

## Cross-Component Pattern Note

- Useful for Centilio Sign wherever a file becomes a prepared agreement asset.

## Sources

- Authenticated bounded DocuSign observation, 2026-10-09.
- Local evidence receipts under Internal/scratch-2026-10/docusign/.

## Related Components

- [[docusign-envelope-setup]]
- [[docusign-loading-state]]
