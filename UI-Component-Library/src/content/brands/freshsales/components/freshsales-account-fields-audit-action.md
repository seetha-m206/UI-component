---
component: "Account field configuration action component"
ui_category: "Data model > action"
source_product: "Freshsales"
parent_workflow: "Account field configuration"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Account field configuration action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Account field groups
- **OBSERVED:** Searchable fields
- **OBSERVED:** Add field and Add group actions

## User actions

- **OBSERVED:** Inspect account fields
- **OBSERVED:** Search fixture fields
- **OBSERVED:** Do not add or reorder fields

## Network and API

- **OBSERVED:** GET /crm/sales/v2/settings/forms?entities_form_for={value} -> 200. Request: none. Response: account forms[], fields[], meta. Trigger: Load account form.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
