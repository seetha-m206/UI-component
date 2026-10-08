---
component: "HubSpot Sales Hub Application Shell — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded loading, progress, pending, and stalled states for HubSpot Sales Hub Application Shell. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-sales-application-shell"
component_level: "loading"
---

# HubSpot Sales Hub Application Shell — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Hub Application Shell](./hubspot-sales-application-shell.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result
- Marketing, Content and Platform group headers | Not changed during this screen pass | Each was visibly expanded with nested tools.
- More | Not opened during this screen pass | Visible as a collapsed menu item.
- Toolbar menus | Not opened during this screen pass | Visible shared-shell controls. Outcomes remain NEEDS VERIFICATION for the Sales Hub lane.
- Setup continuation card | Not activated | Presented the message “Complete your setup and reach your goals faster.” with Continue.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-application-shell-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Sales Hub Application Shell. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
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

- Parent workflow: hubspot-sales-application-shell.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-application-shell.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
