---
component: "Account record detail state component"
ui_category: "CRM records > state"
source_product: "Freshsales"
parent_workflow: "Account record detail"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Account record detail state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Account action bar
- **OBSERVED:** Overview and details sections
- **OBSERVED:** Contacts and deals relationships

## User actions

- **OBSERVED:** Inspect account overview
- **OBSERVED:** Switch detail section locally
- **OBSERVED:** Do not update relationships

## Network and API

- **OBSERVED:** GET /crm/sales/sales_accounts/{id}?{query} -> 200. Request: none. Response: account detail and related entities. Trigger: Load account record.

## Registered fixture

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
