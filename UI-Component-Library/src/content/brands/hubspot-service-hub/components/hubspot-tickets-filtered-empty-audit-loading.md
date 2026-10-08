---
component: "HubSpot Tickets Filtered Empty View — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Tickets Filtered Empty View. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-tickets-filtered-empty"
component_level: "loading"
---

# HubSpot Tickets Filtered Empty View — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Tickets Filtered Empty View](./hubspot-tickets-filtered-empty.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- My open tickets | Activated from pinned views | Navigated to `/views/my/list`, switched to Table view, and showed a filter count of 2 and the filtered empty state.
- Sort by | Keyboard Space | Opened a popover headed Sort by. Create date was the visible sort field. Most recent was selected and Oldest was available. Neither option was changed.
- Ticket owner (1) | Keyboard Space | Opened an owner filter showing operator “is any of” and value “Me”. No value was changed.
- Clear all, Advanced filters, Export, Clone | Not activated | Outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-tickets-filtered-empty-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Tickets Filtered Empty View. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The selected My open tickets tab switched to Table view. Filter displayed a count of 2. The visible chip row included Ticket owner (1), Create date, Last activity date, Priority, Clear all and Advanced filters. The result panel displayed “No Tickets match the current filters” with a brief delay hint, an illustration and 0 tickets.
- **OBSERVED:** OBSERVED: The footer offered Refresh, Export and Clone. Board/Table controls were still present. The Support Pipeline selector remained above the result.
- **OBSERVED:** OBSERVED / DOM: Board and Table view controls expose pressed state. Sort by exposes expanded state. The selected Most recent sort choice exposes pressed state. The owner filter shows its operator and selected value as buttons.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Provider query parameters beyond the visible route, backend API contract, JavaScript handlers, CSS tokens and error behavior.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-tickets-filtered-empty"
component_level: "loading"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
progress: "synthetic pending state"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-tickets-filtered-empty.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-tickets-filtered-empty.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
