---
component: "HubSpot Payments Onboarding — Loading Component"
ui_category: "Deep Audit > Loading Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "runtime_pending"
parent_workflow: "hubspot-payments-onboarding"
component_level: "loading"
---

# HubSpot Payments Onboarding — Loading Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Payments Onboarding](./hubspot-payments-onboarding.md).
- **COMPONENT LEVEL:** loading.

## Structure

- **NOT OBSERVED:** NOT OBSERVED: The authored parent record does not provide a more specific loading description.

## Actions

- OBSERVED: Empty onboarding promoted secure no-code payments through links, invoices, subscriptions and quotes, plus CRM segmentation, automation and reporting.
- OBSERVED: Actions included Record manual payment, Set up payments, a mailto contact for custom rates and an Academy video.
- NOT ACTIVATED: Manual payment, setup, email, video and Academy navigation.
- NEEDS VERIFICATION: Processor enrollment, payment records, refunds, payouts, reconciliation and reporting.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-payments-onboarding-audit-loading.
- **RECONSTRUCTION:** Evidence-bounded loading, progress, pending, and stalled states for HubSpot Payments Onboarding. The source record does not directly observe this state, so the fixture is a labelled local reconstruction.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT OBSERVED: The authored parent record does not provide a more specific loading description.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-payments-onboarding"
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

- Parent workflow: hubspot-payments-onboarding.
- Reusable level: loading.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-payments-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
