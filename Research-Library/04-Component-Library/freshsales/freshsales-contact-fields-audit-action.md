---
component: "Contact field configuration action component"
ui_category: "Data model > action"
source_product: "Freshsales"
parent_workflow: "Contact field configuration"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact field configuration action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Field groups and searchable field list
- **OBSERVED:** Preview modal with fictional inputs
- **OBSERVED:** Field-type picker with 53 available fields

## User actions

- **OBSERVED:** Open form preview
- **OBSERVED:** Open Add field picker
- **OBSERVED:** Close without adding or saving

## Network and API

- **OBSERVED:** GET /crm/sales/v2/settings/forms?{query} -> 200. Request: none. Response: forms[], fields[], meta. Trigger: Load contact form.
- **OBSERVED:** GET /crm/sales/selector/lifecycle_stages?{query} -> 200. Request: none. Response: lifecycle stages. Trigger: Populate preview selector.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
