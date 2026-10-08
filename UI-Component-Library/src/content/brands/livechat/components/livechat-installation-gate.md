---
component: 'LiveChat Installation Gate'
ui_category: 'Onboarding > Website Installation'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Manual embed-code onboarding with developer handoff, setup guides, integration choices and a guarded skip boundary.'
---

# Component: LiveChat Installation Gate

## Location

- **OBSERVATION:** Authenticated protected routes redirected to `my.livechatinc.com/install-code` on 2026-10-08.
- **RECONSTRUCTION:** License values and generated code are redacted or replaced with non-working fictional text.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-installation-gate.png)

## Structure

- **OBSERVATION:** The primary card contained manual installation guidance, generated code, Copy code, Invite your developer and Install guide actions.
- **OBSERVATION:** Secondary choices covered Google Tag Manager and a larger integration accordion.
- **OBSERVATION:** “I don’t want to chat yet” formed a clear onboarding-exit boundary.

## Actions

| Action                                 | Result or boundary                                       |
| -------------------------------------- | -------------------------------------------------------- |
| Invite your developer                  | Opened an unsubmitted invitation form                    |
| Install guide                          | Opened a public official help article in a separate tab  |
| More integrations                      | Expanded a transient local accordion of platform choices |
| Copy code, Connect, or onboarding skip | Not exercised                                            |

## Behavior & States

- **OBSERVATION:** Direct attempts to open Chats, Engage, Archives and Settings returned to this screen.
- **RECONSTRUCTION:** Accordion state and boundary messages remain local.

## Technical Data

- **OBSERVATION / DOM:** Generated provider code included a tenant-specific license value and was excluded from retained evidence.
- **OBSERVATION / Network:** Read-only configuration, account, organization and installed-application calls loaded during the screen.
- **RECONSTRUCTION:** The preview contains no executable provider snippet.

## Accessibility

- **OBSERVATION:** Primary actions had clear accessible names. The generated code appeared as a text-entry area.
- **RECONSTRUCTION:** The sanitized code block is labelled and horizontally scrollable.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Installation detection, copied-code behavior, connection success, onboarding persistence and site runtime behavior were not exercised.

## Sources

- **OBSERVATION:** Authenticated LiveChat installation gate, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Copy code | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: No code was copied. |
| Invite your developer | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Open the Developer Invite fixture to inspect this form. |
| Install guide | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: The provider guide was not opened. |
| More integrations | provider_read_only_exercised: Disclosure expanded to the 14 observed integration entries without starting a connection. | local_fixture_clicked: Local state changed. |
| I don’t want to chat yet | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: The provider onboarding skip was not exercised. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
