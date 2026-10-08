---
component: "HubSpot Notifications Drawer — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-05"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-notifications-drawer"
component_level: "loading"
---

# HubSpot Notifications Drawer — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Notifications Drawer](./hubspot-notifications-drawer.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result or boundary
- Notifications toolbar button | Keyboard Space | Opened the drawer.
- Close | Keyboard Space | Closed the loaded drawer.
- All, Trash, Notification Preferences and Invite your team | Not activated | Their content and outcomes are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-notifications-drawer-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Notifications Drawer. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A right-side drawer headed Notifications contained tabs Unread (0), All and Trash, plus a Notification Preferences link.
- **OBSERVED:** OBSERVED: The selected Unread tab showed “You don’t have any unread notifications”. A secondary empty-state panel explained team mentions, contact assignments and new unassigned email notifications, illustrated with fictional examples, and offered Invite your team.
- **OBSERVED:** OBSERVED / DOM: The drawer was hosted in the notification application frame and exposed a Close button, tab-like buttons, a preferences link and one CTA.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-notifications-drawer"
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

- Parent workflow: hubspot-notifications-drawer.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-notifications-drawer.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
