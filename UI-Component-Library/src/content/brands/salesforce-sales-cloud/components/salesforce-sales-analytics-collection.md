---
component: 'Salesforce Sales Analytics Collection'
ui_category: 'Analytics/Reporting > Collection Browser'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Analytics Collection

## Location

- **OBSERVED:** Sales → More → Analytics → Sales collection.

## Screenshot

- **RECONSTRUCTION:** Fictional local analytics cards are available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Analytics sidebar with Home, Browse, Favorites and Collections.
- **OBSERVED:** Sales collection reported 12 items and exposed Share, Add and Collection Actions.
- **OBSERVED:** Cards included My Forecast, My Top Accounts, My Sales Performance, My Pipeline, My Opportunities Won, Sales Dashboard, My Sales Dashboard, Pipeline, Opportunities Won, Forecast, Top Accounts and Sales Performance.

## Actions

| Element and action    | Result or boundary              |
| --------------------- | ------------------------------- |
| Open Sales collection | Loaded the 12 Sales assets.     |
| Open Sales Dashboard  | Loaded the dashboard read-only. |

## Behavior & States

- **OBSERVED:** Cards separate personal and shared report/dashboard groups.
- **NOT OBSERVED:** Add, share, pin, collection management, asset actions and creation.

## Technical Data

- **OBSERVED / DOM:** Analytics rendered inside an iframe with semantic cards, links and action buttons.

## Needs Verification

- **NEEDS VERIFICATION:** Asset permissions, creation workflows and edition entitlement.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-analytics-collection`.
