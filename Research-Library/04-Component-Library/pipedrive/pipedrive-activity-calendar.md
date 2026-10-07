---
component: "Pipedrive Activity Calendar"
ui_category: "Data Display > Calendar"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Activity Calendar

## Location

- **OBSERVED:** Authenticated Activities > Calendar screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** List and Calendar view switcher, activity and scheduler controls, weekly date navigation, owner filter, activity-type chips, calendar-sync banner, all-day row and hourly grid.

## Actions

- **OBSERVED:** No activity, scheduler, calendar-sync, event, owner filter or date navigation action was executed.

## Behavior & States

- **OBSERVED:** A weekly October view showed four provider sample activities and completion indicators.
- **RECONSTRUCTION:** The local preview uses fictional activities and guarded controls.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Grid keyboard model, event focus order, announcements, loading and responsive behavior.

## Human Context

- **RECOMMENDATION:** Separate all-day items from the hourly grid and keep the current-time indicator visually distinct.

## AI Context

- **RECONSTRUCTION:** Public fixtures contain invented activity text and values.

## Needs Verification

- **NEEDS VERIFICATION:** Calendar sync, event editing, completion persistence, scheduler behavior and provider errors.

## Sources

- **OBSERVED:** Authenticated Pipedrive Activity Calendar, 2026-10-07.
