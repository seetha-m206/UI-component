---
component: "Roles and permissions empty component"
ui_category: "Access control > empty"
source_product: "Freshsales"
parent_workflow: "Roles and permissions"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Roles and permissions empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
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

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Access control workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
