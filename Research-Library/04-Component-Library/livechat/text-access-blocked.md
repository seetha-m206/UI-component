---
component: 'Text Migration Access Boundary'
ui_category: 'Account and Settings > Product Migration Boundary'
source_product: 'Text'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Authenticated Text app boundary that offers a Product Expert conversation or a return to LiveChat products.'
---

# Component: Text Migration Access Boundary

## Location

- **OBSERVATION:** Opening the official Text app with the authenticated account redirected to `text.com/app/admin/access-blocked`.
- **RECONSTRUCTION:** The local fixture contains no account identity or organization details.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/text-access-blocked.png)

## Structure

- **OBSERVATION:** Centered prompt asked whether the user wanted to switch to Text.
- **OBSERVATION:** Primary action offered Chat with Product Expert. Secondary options linked back to LiveChat or logged out.

## Actions

| Action                   | Result or boundary                                 |
| ------------------------ | -------------------------------------------------- |
| Chat with Product Expert | Visible only. No external conversation started     |
| LiveChat                 | Visible return path. Not exercised in the Text tab |
| Log out                  | Not exercised                                      |

## Behavior & States

- **OBSERVATION:** Existing LiveChat authentication did not grant Text application access.
- **INFERENCE:** Product authentication and product entitlement are distinct gates for this account.
- **RECONSTRUCTION:** Buttons return local boundary messages only.

## Technical Data

- **OBSERVATION / Route:** The access-blocked route rendered after opening the official Text app.
- **NOT OBSERVED / Network:** Entitlement decision inputs and migration eligibility were not inspected.

## Accessibility

- **OBSERVATION:** The migration heading, primary action and product return link were clearly named.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Text onboarding, migration, entitlement changes, Product Expert response and post-migration behavior remain unverified.

## Sources

- **OBSERVATION:** Authenticated Text access boundary, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Chat with Product Expert | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: No Product Expert conversation was started. |
| Open LiveChat | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: No account navigation occurred. |
| Log out | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
