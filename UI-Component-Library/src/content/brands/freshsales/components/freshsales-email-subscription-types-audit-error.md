---
component: "Email subscription types error component"
ui_category: "Marketing compliance > error"
source_product: "Freshsales"
parent_workflow: "Email subscription types"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent error-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Email subscription types error component

## Evidence boundary

- **RECONSTRUCTION:** Error boundary. No user-facing provider error was manufactured or claimed as observed.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Subscription-type cards
- **RECONSTRUCTION:** Status and description rows
- **RECONSTRUCTION:** Create and edit boundaries

## User actions

- **BOUNDARY:** Inspect subscription types
- **BOUNDARY:** Select a local card
- **BOUNDARY:** Do not change consent configuration

## Network and API

- **OBSERVED:** GET /crm/marketer/email-types?{query} -> 200. Request: none. Response: email_types[]. Trigger: Load subscription types.

## Registered fixture

- **RECONSTRUCTION:** Independent error-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Marketing compliance workflow pattern for error-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
