---
component: "HubSpot CRM Index Filtering and View Settings"
ui_category: "Search and Filtering > Filter Panel"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot CRM Index Filtering and View Settings

## Location

- **OBSERVED:** All contacts list in HubSpot Sales Hub.

## Screenshot

- **OBSERVED:** Filter bar: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contacts-filter-bar.png`.
- **OBSERVED:** Advanced drawer: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contacts-advanced-filters.png`.
- **OBSERVED:** View settings: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-contacts-view-settings.png`.

## Structure

- **OBSERVED:** The Filter control reveals quick filters for Contact owner, Create date, Last activity date and Lead status, plus Advanced filters.
- **OBSERVED:** Contact owner opens an operator-and-value popover. The observed operator was `is any of`; the value picker offered a dynamic Me choice, deactivated-owner grouping and portal owners.
- **OBSERVED:** Advanced filters opens an All filters drawer with Association and Advanced filters groups, each offering Add filter.
- **OBSERVED:** Sort by opened a compact panel with Create Date and mutually exclusive Most recent and Oldest options. Most recent was selected.
- **OBSERVED:** View settings showed disabled view name, view type, Table settings, Filters, Sort by, Copy link to view, sharing, export and action controls.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Filter | Open, then close | Revealed the quick-filter row. |
| Contact owner | Open, then close | Revealed operator and owner-value controls without selecting a value. |
| Advanced filters | Open, then close | Revealed the All filters drawer without adding a rule. |
| Sort by | Open, then close | Showed Create Date with Most recent selected and Oldest unselected. |
| View settings | Open, then close | Displayed configuration and view actions. Save changes and Reset to last save were disabled. |

## Behavior & States

- **OBSERVED:** Filter disclosures did not navigate away and could be dismissed without changing the view.
- **OBSERVED:** Manage sharing and Delete view were disabled on the account-default All contacts view. Clone to new view remained available.
- **NEEDS VERIFICATION:** Applying filters, grouped filter logic, saving, copying a view link, cloning, permissions and persistence.

## Technical Data

- **OBSERVED / DOM:** Filters and sort controls expose expanded/collapsed accessibility states. The owner selector uses a searchable multi-select list with checkbox options.
- **OBSERVED / DOM:** View settings exposes keyboard hints for Export and Save changes.
- **NEEDS VERIFICATION:** Filter serialization, server query parameters, debouncing, save API and share policy.

## Human Context

- **RECOMMENDATION:** Separate lightweight quick filters from the full rules drawer. Keep configuration and sharing in a dedicated view-settings drawer rather than mixing them into the filter flow.

## AI Context

- **FACT:** All described controls and disabled states were directly observed.
- **RECONSTRUCTION:** Local fixtures may simulate filter chips and drawer state only with fictional owners.
- **NEEDS VERIFICATION:** No filter, sort, sharing or saved-view mutation was submitted.

## Sources

- Authenticated HubSpot Contacts screen, observed 2026-10-07.
