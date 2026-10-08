---
component: 'Gorgias Settings Catalogue'
ui_category: 'Settings > Administrative Navigation'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Expanded Apps, Workspace, Channels and Account settings navigation with installed-app empty state.'
---

# Component: Gorgias Settings Catalogue

## Location

- **OBSERVATION:** Opened through the shell settings entry and landed on `/app/settings/integrations/mine`.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-settings-catalogue.png)

## Structure

- **OBSERVATION:** Apps, Workspace, Channels and Account groups were expanded simultaneously.
- **OBSERVATION:** Channel entries included Help Center, phone, email, voice, SMS, chat and contact form.
- **OBSERVATION:** Account entries included users, teams, access, billing, labs, HTTP integration, REST API, audit logs, imports, security and notifications.
- **OBSERVATION:** Main surface showed no installed apps and an Explore App Store action.

## Actions

| Action | Result or boundary |
| --- | --- |
| Navigate to App store or Chat | Read-only catalogue and empty-state routes opened |
| Any configuration or account action | Not exercised |

## Behavior & States

- **RECONSTRUCTION:** Every settings destination is a local notice and cannot save.
- **NOT OBSERVED:** Form contents, permissions, billing data, tokens and persistence.

## Technical Data

- **OBSERVATION / DOM:** Settings groups were expandable buttons followed by named link groups.

## Evidence Boundary

- **NOT OBSERVED:** Users, billing, access, API and security screens were deliberately not opened.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
