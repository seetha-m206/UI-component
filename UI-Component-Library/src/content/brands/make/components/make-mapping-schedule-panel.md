---
component: "Make Mapping and Schedule Panels"
ui_category: "Automation Builder > Mapping and Scheduling"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Source-reviewed module field mapping and schedule-setting panels."
---

# Component: Make Mapping and Schedule Panels

## Location

- **SOURCE REVIEWED:** Official Make documentation was reviewed on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-mapping-schedule-panel.png)

## Structure

- **SOURCE REVIEWED:** Module settings accept static values or mapped items from preceding modules.
- **SOURCE REVIEWED:** Schedule panel supports intervals, once, daily, weekdays, weekly, monthly, specified dates and on demand.
- **SOURCE REVIEWED:** Schedule changes and activation were not exercised.

## Actions

| Action                   | Result or boundary                                          |
| ------------------------ | ----------------------------------------------------------- |
| Save mapping or schedule | NOT OBSERVED because it changes scenario configuration      |
| Local preview controls   | Update only fictional fixture state or show a safety notice |

## Behavior & States

- **SOURCE REVIEWED:** Source-reviewed module field mapping and schedule-setting panels.
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

- **SOURCE REVIEWED:** https://help.make.com/module-settings
- **SOURCE REVIEWED:** https://help.make.com/step-8-map-data
- **SOURCE REVIEWED:** https://help.make.com/schedule-a-scenario
- **RECONSTRUCTION:** Fictional local fixture in this library.
