---
component: "HubSpot Invoices Onboarding — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
parent_workflow: "hubspot-invoices-onboarding"
component_level: "screen"
---

# HubSpot Invoices Onboarding — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Invoices Onboarding](./hubspot-invoices-onboarding.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Empty onboarding promoted invoice status and revenue insight in CRM, two-way QuickBooks Online bookkeeping sync and transaction-fee-only online payment collection.
- **OBSERVED:** OBSERVED: A Create action was available.
- **OBSERVED:** NOT ACTIVATED: Create, accounting connection and payment setup.
- **OBSERVED:** NEEDS VERIFICATION: Invoice builder, line items, taxes, sending, reminders, payments, sync and status transitions.

## Actions

- OBSERVED: Empty onboarding promoted invoice status and revenue insight in CRM, two-way QuickBooks Online bookkeeping sync and transaction-fee-only online payment collection.
- OBSERVED: A Create action was available.
- NOT ACTIVATED: Create, accounting connection and payment setup.
- NEEDS VERIFICATION: Invoice builder, line items, taxes, sending, reminders, payments, sync and status transitions.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-invoices-onboarding-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Invoices Onboarding. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Empty onboarding promoted invoice status and revenue insight in CRM, two-way QuickBooks Online bookkeeping sync and transaction-fee-only online payment collection.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: A Create action was available.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Create, accounting connection and payment setup.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NEEDS VERIFICATION: Invoice builder, line items, taxes, sending, reminders, payments, sync and status transitions.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-invoices-onboarding"
component_level: "screen"
evidence_state: "source_reviewed"
data_scope: "fictional_local_only"
status: "documented"
layout: "Revenue"
~~~

## Evidence Boundary

- **SOURCE REVIEWED:** Parent evidence is preserved without upgrading inference to fact.
- **RECONSTRUCTION:** Fixture values and unobserved states are fictional and local only.
- **NOT OBSERVED:** Missing request, response, mutation, persistence, permission, billing, and provider outcomes remain unverified.

## Cross-Component Pattern Note

- Parent workflow: hubspot-invoices-onboarding.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-invoices-onboarding.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
