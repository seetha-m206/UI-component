---
component: "Admin settings catalogue loading component"
ui_category: "Administration > loading"
source_product: "Freshsales"
parent_workflow: "Admin settings catalogue"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent loading-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Admin settings catalogue loading component

## Evidence boundary

- **RECONSTRUCTION:** Loading presentation isolated from the completed workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Settings navigation groups
- **RECONSTRUCTION:** Search settings input
- **RECONSTRUCTION:** People, deals, data, channels and account cards

## User actions

- **BOUNDARY:** Search Workflows
- **BOUNDARY:** Inspect matching settings cards
- **BOUNDARY:** Do not change configuration

## Network and API

- **OBSERVED:** GET /crm/sales/left_nav_bar -> 200. Request: none. Response: navigation groups. Trigger: Load settings navigation.
- **OBSERVED:** GET /crm/sales/features -> 200. Request: none. Response: features and flags. Trigger: Resolve visible settings.

## Registered fixture

- **RECONSTRUCTION:** Independent loading-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Administration workflow pattern for loading-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
