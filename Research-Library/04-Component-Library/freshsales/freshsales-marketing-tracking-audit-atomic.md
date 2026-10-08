---
component: "Marketing tracking code atomic component"
ui_category: "Lead generation > atomic"
source_product: "Freshsales"
parent_workflow: "Marketing tracking code"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Marketing tracking code atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Tracking setup instructions
- **OBSERVED:** Domain entry row
- **OBSERVED:** Script installation guidance

## User actions

- **OBSERVED:** Inspect tracking instructions
- **OBSERVED:** Use a fictional domain fixture
- **OBSERVED:** Do not install tracking code

## Network and API

- **OBSERVED:** GET /crm/marketer/tracking?{query} -> 200. Request: none. Response: tracking settings and domains. Trigger: Load tracking settings.

## Registered fixture

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
