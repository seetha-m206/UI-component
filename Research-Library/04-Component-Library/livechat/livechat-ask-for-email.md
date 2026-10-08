---
component: 'LiveChat Ask for Email'
ui_category: 'Forms > Ask for Email'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Email collection timing choices for unattended or offline chat states.'
---

# Component: LiveChat Ask for Email

## Source

- Product: Text LiveChat
- Authenticated route: `/settings/ask-for-email`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation
- Provider receipt: `Internal/scratch-2026-10/livechat/provider-evidence-receipts.json`

## OBSERVED

Email collection timing choices for unattended or offline chat states.

### Allowlisted visible evidence

- `Set up ask for email`
- `When not responding`
- `When offline`
- `Don’t send anything`

### State

Observed read-only screen state.

### Controls present

When not responding, When offline, Don’t send anything

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy with fictional labels, zero-value metrics, and local-only interaction notices. It is not a provider screenshot and does not contact LiveChat.

## NOT OBSERVED

No provider data or settings were changed, saved, submitted, exported, installed, purchased or shared.

## NEEDS VERIFICATION

Provider persistence, authorization consequences, network contracts, permission failures, responsive behavior, keyboard behavior, screen-reader announcements, and post-action results require separate direct evidence where applicable.

## Reuse guidance

Reuse the information hierarchy and visible state pattern. Keep any consequential control guarded until the product workflow has its own authorized behavior-level evidence.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| When not responding | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: When not responding stayed inside this fictional fixture. |
| When offline | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: When offline stayed inside this fictional fixture. |
| Don’t send anything | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: Don’t send anything stayed inside this fictional fixture. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
