---
component: "HubSpot Ticket Customization View Actions"
ui_category: "Account / Settings > Record and Preview View Actions"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Customization View Actions

## Location

- **OBSERVED:** Ticket Record Customization and Preview Customization inventories, inspected 2026-10-06.

## Structure

- **OBSERVED:** Both Default view rows exposed Clone view and Reset default view in their Actions disclosure.
- **OBSERVED:** Both actions were disabled. The clone control showed an upgrade prompt.
- **OBSERVED:** Create team view was locked and did not open a dialog in this portal.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Default view actions | Open disclosure | Displayed disabled Clone view and Reset default view. |
| Create team view | Read-only attempt | Remained locked with no dialog. |
| Clone and reset | Not activated | Creation, reset and persistence are **NOT OBSERVED**. |

## Screenshot

- **NEEDS VERIFICATION:** No durable provider screenshot was archived.

## Sources

- **OBSERVED:** Authenticated Ticket Record and Preview Customization screens, inspected 2026-10-06.
