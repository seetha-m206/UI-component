---
component: "Zapier App Connection Boundary"
ui_category: "Integrations > Connection Inventory"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Searchable connection inventory with status, usage and access columns plus an authorization boundary."
---

# Component: Zapier App Connection Boundary

## Location

- **OBSERVATION:** Authenticated route `/app/assets/connections` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-app-connection-boundary.png)

## Structure

- **OBSERVATION:** View-mode control, search and filters
- **OBSERVATION:** Create connection action
- **OBSERVATION:** Connection table with name, app, status, Zap count, modified time, access and options
- **OBSERVATION:** Loading-row skeleton

## Actions

| Action            | Result or boundary                         |
| ----------------- | ------------------------------------------ |
| Create connection | Would begin an external authorization flow |
| Filter or search  | Would narrow the connection inventory      |
| Open options      | Would expose connection management actions |

## Behavior & States

- **OBSERVATION:** Loading rows
- **OBSERVATION:** Connection inventory shell
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** The table had a descriptive label and named column cells. Loading rows were announced as loading.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Connection names, identities, OAuth details and sharing data are excluded. No app was connected, reconnected, tested, shared or removed.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
