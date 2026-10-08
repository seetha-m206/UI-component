---
component: "LinkedIn lead capture empty component"
ui_category: "Lead generation > empty"
source_product: "Freshsales"
parent_workflow: "LinkedIn lead capture"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# LinkedIn lead capture empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Integration setup summary
- **RECONSTRUCTION:** Account connection boundary
- **RECONSTRUCTION:** Lead mapping guidance

## User actions

- **BOUNDARY:** Inspect integration guidance
- **BOUNDARY:** Keep sign-in unstarted
- **BOUNDARY:** Do not authorize LinkedIn

## Network and API

- **OBSERVED:** GET /crm/sales/settings/linkedin?{query} -> 200. Request: none. Response: integration configuration. Trigger: Load LinkedIn settings.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
