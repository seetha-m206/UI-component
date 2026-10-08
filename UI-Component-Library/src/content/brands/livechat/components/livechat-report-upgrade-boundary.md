---
component: 'LiveChat Report Upgrade Boundary'
ui_category: 'Reports > Independent Components'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Reusable locked-report state that directs the user to upgrade.'
---

# Component: LiveChat Report Upgrade Boundary

## Source

- Product: Text LiveChat
- Authenticated route: `Shared across plan-locked report routes`
- Observation date: 2026-10-08
- Evidence class: authenticated read-only UI observation
- Provider receipt: `Internal/scratch-2026-10/livechat/provider-evidence-receipts.json`

## OBSERVED

Reusable locked-report state that directs the user to upgrade.

### Allowlisted visible evidence

- `Upgrade plan`

### State

Observed read-only screen state.

### Controls present

Upgrade plan

## RECONSTRUCTION

The UI library preview recreates the observed hierarchy with fictional labels, zero-value metrics, and local-only interaction notices. It is not a provider screenshot and does not contact LiveChat.

## NOT OBSERVED

No upgrade or billing flow was opened.

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
| Open supporting observed routes | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Upgrade plan | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Upgrade plan stayed inside this fictional fixture. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
