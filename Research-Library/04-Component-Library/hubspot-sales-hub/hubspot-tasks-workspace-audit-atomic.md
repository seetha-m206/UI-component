---
component: "HubSpot Tasks Workspace — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-tasks-workspace"
component_level: "atomic"
---

# HubSpot Tasks Workspace — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Tasks Workspace](./hubspot-tasks-workspace.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Pinned views include All tasks, Due today, Overdue and Upcoming.
- **OBSERVED:** OBSERVED: The header provides search, filters, sorting, list or board layout, view settings and Add tasks.
- **OBSERVED:** OBSERVED: Add tasks disclosed Create new and Import without entering either flow.
- **OBSERVED:** OBSERVED: The empty table state explains delayed indexing and offers Refresh, Export and Clone.
- **OBSERVED:** OBSERVED: Board view groups zero tasks into Not Started, In Progress, Waiting, Completed and Deferred stages.
- **OBSERVED:** OBSERVED: A calendar connection prompt links to settings but was not followed.
- **OBSERVED:** OBSERVED / DOM: Tasks use CRM object type `0-27`. Layout is encoded as the terminal `/list` or `/board` route segment.
- **OBSERVED:** NEEDS VERIFICATION: Task mutation endpoints, board ordering and calendar-sync behavior.

## Actions

- Element | Safe action | Observed result
- Add tasks | Open, then close | Disclosed Create new and Import.
- Sort by | Open, then close | Due date with Oldest selected and Most recent available.
- Board view | Select | Re-rendered the same view as five task-stage columns.
- Create, Import, Export, Clone and calendar settings | Not activated | Write, transfer and configuration behavior remains NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-tasks-workspace-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Tasks Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The empty table state explains delayed indexing and offers Refresh, Export and Clone.
- **OBSERVED:** OBSERVED: A calendar connection prompt links to settings but was not followed.
- **OBSERVED:** OBSERVED / DOM: Tasks use CRM object type `0-27`. Layout is encoded as the terminal `/list` or `/board` route segment.

### Network / API

- **OBSERVED:** OBSERVED / DOM: Tasks use CRM object type `0-27`. Layout is encoded as the terminal `/list` or `/board` route segment.
- **NOT OBSERVED:** NEEDS VERIFICATION: Task mutation endpoints, board ordering and calendar-sync behavior.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-tasks-workspace"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "8"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-tasks-workspace.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-tasks-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
