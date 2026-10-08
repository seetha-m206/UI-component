---
component: 'LiveChat Recurring Campaigns Table'
ui_category: 'Campaigns > Automation Inventory'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Recurring campaign inventory with status switches and row menus.'
---

# Component: LiveChat Recurring Campaigns Table

## Source

- Product: Text LiveChat
- Authenticated route: `/engage/campaigns/recurring`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation

## OBSERVED

Recurring campaign inventory with status switches and row menus.

### Anatomy

Campaign count; recurring and one-time tabs; template banner; campaign rows; active switches; overflow menus.

### State

Five provider-created recurring campaign rows were visible and active.

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy and interaction boundaries with fictional names, addresses, conversation content and metrics. Every preview action changes local React state only.

## NOT OBSERVED

No campaign was created, opened, toggled, duplicated or deleted.

## NEEDS VERIFICATION

Provider persistence, permission failures, responsive behavior, keyboard behavior, screen-reader announcements and post-action consequences require separate direct evidence.

## Reuse guidance

Reuse the structure and state hierarchy. Keep consequential controls visually distinct and require explicit product authorization before connecting them to provider mutations.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Switch Recurring or One-time | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Open campaign row | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| New campaign | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Local state changed. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
