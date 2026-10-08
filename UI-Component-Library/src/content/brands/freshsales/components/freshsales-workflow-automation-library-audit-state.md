---
component: "Workflow automation library state component"
ui_category: "Automation > state"
source_product: "Freshsales"
parent_workflow: "Workflow automation library"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Workflow automation library state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
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

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Automation workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
