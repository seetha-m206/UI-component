---
component: "HubSpot Sales Entitlement Gate — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-sales-entitlement-gates"
component_level: "loading"
---

# HubSpot Sales Entitlement Gate — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Sales Entitlement Gate](./hubspot-sales-entitlement-gates.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- Element | Safe action | Observed result
- Locked nav item | Open | Routed to a feature-specific entitlement page with `upgradeSource` in the URL.
- Talk to Sales, Start trial and Buy now | Not activated | Commercial, trial, billing and lead-capture outcomes remain NEEDS VERIFICATION.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-sales-entitlement-gates-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Sales Entitlement Gate. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
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

- Parent workflow: hubspot-sales-entitlement-gates.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-sales-hub/hubspot-sales-entitlement-gates.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
