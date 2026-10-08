---
component: "Marketing tracking code action component"
ui_category: "Lead generation > action"
source_product: "Freshsales"
parent_workflow: "Marketing tracking code"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Marketing tracking code action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
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

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
