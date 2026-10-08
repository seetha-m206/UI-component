---
component: "Make Profile Organizations"
ui_category: "Account Access > Organization Catalogue"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Profile-level organization list with create and row-action boundaries."
---

# Component: Make Profile Organizations

## Location

- **OBSERVATION:** Authenticated Make workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-profile-organizations.png)

## Structure

- **OBSERVATION:** The page lists accessible organizations outside the organization administration submenu.
- **OBSERVATION:** Create organization is the primary action.
- **OBSERVATION:** The organization overflow exposes a delete boundary.

## Actions

| Action                        | Result or boundary                                           |
| ----------------------------- | ------------------------------------------------------------ |
| Create or delete organization | NOT OBSERVED because either action changes account structure |
| Local preview controls        | Update only fictional fixture state or show a safety notice  |

## Behavior & States

- **OBSERVATION:** Profile-level organization list with create and row-action boundaries.
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
- **RECONSTRUCTION:** Fictional local fixture in this library.
