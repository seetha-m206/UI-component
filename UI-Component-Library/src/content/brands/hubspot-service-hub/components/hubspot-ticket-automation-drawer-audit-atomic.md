---
component: "HubSpot Ticket Automation Drawer — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Automation Drawer. Derived from the authored observation record."
parent_workflow: "hubspot-ticket-automation-drawer"
component_level: "atomic"
---

# HubSpot Ticket Automation Drawer — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Ticket Automation Drawer](./hubspot-ticket-automation-drawer.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Automate opened a right-side drawer headed “Automate Tickets” with the description “Automate what happens when a Ticket is created or updated”.
- **OBSERVED:** OBSERVED: A primary Automate your workflows control displayed a lock icon. The drawer stated that suggested automations are available at Starter.
- **OBSERVED:** OBSERVED: Suggested for you contained disabled cards for notifying a sales team when a new contact is created, setting lead status to New for a new contact, and sending a follow-up email to new contacts.
- **OBSERVED:** OBSERVED / DOM: Automate is a button. Suggestion cards exposed disabled state.
- **OBSERVED:** NOT OBSERVED: Entitlement API, recommendation generation, workflow schema or runtime execution.

## Actions

- Element | Safe action | Observed result or boundary
- Automate | Keyboard Space | Opened the automation drawer.
- Automation CTA and suggestions | Not activated | Upgrade, workflow creation and suggestion outcomes are NOT OBSERVED.
- Tickets route | Reloaded after inspection | Reset the drawer without changing provider data.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-ticket-automation-drawer-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Ticket Automation Drawer. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Automate opened a right-side drawer headed “Automate Tickets” with the description “Automate what happens when a Ticket is created or updated”.
- **OBSERVED:** OBSERVED: A primary Automate your workflows control displayed a lock icon. The drawer stated that suggested automations are available at Starter.
- **OBSERVED:** OBSERVED: Suggested for you contained disabled cards for notifying a sales team when a new contact is created, setting lead status to New for a new contact, and sending a follow-up email to new contacts.
- **OBSERVED:** OBSERVED / DOM: Automate is a button. Suggestion cards exposed disabled state.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Entitlement API, recommendation generation, workflow schema or runtime execution.
- **NOT OBSERVED:** Tickets route | Reloaded after inspection | Reset the drawer without changing provider data.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-ticket-automation-drawer"
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

- Parent workflow: hubspot-ticket-automation-drawer.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-ticket-automation-drawer.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
