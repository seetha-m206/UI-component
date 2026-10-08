---
component: "HubSpot Memberships Access State — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Content Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Memberships Access State. Derived from the authored observation record."
parent_workflow: "hubspot-memberships-access-state"
component_level: "state"
---

# HubSpot Memberships Access State — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Memberships Access State](./hubspot-memberships-access-state.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: The page stated that the account did not have access to memberships and described contacts and access groups.
- **OBSERVED:** OBSERVED: A Learn more action was available. A separate private-content feedback prompt offered Negative, Neutral and Positive reactions.
- **OBSERVED:** NOT ACTIVATED: Learn more, feedback and any membership action.
- **OBSERVED:** NEEDS VERIFICATION: Membership lists, access-group rules, gated-content configuration and member states.

## Actions

- OBSERVED: The page stated that the account did not have access to memberships and described contacts and access groups.
- OBSERVED: A Learn more action was available. A separate private-content feedback prompt offered Negative, Neutral and Positive reactions.
- NOT ACTIVATED: Learn more, feedback and any membership action.
- NEEDS VERIFICATION: Membership lists, access-group rules, gated-content configuration and member states.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-memberships-access-state-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Memberships Access State. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: The page stated that the account did not have access to memberships and described contacts and access groups.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A Learn more action was available. A separate private-content feedback prompt offered Negative, Neutral and Positive reactions.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Learn more, feedback and any membership action.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Membership lists, access-group rules, gated-content configuration and member states.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-memberships-access-state"
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

- Parent workflow: hubspot-memberships-access-state.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-content-hub/hubspot-memberships-access-state.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
