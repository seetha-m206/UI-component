---
component: "Accounts list interaction component"
ui_category: "CRM records > interaction"
source_product: "Freshsales"
parent_workflow: "Accounts list"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Accounts list interaction component

## Evidence boundary

- **RECONSTRUCTION:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Saved-view selector and list toolbar
- **RECONSTRUCTION:** ARIA treegrid with account rows
- **RECONSTRUCTION:** Selection and pagination controls

## User actions

- **BOUNDARY:** Inspect account rows
- **BOUNDARY:** Open a record read-only
- **BOUNDARY:** Keep bulk actions local

## Network and API

- **OBSERVED:** GET /crm/sales/sales_accounts?{query} -> 200. Request: none. Response: sales_accounts[], contacts[], users[], meta. Trigger: Load account rows.
- **OBSERVED:** GET /crm/sales/settings/module_customizations/{id}/column_customization?{query} -> 200. Request: none. Response: user_columns, meta. Trigger: Load columns.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
