---
component: "Classic web forms empty component"
ui_category: "Lead generation > empty"
source_product: "Freshsales"
parent_workflow: "Classic web forms"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Classic web forms empty component

## Evidence boundary

- **OBSERVED:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Classic forms navigation
- **OBSERVED:** Empty-state guidance
- **OBSERVED:** Create form boundary

## User actions

- **OBSERVED:** Inspect empty guidance
- **OBSERVED:** Keep create action local
- **OBSERVED:** Do not publish a form

## Network and API

- **OBSERVED:** GET /crm/sales/settings/forms -> 200. Request: none. Response: forms[] and metadata. Trigger: Load classic forms.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Lead generation workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
