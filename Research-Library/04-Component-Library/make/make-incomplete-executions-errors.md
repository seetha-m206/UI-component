---
component: "Make Incomplete Executions and Errors"
ui_category: "Automation Operations > Failure Recovery"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Source-reviewed unresolved, scheduled, in-progress and resolved recovery states with guarded actions."
---

# Component: Make Incomplete Executions and Errors

## Location

- **SOURCE REVIEWED:** Official Make documentation was reviewed on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-incomplete-executions-errors.png)

## Structure

- **SOURCE REVIEWED:** Incomplete executions are disabled by default and can store unfinished runs when enabled.
- **SOURCE REVIEWED:** Details identifies the failed module and exposes the original input and error context.
- **SOURCE REVIEWED:** Retry, manual resolve, delete and Run once have materially different consequences.

## Actions

| Action                             | Result or boundary                                                      |
| ---------------------------------- | ----------------------------------------------------------------------- |
| Retry, resolve, delete or Run once | NOT OBSERVED because actions can alter provider and connected-app state |
| Local preview controls             | Update only fictional fixture state or show a safety notice             |

## Behavior & States

- **SOURCE REVIEWED:** Source-reviewed unresolved, scheduled, in-progress and resolved recovery states with guarded actions.
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

- **SOURCE REVIEWED:** https://help.make.com/incomplete-executions
- **SOURCE REVIEWED:** https://help.make.com/manage-incomplete-executions
- **SOURCE REVIEWED:** https://help.make.com/Overview-of-error-handling
- **RECONSTRUCTION:** Fictional local fixture in this library.
