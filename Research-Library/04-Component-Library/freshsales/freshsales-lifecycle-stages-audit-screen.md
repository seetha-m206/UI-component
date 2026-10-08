---
component: "Contact lifecycle stages screen component"
ui_category: "Data model > screen"
source_product: "Freshsales"
parent_workflow: "Contact lifecycle stages"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Contact lifecycle stages screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Ordered lifecycle-stage cards
- **OBSERVED:** Default-state labels
- **OBSERVED:** Stage actions boundary

## User actions

- **OBSERVED:** Inspect stage order
- **OBSERVED:** Select a stage locally
- **OBSERVED:** Do not add, delete or reorder stages

## Network and API

- **OBSERVED:** GET /crm/sales/selector/lifecycle_stages?{query} -> 200. Request: none. Response: lifecycle_stages[]. Trigger: Load lifecycle stages.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Data model workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
