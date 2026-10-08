---
component: "Zapier Application Shell"
ui_category: "Application Layout > Automation Workspace Shell"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Persistent navigation, global search, product entry points and trial-aware account utilities."
---

# Component: Zapier Application Shell

## Location

- **OBSERVATION:** Authenticated route `/app/home` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-application-shell.png)

## Structure

- **OBSERVATION:** Top bar with global search and account utilities
- **OBSERVATION:** Left navigation for Home, Automations, Folders, Favorites, Templates, Connections, MCP and History
- **OBSERVATION:** Main canvas that changes between product workspaces

## Actions

| Action             | Result or boundary                                         |
| ------------------ | ---------------------------------------------------------- |
| Open global search | Search assets, apps, templates and more                    |
| Open Create        | Product creation menu appears without completing an action |
| Open account menu  | Account and settings boundaries appear                     |

## Behavior & States

- **OBSERVATION:** Professional trial message with upgrade boundary
- **OBSERVATION:** Persistent shell across asset, history and usage pages
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** A skip-to-main-content link, named navigation links and named account controls were exposed. Some icon and loading controls produced sparse accessible names.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Account identity, workspace identity, responsive behavior and permission variants are not retained or verified.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
