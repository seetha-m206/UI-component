---
component: "Salesforce Sales Quick Settings"
ui_category: "Administration > Settings Launcher"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales Quick Settings

## Location

- **OBSERVED:** Quick Settings global-header control in the authenticated Sales app.

## Screenshot

- **RECONSTRUCTION:** A fictional local settings catalogue is available in the component preview. Provider capture remains private.

## Structure

- **OBSERVED:** Side-panel heading, close control, Open Advanced Setup link and grouped shortcut list.
- **OBSERVED:** Customization included Fields and Sales Stages.
- **OBSERVED:** Company included Users, Business Details, Fiscal Year, Billing and Purchases, and Email Settings.

## Behavior & States

- **OBSERVED:** The panel was opened and closed without following a shortcut.
- **NOT OBSERVED:** Setup destinations, permission variants, settings forms, validation and persisted changes.
- **RECONSTRUCTION:** Local buttons only identify the selected shortcut and never open setup or billing.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-quick-settings`.
