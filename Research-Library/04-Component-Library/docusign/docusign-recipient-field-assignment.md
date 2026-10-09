---
component: "DocuSign Recipient Field Assignment"
ui_category: "Forms > Field Assignment"
source_product: "DocuSign"
last_verified: "2026-10-09"
evidence_state: "runtime_observed"
status: "partial"
summary: "Field palette switches ownership among sender prefill and named recipients."
---

# Component: DocuSign Recipient Field Assignment

## Location

- **OBSERVED:** Authenticated DocuSign Add Fields route for the two-recipient fictional draft, 2026-10-09.
- **RECONSTRUCTION:** Local identities and document content are synthetic.

## Screenshot

![Fictional local preview](/research/docusign/fixtures/docusign-recipient-field-assignment.png)

## Structure

- **OBSERVED:** User type options included Sender prefill, Morgan Vale, Jordan Lee and Edit Recipients.
- **OBSERVED:** The selected user type recolored and scoped the field palette for that recipient.

## Behavior & States

- **OBSERVED:** Switching from Morgan Vale to Jordan Lee changed the active recipient while retaining the standard field groups.
- **OBSERVED:** Signature, Initial, Date Signed, contact, input, action and other fields remained available.
- **NOT OBSERVED:** Completed field placement for both recipients, required-field validation and send-time checks.

## Actions

- **OBSERVED:** Select sender or recipient, edit recipients and choose a standard field type.
- **RECONSTRUCTION:** Send and provider persistence controls are disabled locally.

### State boundaries

- **OBSERVED:** Sender prefill, first recipient and second recipient assignment targets.
- **NOT OBSERVED:** Field collision, conditional fields and recipient substitution.

## Rules & Validation

- Field ownership must be visible before placement so multi-party documents remain understandable.

## Best Observed Approach

- Put the active recipient directly above the palette and preserve a distinct visual identity per recipient.

## Accessibility

- **OBSERVED / Accessibility:** The active assignment target was exposed as a labelled combobox with selectable recipient options.
- **NEEDS VERIFICATION:** Canvas keyboard placement and screen-reader field ownership announcements.

## Technical Data

- **OBSERVED:** Recipient selection updated the palette without leaving the Add Fields route.
- **NOT OBSERVED:** Field-coordinate payload, recipient identifier mapping and save API.

## Cross-Component Pattern Note

- Useful for Centilio Sign when mapping fields to multiple participants without losing authorship context.

## Sources

- Authenticated bounded DocuSign observation, 2026-10-09.
- Local evidence receipts under Internal/scratch-2026-10/docusign/.

## Related Components

- [[docusign-recipient-routing]]
- [[docusign-field-palette]]
