---
component: "Dashboards workspace empty component"
ui_category: "Analytics > empty"
source_product: "Freshsales"
parent_workflow: "Dashboards workspace"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Dashboards workspace empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Application rail and global header
- **RECONSTRUCTION:** Calendar, quick links and summary regions
- **RECONSTRUCTION:** Freddy AI insights region

## User actions

- **BOUNDARY:** Switch dashboard tab locally
- **BOUNDARY:** Inspect a KPI card
- **BOUNDARY:** Keep report creation out of scope

## Network and API

- **OBSERVED:** GET /crm/sales/my_dashboards -> 200. Request: none. Response: HTML document. Trigger: Initial navigation.
- **OBSERVED:** GET /crm/sales/features -> 200. Request: none. Response: features[], temp_features[], feature_flags[], success. Trigger: Workspace bootstrap.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Analytics workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
