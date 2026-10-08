---
component: "Admin settings catalogue atomic component"
ui_category: "Administration > atomic"
source_product: "Freshsales"
parent_workflow: "Admin settings catalogue"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent atomic-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Admin settings catalogue atomic component

## Evidence boundary

- **OBSERVED:** Small reusable controls, labels, rows, cards and inputs used by the workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Settings navigation groups
- **OBSERVED:** Search settings input
- **OBSERVED:** People, deals, data, channels and account cards

## User actions

- **OBSERVED:** Search Workflows
- **OBSERVED:** Inspect matching settings cards
- **OBSERVED:** Do not change configuration

## Network and API

- **OBSERVED:** GET /crm/sales/left_nav_bar -> 200. Request: none. Response: navigation groups. Trigger: Load settings navigation.
- **OBSERVED:** GET /crm/sales/features -> 200. Request: none. Response: features and flags. Trigger: Resolve visible settings.

## Registered fixture

- **RECONSTRUCTION:** Independent atomic-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- Administration workflow pattern for atomic-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
