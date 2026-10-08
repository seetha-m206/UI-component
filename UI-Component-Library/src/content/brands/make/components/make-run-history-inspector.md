---
component: "Make Run History Inspector"
ui_category: "Automation Operations > Execution History"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Source-reviewed history table, filters and run-detail bundle inspector."
---

# Component: Make Run History Inspector

## Location

- **SOURCE REVIEWED:** Official Make documentation was reviewed on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-run-history-inspector.png)

## Structure

- **SOURCE REVIEWED:** History rows can include time, run name, activity, status, duration, operations, credits, data size and source run.
- **SOURCE REVIEWED:** Details exposes module output bundles, general run information and simple or advanced logs.
- **SOURCE REVIEWED:** Replay, export and full-text search are separate actions with plan and consequence boundaries.

## Actions

| Action                 | Result or boundary                                          |
| ---------------------- | ----------------------------------------------------------- |
| Open details           | Read-only inspection documented by official source          |
| Local preview controls | Update only fictional fixture state or show a safety notice |

## Behavior & States

- **SOURCE REVIEWED:** Source-reviewed history table, filters and run-detail bundle inspector.
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

- **SOURCE REVIEWED:** https://help.make.com/scenario-history
- **SOURCE REVIEWED:** https://help.make.com/scenario-run-replay
- **RECONSTRUCTION:** Fictional local fixture in this library.
