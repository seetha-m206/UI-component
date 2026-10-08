---
component: 'LiveChat Widget Customization'
ui_category: 'Customization > Chat Widget Theme'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Two-pane widget editor with collapsible design controls and a live preview.'
---

# Component: LiveChat Widget Customization

## Source

- Product: Text LiveChat
- Authenticated route: `/settings/theme`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation

## OBSERVED

Two-pane widget editor with collapsible design controls and a live preview.

### Anatomy

Website customization entry; Appearance, Position, Mobile widget and Additional tweaks sections; light and dark theme controls; color choices; alignment, spacing and visibility controls; chat preview.

### State

Appearance and Position panels were opened read-only. Provider identity and website values were excluded.

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy and interaction boundaries with fictional names, addresses, conversation content and metrics. Every preview action changes local React state only.

## NOT OBSERVED

No radio control, color, position, visibility, URL or widget content was changed or saved.

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
| Open Appearance | provider_read_only_exercised: Appearance panel was opened read-only. | local_fixture_clicked: Control remained in its local state. |
| Open Position | provider_read_only_exercised: Position panel was opened read-only. | local_fixture_clicked: Local state changed. |
| Choose theme | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Choose color | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Choose widget position | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: Local state changed. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
