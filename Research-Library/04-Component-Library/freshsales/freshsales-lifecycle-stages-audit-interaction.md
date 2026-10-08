---
component: "Contact lifecycle stages interaction component"
ui_category: "Data model > interaction"
source_product: "Freshsales"
parent_workflow: "Contact lifecycle stages"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact lifecycle stages interaction component

## Evidence boundary

- **RECONSTRUCTION:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
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

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
