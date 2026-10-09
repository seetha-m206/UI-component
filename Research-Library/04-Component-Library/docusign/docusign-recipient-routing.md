---
component: "DocuSign Recipient Routing"
ui_category: "Forms > Recipient Routing"
source_product: "DocuSign"
last_verified: "2026-10-09"
evidence_state: "runtime_observed"
status: "partial"
summary: "Multi-recipient editor with roles, signing order and per-recipient controls."
---

# Component: DocuSign Recipient Routing

## Location

- **OBSERVED:** Authenticated DocuSign Set Up Envelope route, 2026-10-09.
- **RECONSTRUCTION:** All names are fictional and all addresses use the reserved `example.com` domain.

## Screenshot

![Fictional local preview](/research/docusign/fixtures/docusign-recipient-routing.png)

## Structure

- **OBSERVED:** Each recipient card exposed role, Customize, name, email, remove and reorder controls.
- **OBSERVED:** Set signing order added numbered steppers with Morgan Vale as 1 and Jordan Lee as 2.

## Behavior & States

- **OBSERVED:** Add Recipient created a second recipient card and enabled signing-order configuration.
- **OBSERVED:** Recipient values persisted into the saved Drafts row summary.
- **NOT OBSERVED:** Recipient delivery, authentication methods, corrections, delegation and failure recovery.

## Actions

- **OBSERVED:** Add recipient, change role, customize, reorder, remove and toggle signing order.
- **RECONSTRUCTION:** Remove and send remain disabled locally.

### State boundaries

- **OBSERVED:** One recipient, two recipients, unordered and ordered states.
- **NOT OBSERVED:** Duplicate-address validation, bulk paste and conditional routing.

## Rules & Validation

- A routing sequence must stay visually attached to the recipient it controls.

## Best Observed Approach

- Pair numbered order with editable recipient cards and keep role selection explicit.

## Accessibility

- **OBSERVED / Accessibility:** Recipient fields and signing-order controls had distinguishable labels and values.
- **NEEDS VERIFICATION:** Drag reorder keyboard parity and announcement behavior.

## Technical Data

- **OBSERVED:** Order values appeared as numeric stepper controls after enabling signing order.
- **NOT OBSERVED:** Routing data model, validation API and delivery queue behavior.

## Cross-Component Pattern Note

- Useful for Centilio Sign multi-party approvals and serial signing flows.

## Sources

- Authenticated bounded DocuSign observation, 2026-10-09.
- Local evidence receipts under Internal/scratch-2026-10/docusign/.

## Related Components

- [[docusign-envelope-setup]]
- [[docusign-recipient-field-assignment]]
