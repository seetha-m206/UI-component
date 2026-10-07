---
component: "Pipedrive Quick Add Menu"
ui_category: "Actions > Global Create Menu"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Quick Add Menu

## Location

- **OBSERVED:** Plus control in the global top toolbar.

## Screenshot

- **NEEDS VERIFICATION:** Source screenshot is not retained.

## Structure

- **OBSERVED:** Compact floating menu with icon, object label and single-letter keyboard hint for Person, Organization, Activity, Deal, Lead, Note, Product and Project.

## Actions

- **OBSERVED:** Open and close only. No object type was selected.

## Behavior & States

- **OBSERVED:** The plus changed to a close glyph while the menu was open.
- **RECONSTRUCTION:** Object choices return local guard notices and create nothing.

## Rules & Validation

- **NOT OBSERVED:** Form destinations, keyboard shortcut activation, permissions, defaults and validation.

## Technical Data

- **OBSERVED / DOM:** Menu items and shortcut letters were present in the accessibility output.

## Accessibility

- **OBSERVED:** The Quick add launcher was exposed as a button.

## Human Context

- **RECOMMENDATION:** Use a global create menu when the same objects can be created from many modules.

## AI Context

- **RECONSTRUCTION:** The preview never reuses account records or provider forms.

## Needs Verification

- **NEEDS VERIFICATION:** Creation dialogs, duplicate detection, required fields, permissions and save outcomes.

## Sources

- **OBSERVED:** Authenticated Pipedrive Quick add menu, 2026-10-07.
