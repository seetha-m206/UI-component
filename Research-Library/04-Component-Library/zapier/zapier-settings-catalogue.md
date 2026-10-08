---
component: "Zapier Settings Catalogue"
ui_category: "Settings > Account and Workspace Navigation"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Settings information architecture for profile, notifications, security, billing, members and audit log."
---

# Component: Zapier Settings Catalogue

## Location

- **OBSERVATION:** Authenticated route `/app/settings/{account}/profile` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-settings-catalogue.png)

## Structure

- **OBSERVATION:** Settings shell with close control
- **OBSERVATION:** Navigation for My profile, Notifications, Security and data, Billing and usage, Members, Advanced security and Audit log
- **OBSERVATION:** Profile form structure with disabled save until changes occur

## Actions

| Action                  | Result or boundary                        |
| ----------------------- | ----------------------------------------- |
| Choose settings section | Loads the corresponding account workspace |
| Edit profile field      | Would enable save                         |
| Save changes            | Disabled in the unchanged observed state  |

## Behavior & States

- **OBSERVATION:** Profile route
- **OBSERVATION:** Unchanged disabled-save state
- **OBSERVATION:** Email-confirmation warning present but omitted from the fixture
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Settings destinations were named links and form fields had labels. The profile warning included private account text that is excluded.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Profile values, account IDs, billing details, security configuration, members, audit events, email changes and password changes are not retained or exercised.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
