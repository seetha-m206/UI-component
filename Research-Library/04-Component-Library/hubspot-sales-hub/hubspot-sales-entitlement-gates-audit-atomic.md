---
component: "HubSpot Sales Entitlement Gate — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-sales-entitlement-gates"
component_level: "atomic"
---

# HubSpot Sales Entitlement Gate — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Entitlement Gate](./hubspot-sales-entitlement-gates.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: Every gate preserves the shared HubSpot shell and replaces the product workspace with a marketing-led feature page.
- **OBSERVED:** OBSERVED: The hero pairs a task-oriented value statement with plan-specific entitlement copy and one or two conversion actions.
- **OBSERVED:** OBSERVED: Sales Workspace, Forecast, Sales Analytics, Sequences and Workflows offered Talk to Sales and Start 14-day trial for Sales Hub Professional.
- **OBSERVED:** OBSERVED: Documents and Prospecting Agent offered Buy now and Talk to Sales for Starter Customer Platform.
- **OBSERVED:** OBSERVED: Supporting content uses benefit cards followed by Free-versus-paid feature comparison tables.
- **OBSERVED:** OBSERVED / DOM: Each gate exposes a distinct `upgradeSource` query parameter, allowing navigation origin attribution.
- **OBSERVED:** OBSERVED / DOM: Current-plan buttons in comparison tables are disabled.
- **OBSERVED:** NEEDS VERIFICATION: Analytics events, entitlement API and upgrade persistence.

## Actions

- Element | Safe action | Observed result
- Locked nav item | Open | Routed to a feature-specific entitlement page with `upgradeSource` in the URL.
- Talk to Sales, Start trial and Buy now | Not activated | Commercial, trial, billing and lead-capture outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-entitlement-gates-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Sales Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **OBSERVED:** OBSERVED: Supporting content uses benefit cards followed by Free-versus-paid feature comparison tables.
- **OBSERVED:** OBSERVED / DOM: Each gate exposes a distinct `upgradeSource` query parameter, allowing navigation origin attribution.
- **OBSERVED:** OBSERVED / DOM: Current-plan buttons in comparison tables are disabled.

### Network / API

- **NOT OBSERVED:** NEEDS VERIFICATION: Analytics events, entitlement API and upgrade persistence.
- **NOT OBSERVED:** Locked nav item | Open | Routed to a feature-specific entitlement page with `upgradeSource` in the URL.
- **NOT OBSERVED:** NEEDS VERIFICATION: No trial, purchase, sales request or account change was initiated.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-sales-entitlement-gates"
component_level: "atomic"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
control_count: "8"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-sales-entitlement-gates.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-entitlement-gates.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
