---
component: "Marketing tracking code loading component"
ui_category: "Lead generation > loading"
source_product: "Freshsales"
parent_workflow: "Marketing tracking code"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Marketing tracking code loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Tracking setup instructions
- **RECONSTRUCTION:** Domain entry row
- **RECONSTRUCTION:** Script installation guidance

## User actions

- **BOUNDARY:** Inspect tracking instructions
- **BOUNDARY:** Use a fictional domain fixture
- **BOUNDARY:** Do not install tracking code

## Network and API

- **OBSERVED:** GET /crm/marketer/tracking?{query} -> 200. Request: none. Response: tracking settings and domains. Trigger: Load tracking settings.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
