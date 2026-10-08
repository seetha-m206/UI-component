---
component: 'LiveChat Application Shell'
ui_category: 'Application Layout > Customer Messaging Shell'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Dark icon rail, trial banner, global search, invite entry and Copilot launcher observed in authenticated LiveChat.'
---

# Component: LiveChat Application Shell

## Location

- **OBSERVATION:** Authenticated LiveChat shell inspected at `my.livechatinc.com/home` and `my.livechatinc.com/install-code` on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses a fictional member initial and contains no account identifiers.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-application-shell.png)

## Structure

- **OBSERVATION:** A dark left icon rail separates primary products and workspaces from the light content surface.
- **OBSERVATION:** The top region combines a trial banner, global search, presence, invitation and Copilot entry.
- **OBSERVATION:** Primary destinations included Home, Chats, Engage, Automate, Archives, Team, Reports, Apps, HelpDesk, Billing and Settings.

## Actions

| Action                       | Result or boundary                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| Select a primary destination | Read-only navigation was attempted, but onboarding redirected protected routes to installation setup |
| Open global search           | Transient search overlay opened and accepted a non-sensitive local query                             |
| Invite or Copilot            | Visible only. No invitation or prompt was submitted                                                  |

## Behavior & States

- **OBSERVATION:** The shell persisted around the installation boundary after direct route attempts.
- **RECONSTRUCTION:** Rail buttons update only a local boundary notice.
- **NOT OBSERVED:** Responsive provider behavior, permission variants and completed destination screens remain unverified.

## Technical Data

- **OBSERVATION / DOM:** Named navigation links and command-search text were exposed to the accessibility tree.
- **OBSERVATION / Network:** The shell prefetched configuration, account, organization, product, feature-control and reporting resources. Prefetch does not establish that those screens were rendered or usable.
- **RECONSTRUCTION:** Shared implementation is `src/previews/livechat-shared/LivechatPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major destinations had accessible link names. Icon-only controls were unevenly named.
- **RECONSTRUCTION:** Every rail control has an explicit accessible name and keyboard focus state.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Chat handling, archive access, reporting output, billing, settings persistence and Copilot execution were not exercised.

## Sources

- **OBSERVATION:** Authenticated LiveChat runtime, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Primary navigation | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Search | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: Open the Global Search fixture to inspect search. |
| Invite | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: No invitation was sent. |
| Copilot | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: No Copilot prompt was submitted. |
| My Profile | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
