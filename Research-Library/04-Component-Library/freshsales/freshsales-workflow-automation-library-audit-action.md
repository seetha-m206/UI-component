---
component: "Workflow automation library action component"
ui_category: "Automation > action"
source_product: "Freshsales"
parent_workflow: "Workflow automation library"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Workflow automation library action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Template-library heading
- **OBSERVED:** Workflow template cards
- **OBSERVED:** Create workflow boundary

## User actions

- **OBSERVED:** Inspect templates
- **OBSERVED:** Search locally
- **OBSERVED:** Do not create or activate automation

## Network and API

- **OBSERVED:** GET /crm/sales/workflow-automations/templates?{query} -> 200. Request: none. Response: workflow templates and metadata. Trigger: Load workflow library.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
