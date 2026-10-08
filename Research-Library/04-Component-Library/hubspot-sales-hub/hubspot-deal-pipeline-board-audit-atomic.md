---
component: "HubSpot Deal Pipeline Board — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-deal-pipeline-board"
component_level: "atomic"
---

# HubSpot Deal Pipeline Board — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Deal Pipeline Board](./hubspot-deal-pipeline-board.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The Deal index adds a Sales Pipeline selector before the board/table controls.
- **OBSERVED:** OBSERVED: The empty board contained seven stages: Appointment Scheduled, Qualified To Buy, Presentation Scheduled, Decision Maker Bought-In, Contract Sent, Closed Won and Closed Lost. Each displayed a zero count.
- **OBSERVED:** OBSERVED: The empty workspace presented guidance, knowledge links, Add deal and Import data from a file actions.
- **OBSERVED:** OBSERVED: Table view replaced the board with “No Deals match the current filters” and a retry explanation while preserving the shared toolbar and zero-count footer.
- **OBSERVED:** OBSERVED / DOM: Board and Table view are mutually exclusive checkbox-like controls. Stage headings are buttons.
- **OBSERVED:** OBSERVED / DOM: The pipeline selector uses a searchable list structure and links to pipeline settings.
- **OBSERVED:** NEEDS VERIFICATION: Board data contract, drag mutation, aggregation logic and pipeline authorization.

## Actions

- Element | Safe action | Observed result
- Sales Pipeline | Open, then close | Showed disabled All Pipelines, selected Sales Pipeline and a Manage pipelines link.
- Add deals | Open, then close | Offered Create new and Import.
- Board/Table view | Switch both ways | Updated the route between `/board` and `/list` and rendered the matching empty state.
- Add deal / Import / Export / Clone | Not activated | Outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-deal-pipeline-board-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Deal Pipeline Board. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The Deal index adds a Sales Pipeline selector before the board/table controls.
- **OBSERVED:** OBSERVED: The empty workspace presented guidance, knowledge links, Add deal and Import data from a file actions.
- **OBSERVED:** OBSERVED: Table view replaced the board with “No Deals match the current filters” and a retry explanation while preserving the shared toolbar and zero-count footer.
- **OBSERVED:** OBSERVED / DOM: Board and Table view are mutually exclusive checkbox-like controls. Stage headings are buttons.
- **OBSERVED:** OBSERVED / DOM: The pipeline selector uses a searchable list structure and links to pipeline settings.

### Network / API

- **NOT OBSERVED:** Board/Table view | Switch both ways | Updated the route between `/board` and `/list` and rendered the matching empty state.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-deal-pipeline-board"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "7"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-deal-pipeline-board.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-deal-pipeline-board.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
