---
component: "Contacts list state component"
ui_category: "CRM records > state"
source_product: "Freshsales"
parent_workflow: "Contacts list"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contacts list state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Saved-view selector and table toolbar
- **OBSERVED:** ARIA treegrid with selectable rows
- **OBSERVED:** Pagination controls and per-page selector

## User actions

- **OBSERVED:** Open saved views
- **OBSERVED:** Open filters and column customization
- **OBSERVED:** Switch Table and Status views

## Network and API

- **OBSERVED:** GET /crm/sales/contacts/filters?append_default_segments={value}&view_id[]={value} -> 200. Request: none. Response: filters[], meta. Trigger: Load saved views.
- **OBSERVED:** GET /crm/sales/contacts?{query} -> 200. Request: none. Response: contacts[], users[], accounts[], meta. Trigger: Load contact rows.
- **OBSERVED:** GET /crm/sales/settings/module_customizations/{id}/column_customization?{query} -> 200. Request: none. Response: user_columns, meta. Trigger: Load columns.

## Registered fixture

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
