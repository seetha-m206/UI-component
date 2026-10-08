---
component: "Account field configuration loading component"
ui_category: "Data model > loading"
source_product: "Freshsales"
parent_workflow: "Account field configuration"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Account field configuration loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Account field groups
- **RECONSTRUCTION:** Searchable fields
- **RECONSTRUCTION:** Add field and Add group actions

## User actions

- **BOUNDARY:** Inspect account fields
- **BOUNDARY:** Search fixture fields
- **BOUNDARY:** Do not add or reorder fields

## Network and API

- **OBSERVED:** GET /crm/sales/v2/settings/forms?entities_form_for={value} -> 200. Request: none. Response: account forms[], fields[], meta. Trigger: Load account form.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
