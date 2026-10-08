---
component: "Workflow automation library interaction component"
ui_category: "Automation > interaction"
source_product: "Freshsales"
parent_workflow: "Workflow automation library"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Workflow automation library interaction component

## Evidence boundary

- **RECONSTRUCTION:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Template-library heading
- **RECONSTRUCTION:** Workflow template cards
- **RECONSTRUCTION:** Create workflow boundary

## User actions

- **BOUNDARY:** Inspect templates
- **BOUNDARY:** Search locally
- **BOUNDARY:** Do not create or activate automation

## Network and API

- **OBSERVED:** GET /crm/sales/workflow-automations/templates?{query} -> 200. Request: none. Response: workflow templates and metadata. Trigger: Load workflow library.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
