---
component: 'LiveChat Developer Invitation Form'
ui_category: 'Forms > External Collaboration Invitation'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Developer email form with disabled initial submit, generated invite-link handoff and explicit skip action.'
---

# Component: LiveChat Developer Invitation Form

## Location

- **OBSERVATION:** Opened from the installation gate without entering an address or sending an invitation.
- **RECONSTRUCTION:** Uses an `.invalid` email example and a redacted fictional link.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-developer-invite.png)

## Structure

- **OBSERVATION:** The form contained one email field, a disabled Send invite action, a generated invitation link, Copy invite link and Skip.

## Actions

| Action           | Result or boundary                                                  |
| ---------------- | ------------------------------------------------------------------- |
| Enter email      | Not exercised in the provider. Local fixture enables Send invite    |
| Send invite      | Never exercised. Local fixture reports that no invitation was sent  |
| Copy invite link | Never exercised. Provider token was excluded from retained evidence |
| Skip             | Not exercised because it may persist onboarding progress            |

## Behavior & States

- **OBSERVATION:** Send invite was disabled while the email field was empty.
- **OBSERVATION:** The invitation link loaded after a transient loading state.
- **RECONSTRUCTION:** All actions return guarded local status messages.

## Technical Data

- **OBSERVATION / DOM:** The generated provider link contained an access token and is deliberately omitted.
- **NOT OBSERVED / Network:** Invitation submission payload, expiry, permissions and acceptance flow were not inspected.

## Accessibility

- **OBSERVATION:** The email field did not expose a useful accessible label in the captured tree.
- **RECONSTRUCTION:** The field is explicitly labelled “Developer email”.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Delivery, link lifetime, recipient permissions, errors and audit history remain unverified.

## Sources

- **OBSERVATION:** Authenticated LiveChat developer invitation form, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Enter developer email | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Send invite | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_disabled: Control remained in its local state. |
| Copy invite link | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: No invitation link was copied. |
| Skip | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: Skip did not change provider onboarding. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
