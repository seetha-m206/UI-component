---
component: "HubSpot Contracts Introduction — Atomic Component"
ui_category: "Deep Audit > Atomic Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
status: "partial"
summary: "Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Contracts Introduction. The source record does not directly observe this state, so the fixture is a labelled local reconstruction."
parent_workflow: "hubspot-contracts-introduction"
component_level: "atomic"
---

# HubSpot Contracts Introduction — Atomic Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Contracts Introduction](./hubspot-contracts-introduction.md).
- **COMPONENT LEVEL:** atomic.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

## Actions

- OBSERVED: Introductory state described manual contract creation, changes, renewals and audit history with Apply for beta and Learn more actions.
- OBSERVED: Automatic quote-to-contract required Revenue Hub Professional or Enterprise, with Start trial. Benefits covered structured linked records, TCV, ACV, MRR, ARR, renewal tracking, mid-term changes, proration and renewal inheritance.
- NOT ACTIVATED: Beta application, trial, learning links and contract actions.
- NEEDS VERIFICATION: Contract index, create and edit flows, approvals, revision history, renewals and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-contracts-introduction-audit-atomic.
- **RECONSTRUCTION:** Evidence-bounded reusable controls, fields, menus, cards, rows, and semantic roles for HubSpot Contracts Introduction. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific atomic description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-contracts-introduction"
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

- Parent workflow: hubspot-contracts-introduction.
- Reusable level: atomic.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-contracts-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
