---
component: "HubSpot Contracts Introduction — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed user actions and guarded outcomes for HubSpot Contracts Introduction. Derived from the authored observation record."
parent_workflow: "hubspot-contracts-introduction"
component_level: "action"
---

# HubSpot Contracts Introduction — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Contracts Introduction](./hubspot-contracts-introduction.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Introductory state described manual contract creation, changes, renewals and audit history with Apply for beta and Learn more actions.
- **OBSERVED:** OBSERVED: Automatic quote-to-contract required Revenue Hub Professional or Enterprise, with Start trial. Benefits covered structured linked records, TCV, ACV, MRR, ARR, renewal tracking, mid-term changes, proration and renewal inheritance.
- **OBSERVED:** NOT ACTIVATED: Beta application, trial, learning links and contract actions.
- **OBSERVED:** NEEDS VERIFICATION: Contract index, create and edit flows, approvals, revision history, renewals and reporting.

## Actions

- OBSERVED: Introductory state described manual contract creation, changes, renewals and audit history with Apply for beta and Learn more actions.
- OBSERVED: Automatic quote-to-contract required Revenue Hub Professional or Enterprise, with Start trial. Benefits covered structured linked records, TCV, ACV, MRR, ARR, renewal tracking, mid-term changes, proration and renewal inheritance.
- NOT ACTIVATED: Beta application, trial, learning links and contract actions.
- NEEDS VERIFICATION: Contract index, create and edit flows, approvals, revision history, renewals and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-contracts-introduction-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Contracts Introduction. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Introductory state described manual contract creation, changes, renewals and audit history with Apply for beta and Learn more actions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Automatic quote-to-contract required Revenue Hub Professional or Enterprise, with Start trial. Benefits covered structured linked records, TCV, ACV, MRR, ARR, renewal tracking, mid-term changes, proration and renewal inheritance.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Beta application, trial, learning links and contract actions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Contract index, create and edit flows, approvals, revision history, renewals and reporting.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-contracts-introduction"
component_level: "action"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
last_action: "none"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-contracts-introduction.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-contracts-introduction.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
