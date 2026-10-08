---
component: "Contact lifecycle stages loading component"
ui_category: "Data model > loading"
source_product: "Freshsales"
parent_workflow: "Contact lifecycle stages"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact lifecycle stages loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Ordered lifecycle-stage cards
- **RECONSTRUCTION:** Default-state labels
- **RECONSTRUCTION:** Stage actions boundary

## User actions

- **BOUNDARY:** Inspect stage order
- **BOUNDARY:** Select a stage locally
- **BOUNDARY:** Do not add, delete or reorder stages

## Network and API

- **OBSERVED:** GET /crm/sales/selector/lifecycle_stages?{query} -> 200. Request: none. Response: lifecycle_stages[]. Trigger: Load lifecycle stages.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
