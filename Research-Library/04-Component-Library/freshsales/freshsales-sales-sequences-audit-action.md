---
component: "Sales sequences landing action component"
ui_category: "Automation > action"
source_product: "Freshsales"
parent_workflow: "Sales sequences landing"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Sales sequences landing action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
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

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
