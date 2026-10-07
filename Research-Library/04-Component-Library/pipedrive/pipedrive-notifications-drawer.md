---
component: "Pipedrive Notifications Drawer"
ui_category: "Feedback > Notifications Drawer"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Notifications Drawer

## Location

- **OBSERVED:** Notifications control in the top toolbar on the Setup Guide.

## Screenshot

- **NEEDS VERIFICATION:** Provider pixels are not retained because the drawer contained live account metrics.

## Structure

- **OBSERVED:** Right drawer with title, settings and close controls, Your progress card, daily and monthly metric groups, no-new-notifications illustration and All notifications row.

## Actions

- **OBSERVED:** Drawer open and close. Settings, overflow and All notifications were not activated.

## Behavior & States

- **OBSERVED:** Empty notification state coexisted with a populated progress-summary card.
- **RECONSTRUCTION:** Local preview uses explicit fictional zero-value metrics only.

## Rules & Validation

- **NOT OBSERVED:** Read/unread rules, populated list, settings, pagination and notification delivery.

## Technical Data

- **OBSERVED / DOM:** The drawer title was exposed, while several icon-only controls lacked visible accessible labels in the captured tree.

## Accessibility

- **NEEDS VERIFICATION:** Icon-only control names and keyboard focus containment.

## Human Context

- **RECOMMENDATION:** Separate personal progress from event notifications even when both occupy one drawer.

## AI Context

- **RECONSTRUCTION:** Public fixtures omit real revenue, deal and activity values.

## Needs Verification

- **NEEDS VERIFICATION:** Populated notifications, settings, read state, links, errors and mobile layout.

## Sources

- **OBSERVED:** Authenticated Pipedrive Notifications drawer, 2026-10-07.
