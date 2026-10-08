---
component: "HubSpot Global Create Menu — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-global-create-menu"
component_level: "state"
---

# HubSpot Global Create Menu — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Global Create Menu](./hubspot-global-create-menu.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The menu overlays the current screen without navigating or replacing Tickets content.
- **OBSERVED:** NOT OBSERVED: Keyboard arrow navigation, focus return, object-specific forms, permissions and errors.

## Actions

- Element | Safe action | Observed result or boundary
- Create new | Keyboard Space | Opened the object creation menu and exposed expanded state.
- Create new | Keyboard Space while open | Closed the menu and removed the five actions.
- Contact, Company, Deal, Ticket and Task | Not activated | Creation forms, validation and successful submission are NOT OBSERVED.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-global-create-menu-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Global Create Menu. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: A compact plus-icon control opened a menu labelled Create new with five object actions: Contact, Company, Deal, Ticket and Task.
- **OBSERVED:** OBSERVED / DOM: The trigger exposes popup-button semantics and expanded state. Each menu item is a button with a stable object-specific identifier.

### Network / API

- **NOT OBSERVED:** NOT OBSERVED: Creation routes, API requests, payloads and persistence.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-global-create-menu"
component_level: "state"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
selected_state: "documented"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-global-create-menu.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-service-hub/hubspot-global-create-menu.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
