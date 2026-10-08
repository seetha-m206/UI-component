---
component: "HubSpot CRM Automation Suggestions Drawer — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-crm-automation-drawer"
component_level: "action"
---

# HubSpot CRM Automation Suggestions Drawer — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Automation Suggestions Drawer](./hubspot-crm-automation-drawer.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** Automate | Open | Displayed the current object's suggestions drawer.
- **OBSERVED:** Close | Activate | Closed the drawer without changing the object view.
- **OBSERVED:** Automate your workflows | Not activated | Destination and entitlement behavior remain NEEDS VERIFICATION.
- **OBSERVED:** Suggestion cards | Not activated | Cards were disabled in this portal.

## Actions

- Element | Safe action | Observed result
- Automate | Open | Displayed the current object's suggestions drawer.
- Close | Activate | Closed the drawer without changing the object view.
- Automate your workflows | Not activated | Destination and entitlement behavior remain NEEDS VERIFICATION.
- Suggestion cards | Not activated | Cards were disabled in this portal.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-automation-drawer-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot CRM Automation Suggestions Drawer. Derived from the authored observation record.
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
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-automation-drawer.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-automation-drawer.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
