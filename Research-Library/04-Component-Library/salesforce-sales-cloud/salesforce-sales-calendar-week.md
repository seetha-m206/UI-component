---
component: "Salesforce Sales Calendar Week View"
ui_category: "Scheduling > Week Calendar"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales Calendar Week View

## Location

- **OBSERVED:** Sales → Calendar at the week containing 7 October 2026.

## Screenshot

- **RECONSTRUCTION:** A fictional local week-calendar fixture is available in the catalogue. Provider capture remains private.

## Structure

- **OBSERVED:** Week heading, previous and next week controls, disabled Today control, Refresh, View, New Event and sidebar toggle.
- **OBSERVED:** GMT +5:30 time-zone label, seven-day time grid, mini month picker, year picker, My Calendars and Other Calendars.
- **OBSERVED:** My Events was enabled in the observed sidebar.

## Actions

| Element and action | Result or boundary                                 |
| ------------------ | -------------------------------------------------- |
| Open Calendar      | Loaded the current week and selected current date. |

## Behavior & States

- **OBSERVED:** Calendar navigation controls and date cells were keyboard-exposed.
- **NOT OBSERVED:** Event creation, drag, resize, recurrence, reminders, conflicts and sharing.

## Technical Data

- **OBSERVED / DOM:** Semantic headings, selectable date cells, navigation buttons, calendar toggles and a scrollable time grid were exposed.

## Needs Verification

- **NEEDS VERIFICATION:** Event form, meeting integrations and saved calendar preferences.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-calendar-week`.
