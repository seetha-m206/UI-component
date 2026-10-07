---
component: "Pipedrive Deals List"
ui_category: "Data Display > Data Table"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Deals List

## Location

- **OBSERVED:** Authenticated Deals > List screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** Four-view Deals navigation, Deal split-create control, two-deal count, total-value toggle, sync, pipeline and filter selectors, Actions, condition builder, closed-deals control and selectable rows.

## Actions

- **OBSERVED:** No deal, related record, filter, pipeline, import, sync or action menu item was opened or changed.

## Behavior & States

- **OBSERVED:** Two provider sample deals appeared after the list finished loading.
- **RECONSTRUCTION:** The local preview uses fictional deals, organizations, contacts and currency values.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Table keyboard behavior, focus restoration, announcements, loading and responsive behavior.

## Human Context

- **RECOMMENDATION:** Keep the deal title, value and relationships visible without forcing unnecessary horizontal scanning.

## AI Context

- **RECONSTRUCTION:** Public fixtures contain invented identities and metrics.

## Needs Verification

- **NEEDS VERIFICATION:** Sorting, filtering, import, sync, persistence, permissions and provider errors.

## Sources

- **OBSERVED:** Authenticated Pipedrive Deals List, 2026-10-07.
