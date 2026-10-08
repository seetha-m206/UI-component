---
component: "Phone call workflows screen component"
ui_category: "Phone > screen"
source_product: "Freshsales"
parent_workflow: "Phone call workflows"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent screen-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Phone call workflows screen component

## Evidence boundary

- **OBSERVED:** Screen-level composition, navigation regions and workflow layout.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Global Queue row
- **OBSERVED:** Call workflow creation cards
- **OBSERVED:** IVR, routing and AI handover options

## User actions

- **OBSERVED:** Inspect workflow cards
- **OBSERVED:** Select a fictional card locally
- **OBSERVED:** Do not create routing or voice flows

## Network and API

- **OBSERVED:** GET /crm/sales/settings/phone/call_workflows?{query} -> 200. Request: none. Response: queues and workflow definitions. Trigger: Load call workflows.

## Registered fixture

- **RECONSTRUCTION:** Independent screen-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Phone workflow pattern for screen-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
