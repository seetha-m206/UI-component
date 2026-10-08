---
component: "HubSpot Sales Hub Application Shell — Interaction Component"
ui_category: "Deep Audit > Interaction Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-sales-application-shell"
component_level: "interaction"
---

# HubSpot Sales Hub Application Shell — Interaction Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Hub Application Shell](./hubspot-sales-application-shell.md).
- **COMPONENT LEVEL:** interaction.

## Structure

- **OBSERVED:** Element | Safe action | Observed result
- **OBSERVED:** Marketing, Content and Platform group headers | Not changed during this screen pass | Each was visibly expanded with nested tools.
- **OBSERVED:** More | Not opened during this screen pass | Visible as a collapsed menu item.
- **OBSERVED:** Toolbar menus | Not opened during this screen pass | Visible shared-shell controls. Outcomes remain NEEDS VERIFICATION for the Sales Hub lane.
- **OBSERVED:** Setup continuation card | Not activated | Presented the message “Complete your setup and reach your goals faster.” with Continue.
- **OBSERVED:** OBSERVED: The shell stayed present while the Start Guide disclosure and options menu changed inside the main workspace.
- **OBSERVED:** OBSERVED: Hidden per-item navigation option buttons were present in the rendered DOM with `display: none` until their interaction state is invoked.
- **OBSERVED:** NEEDS VERIFICATION: Responsive collapse behavior, keyboard traversal order, hover-only affordances, navigation persistence and product-specific More-menu contents.

## Actions

- Element | Safe action | Observed result
- Marketing, Content and Platform group headers | Not changed during this screen pass | Each was visibly expanded with nested tools.
- More | Not opened during this screen pass | Visible as a collapsed menu item.
- Toolbar menus | Not opened during this screen pass | Visible shared-shell controls. Outcomes remain NEEDS VERIFICATION for the Sales Hub lane.
- Setup continuation card | Not activated | Presented the message “Complete your setup and reach your goals faster.” with Continue.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-application-shell-audit-interaction.
- **OBSERVED:** Evidence-backed local interaction transitions and state changes for HubSpot Sales Hub Application Shell. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: The toolbar exposes the HubSpot home mark, global search, Breeze Assistant, Upgrade, Create new, Calls, Marketplace, Help, Settings, Notifications and the account menu.
- **OBSERVED:** OBSERVED: The primary navigation exposes Home, Contacts, Companies, Deals and Segments, followed by expanded Marketing, Content and Platform groups, More, an Upgrade to Starter action and a setup continuation card.
- **OBSERVED:** OBSERVED / DOM: Primary entries use `role="menuitem"` and stable identifiers including `contacts`, `companies`, `deals`, `lists`, `dashboards`, `workflows` and `more-tools-toggle`.
- **OBSERVED:** OBSERVED / DOM: Toolbar controls expose accessible names and stable IDs including `global-search-input`, `hs-global-toolbar-object-create`, `calling-remote-toggle`, `hs-global-toolbar-marketplace-list-item`, `hs-global-toolbar-help-list-item`, `hs-global-toolbar-settings-list-item`, `hs-global-toolbar-notifications-list-item` and `hs-global-toolbar-accounts`.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Internal React state, network contracts, authorization checks, design-token source values and motion timing.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-sales-application-shell"
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

- Parent workflow: hubspot-sales-application-shell.
- Reusable level: interaction.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-application-shell.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
