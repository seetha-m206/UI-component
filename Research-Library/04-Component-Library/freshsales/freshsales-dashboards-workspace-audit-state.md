---
component: "Dashboards workspace state component"
ui_category: "Analytics > state"
source_product: "Freshsales"
parent_workflow: "Dashboards workspace"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent state-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Dashboards workspace state component

## Evidence boundary

- **OBSERVED:** Selected, disabled, expanded and default visual states.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Application rail and global header
- **OBSERVED:** Calendar, quick links and summary regions
- **OBSERVED:** Freddy AI insights region

## User actions

- **OBSERVED:** Switch dashboard tab locally
- **OBSERVED:** Inspect a KPI card
- **OBSERVED:** Keep report creation out of scope

## Network and API

- **OBSERVED:** GET /crm/sales/my_dashboards -> 200. Request: none. Response: HTML document. Trigger: Initial navigation.
- **OBSERVED:** GET /crm/sales/features -> 200. Request: none. Response: features[], temp_features[], feature_flags[], success. Trigger: Workspace bootstrap.

## Registered fixture

- **RECONSTRUCTION:** Independent state-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Analytics workflow pattern for state-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
