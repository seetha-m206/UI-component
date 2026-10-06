---
component: "HubSpot Ticket Collapsible Header"
ui_category: "Application Layout > Collapsible Header"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Collapsible Header

## Location

- **OBSERVED:** Authenticated Unassigned tickets board, inspected 2026-10-06.

## Screenshot

- **NEEDS VERIFICATION:** Expanded and collapsed states were visually inspected. No durable screenshot was archived.

## Structure

- **OBSERVED:** Expanded state showed the Tickets title, Automate and Add tickets, plus separate pinned-view tabs above the search and filter toolbar.
- **OBSERVED:** Collapsed state removed the title/action row and pinned-view row. The selected Unassigned tickets view became a compact popup control placed beside Search, Filter and Sort. Pipeline, layout controls, View settings and quick filters remained available.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Collapse header | Keyboard Space | Removed the title and pinned-view rows, changed its label to Expand header and compacted the controls. |
| Expand header | Keyboard Space | Restored the original title, actions and pinned-view rows. |
| Compact Unassigned tickets popup | Keyboard Space | Opened a searchable pinned-view selector with All tickets, My open tickets, Unassigned tickets and All views. |

## Behavior & States

- **OBSERVED:** Collapse preserved the current view, Filter (1), board layout and no-results content. The state was reversible in the same route.
- **NOT OBSERVED:** Search behavior, selection outcomes, persistence after reload, narrow-screen behavior and animation timing.

## Technical Data

- **OBSERVED / DOM:** The collapse button changed accessible name between Collapse header and Expand header. Expanded pinned views were exposed as a content list, while collapsed state exposed the selected view as a popup button.
- **NOT OBSERVED:** Persistence storage, responsive breakpoints and animation implementation.

## Human Context

- **RECOMMENDATION:** When collapsing page chrome, preserve view identity and the controls required to interpret the current result.

## AI Context

- **FACT:** Both layout states were exercised and restored without changing provider data.
- **NOT OBSERVED:** Reload persistence and responsive behavior remain unverified.

## Needs Verification

- **NEEDS VERIFICATION:** Durable screenshots, compact view selection outcomes, reload persistence, animation and keyboard focus transition.

## Sources

- **OBSERVED:** Authenticated Unassigned tickets board, inspected 2026-10-06.
