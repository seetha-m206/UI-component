---
component: "Make Template Canvas Preview"
ui_category: "Automation Builder > Read-only Scenario Canvas"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Template detail header above a non-editing visual chain of numbered modules."
---

# Component: Make Template Canvas Preview

## Location

- **OBSERVATION:** Authenticated Make workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-template-canvas.png)

## Structure

- **OBSERVATION:** Template detail combines title, usage, sharing controls, descriptive copy and two creation actions.
- **OBSERVATION:** The observed preview rendered three numbered circular modules linked across a large white canvas.
- **OBSERVATION:** Module labels separated business steps from underlying app actions.

## Actions

| Action                                | Result or boundary                                                      |
| ------------------------------------- | ----------------------------------------------------------------------- |
| Start guided setup or create scenario | NOT OBSERVED because either action instantiates provider workflow state |
| Local preview controls                | Update only fictional fixture state or show a safety notice             |

## Behavior & States

- **OBSERVATION:** Template detail header above a non-editing visual chain of numbered modules.
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
- **SOURCE REVIEWED:** https://help.make.com/scenario-templates
- **RECONSTRUCTION:** Fictional local fixture in this library.
