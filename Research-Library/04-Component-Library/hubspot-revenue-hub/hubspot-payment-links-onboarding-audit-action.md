---
component: "HubSpot Payment Links Onboarding — Action Component"
ui_category: "Deep Audit > Action Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-payment-links-onboarding"
component_level: "action"
---

# HubSpot Payment Links Onboarding — Action Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Payment Links Onboarding](./hubspot-payment-links-onboarding.md).
- **COMPONENT LEVEL:** action.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding promoted branded no-code payment links and CRM tracking across email, pages, forms and meetings.
- **OBSERVED:** OBSERVED: Create a payment link and Set up payments were available. A notice said only a draft can be created before Payments setup, after which the link can be shared and collect payments.
- **OBSERVED:** NOT ACTIVATED: Draft creation, payment setup, sharing and collection.
- **OBSERVED:** NEEDS VERIFICATION: Builder, line items, branding, checkout, sharing, payment status and link lifecycle.

## Actions

- OBSERVED: Empty onboarding promoted branded no-code payment links and CRM tracking across email, pages, forms and meetings.
- OBSERVED: Create a payment link and Set up payments were available. A notice said only a draft can be created before Payments setup, after which the link can be shared and collect payments.
- NOT ACTIVATED: Draft creation, payment setup, sharing and collection.
- NEEDS VERIFICATION: Builder, line items, branding, checkout, sharing, payment status and link lifecycle.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-payment-links-onboarding-audit-action.
- **OBSERVED:** Evidence-backed user actions and guarded outcomes for HubSpot Payment Links Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding promoted branded no-code payment links and CRM tracking across email, pages, forms and meetings.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Create a payment link and Set up payments were available. A notice said only a draft can be created before Payments setup, after which the link can be shared and collect payments.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Draft creation, payment setup, sharing and collection.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Builder, line items, branding, checkout, sharing, payment status and link lifecycle.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-payment-links-onboarding"
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

- Parent workflow: hubspot-payment-links-onboarding.
- Reusable level: action.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-payment-links-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
