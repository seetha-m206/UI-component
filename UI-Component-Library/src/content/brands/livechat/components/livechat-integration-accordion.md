---
component: 'LiveChat Website Integration Accordion'
ui_category: 'Integrations > Website Platform Connectors'
source_product: 'Text LiveChat'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Progressive-disclosure connector list for Tag Manager and fourteen website platforms.'
---

# Component: LiveChat Website Integration Accordion

## Location

- **OBSERVATION:** Expanded safely inside the authenticated installation gate.
- **RECONSTRUCTION:** No provider integration, OAuth or external navigation occurs.

## Screenshot

![Fictional local preview](/research/livechat/fixtures/livechat-integration-accordion.png)

## Structure

- **OBSERVATION:** Google Tag Manager expanded to Connect and Install guide actions.
- **OBSERVATION:** More integrations expanded to WordPress, Shopify, WooCommerce, BigCommerce, Ecwid, Adobe Commerce, Square Online, Squarespace, Wix, Webflow, Weebly, Joomla, Drupal and Segment.

## Actions

| Action                   | Result or boundary                         |
| ------------------------ | ------------------------------------------ |
| Expand a connector group | Transient disclosure only                  |
| Connect                  | Visible but not exercised                  |
| Install guide            | Public help entry only. No setup completed |

## Behavior & States

- **OBSERVATION:** Opening one accordion collapsed the other expanded group.
- **RECONSTRUCTION:** The two groups can be toggled independently to study layout.

## Technical Data

- **OBSERVATION / DOM:** Each platform entry was a named button with a platform logo.
- **NOT OBSERVED / Network:** Connector authorization, callbacks, install state and error handling were not inspected.

## Accessibility

- **OBSERVATION:** Platform actions exposed names such as “Connect with Webflow”.
- **RECONSTRUCTION:** Accordion triggers expose `aria-expanded`.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** OAuth, permissions, installation, removal and persistence remain unverified.

## Sources

- **OBSERVATION:** Authenticated LiveChat installation accordion, inspected 2026-10-08.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.

## Action evidence

- Action ledger: `Internal/scratch-2026-10/livechat/action-evidence-ledger.json`
- Fixture receipt: `Internal/scratch-2026-10/livechat/fixture-action-evidence.json`
- Provider and fixture evidence are separate. A local fixture action is not provider-behavior proof.

| Action | Provider evidence | Fixture evidence |
|---|---|---|
| Open observed route | provider_read_only_exercised: Authenticated route or supporting routes reached and the documented visible state was captured. | local_fixture_state_rendered: The target fixture rendered the captured state. No local interactive control was claimed for this action. |
| Connect with Google Tag Manager | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: Local state changed. |
| More integrations | provider_read_only_exercised: Disclosure expanded to the 14 observed integration entries without starting a connection. | local_fixture_clicked: Local state changed. |
| Connect with provider integration | provider_control_presence_only_consequential: Control presence was observed. Provider consequence was not exercised. | local_fixture_clicked: No tag manager connection was started. |

### Action boundary

Provider actions marked presence-only remain `NOT OBSERVED` at the consequence level. No provider write, save, export, install, upload, invitation, purchase, authorization or account change was performed.
