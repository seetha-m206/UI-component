---
component: "n8n AI Usage Controls"
ui_category: "AI Governance > Data Sharing Controls"
source_product: "n8n Cloud"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "AI usage settings separate required schema sharing from optional execution-value sharing."
---

# Component: n8n AI Usage Controls

## Location

- **OBSERVATION:** Authenticated n8n Cloud workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview uses fictional names and values and removes account identity, email, instance and project identifiers, transient sign-in parameters, credentials, credit balances and live timestamps.

## Screenshot

![Fictional local preview](/research/n8n/fixtures/n8n-ai-usage-controls.png)

## Structure

- **OBSERVATION:** Field names and types were enabled and locked in the observed state.
- **OBSERVATION:** Actual execution values were enabled but editable, with a sensitive-data warning and accuracy tradeoff.

## Actions

| Action | Result or boundary |
| --- | --- |
| Change data-sharing checkbox | NOT OBSERVED because it changes instance AI data-sharing behavior |
| Local preview controls | Update only fictional fixture state or show a local boundary notice |

## Behavior & States

- **OBSERVATION:** AI usage settings separate required schema sharing from optional execution-value sharing.
- **RECONSTRUCTION:** Local controls never contact n8n or a connected service.
- **NEEDS VERIFICATION:** Provider persistence, connected-app consequences, responsive behavior and unexercised entitlement variants remain unverified.

## Technical Data

- **OBSERVATION / DOM:** The runtime exposed semantic headings, links, buttons, tabs, switches, progress indicators, tables, inputs and named navigation regions where applicable.
- **OBSERVATION / ROUTE:** Sanitized route families include `/home/workflows`, `/projects/[project]/...`, `/assistant`, `/insights/...` and `/settings/...`.
- **OBSERVATION / VERSION:** The inspected Cloud instance displayed n8n 2.42.5.
- **RECONSTRUCTION:** Shared renderer is `src/previews/n8n-shared/N8nPreview.tsx`.
- **NEEDS VERIFICATION:** Request bodies, tokens, backend contracts, provider storage and causal event-to-request mappings were not captured.

## Accessibility

- **OBSERVATION:** Core navigation, tabs and primary actions were generally named in the accessibility tree.
- **OBSERVATION:** Several icon-only buttons exposed no accessible name, and some empty-state text appeared visually but not in the accessibility snapshot.
- **RECONSTRUCTION:** The fictional fixture adds explicit labels, headings, disabled consequential actions and live local notices.

## Evidence Boundary

- **NOT OBSERVED:** No workflow, node, credential, variable, table, agent, prompt, execution, test, retry, publish, MCP access, invite, permission, security policy, payment, deletion or provider write was exercised.

## Sources

- **OBSERVATION:** Authenticated n8n Cloud runtime, 2026-10-08.
- **OBSERVATION:** Official n8n template catalogue opened from the authenticated app where applicable.
- **RECONSTRUCTION:** Fictional local fixture in this library.
