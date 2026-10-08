---
component: "Phone call workflows empty component"
ui_category: "Phone > empty"
source_product: "Freshsales"
parent_workflow: "Phone call workflows"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Phone call workflows empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Global Queue row
- **RECONSTRUCTION:** Call workflow creation cards
- **RECONSTRUCTION:** IVR, routing and AI handover options

## User actions

- **BOUNDARY:** Inspect workflow cards
- **BOUNDARY:** Select a fictional card locally
- **BOUNDARY:** Do not create routing or voice flows

## Network and API

- **OBSERVED:** GET /crm/sales/settings/phone/call_workflows?{query} -> 200. Request: none. Response: queues and workflow definitions. Trigger: Load call workflows.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Phone workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
