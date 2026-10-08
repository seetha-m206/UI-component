---
component: "HubSpot Deal Pipeline Board — Error Component"
ui_category: "Deep Audit > Error Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-deal-pipeline-board"
component_level: "error"
---

# HubSpot Deal Pipeline Board — Error Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Deal Pipeline Board](./hubspot-deal-pipeline-board.md).
- **COMPONENT LEVEL:** error.

## Structure

- **OBSERVED:** OBSERVED: Table view replaced the board with “No Deals match the current filters” and a retry explanation while preserving the shared toolbar and zero-count footer.

## Actions

- Element | Safe action | Observed result
- Sales Pipeline | Open, then close | Showed disabled All Pipelines, selected Sales Pipeline and a Manage pipelines link.
- Add deals | Open, then close | Offered Create new and Import.
- Board/Table view | Switch both ways | Updated the route between `/board` and `/list` and rendered the matching empty state.
- Add deal / Import / Export / Clone | Not activated | Outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-deal-pipeline-board-audit-error.
- **OBSERVED:** Evidence-backed error, unavailable, validation, retry, and failure states for HubSpot Deal Pipeline Board. Derived from the authored observation record.
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
component_level: "error"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
error_message: "OBSERVED: Table view replaced the board with “No Deals match the current filters” and a retry explanation while preserving the shared toolbar and zero-count footer."
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-deal-pipeline-board.
- Reusable level: error.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-deal-pipeline-board.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
