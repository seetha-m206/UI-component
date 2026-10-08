---
component: "CRM code library action component"
ui_category: "Developer tools > action"
source_product: "Freshsales"
parent_workflow: "CRM code library"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# CRM code library action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Onboarding explanation
- **OBSERVED:** Code snippet cards
- **OBSERVED:** Copy and setup boundaries

## User actions

- **OBSERVED:** Inspect snippet categories
- **OBSERVED:** Copy fictional text locally
- **OBSERVED:** Do not install or publish code

## Network and API

- **OBSERVED:** GET /crm/sales/settings/code_library?{query} -> 200. Request: none. Response: code resources or onboarding state. Trigger: Load code library.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Developer tools workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
