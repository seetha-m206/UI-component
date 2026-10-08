---
component: "HubSpot Developer Test Accounts — State Component"
ui_category: "Deep Audit > State Level"
source_product: "HubSpot Developer Platform"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Developer Test Accounts. Derived from the authored observation record."
parent_workflow: "hubspot-developer-test-accounts"
component_level: "state"
---

# HubSpot Developer Test Accounts — State Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Developer Test Accounts](./hubspot-developer-test-accounts.md).
- **COMPONENT LEVEL:** state.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding offered Create developer test account and described free accounts with trial Enterprise Marketing, Sales and Service features that remain active while API calls continue.
- **OBSERVED:** NOT ACTIVATED: Test-account creation and documentation.
- **OBSERVED:** NEEDS VERIFICATION: Creation wizard, expiry rules, app installation, limits and deletion.

## Actions

- OBSERVED: Empty onboarding offered Create developer test account and described free accounts with trial Enterprise Marketing, Sales and Service features that remain active while API calls continue.
- NOT ACTIVATED: Test-account creation and documentation.
- NEEDS VERIFICATION: Creation wizard, expiry rules, app installation, limits and deletion.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-developer-test-accounts-audit-state.
- **OBSERVED:** Evidence-backed visible selection, entitlement, disabled, expanded, and status states for HubSpot Developer Test Accounts. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding offered Create developer test account and described free accounts with trial Enterprise Marketing, Sales and Service features that remain active while API calls continue.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Test-account creation and documentation.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Creation wizard, expiry rules, app installation, limits and deletion.

### Network / API

- **OBSERVED:** OBSERVED: Empty onboarding offered Create developer test account and described free accounts with trial Enterprise Marketing, Sales and Service features that remain active while API calls continue.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-developer-test-accounts"
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

- Parent workflow: hubspot-developer-test-accounts.
- Reusable level: state.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-development/hubspot-developer-test-accounts.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
