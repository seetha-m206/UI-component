---
component: "Pipedrive Deals Archive Empty State"
ui_category: "Feedback > Empty State"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Filtered archive empty state and recovery path."
---

# Pipedrive Deals Archive Empty State

## Location

- **OBSERVED:** Authenticated Deals > Archive screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** Four-view Deals navigation, group-email control, sync, owner filter, Actions, table headers and a no-matches message with a route back to active deals.

## Actions

- **OBSERVED:** No email, sync, filter, action or route-back control was activated.

## Behavior & States

- **OBSERVED:** The current owner filter returned no archived deals.
- **RECONSTRUCTION:** The local preview keeps the empty-state copy and guards its route control.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Empty-state announcement, focus order, loading and responsive behavior.

## Human Context

- **RECOMMENDATION:** State whether the archive itself is empty or only the current filter has no matches, then offer a clear recovery path.

## AI Context

- **RECONSTRUCTION:** The fixture contains no provider or customer records.

## Needs Verification

- **NEEDS VERIFICATION:** Filter reset, group email, restore behavior, permissions and provider errors.

## Sources

- **OBSERVED:** Authenticated Pipedrive Deals Archive, 2026-10-07.
