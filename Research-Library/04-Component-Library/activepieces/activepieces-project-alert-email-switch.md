---
component: "Activepieces Project Alert Email Switch"
ui_category: "Settings > Notification Preferences"
source_product: "Activepieces Cloud"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "A personal alert-email switch exposes notification policy while preserving its current disabled state."
---

# Component: Activepieces Project Alert Email Switch

## Location

- **OBSERVATION:** Authenticated Activepieces Cloud workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview uses fictional names and values and removes account identity, email, platform and project identifiers, endpoint values, worker addresses and live timestamps.

## Screenshot

![Fictional local preview](/research/activepieces/fixtures/activepieces-project-alert-email-switch.png)

## Structure

- **OBSERVATION:** The control is presented as a single personal preference.
- **OBSERVATION:** It was not toggled during observation.

## Actions

| Action | Result or boundary |
| --- | --- |
| Toggle alert email | NOT OBSERVED because it changes notification delivery |
| Local preview controls | Update only fictional fixture state or show a local boundary notice |

## Behavior & States

- **OBSERVATION:** A personal alert-email switch exposes notification policy while preserving its current disabled state.
- **RECONSTRUCTION:** Local controls never contact Activepieces or a connected service.
- **NEEDS VERIFICATION:** Provider persistence, connected-app consequences, responsive behavior and unexercised entitlement variants remain unverified.

## Technical Data

- **OBSERVATION / DOM:** The runtime exposed semantic headings, links, buttons, tabs, switches, tables, inputs and progress indicators where applicable.
- **OBSERVATION / STYLE:** A bounded sample used Inter/system sans typography, pale neutral surfaces, six-to-twelve-pixel control radii and an OKLCH page background.
- **OBSERVATION / NETWORK:** Sanitized navigation metadata showed versioned JavaScript and CSS assets, WOFF2 fonts, locale JSON and Cloudflare RUM. Query strings, identifiers, headers and bodies were excluded.
- **RECONSTRUCTION:** Shared renderer is `src/previews/activepieces-shared/ActivepiecesPreview.tsx`.
- **NEEDS VERIFICATION:** Request bodies, tokens, backend contracts, mutation responses and causal event-to-request mappings were not captured.

## Accessibility

- **OBSERVATION:** Core navigation, tabs, tables and most primary actions were named in the accessibility tree.
- **OBSERVATION:** Several icon-only buttons and unlabeled filters exposed weak or missing accessible names.
- **RECONSTRUCTION:** The fictional fixture adds explicit labels, headings, disabled consequential actions and live local notices.

## Evidence Boundary

- **NOT OBSERVED:** No flow, table, agent, connection, MCP client, invite, permission, billing, execution, test, publish, download, install, delete or provider write was exercised.

## Sources

- **OBSERVATION:** Authenticated Activepieces Cloud runtime, 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
