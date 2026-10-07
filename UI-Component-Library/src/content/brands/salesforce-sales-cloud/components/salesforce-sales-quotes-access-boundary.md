---
component: 'Salesforce Sales Quotes Access Boundary'
ui_category: 'Feedback > Permission Boundary'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Quotes Access Boundary

## Location

- **OBSERVED:** Focused read-only attempt to open the standard Quotes object route.

## Screenshot

- **RECONSTRUCTION:** A fictional local permission-boundary fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** An alert stated that the list view was unavailable in Lightning Experience and suggested Salesforce Classic or another list view.
- **OBSERVED:** A dialog stated that the current account lacked access and suggested asking an administrator for help or requesting access.

## Actions

| Element and action | Result or boundary                                         |
| ------------------ | ---------------------------------------------------------- |
| Open Quotes route  | Reached the Lightning incompatibility and access boundary. |
| Close dialog       | Returned without requesting access.                        |

## Behavior & States

- **OBSERVED:** The boundary combines a Lightning list-view limitation with current-account access denial.
- **NOT OBSERVED:** Quote lists, quote builder, products, pricing, approvals, PDFs or sharing.

## Technical Data

- **OBSERVED / DOM:** The page exposed a grid placeholder, alert paragraph and cancellable access dialog.

## Needs Verification

- **NEEDS VERIFICATION:** Quotes are not claimed absent. Another edition, permission set, list view or Classic experience may expose them.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-quotes-access-boundary`.
