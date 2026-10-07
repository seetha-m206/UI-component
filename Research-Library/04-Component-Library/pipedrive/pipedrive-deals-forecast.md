---
component: "Pipedrive Deals Forecast"
ui_category: "Data Display > Forecast Board"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Deals Forecast

## Location

- **OBSERVED:** Authenticated Deals > Forecast screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** Four-view Deals navigation, Deal split-create control, four-month navigation, Today control, pipeline and filter selectors, monthly value summaries and draggable deal cards.

## Actions

- **OBSERVED:** No deal was opened, moved, created or changed. No month, pipeline or filter change was applied.

## Behavior & States

- **OBSERVED:** October contained two provider sample deals while the next three months were empty.
- **RECONSTRUCTION:** The local preview uses fictional deals and value totals. Dragging is not enabled.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure exposed deal cards as draggable. Network, API and persistence behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Keyboard alternatives to drag, focus restoration, announcements, loading and responsive behavior.

## Human Context

- **RECOMMENDATION:** Pair monthly totals with the cards that contribute to them and provide a non-drag movement path.

## AI Context

- **RECONSTRUCTION:** Public fixtures contain invented identities and metrics.

## Needs Verification

- **NEEDS VERIFICATION:** Drag persistence, probability math, date-range behavior, filtering, permissions and provider errors.

## Sources

- **OBSERVED:** Authenticated Pipedrive Deals Forecast, 2026-10-07.
