---
component: "Deal record detail empty component"
ui_category: "CRM records > empty"
source_product: "Freshsales"
parent_workflow: "Deal record detail"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Deal record detail empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Deal action bar
- **RECONSTRUCTION:** Overview and Deal details sections
- **RECONSTRUCTION:** Won or Lost state and product action

## User actions

- **BOUNDARY:** Select Deal details
- **BOUNDARY:** Inspect fields
- **BOUNDARY:** Do not mark won, lost or add products

## Network and API

- **OBSERVED:** GET /crm/sales/deals/{id}?{query} -> 200. Request: none. Response: deal detail and related entities. Trigger: Load deal record.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
