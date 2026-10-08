---
component: "Sales sequences landing state component"
ui_category: "Automation > state"
source_product: "Freshsales"
parent_workflow: "Sales sequences landing"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Sales sequences landing state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
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

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
