---
component: "Account record detail interaction component"
ui_category: "CRM records > interaction"
source_product: "Freshsales"
parent_workflow: "Account record detail"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Account record detail interaction component

## Evidence boundary

- **RECONSTRUCTION:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Account action bar
- **RECONSTRUCTION:** Overview and details sections
- **RECONSTRUCTION:** Contacts and deals relationships

## User actions

- **BOUNDARY:** Inspect account overview
- **BOUNDARY:** Switch detail section locally
- **BOUNDARY:** Do not update relationships

## Network and API

- **OBSERVED:** GET /crm/sales/sales_accounts/{id}?{query} -> 200. Request: none. Response: account detail and related entities. Trigger: Load account record.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
