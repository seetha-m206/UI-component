---
component: "Sales sequences landing atomic component"
ui_category: "Automation > atomic"
source_product: "Freshsales"
parent_workflow: "Sales sequences landing"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Sales sequences landing atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Sequence onboarding hero
- **OBSERVED:** Template cards
- **OBSERVED:** Step flow illustration

## User actions

- **OBSERVED:** Inspect templates
- **OBSERVED:** Preview local sequence steps
- **OBSERVED:** Do not activate outreach

## Network and API

- **OBSERVED:** GET /crm/sales/sales_sequences?{query} -> 200. Request: none. Response: sequence collection or onboarding state. Trigger: Load sequence library.

## Registered fixture

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
