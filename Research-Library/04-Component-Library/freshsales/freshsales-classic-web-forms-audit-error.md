---
component: "Classic web forms error component"
ui_category: "Lead generation > error"
source_product: "Freshsales"
parent_workflow: "Classic web forms"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent error-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Classic web forms error component

## Evidence boundary

- **RECONSTRUCTION:** Error boundary. No user-facing provider error was manufactured or claimed as observed.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Classic forms navigation
- **RECONSTRUCTION:** Empty-state guidance
- **RECONSTRUCTION:** Create form boundary

## User actions

- **BOUNDARY:** Inspect empty guidance
- **BOUNDARY:** Keep create action local
- **BOUNDARY:** Do not publish a form

## Network and API

- **OBSERVED:** GET /crm/sales/settings/forms -> 200. Request: none. Response: forms[] and metadata. Trigger: Load classic forms.

## Registered fixture

- **RECONSTRUCTION:** Independent error-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for error-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
