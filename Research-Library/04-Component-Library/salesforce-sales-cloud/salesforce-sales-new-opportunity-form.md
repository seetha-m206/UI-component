---
component: "Salesforce Sales New Opportunity Form"
ui_category: "Forms > Record Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Opportunity Form

## Location

- **OBSERVED:** Opened from Sales → Opportunities → New and cancelled without entering data.

## Structure

- **OBSERVED:** About fields covered opportunity name, account lookup, close date, amount, description and owner.
- **OBSERVED:** Status included required Stage, Probability, required Forecast Category and Next Step.
- **OBSERVED:** Stage values were Qualify, Meet & Present, Propose, Negotiate, Closed Won and Closed Lost. Forecast categories were Omitted, Pipeline, Best Case, Commit and Closed.

## Behavior & States

- **OBSERVED:** Menus were disclosed without choosing a different value. No value was entered or saved.
- **RECONSTRUCTION:** The catalogue fixture uses fictional opportunity data.
- **NOT OBSERVED:** Successful save, probability automation, validation, duplicate handling and server errors.

## Needs Verification

- **NEEDS VERIFICATION:** Populated pipeline behavior and successful creation.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-opportunity-form`.
