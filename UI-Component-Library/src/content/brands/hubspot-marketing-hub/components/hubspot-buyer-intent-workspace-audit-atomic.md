---
component: "HubSpot Buyer Intent Workspace — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Buyer Intent Workspace. Derived from the authored observation record."
parent_workflow: "hubspot-buyer-intent-workspace"
component_level: "atomic"
---

# HubSpot Buyer Intent Workspace — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Buyer Intent Workspace](./hubspot-buyer-intent-workspace.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Top-level tabs were Overview, Visitors, Research, Signals and Configuration.
- OBSERVED: The Visitors filter panel grouped Visitor Intent, Target Markets and CRM criteria, with time frame, traffic source, country, domain and page-path controls.
- OBSERVED: Save view and automate was disabled in the untouched state.
- OBSERVED: The main empty state required the HubSpot tracking code, documented the approximate data delay and offered Check code installation, Copy and Email to my web developer.
- OBSERVED: A dismissible “Newly Updated: Automations!” overlay appeared with a video, Get Started and Learn More.
- SAFE ACTION: Escape dismissed the update overlay without changing configuration.
- NOT ACTIVATED: Code check, copy, email, configuration, save or automation.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-buyer-intent-workspace-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Buyer Intent Workspace. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **OBSERVED:** OBSERVED: The Visitors filter panel grouped Visitor Intent, Target Markets and CRM criteria, with time frame, traffic source, country, domain and page-path controls.
- **OBSERVED:** OBSERVED: A dismissible “Newly Updated: Automations!” overlay appeared with a video, Get Started and Learn More.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-buyer-intent-workspace"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-buyer-intent-workspace.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-buyer-intent-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
