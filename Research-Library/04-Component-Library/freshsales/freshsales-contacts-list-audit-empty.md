---
component: "Contacts list empty component"
ui_category: "CRM records > empty"
source_product: "Freshsales"
parent_workflow: "Contacts list"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contacts list empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Saved-view selector and table toolbar
- **RECONSTRUCTION:** ARIA treegrid with selectable rows
- **RECONSTRUCTION:** Pagination controls and per-page selector

## User actions

- **BOUNDARY:** Open saved views
- **BOUNDARY:** Open filters and column customization
- **BOUNDARY:** Switch Table and Status views

## Network and API

- **OBSERVED:** GET /crm/sales/contacts/filters?append_default_segments={value}&view_id[]={value} -> 200. Request: none. Response: filters[], meta. Trigger: Load saved views.
- **OBSERVED:** GET /crm/sales/contacts?{query} -> 200. Request: none. Response: contacts[], users[], accounts[], meta. Trigger: Load contact rows.
- **OBSERVED:** GET /crm/sales/settings/module_customizations/{id}/column_customization?{query} -> 200. Request: none. Response: user_columns, meta. Trigger: Load columns.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
