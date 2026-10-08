---
component: "Dashboards workspace atomic component"
ui_category: "Analytics > atomic"
source_product: "Freshsales"
parent_workflow: "Dashboards workspace"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Dashboards workspace atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
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

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Analytics workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
