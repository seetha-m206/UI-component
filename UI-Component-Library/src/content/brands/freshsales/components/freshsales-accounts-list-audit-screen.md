---
component: "Accounts list screen component"
ui_category: "CRM records > screen"
source_product: "Freshsales"
parent_workflow: "Accounts list"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Accounts list screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Saved-view selector and list toolbar
- **OBSERVED:** ARIA treegrid with account rows
- **OBSERVED:** Selection and pagination controls

## User actions

- **OBSERVED:** Inspect account rows
- **OBSERVED:** Open a record read-only
- **OBSERVED:** Keep bulk actions local

## Network and API

- **OBSERVED:** GET /crm/sales/sales_accounts?{query} -> 200. Request: none. Response: sales_accounts[], contacts[], users[], meta. Trigger: Load account rows.
- **OBSERVED:** GET /crm/sales/settings/module_customizations/{id}/column_customization?{query} -> 200. Request: none. Response: user_columns, meta. Trigger: Load columns.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
