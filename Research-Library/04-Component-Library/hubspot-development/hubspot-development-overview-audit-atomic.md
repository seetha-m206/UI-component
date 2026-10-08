---
component: "HubSpot Development Overview — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-development-overview"
component_level: "atomic"
---

# HubSpot Development Overview — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Development Overview](./hubspot-development-overview.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Overview positioned React app cards, CRM objects, advanced-feature access and Marketplace publishing. It exposed CLI installation and project-start commands, CMS, docs, samples, App Objects, App Events, Agent Tools and remote MCP beta paths.
- SAFE ACTION: A welcome-tour overlay was dismissed with Escape.
- NOT ACTIVATED: CLI copy actions, tour, documentation, samples, access requests and beta joins.
- NEEDS VERIFICATION: Local CLI setup, project deployment and advanced-feature enablement.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-development-overview-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Development Overview. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** NOT ACTIVATED: CLI copy actions, tour, documentation, samples, access requests and beta joins.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-development-overview"
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

- Parent workflow: hubspot-development-overview.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-development-overview.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
