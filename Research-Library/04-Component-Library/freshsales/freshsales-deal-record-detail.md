---
component: "Freshsales Deal Record Detail"
ui_category: "Application Layout > Record Detail"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Deal Record Detail

## Location

- **OBSERVED:** A provider-supplied sample deal opened from the Deals table as an overlaid record detail.

## Structure

- **OBSERVED:** Identity, value and forecast label, communication/action bar, related contact/account, sales owner, close date, stage progression, and grouped deal fields.
- **OBSERVED:** The stage progression ran from New through Negotiation with a separate Won/Lost control.

## Actions

- **OBSERVED:** The sample record and its related sample account were opened through read-only navigation.
- **NOT EXECUTED:** Email, call, note, task, meeting, product, discussion, field, stage, owner, and Won/Lost actions.

## Behavior & States

- **OBSERVED:** The detail showed a loading state before its content resolved.
- **RECONSTRUCTION:** Fixture identity, value, dates, ownership and relationships are fictional.

## Technical Data

- **OBSERVED / DOM:** The detail was layered over the table and exposed accessible headings, buttons, links and grouped fields.
- **NEEDS VERIFICATION:** Mutation rules, validation, persistence, notifications and audit history.

## Sources

- **OBSERVED:** Authenticated Freshsales sample deal, 2026-10-07.
