---
component: 'Salesforce Sales Performance Dashboard'
ui_category: 'Analytics/Reporting > Dashboard'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Performance Dashboard

## Location

- **OBSERVED:** Sales Analytics collection → Sales Dashboard.

## Screenshot

- **RECONSTRUCTION:** A fictional local dashboard fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Dashboard actions included Share, Refresh, Edit, Subscribe and More.
- **OBSERVED:** Widgets were Pipeline, Forecast, Revenue, Days to Close, Win Rate, Top Accounts and Big Opportunities.
- **OBSERVED:** Widgets exposed refresh, expand, screen-reader table equivalent and View Report controls where applicable.

## Actions

| Element and action  | Result or boundary                        |
| ------------------- | ----------------------------------------- |
| Open dashboard card | Loaded the dashboard and its widget grid. |

## Behavior & States

- **OBSERVED:** Days to Close reported no data. Big Opportunities reported no chart data. Other widgets exposed report links without proving populated values.
- **NOT OBSERVED:** Refresh outcome, subscription, sharing, editing or widget expansion.

## Technical Data

- **OBSERVED / DOM:** Each widget was an article with a heading, business question, controls and a report link.

## Needs Verification

- **NEEDS VERIFICATION:** Populated chart values, filters, subscriptions and role-based dashboard behavior.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-dashboard`.
