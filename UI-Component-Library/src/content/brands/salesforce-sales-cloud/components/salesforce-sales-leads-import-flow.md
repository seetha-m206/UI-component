---
component: 'Salesforce Sales Leads Import Flow'
ui_category: 'Data Management > Import Wizard'
source_product: 'Salesforce Sales (trial workspace)'
last_verified: '2026-10-07'
evidence_state: 'source_reviewed'
status: 'partial'
summary: 'Authenticated-source Salesforce Sales pattern with a fictional local reconstruction and provider outcomes left bounded.'
---

# Component: Salesforce Sales Leads Import Flow

## Location

- **OBSERVED:** Import dialog opened from the All Open Leads action row.

## Screenshot

- **RECONSTRUCTION:** A fictional local method chooser and guarded progress fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Introductory guidance, a custom-fields link, two import methods, a five-step progress bar, zero-percent progress and a disabled Next action.
- **OBSERVED:** Methods were `Import from File` for CSV upload and `Import, Update, or Export` through the multi-object Data Import Wizard.
- **OBSERVED:** Steps were Choose How to Import leads, Upload Your File, Add to List, Match Fields and Import Started.

## Behavior & States

- **OBSERVED:** Next remained disabled before a method selection.
- **NOT OBSERVED:** File chooser, upload, mapping, validation, duplicate detection, import execution and completion results.
- **RECONSTRUCTION:** The local fixture can select a fictional method but stops before file selection or transmission.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-leads-import-entry`.
