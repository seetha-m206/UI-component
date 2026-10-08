---
component: "Admin settings search results action component"
ui_category: "Administration > action"
source_product: "Freshsales"
parent_workflow: "Admin settings search results"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent action-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Admin settings search results action component

## Evidence boundary

- **OBSERVED:** Visible action controls and the boundary before consequential provider behavior.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Settings search input
- **OBSERVED:** Filtered result cards
- **OBSERVED:** Clear-search control

## User actions

- **OBSERVED:** Enter Workflows in local fixture
- **OBSERVED:** Inspect matching cards
- **OBSERVED:** Clear search locally

## Network and API

- **OBSERVED:** GET /crm/sales/left_nav_bar -> 200. Request: none. Response: settings navigation groups. Trigger: Build searchable catalogue.

## Registered fixture

- **RECONSTRUCTION:** Independent action-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Administration workflow pattern for action-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
