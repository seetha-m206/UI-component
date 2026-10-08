---
component: "Contact scoring settings empty component"
ui_category: "AI configuration > empty"
source_product: "Freshsales"
parent_workflow: "Contact scoring settings"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact scoring settings empty component

## Evidence boundary

- **OBSERVED:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Positive and negative score columns
- **OBSERVED:** Signal chips
- **OBSERVED:** Rule configuration boundary

## User actions

- **OBSERVED:** Inspect scoring groups
- **OBSERVED:** Select a fixture signal
- **OBSERVED:** Do not persist scoring rules

## Network and API

- **OBSERVED:** GET /crm/sales/settings/contact_scoring?{query} -> 200. Request: none. Response: signals and score configuration. Trigger: Load scoring setup.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- AI configuration workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
