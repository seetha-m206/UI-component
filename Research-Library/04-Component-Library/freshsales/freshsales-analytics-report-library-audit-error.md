---
component: "Analytics report library error component"
ui_category: "Analytics > error"
source_product: "Freshsales"
parent_workflow: "Analytics report library"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent error-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Analytics report library error component

## Evidence boundary

- **RECONSTRUCTION:** Error boundary. No user-facing provider error was manufactured or claimed as observed.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Report navigation and Help Center
- **RECONSTRUCTION:** New Report action and search
- **RECONSTRUCTION:** Curated report cards and pagination

## User actions

- **BOUNDARY:** Inspect report cards
- **BOUNDARY:** Open menu locally
- **BOUNDARY:** Do not create or modify reports

## Network and API

- **OBSERVED:** POST /api/v2/session?checkSessionOnlyOnce={value} -> 200. Request: checkSessionOnlyOnce. Response: session schema. Trigger: Embedded report session.
- **OBSERVED:** GET /freshreports/document?{query} -> 200. Request: none. Response: report document schema. Trigger: Load analytics document.

## Registered fixture

- **RECONSTRUCTION:** Independent error-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Analytics workflow pattern for error-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
