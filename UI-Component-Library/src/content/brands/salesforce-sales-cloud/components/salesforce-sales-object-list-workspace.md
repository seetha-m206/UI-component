---
component: 'Salesforce Sales Object List Workspace'
ui_category: 'Enterprise Tables > Object List Workspace'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Object List Workspace

## Location

- **OBSERVED:** Leads, Contacts, Accounts, Opportunities, Products, Price Books, Invoices and Video Calls list routes in the authenticated Sales app.

## Screenshot

- **RECONSTRUCTION:** Fictional local list fixtures are available in the catalogue. Provider screenshots remain private.

## Structure

- **OBSERVED:** Object title, saved-view picker, pin state, action row, current-view count, refresh age, list search, list controls, display selector, refresh, sort state, edit, charts, filters and a resizable data grid.
- **OBSERVED:** Leads, Contacts, Accounts, Opportunities, Products and Video Calls showed zero rows in the inspected views. Price Books and Invoices showed zero recently viewed items.
- **OBSERVED:** Each empty list retained object-specific columns and guidance. A zero displayed view is not an absence claim for the org.

## Actions

| Element and action                         | Result or boundary                                                                                               |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Open an object route                       | Loaded its list view and object-specific columns.                                                                |
| Open the display selector on Opportunities | Offered Table, Kanban and Split View.                                                                            |
| Open Price Books list picker               | Exposed Recently Viewed only in the observed account state.                                                      |
| Open Leads additional actions              | Exposed Change Owner and Assign Label without executing either action.                                           |
| Open Leads list controls                   | Exposed New, Clone, Rename, Sharing Settings, Select Fields to Display, Delete and disabled Reset Column Widths. |
| Open Leads display selector                | Exposed Table, Kanban and Split View.                                                                            |
| Open Invoices                              | Retained Document Number, modification, billing-account and bill-to-contact columns in the empty state.          |
| Open Video Calls                           | Exposed an empty generic object list with sort, Charts and Filters disabled.                                     |

## Behavior & States

- **OBSERVED:** Select-all controls were disabled in zero-row states. Charts and Filters remained available on most object lists, but were disabled on the observed Price Books recent view.
- **NOT OBSERVED:** Populated rows, pagination, inline edit results, bulk selection, completed imports and durable list customizations.

## Technical Data

- **OBSERVED / DOM:** Grids exposed semantic row groups, sortable headers, column action buttons and width sliders.
- **NOT OBSERVED / Network:** No list API or query contract was inspected.

## Needs Verification

- **NEEDS VERIFICATION:** Populated lists, record actions, permissions and error states.

## Sources

- **OBSERVED:** Private receipt screen IDs `sales-leads-all-open`, `sales-contacts-all`, `sales-accounts-all`, `sales-opportunities-all`, `sales-products-all`, `sales-price-books-recent`, `sales-invoices-recent` and `sales-video-calls-recent`.
