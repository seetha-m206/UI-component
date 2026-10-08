---
component: "Make MCP Toolboxes Empty State"
ui_category: "AI Integrations > MCP Toolboxes"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Empty toolbox onboarding for exposing approved scenarios to AI clients."
---

# Component: Make MCP Toolboxes Empty State

## Location

- **OBSERVATION:** Authenticated Make workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-mcp-toolboxes-empty.png)

## Structure

- **OBSERVATION:** The screen explains that toolboxes let clients such as Claude and ChatGPT run scenarios as tools.
- **OBSERVATION:** Create toolbox and Learn more are the only prominent actions.
- **OBSERVATION:** No toolbox, token or client connection was created.

## Actions

| Action                 | Result or boundary                                              |
| ---------------------- | --------------------------------------------------------------- |
| Create toolbox         | NOT OBSERVED because it creates a shareable integration surface |
| Local preview controls | Update only fictional fixture state or show a safety notice     |

## Behavior & States

- **OBSERVATION:** Empty toolbox onboarding for exposing approved scenarios to AI clients.
- **RECONSTRUCTION:** Local controls never contact Make or a connected service.
- **NEEDS VERIFICATION:** Provider persistence, entitlement variants, responsive behavior and connected-app consequences remain unverified unless explicitly described above.

## Technical Data

- **OBSERVATION / DOM:** The inspected Make runtime exposed semantic headings, links, buttons, tables, inputs, switches and named navigation regions where applicable.
- **OBSERVATION / ROUTE:** Route shapes are recorded without organization or team identifiers.
- **RECONSTRUCTION:** Shared renderer is `src/previews/make-shared/MakePreview.tsx`.
- **NEEDS VERIFICATION:** Network request bodies, provider storage contracts and backend error payloads were not captured.

## Accessibility

- **OBSERVATION:** Core controls were generally named in the accessibility tree. Some search fields exposed generated names rather than human-readable labels.
- **RECONSTRUCTION:** The fictional fixture adds explicit labels, headings, disabled consequential actions and live boundary notices.

## Evidence Boundary

- **NOT OBSERVED:** No connection, scenario, schedule, run, replay, retry, delete, invitation, permission, notification, AI prompt, template instantiation, app installation, payment or provider write was exercised.

## Sources

- **OBSERVATION:** Authenticated Make runtime, 2026-10-08.
- **SOURCE REVIEWED:** https://help.make.com/mcp-toolboxes
- **RECONSTRUCTION:** Fictional local fixture in this library.
