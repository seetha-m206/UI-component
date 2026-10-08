---
component: "Deal record detail interaction component"
ui_category: "CRM records > interaction"
source_product: "Freshsales"
parent_workflow: "Deal record detail"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Deal record detail interaction component

## Evidence boundary

- **OBSERVED:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Deal action bar
- **OBSERVED:** Overview and Deal details sections
- **OBSERVED:** Won or Lost state and product action

## User actions

- **OBSERVED:** Select Deal details
- **OBSERVED:** Inspect fields
- **OBSERVED:** Do not mark won, lost or add products

## Network and API

- **OBSERVED:** GET /crm/sales/deals/{id}?{query} -> 200. Request: none. Response: deal detail and related entities. Trigger: Load deal record.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
