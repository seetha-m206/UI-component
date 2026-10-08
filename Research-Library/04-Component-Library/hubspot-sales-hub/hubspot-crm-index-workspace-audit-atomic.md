---
component: "HubSpot CRM Index Workspace — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-crm-index-workspace"
component_level: "atomic"
---

# HubSpot CRM Index Workspace — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Index Workspace](./hubspot-crm-index-workspace.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The index header combines an object selector, overflow control, Automate control and object-specific Add menu.
- **OBSERVED:** OBSERVED: Pinned views appear as tabs. Contacts showed All contacts, My contacts and Unassigned contacts. Companies showed All companies and My companies.
- **OBSERVED:** OBSERVED: The toolbar includes search, Filter, Sort by, board/table view toggles, View settings and Collapse header.
- **OBSERVED:** OBSERVED: The Contacts table showed eight visible data columns and two HubSpot-labelled sample rows. The Companies table showed one sample company after loading.
- **OBSERVED:** OBSERVED: Footer controls report record count and freshness, with Refresh, Export and Clone actions.
- **OBSERVED:** OBSERVED / DOM: The Contacts table contained one header row and two data rows. Visible column labels were Name, Email, Phone Number, Contact owner, Primary company, Last Activity Date, Lead Status and Create Date.
- **OBSERVED:** OBSERVED / DOM: Add menus used pop-up buttons with a content list containing Create new and Import.
- **OBSERVED:** OBSERVED / DOM: Record rows exposed selection checkboxes, inline-association expanders and record links.
- **OBSERVED:** NEEDS VERIFICATION: Query API, pagination payload, export generation, object-selector routing logic and permission enforcement.

## Actions

- Element | Safe action | Observed result
- Object selector | Open, then close | Listed Calls, Carts, Communications, Companies, Contacts, Contracts Beta, Deals, Meetings, Notes, Tasks, Tickets and other CRM objects.
- Add contacts / Add companies | Open, then close | Offered Create new and Import. Neither action was selected.
- Pinned views | Not changed | Current view stayed All contacts or All companies.
- Export and Clone | Not activated | Outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-index-workspace-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot CRM Index Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The index header combines an object selector, overflow control, Automate control and object-specific Add menu.
- **OBSERVED:** OBSERVED: Pinned views appear as tabs. Contacts showed All contacts, My contacts and Unassigned contacts. Companies showed All companies and My companies.
- **OBSERVED:** OBSERVED: The toolbar includes search, Filter, Sort by, board/table view toggles, View settings and Collapse header.
- **OBSERVED:** OBSERVED: The Contacts table showed eight visible data columns and two HubSpot-labelled sample rows. The Companies table showed one sample company after loading.
- **OBSERVED:** OBSERVED / DOM: The Contacts table contained one header row and two data rows. Visible column labels were Name, Email, Phone Number, Contact owner, Primary company, Last Activity Date, Lead Status and Create Date.
- **OBSERVED:** OBSERVED / DOM: Add menus used pop-up buttons with a content list containing Create new and Import.
- **OBSERVED:** OBSERVED / DOM: Record rows exposed selection checkboxes, inline-association expanders and record links.
- **NOT OBSERVED:** NEEDS VERIFICATION: Query API, pagination payload, export generation, object-selector routing logic and permission enforcement.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Query API, pagination payload, export generation, object-selector routing logic and permission enforcement.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-crm-index-workspace"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "9"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-index-workspace.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-index-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
