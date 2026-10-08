---
component: 'LiveChat Home Onboarding Workspace'
ui_category: 'Onboarding > Guided Setup Workspace'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Eight-card guided setup workspace with a selected task and contextual illustration.'
---

# Component: LiveChat Home Onboarding Workspace

## Location

- **OBSERVATION:** Authenticated Home screen inspected at `my.livechatinc.com/home` before protected routes redirected to installation setup.
- **RECONSTRUCTION:** All names, conversations and website details are fictional.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-home-onboarding.png)

## Structure

- **OBSERVATION:** A two-column workspace paired an eight-step checklist with one contextual visual panel.
- **OBSERVATION:** Tasks covered sample chat, widget preview, chatbot knowledge, Copilot, teammates, site connection, campaigns and channels.
- **OBSERVATION:** The selected task expanded into a bordered card while the remaining tasks stayed compact.

## Actions

| Action                                       | Result or boundary                                                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Select checklist item                        | Changes the selected explanatory panel in the reconstruction                                                  |
| Go to sample chat                            | Visible in the provider Home state, but not reached because onboarding later redirected to installation setup |
| Invite, connect, campaign or channel actions | Not exercised                                                                                                 |

## Behavior & States

- **OBSERVATION:** Chatbot testing was disabled while an Add chatbot action remained available.
- **OBSERVATION:** Teammate progress showed a recommended-count state.
- **RECONSTRUCTION:** Selecting a task changes only local React state.

## Technical Data

- **OBSERVATION / DOM:** Each setup task had a heading, supporting copy and one or more action buttons.
- **NOT OBSERVED / Network:** No setup action payload or persistence contract was inspected.
- **RECONSTRUCTION:** No fetch, storage or provider SDK call is made.

## Accessibility

- **OBSERVATION:** Task titles were represented as headings with named buttons in expanded cards.
- **RECONSTRUCTION:** The active task uses `aria-current="step"`.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Completion indicators, persistence, sample-chat behavior and provider validation remain unverified.

## Sources

- **OBSERVATION:** Authenticated LiveChat Home, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Select setup task | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Start sample chat | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Customize widget | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Invite teammates | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Local state changed. |
| Connect LiveChat | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Local state changed. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
