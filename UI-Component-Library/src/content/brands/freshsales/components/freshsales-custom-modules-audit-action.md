---
component: "Custom module configuration action component"
ui_category: "Data model > action"
source_product: "Freshsales"
parent_workflow: "Custom module configuration"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Custom module configuration action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Custom module settings shell
- **OBSERVED:** No-module empty state
- **OBSERVED:** Create-module boundary

## User actions

- **OBSERVED:** Inspect the empty state
- **OBSERVED:** Keep Create module disabled locally
- **OBSERVED:** Do not create schema

## Network and API

- **OBSERVED:** GET /crm/sales/settings/custom_modules?{query} -> 200. Request: none. Response: custom_modules[]. Trigger: Load custom modules.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
