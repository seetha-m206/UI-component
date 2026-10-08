---
component: 'LiveChat Settings Catalogue'
ui_category: 'Account and Settings > Configuration Navigation'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Hierarchical settings catalogue spanning channels, widget, forms, engagement, chat settings and security.'
---

# Component: LiveChat Settings Catalogue

## Source

- Product: Text LiveChat
- Authenticated route: `/settings/code`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation

## OBSERVED

Hierarchical settings catalogue spanning channels, widget, forms, engagement, chat settings and security.

### Anatomy

Channel status links; widget subsections; form subsections; engagement subsections; tags; sales tracker; assignment and file controls; security subsections.

### State

Expanded navigation exposed all recorded groups. The installation panel remained the selected content.

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy and interaction boundaries with fictional names, addresses, conversation content and metrics. Every preview action changes local React state only.

## NOT OBSERVED

No setting, channel, form, security option or installation state was changed.

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
| Open settings group | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Show more ways | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: Local state changed. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
