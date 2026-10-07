---
component: "Salesforce Sales New Lead Form"
ui_category: "Forms > Record Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Lead Form

## Location

- **OBSERVED:** Opened from Sales → Leads → New and cancelled without entering data.

## Screenshot

- **RECONSTRUCTION:** A fictional local Lead form fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** About, Get in Touch and Segment sections.
- **OBSERVED:** Lead Status defaulted to New. The required Name group contains salutation, first name and last name controls.
- **OBSERVED:** Company, title, website, description, owner, rating, phone, email, address, employee count, annual revenue, lead source and industry controls were visible.
- **OBSERVED:** Footer actions were Cancel, Save & New and Save.

## Actions

| Element and action | Result or boundary                         |
| ------------------ | ------------------------------------------ |
| Open New           | Displayed the blank modal.                 |
| Cancel and close   | Returned to All Open Leads without saving. |

## Behavior & States

- **OBSERVED:** No value was entered. The dialog could be closed without a durable outcome.
- **NOT OBSERVED:** Save validation, duplicate detection, conversion, assignment, automation and server errors.

## Technical Data

- **OBSERVED / DOM:** Labelled text fields, text areas, comboboxes, numeric steppers, section headings and modal actions were exposed.
- **NOT OBSERVED / Network:** No create request or validation response was generated.

## Needs Verification

- **NEEDS VERIFICATION:** Required-field behavior, duplicate handling and successful creation.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-lead-form`.
