---
component: "DocuSign Envelope Setup"
ui_category: "Forms > Agreement Preparation"
source_product: "DocuSign"
last_verified: "2026-10-09"
evidence_state: "runtime_observed"
status: "partial"
summary: "Document, recipient, message and reminder setup before field placement."
---

# Component: DocuSign Envelope Setup

## Location

- **OBSERVED:** Authenticated DocuSign Set Up Envelope route, 2026-10-09.
- **RECONSTRUCTION:** Local values use fictional samples and reserved `example.com` addresses.

## Screenshot

![Fictional local preview](/research/docusign/fixtures/docusign-envelope-setup.png)

## Structure

- **OBSERVED:** Header actions included Save and Close, Help, Advanced Options, View Plans and Next: Add Fields.
- **OBSERVED:** The form grouped uploaded documents, recipients, subject, message and reminder frequency.

## Behavior & States

- **OBSERVED:** Upload completion populated a document card and derived a default subject from the filename.
- **OBSERVED:** Entering a valid fictional recipient enabled progression to field placement.
- **NOT OBSERVED:** Invalid-file recovery, malware rejection, quota failure and delivery.

## Actions

- **OBSERVED:** Upload, Add Recipient, set signing order, edit subject/message, Next and Save and Close.
- **RECONSTRUCTION:** Upload, Next and transmission controls are disabled locally.

### State boundaries

- **OBSERVED:** Empty, uploading, uploaded, single-recipient and multi-recipient states.
- **NOT OBSERVED:** Provider error responses and unsaved-session recovery.

## Rules & Validation

- At least one document and a valid recipient identity are required before field placement.

## Best Observed Approach

- Keep documents, participants and communication together before opening the spatial editor.

## Accessibility

- **OBSERVED / Accessibility:** The provider exposed labelled comboboxes, text fields, checkboxes, buttons and headings.
- **NEEDS VERIFICATION:** Keyboard-only upload, error announcements and mobile reflow.

## Technical Data

- **OBSERVED:** Upload progress moved through loading, finishing and a one-page document card.
- **NOT OBSERVED:** Upload endpoint, request schema, storage region and retry policy.

## Cross-Component Pattern Note

- Useful for Centilio Sign as the preflight step before recipient-specific field placement.

## Sources

- Authenticated bounded DocuSign observation, 2026-10-09.
- Local evidence receipts under Internal/scratch-2026-10/docusign/.

## Related Components

- [[docusign-uploaded-document-card]]
- [[docusign-recipient-routing]]
