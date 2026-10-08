---
component: "Contact scoring settings loading component"
ui_category: "AI configuration > loading"
source_product: "Freshsales"
parent_workflow: "Contact scoring settings"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact scoring settings loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Positive and negative score columns
- **RECONSTRUCTION:** Signal chips
- **RECONSTRUCTION:** Rule configuration boundary

## User actions

- **BOUNDARY:** Inspect scoring groups
- **BOUNDARY:** Select a fixture signal
- **BOUNDARY:** Do not persist scoring rules

## Network and API

- **OBSERVED:** GET /crm/sales/settings/contact_scoring?{query} -> 200. Request: none. Response: signals and score configuration. Trigger: Load scoring setup.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- AI configuration workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
