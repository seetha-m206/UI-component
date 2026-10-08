---
component: "HubSpot CRM Automation Suggestions Drawer — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-crm-automation-drawer"
component_level: "interaction"
---

# HubSpot CRM Automation Suggestions Drawer — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Automation Suggestions Drawer](./hubspot-crm-automation-drawer.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** Automate | Open | Displayed the current object's suggestions drawer.
- **OBSERVED:** Close | Activate | Closed the drawer without changing the object view.
- **OBSERVED:** Automate your workflows | Not activated | Destination and entitlement behavior remain NEEDS VERIFICATION.
- **OBSERVED:** Suggestion cards | Not activated | Cards were disabled in this portal.
- **OBSERVED:** OBSERVED: The object name and suggestion content adapt while the drawer structure stays constant.
- **OBSERVED:** OBSERVED: Entitlement copy separates the available navigation action from disabled suggested automations.
- **OBSERVED:** NEEDS VERIFICATION: Workflow creation, upgrade routing, automation validation, save behavior and error states.

## Actions

- Element | Safe action | Observed result
- Automate | Open | Displayed the current object's suggestions drawer.
- Close | Activate | Closed the drawer without changing the object view.
- Automate your workflows | Not activated | Destination and entitlement behavior remain NEEDS VERIFICATION.
- Suggestion cards | Not activated | Cards were disabled in this portal.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-automation-drawer-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot CRM Automation Suggestions Drawer. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A right-side drawer is titled Automate plus the current object name and explains that automation can respond when that object is created or updated.
- **OBSERVED:** OBSERVED: Each object context supplied three disabled suggestion cards with a title and outcome-oriented description.
- **OBSERVED:** OBSERVED / DOM: The drawer is exposed as a separate container after the index content. Suggestion cards are disabled buttons.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Recommendation-generation logic, API calls, workflow schema and entitlement checks.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-crm-automation-drawer"
component_level: "interaction"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
interaction_result: "local guard"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-automation-drawer.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-automation-drawer.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
