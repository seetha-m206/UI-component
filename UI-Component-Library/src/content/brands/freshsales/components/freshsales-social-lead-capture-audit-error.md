---
component: "Social lead capture settings error component"
ui_category: "Lead generation > error"
source_product: "Freshsales"
parent_workflow: "Social lead capture settings"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent error-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Social lead capture settings error component

## Evidence boundary

- **RECONSTRUCTION:** Error boundary. No user-facing provider error was manufactured or claimed as observed.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Social account list
- **RECONSTRUCTION:** No-account empty state
- **RECONSTRUCTION:** Connect account boundary

## User actions

- **BOUNDARY:** Inspect account state
- **BOUNDARY:** Keep provider connection unstarted
- **BOUNDARY:** Do not authorize social accounts

## Network and API

- **OBSERVED:** GET /crm/marketer/social_accounts?{query} -> 200. Request: none. Response: social_accounts[]. Trigger: Load connected accounts.

## Registered fixture

- **RECONSTRUCTION:** Independent error-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for error-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
