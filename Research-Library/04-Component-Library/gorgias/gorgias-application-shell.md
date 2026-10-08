---
component: 'Gorgias Application Shell'
ui_category: 'Application Layout > Conversational Support Shell'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Resizable left navigation, workspace switcher, global utilities and split inbox workspace observed in authenticated Gorgias.'
---

# Component: Gorgias Application Shell

## Location

- **OBSERVATION:** Authenticated shell inspected at the workspace `/app` route on 2026-10-08.
- **RECONSTRUCTION:** The local fixture removes the workspace subdomain and uses a fictional profile initial.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-application-shell.png)

## Structure

- **OBSERVATION:** A resizable left rail combines the active workspace, notifications, global search, navigation groups, Gaia entry, availability and settings.
- **OBSERVATION:** Inbox content uses a second resizable region for the ticket list and a latent ticket-detail panel.
- **OBSERVATION:** Default, shared and private views are distinct navigation groups.

## Actions

| Action | Result or boundary |
| --- | --- |
| Open workspace switcher | Read-only product menu appears |
| Open global search | Search dialog appears without a query |
| Collapse sidebar | Visible but not exercised |
| New ticket, Gaia, profile or settings actions | Visible only unless documented in an independent record |

## Behavior & States

- **OBSERVATION:** The shell persists across Inbox, Settings, AI Agent, Workflows and Analytics.
- **RECONSTRUCTION:** Local navigation changes only fixture notices.
- **NEEDS VERIFICATION:** Responsive provider behavior, role variants and persistence are not established.

## Technical Data

- **OBSERVATION / DOM:** Semantic buttons, links, headings, listboxes and splitters were exposed.
- **RECONSTRUCTION:** Shared renderer is `src/previews/gorgias-shared/GorgiasPreview.tsx`.

## Accessibility

- **OBSERVATION:** Most icon-only utilities had accessible names, while the search icon exposed its pictogram name.
- **RECONSTRUCTION:** The fictional fixture assigns explicit accessible names.

## Evidence Boundary

- **NOT OBSERVED:** Ticket creation, message sending, assignment, status changes and provider persistence were not exercised.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
