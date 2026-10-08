---
component: 'LiveChat Trial Banner'
ui_category: 'Feedback > Plan and Trial Boundary'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Persistent remaining-days banner with an upgrade action at the top of the application shell.'
---

# Component: LiveChat Trial Banner

## Location

- **OBSERVATION:** Topmost banner observed in the authenticated LiveChat shell on 2026-10-08.
- **RECONSTRUCTION:** The fixture uses a generic remaining-day count.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-trial-banner.png)

## Structure

- **OBSERVATION:** Strong blue band, remaining-days text and a high-contrast Upgrade now action.

## Actions

| Action            | Result or boundary                                    |
| ----------------- | ----------------------------------------------------- |
| Upgrade now       | Visible only. Billing and checkout were not opened    |
| Local Upgrade now | Shows a boundary notice without navigation or payment |

## Behavior & States

- **OBSERVATION:** Banner appeared above the application top bar.
- **NOT OBSERVED:** Expiry, dismissal, payment, plan selection and post-upgrade states.

## Technical Data

- **OBSERVATION / Network:** Subscription and billing resources were prefetched by the shell. Their presence does not prove a rendered billing workflow.
- **RECONSTRUCTION:** No network request is made.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Pricing, checkout, authorization and persistence were not inspected.

## Sources

- **OBSERVATION:** Authenticated LiveChat shell, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Upgrade now | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Upgrade was not opened. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
