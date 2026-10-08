---
component: "Roles and permissions screen component"
ui_category: "Access control > screen"
source_product: "Freshsales"
parent_workflow: "Roles and permissions"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Roles and permissions screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Role catalogue and license summary
- **OBSERVED:** Modules and action permission tables
- **OBSERVED:** Record types and field-permissions tabs

## User actions

- **OBSERVED:** Inspect the default role
- **OBSERVED:** Switch record-type and field-permission tabs
- **OBSERVED:** Do not assign users or save permissions

## Network and API

- **OBSERVED:** GET /crm/sales/settings/roles/{id}?{query} -> 200. Request: none. Response: role, scopes, abilities, limits, field_permissions. Trigger: Load role detail.
- **OBSERVED:** GET /crm/sales/settings/roles/modules_meta?{query} -> 200. Request: none. Response: module metadata[]. Trigger: Load module matrix.
- **OBSERVED:** GET /crm/sales/settings/roles/licenses?{query} -> 200. Request: none. Response: licenses and addons[]. Trigger: Load license summary.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Access control workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
