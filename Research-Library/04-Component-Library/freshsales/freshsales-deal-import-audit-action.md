---
component: "Deal import step one action component"
ui_category: "Data import > action"
source_product: "Freshsales"
parent_workflow: "Deal import step one"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Deal import step one action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** File dropzone
- **OBSERVED:** Required-fields disclosure
- **OBSERVED:** Create, matching and owner fallback options

## User actions

- **OBSERVED:** Open required-fields popover
- **OBSERVED:** Inspect disabled Next state
- **OBSERVED:** Do not choose or upload a file

## Network and API

- **OBSERVED:** GET /crm/sales/deals/import?{query} -> 200. Request: none. Response: import setup and required fields. Trigger: Open import step one.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data import workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
