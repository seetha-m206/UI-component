---
component: "HubSpot CRM Automation Suggestions Drawer — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-crm-automation-drawer"
component_level: "atomic"
---

# HubSpot CRM Automation Suggestions Drawer — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot CRM Automation Suggestions Drawer](./hubspot-crm-automation-drawer.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: A right-side drawer is titled Automate plus the current object name and explains that automation can respond when that object is created or updated.
- **OBSERVED:** OBSERVED: Automate your workflows is the leading action, followed by a Starter entitlement message and a Suggested for you section.
- **OBSERVED:** OBSERVED: Each object context supplied three disabled suggestion cards with a title and outcome-oriented description.
- **OBSERVED:** OBSERVED: Contact suggestions covered new-contact notification, setting lead status and sending a follow-up email. Company suggestions covered new-company, customer-conversion and high-value alerts. Deal suggestions covered closed-deal notification, new-deal task creation and presentation follow-up.
- **OBSERVED:** OBSERVED / DOM: The drawer is exposed as a separate container after the index content. Suggestion cards are disabled buttons.
- **OBSERVED:** NEEDS VERIFICATION: Recommendation-generation logic, API calls, workflow schema and entitlement checks.

## Actions

- Element | Safe action | Observed result
- Automate | Open | Displayed the current object's suggestions drawer.
- Close | Activate | Closed the drawer without changing the object view.
- Automate your workflows | Not activated | Destination and entitlement behavior remain NEEDS VERIFICATION.
- Suggestion cards | Not activated | Cards were disabled in this portal.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-crm-automation-drawer-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot CRM Automation Suggestions Drawer. Derived from the authored observation record.
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
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "6"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-crm-automation-drawer.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-crm-automation-drawer.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
