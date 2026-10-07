---
component: "Salesforce Sales Invoice List"
ui_category: "Billing > Invoice List"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales Invoice List

## Location

- **OBSERVED:** Invoices > Recently Viewed in the authenticated Sales app.

## Screenshot

- **RECONSTRUCTION:** A fictional local empty invoice-list fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Saved-view picker, pin control, zero-item count, refresh age, list search, list controls, display selector, refresh, edit and data grid.
- **OBSERVED:** Columns were Document Number, Last Modified Date, Last Modified By, Billing Account and Bill To Contact.
- **OBSERVED:** Empty guidance read `No invoices yet` and described tracking customer billing details.

## Behavior & States

- **OBSERVED:** Charts and Filters were disabled in the inspected empty Recently Viewed state.
- **NEEDS VERIFICATION:** Invoice creation, populated rows, totals, status, permissions and payment-related behavior.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-invoices-recent`.
