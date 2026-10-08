---
component: "Roles and permissions loading component"
ui_category: "Access control > loading"
source_product: "Freshsales"
parent_workflow: "Roles and permissions"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Roles and permissions loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Role catalogue and license summary
- **RECONSTRUCTION:** Modules and action permission tables
- **RECONSTRUCTION:** Record types and field-permissions tabs

## User actions

- **BOUNDARY:** Inspect the default role
- **BOUNDARY:** Switch record-type and field-permission tabs
- **BOUNDARY:** Do not assign users or save permissions

## Network and API

- **OBSERVED:** GET /crm/sales/settings/roles/{id}?{query} -> 200. Request: none. Response: role, scopes, abilities, limits, field_permissions. Trigger: Load role detail.
- **OBSERVED:** GET /crm/sales/settings/roles/modules_meta?{query} -> 200. Request: none. Response: module metadata[]. Trigger: Load module matrix.
- **OBSERVED:** GET /crm/sales/settings/roles/licenses?{query} -> 200. Request: none. Response: licenses and addons[]. Trigger: Load license summary.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Access control workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
