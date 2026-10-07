---
component: "HubSpot Deal Stage Editor"
ui_category: "Forms > Inline Editor"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Inline Deal stage editor with global-scope warning, color palette, and untouched disabled Save state."
---

# HubSpot Deal Stage Editor

## Location

- **OBSERVED:** Appointment Scheduled stage on the All deals board.

## Screenshot

- **OBSERVED:** `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-deal-stage-editor.png`.

## Structure

- **OBSERVED:** Activating a stage heading opened an editor over the board with a global-scope warning.
- **OBSERVED:** The editor includes Stage name, Stage description and an 18-choice Stage color palette.
- **OBSERVED:** Appointment Scheduled was populated as the name, description was empty and a blue color was selected.
- **OBSERVED:** Save was disabled in the untouched state and Cancel was available.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Appointment Scheduled stage heading | Open | Displayed the stage editor. |
| Cancel | Activate | Closed the editor and restored the board without changes. |
| Name, description and colors | Not edited | Existing values stayed unchanged. |
| Save | Not activated | It was disabled because nothing changed. |

## Behavior & States

- **OBSERVED:** The editor warns that pipeline-stage changes apply across HubSpot.
- **OBSERVED:** Color options expose literal hex values and a single selected state.
- **NEEDS VERIFICATION:** Dirty-state enablement, validation, confirmation, persistence, error handling and concurrent edits.

## Technical Data

- **OBSERVED / DOM:** Name is a settable text field, description a settable text area and colors are checkbox-like choices. The selected color was `#016DE1`.
- **OBSERVED / DOM:** Save was a disabled button in the untouched state.
- **NEEDS VERIFICATION:** Save endpoint, request payload, permission checks and rollback behavior.

## Human Context

- **RECOMMENDATION:** Pair inline pipeline configuration with a prominent scope warning and keep Save disabled until the form is dirty and valid.

## AI Context

- **FACT:** Editor fields, palette, warning and disabled state were directly observed.
- **RECONSTRUCTION:** Local fixtures may simulate dirty-state validation without a provider request.
- **NEEDS VERIFICATION:** No pipeline stage value was changed or saved.

## Sources

- Authenticated HubSpot Deals board, observed 2026-10-07.
