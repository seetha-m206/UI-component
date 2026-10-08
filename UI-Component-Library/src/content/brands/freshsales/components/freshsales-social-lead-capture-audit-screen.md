---
component: "Social lead capture settings screen component"
ui_category: "Lead generation > screen"
source_product: "Freshsales"
parent_workflow: "Social lead capture settings"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Social lead capture settings screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Social account list
- **OBSERVED:** No-account empty state
- **OBSERVED:** Connect account boundary

## User actions

- **OBSERVED:** Inspect account state
- **OBSERVED:** Keep provider connection unstarted
- **OBSERVED:** Do not authorize social accounts

## Network and API

- **OBSERVED:** GET /crm/marketer/social_accounts?{query} -> 200. Request: none. Response: social_accounts[]. Trigger: Load connected accounts.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
