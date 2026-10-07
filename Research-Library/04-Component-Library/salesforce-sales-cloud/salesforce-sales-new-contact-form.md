---
component: "Salesforce Sales New Contact Form"
ui_category: "Forms > Record Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Contact Form

## Location

- **OBSERVED:** Opened from Sales → Contacts → New and cancelled without entering data.

## Structure

- **OBSERVED:** About and Get in Touch sections with name, account, title, reporting relationship, description, phone, email and mailing-address controls.
- **OBSERVED:** Footer actions were Cancel, Save & New and Save. Owner identity was omitted from this public record.

## Behavior & States

- **OBSERVED:** The blank dialog closed without a durable outcome.
- **RECONSTRUCTION:** The catalogue fixture uses fictional contact and account values only.
- **NOT OBSERVED:** Save validation, duplicate detection, assignment, automation and server errors.

## Needs Verification

- **NEEDS VERIFICATION:** Successful creation, duplicate handling and populated Contact records.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-contact-form`.
