---
component: "Salesforce Sales New Account Form"
ui_category: "Forms > Record Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Account Form

## Location

- **OBSERVED:** Opened from Sales → Accounts → New and cancelled without entering data.

## Structure

- **OBSERVED:** About and Get in Touch sections with account name, website, type, description, parent-account lookup, phone, billing address and shipping address.
- **OBSERVED:** Footer actions were Cancel, Save & New and Save. Owner identity was omitted from this public record.

## Behavior & States

- **OBSERVED:** Cancel briefly surfaced the required Account Name message before the dialog closed. No value was entered or saved.
- **RECONSTRUCTION:** The catalogue fixture uses fictional company and address values only.
- **NOT OBSERVED:** Successful save, duplicate detection, hierarchy behavior and server errors.

## Needs Verification

- **NEEDS VERIFICATION:** Successful creation, duplicate handling and populated Account records.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-account-form`.
