---
component: "HubSpot Podcasts Entitlement Gate — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Content Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Podcasts Entitlement Gate. Derived from the authored observation record."
parent_workflow: "hubspot-podcasts-entitlement-gate"
component_level: "atomic"
---

# HubSpot Podcasts Entitlement Gate — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Podcasts Entitlement Gate](./hubspot-podcasts-entitlement-gate.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **OBSERVED:** OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: The Professional gate described creating episodes from AI-generated audio or recordings and distributing them through one RSS feed.
- OBSERVED: Benefits included HubSpot audio hosting, directory distribution, written-content repurposing, an episode module for pages and built-in analytics.
- OBSERVED: Talk to Sales and Start 14-day trial were offered above a plan comparison table.
- NOT ACTIVATED: Sales contact, trial, hosting, RSS distribution, creation and publishing.
- NEEDS VERIFICATION: Show setup, episode editor, RSS configuration, directory connections, publishing and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-podcasts-entitlement-gate-audit-atomic.
- **OBSERVED:** Evidence-backed reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Podcasts Entitlement Gate. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-podcasts-entitlement-gate"
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

- Parent workflow: hubspot-podcasts-entitlement-gate.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-podcasts-entitlement-gate.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
