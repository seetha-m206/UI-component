---
component: 'Pipedream String AI Builder'
ui_category: 'AI > Agent Builder'
source_product: 'Pipedream'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Dark alpha landing screen for prompting, running, editing and deploying AI agents.'
---

# Component: Pipedream String AI Builder

## Location

- **OBSERVATION:** Authenticated Pipedream runtime observed on 2026-10-08.
- **RECONSTRUCTION:** The local fixture replaces workspace, user, project and resource identifiers with fictional values.

## Screenshot

![Fictional local preview](/research/pipedream/fixtures/pipedream-string-ai-builder.png)

## Structure

- **OBSERVATION:** The landing prompt asks what the user wants to automate.
- **OBSERVATION:** Suggested prompts cover email, sheets, issue synchronization, CRM updates, monitoring and summaries.
- **OBSERVATION:** A recent-chats rail and Start new chat action frame the prompt composer.
- **OBSERVATION:** A Workday acquisition announcement was visible at the time of observation.

## Actions

- **OBSERVATION:** No prompt was entered and no template was selected.
- **OBSERVATION:** No agent, workflow or chat was created.
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
