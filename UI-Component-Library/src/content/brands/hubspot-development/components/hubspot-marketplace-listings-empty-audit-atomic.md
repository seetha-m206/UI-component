---
component: "HubSpot Marketplace Listings Empty State — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Marketplace Listings Empty State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-marketplace-listings-empty"
component_level: "atomic"
---

# HubSpot Marketplace Listings Empty State — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Marketplace Listings Empty State](./hubspot-marketplace-listings-empty.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Empty inventory exposed Create listing, Search and No listings found.
- NOT ACTIVATED: Listing creation, search and publication.
- NEEDS VERIFICATION: Listing wizard, assets, review, submission, approval, publication and analytics.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-marketplace-listings-empty-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Marketplace Listings Empty State. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-marketplace-listings-empty"
component_level: "atomic"
evidence_state: "reconstructed"
data_scope: "fictional_local_only"
status: "not_observed"
control_count: "1"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-marketplace-listings-empty.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-marketplace-listings-empty.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
