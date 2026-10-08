---
component: "Analytics report library atomic component"
ui_category: "Analytics > atomic"
source_product: "Freshsales"
parent_workflow: "Analytics report library"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Analytics report library atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Report navigation and Help Center
- **OBSERVED:** New Report action and search
- **OBSERVED:** Curated report cards and pagination

## User actions

- **OBSERVED:** Inspect report cards
- **OBSERVED:** Open menu locally
- **OBSERVED:** Do not create or modify reports

## Network and API

- **OBSERVED:** POST /api/v2/session?checkSessionOnlyOnce={value} -> 200. Request: checkSessionOnlyOnce. Response: session schema. Trigger: Embedded report session.
- **OBSERVED:** GET /freshreports/document?{query} -> 200. Request: none. Response: report document schema. Trigger: Load analytics document.

## Registered fixture

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Analytics workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
