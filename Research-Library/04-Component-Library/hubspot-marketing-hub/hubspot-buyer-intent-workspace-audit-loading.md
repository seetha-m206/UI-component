---
component: "HubSpot Buyer Intent Workspace — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Marketing Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-buyer-intent-workspace"
component_level: "loading"
---

# HubSpot Buyer Intent Workspace — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Buyer Intent Workspace](./hubspot-buyer-intent-workspace.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NEEDS VERIFICATION: No tracking code was installed or checked and no email was sent.

## Actions

- OBSERVED: Top-level tabs were Overview, Visitors, Research, Signals and Configuration.
- OBSERVED: The Visitors filter panel grouped Visitor Intent, Target Markets and CRM criteria, with time frame, traffic source, country, domain and page-path controls.
- OBSERVED: Save view and automate was disabled in the untouched state.
- OBSERVED: The main empty state required the HubSpot tracking code, documented the approximate data delay and offered Check code installation, Copy and Email to my web developer.
- OBSERVED: A dismissible “Newly Updated: Automations!” overlay appeared with a video, Get Started and Learn More.
- SAFE ACTION: Escape dismissed the update overlay without changing configuration.
- NOT ACTIVATED: Code check, copy, email, configuration, save or automation.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-buyer-intent-workspace-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Buyer Intent Workspace. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: No tracking code was installed or checked and no email was sent.

### Network / API

- **OBSERVED:** OBSERVED: The Visitors filter panel grouped Visitor Intent, Target Markets and CRM criteria, with time frame, traffic source, country, domain and page-path controls.
- **OBSERVED:** OBSERVED: A dismissible “Newly Updated: Automations!” overlay appeared with a video, Get Started and Learn More.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-buyer-intent-workspace"
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

- Parent workflow: hubspot-buyer-intent-workspace.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-marketing-hub/hubspot-buyer-intent-workspace.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
