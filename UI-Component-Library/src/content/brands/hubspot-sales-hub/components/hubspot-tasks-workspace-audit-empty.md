---
component: "HubSpot Tasks Workspace — Empty Component"
ui_category: "Deep Audit > Empty Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed empty, first-run, zero-result, and unconfigured states for HubSpot Tasks Workspace. Derived from the authored observation record."
parent_workflow: "hubspot-tasks-workspace"
component_level: "empty"
---

# HubSpot Tasks Workspace — Empty Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Tasks Workspace](./hubspot-tasks-workspace.md).
- **COMPONENT LEVEL:** empty.

## Structure

- **OBSERVED:** OBSERVED: The empty table state explains delayed indexing and offers Refresh, Export and Clone.
- **OBSERVED:** OBSERVED: Board view groups zero tasks into Not Started, In Progress, Waiting, Completed and Deferred stages.
- **OBSERVED:** OBSERVED: Empty-state copy distinguishes no results from a possible indexing delay.
- **OBSERVED:** FACT: All recorded states were directly observed in an empty portal view.

## Actions

- Element | Safe action | Observed result
- Add tasks | Open, then close | Disclosed Create new and Import.
- Sort by | Open, then close | Due date with Oldest selected and Most recent available.
- Board view | Select | Re-rendered the same view as five task-stage columns.
- Create, Import, Export, Clone and calendar settings | Not activated | Write, transfer and configuration behavior remains NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-tasks-workspace-audit-empty.
- **OBSERVED:** Evidence-backed empty, first-run, zero-result, and unconfigured states for HubSpot Tasks Workspace. Derived from the authored observation record.
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
component_level: "empty"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
result_count: "0"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-tasks-workspace.
- Reusable level: empty.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-tasks-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
