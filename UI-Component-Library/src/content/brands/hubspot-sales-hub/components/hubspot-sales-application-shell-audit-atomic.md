---
component: "HubSpot Sales Hub Application Shell — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Sales Hub Application Shell. Derived from the authored observation record."
parent_workflow: "hubspot-sales-application-shell"
component_level: "atomic"
---

# HubSpot Sales Hub Application Shell — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Hub Application Shell](./hubspot-sales-application-shell.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: A 44-pixel global toolbar spans the viewport above a 236-pixel left navigation and a light main workspace.
- **OBSERVED:** OBSERVED: The toolbar exposes the HubSpot home mark, global search, Breeze Assistant, Upgrade, Create new, Calls, Marketplace, Help, Settings, Notifications and the account menu.
- **OBSERVED:** OBSERVED: The primary navigation exposes Home, Contacts, Companies, Deals and Segments, followed by expanded Marketing, Content and Platform groups, More, an Upgrade to Starter action and a setup continuation card.
- **OBSERVED:** OBSERVED: The body uses `Lexend Deca`, Helvetica, Arial, sans-serif at a 14-pixel base size. The observed viewport was 1138 by 1224 CSS pixels at device-pixel ratio 2.
- **OBSERVED:** OBSERVED / DOM: Primary entries use `role="menuitem"` and stable identifiers including `contacts`, `companies`, `deals`, `lists`, `dashboards`, `workflows` and `more-tools-toggle`.
- **OBSERVED:** OBSERVED / DOM: Toolbar controls expose accessible names and stable IDs including `global-search-input`, `hs-global-toolbar-object-create`, `calling-remote-toggle`, `hs-global-toolbar-marketplace-list-item`, `hs-global-toolbar-help-list-item`, `hs-global-toolbar-settings-list-item`, `hs-global-toolbar-notifications-list-item` and `hs-global-toolbar-accounts`.
- **OBSERVED:** NEEDS VERIFICATION: Internal React state, network contracts, authorization checks, design-token source values and motion timing.

## Actions

- Element | Safe action | Observed result
- Marketing, Content and Platform group headers | Not changed during this screen pass | Each was visibly expanded with nested tools.
- More | Not opened during this screen pass | Visible as a collapsed menu item.
- Toolbar menus | Not opened during this screen pass | Visible shared-shell controls. Outcomes remain NEEDS VERIFICATION for the Sales Hub lane.
- Setup continuation card | Not activated | Presented the message “Complete your setup and reach your goals faster.” with Continue.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-application-shell-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Sales Hub Application Shell. Derived from the authored observation record.
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

- Parent workflow: hubspot-sales-application-shell.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-application-shell.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
