---
component: 'LiveChat Global Search Overlay'
ui_category: 'Search and Filtering > Command Search'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Command-key search overlay that blends navigation, Copilot and archive-search entry points.'
---

# Component: LiveChat Global Search Overlay

## Location

- **OBSERVATION:** Opened with the displayed Command-K shortcut from the authenticated shell.
- **RECONSTRUCTION:** Uses only the non-sensitive query “Reports”.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-global-search.png)

## Structure

- **OBSERVATION:** A compact overlay contained one focused text field and keyboard guidance.
- **OBSERVATION:** Querying “Reports” produced Navigate to Reports, Ask Copilot and Search in Archives options.

## Actions

| Action      | Result or boundary           |
| ----------- | ---------------------------- |
| Command-K   | Opens the overlay            |
| Type query  | Updates mixed action results |
| Escape      | Closes the overlay           |
| Open result | Not exercised                |

## Behavior & States

- **OBSERVATION:** Results crossed navigation, AI assistance and historical conversation search.
- **RECONSTRUCTION:** Typing changes local fixture results only.

## Technical Data

- **OBSERVATION / DOM:** The search input received focus immediately and exposed result labels as text.
- **NOT OBSERVED / Network:** Result ranking, remote search payloads, archive content and Copilot execution were not inspected.

## Accessibility

- **OBSERVATION:** The provider input was focusable, while the captured tree did not expose a descriptive label.
- **RECONSTRUCTION:** The input is explicitly labelled “Search LiveChat”.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Result activation, remote ranking, permissions and empty or error states remain unverified.

## Sources

- **OBSERVATION:** Authenticated LiveChat global search, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Enter search query | provider_read_only_exercised: The query Reports produced navigation, Copilot and Archives result groups. | local_fixture_typed: No result opens a provider route in this fixture. |
| Open navigation result | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Ask Copilot | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_clicked: No result opens a provider route in this fixture. |
| Search in Archives | provider_control_presence_only: Control presence was observed. Provider transition was not exercised. | local_fixture_typed: No result opens a provider route in this fixture. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
