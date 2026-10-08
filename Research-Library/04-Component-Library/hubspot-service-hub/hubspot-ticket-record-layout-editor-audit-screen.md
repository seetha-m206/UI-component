---
component: "HubSpot Ticket Record Layout Editor — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-ticket-record-layout-editor"
component_level: "screen"
---

# HubSpot Ticket Record Layout Editor — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Record Layout Editor](./hubspot-ticket-record-layout-editor.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: The editor header showed Exit, disabled Undo and Redo, Default view, Save and Save and exit.
- **OBSERVED:** OBSERVED: The layout included About this ticket, Activities, Contacts, Companies, Deals and Attachments cards, plus Add card, Edit card, Create new tab and Change tab order controls.
- **OBSERVED:** OBSERVED: About this ticket's More card actions menu exposed Set conditional logic and Remove card.

## Actions

- Element | Safe action | Observed result or boundary
- Default view link | Page visit | Opened the populated record-page editor.
- More card actions | Open disclosure | Displayed Set conditional logic and Remove card.
- Save, edit, add, remove and reorder | Not activated | All layout mutations and persistence are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-record-layout-editor-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Ticket Record Layout Editor. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The layout included About this ticket, Activities, Contacts, Companies, Deals and Attachments cards, plus Add card, Edit card, Create new tab and Change tab order controls.
- **OBSERVED:** OBSERVED: About this ticket's More card actions menu exposed Set conditional logic and Remove card.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-record-layout-editor"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Account / Settings"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-ticket-record-layout-editor.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-record-layout-editor.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
