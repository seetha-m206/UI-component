---
component: "HubSpot Revenue Overview — Screen Component"
ui_category: "Deep Audit > Screen Level"
source_product: "HubSpot Revenue Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "complete"
summary: "Evidence-backed screen composition and workflow boundary for HubSpot Revenue Overview. Derived from the authored observation record."
parent_workflow: "hubspot-revenue-overview"
component_level: "screen"
---

# HubSpot Revenue Overview — Screen Component

<!-- GENERATED: hubspot-deep-audit-v1 -->

## Location

- **SOURCE REVIEWED:** Derived from [HubSpot Revenue Overview](./hubspot-revenue-overview.md).
- **COMPONENT LEVEL:** screen.

## Structure

- **OBSERVED:** OBSERVED: Welcome screen linked quoting, billing and payments on the same record and offered Try Revenue Hub today and Set up online payments.
- **OBSERVED:** OBSERVED: An interactive lifecycle presented Sales-Led, Invoice-Based and Self-Serve at Scale models, then connected Deal, Quote, Contract, Invoice, Payment and Revenue Intelligence states.
- **OBSERVED:** OBSERVED: Secondary cards covered AI-powered quotes, partners and payment education.
- **OBSERVED:** NOT ACTIVATED: Model changes, lifecycle stage controls, trial, payment setup, deal creation, partner directory and learning links.
- **OBSERVED:** NEEDS VERIFICATION: Activated dashboards, transactions, lifecycle data and revenue reports.

## Actions

- OBSERVED: Welcome screen linked quoting, billing and payments on the same record and offered Try Revenue Hub today and Set up online payments.
- OBSERVED: An interactive lifecycle presented Sales-Led, Invoice-Based and Self-Serve at Scale models, then connected Deal, Quote, Contract, Invoice, Payment and Revenue Intelligence states.
- OBSERVED: Secondary cards covered AI-powered quotes, partners and payment education.
- NOT ACTIVATED: Model changes, lifecycle stage controls, trial, payment setup, deal creation, partner directory and learning links.
- NEEDS VERIFICATION: Activated dashboards, transactions, lifecycle data and revenue reports.

## Behavior & States

- **DOCUMENTED:** Independently addressable as hubspot-revenue-overview-audit-screen.
- **OBSERVED:** Evidence-backed screen composition and workflow boundary for HubSpot Revenue Overview. Derived from the authored observation record.
- **GUARD:** All fixture actions change local preview state only.

## Technical Data

### DOM Structure

- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Welcome screen linked quoting, billing and payments on the same record and offered Try Revenue Hub today and Set up online payments.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: An interactive lifecycle presented Sales-Led, Invoice-Based and Self-Serve at Scale models, then connected Deal, Quote, Contract, Invoice, Payment and Revenue Intelligence states.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: OBSERVED: Secondary cards covered AI-powered quotes, partners and payment education.
- **NOT OBSERVED:** Semantic DOM detail not independently captured. Source context: NOT ACTIVATED: Model changes, lifecycle stage controls, trial, payment setup, deal creation, partner directory and learning links.

### Network / API

- **NOT OBSERVED:** No request method, normalized route, payload shape, response shape, or status code was captured. Provider mutations were not exercised.

## Fictional Local Fixture

~~~yaml
workflow: "hubspot-revenue-overview"
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

- Parent workflow: hubspot-revenue-overview.
- Reusable level: screen.
- Sibling audit records share this parent and differ by component level.

## Sources

- Authored parent record: Research-Library/04-Component-Library/hubspot-revenue-hub/hubspot-revenue-overview.md.
- Generation contract: UI-Component-Library/scripts/generate-hubspot-deep-audit.mjs.
