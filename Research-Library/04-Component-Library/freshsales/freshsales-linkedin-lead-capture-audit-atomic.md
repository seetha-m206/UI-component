---
component: "LinkedIn lead capture atomic component"
ui_category: "Lead generation > atomic"
source_product: "Freshsales"
parent_workflow: "LinkedIn lead capture"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# LinkedIn lead capture atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Integration setup summary
- **OBSERVED:** Account connection boundary
- **OBSERVED:** Lead mapping guidance

## User actions

- **OBSERVED:** Inspect integration guidance
- **OBSERVED:** Keep sign-in unstarted
- **OBSERVED:** Do not authorize LinkedIn

## Network and API

- **OBSERVED:** GET /crm/sales/settings/linkedin?{query} -> 200. Request: none. Response: integration configuration. Trigger: Load LinkedIn settings.

## Registered fixture

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
