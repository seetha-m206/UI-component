---
component: 'Pipedream Authentication Plan Gates'
ui_category: 'Security > Authentication'
source_product: 'Pipedream'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: '2FA, SSO and login-method controls with visible Business-plan gates.'
---

# Component: Pipedream Authentication Plan Gates

## Location

- **OBSERVATION:** Authenticated Pipedream runtime observed on 2026-10-08.
- **RECONSTRUCTION:** The local fixture replaces workspace, user, project and resource identifiers with fictional values.

## Screenshot

![Fictional local preview](/research/pipedream/fixtures/pipedream-authentication-plan-gates.png)

## Structure

- **OBSERVATION:** Require 2FA and Enable SSO each displayed a Business gate.
- **OBSERVATION:** Login methods included Any login method, SSO only and SSO with guests.
- **OBSERVATION:** The observed selection was Any login method.

## Actions

- **OBSERVATION:** No toggle or login-method button was changed.
- **OBSERVATION:** SSO configuration was not opened.
- **RECONSTRUCTION:** Provider-shaped actions in the local preview produce only a fictional boundary notice.

## Behavior & States

- **OBSERVATION:** This record covers only the visible state and safe transient interactions described above.
- **RECONSTRUCTION:** The preview is local, deterministic and disconnected from Pipedream.
- **NEEDS VERIFICATION:** Provider persistence, entitlement variants, responsive behavior and consequential outcomes remain unverified unless explicitly described.

## Technical Data

- **OBSERVATION / DOM:** The authenticated surface exposed semantic buttons, links, headings, inputs and navigation landmarks where noted.
- **OBSERVATION / ROUTE:** Workspace and project segments were sanitized to `/:workspace` and `proj_:id`; query values and opaque identifiers were omitted.
- **RECONSTRUCTION:** Shared renderer is `src/previews/pipedream-shared/PipedreamPreview.tsx`.

## Accessibility

- **OBSERVATION:** Primary navigation and most icon actions exposed accessible names; several unlabeled search or value fields relied on surrounding text.
- **RECONSTRUCTION:** The fictional fixture gives every actionable control an explicit accessible name.

## Evidence Boundary

- **NOT OBSERVED:** No workflow, source, connected account, data store, variable, domain, API client, OAuth client, VPC, webhook, member, purchase or provider setting was created or changed.
- **NOT OBSERVED:** Workflow builder steps, code execution, test events, execution traces, errors, retries and version history were unavailable in the empty workspace without creating provider state.

## Sources

- **OBSERVATION:** Authenticated Pipedream and Pipedream Connect runtime, 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
