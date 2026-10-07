---
component: "Salesforce Sales Forecast Report and Filters"
ui_category: "Analytics/Reporting > Report Viewer"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales Forecast Report and Filters

## Location

- **OBSERVED:** Sales Dashboard → View Report for Forecast.

## Screenshot

- **RECONSTRUCTION:** A fictional local forecast report fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Report header, Add to Collections, Favorite, Share, Enable Field Editing, Add Chart, Filters, Refresh, Edit and More actions.
- **OBSERVED:** Summary reported zero records and a zero total amount in the workspace currency.
- **OBSERVED:** Row counts, detail rows, subtotals and grand total toggles were enabled.
- **OBSERVED:** Filters were All opportunities, Close Date All Time, Opportunity Status Open, Probability All and a disabled Close Date greater or equal TODAY criterion.

## Actions

| Element and action | Result or boundary                 |
| ------------------ | ---------------------------------- |
| Open Filters       | Revealed the report filter drawer. |

## Behavior & States

- **OBSERVED:** The report showed No Results and suggested editing filters.
- **NOT OBSERVED:** Filter edits, field editing, chart creation, refresh, sharing or report save.

## Technical Data

- **OBSERVED / DOM:** Summary metrics, checkboxes and filter buttons were semantically exposed inside the Analytics iframe.

## Needs Verification

- **NEEDS VERIFICATION:** Populated rows, forecast calculations and durable filter behavior.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-forecast-report`.
