---
component: "HubSpot Ticket Pipeline Settings — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-pipeline-settings"
component_level: "atomic"
---

# HubSpot Ticket Pipeline Settings — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Pipeline Settings](./hubspot-ticket-pipeline-settings.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Overview offered three display treatments, with Text in colored badge selected. Create pipeline was disabled.
- **OBSERVED:** OBSERVED: The Support Pipeline row showed no description, color #EBEBEB, four stages, internal ID 0 and an Actions popup.
- **OBSERVED:** OBSERVED: The Configure view listed New, Waiting on contact, Waiting on us and Closed. Their colors were #016DE1, #F7C03E, #C93700 and #EBEBEB. The first three were Open and Closed was Closed. Used in counts were zero, conditional logic showed no rules, and status IDs were 1 through 4.
- **OBSERVED:** OBSERVED: Each row exposed edit, color, state, rule, copy-ID and delete affordances. Delete was disabled for Closed. Add status was available.
- **OBSERVED:** OBSERVED / DOM: Overview and stages used tables. Drag instructions were present. Status type and actions were popup buttons.

## Actions

- Element | Safe action | Observed result or boundary
- Pipelines tab | Page visit | Loaded the populated overview.
- Support Pipeline | Page visit | Loaded Configure with four stages.
- Actions for Support Pipeline | Open disclosure | Displayed disabled Delete.
- New stage Open type | Open disclosure | Displayed Open and Closed with Open selected.
- Display colors, edits, rules, deletes, Add status and Automate | Not activated | Mutation and automation outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-pipeline-settings-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Pipeline Settings. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED / DOM: Overview and stages used tables. Drag instructions were present. Status type and actions were popup buttons.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-pipeline-settings"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "5"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-pipeline-settings.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-pipeline-settings.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
