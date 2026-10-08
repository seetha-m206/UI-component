---
component: 'Pipedream Settings Navigation'
ui_category: 'Settings > Workspace Settings'
source_product: 'Pipedream'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Workspace and user settings information architecture with General, Membership, Authentication, environment, API, domains, networking and billing.'
---

# Component: Pipedream Settings Navigation

## Location

- **OBSERVATION:** Authenticated Pipedream runtime observed on 2026-10-08.
- **RECONSTRUCTION:** The local fixture replaces workspace, user, project and resource identifiers with fictional values.

## Screenshot

![Fictional local preview](/research/pipedream/fixtures/pipedream-settings-navigation.png)

## Structure

- **OBSERVATION:** Workspace settings and user settings are presented as separate navigation groups.
- **OBSERVATION:** General includes workspace URL, notification email, Slack and GitHub Sync sections.
- **OBSERVATION:** Slack and required GitHub Sync were visibly unavailable in the observed plan.
- **OBSERVATION:** A destructive workspace-delete action is isolated in Danger Zone.

## Actions

- **OBSERVATION:** Settings pages were navigated read-only.
- **OBSERVATION:** No field, notification, login policy or workspace state was changed.
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
