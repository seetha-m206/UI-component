---
component: "Deals list and multi-view workspace empty component"
ui_category: "CRM records > empty"
source_product: "Freshsales"
parent_workflow: "Deals list and multi-view workspace"
last_verified: "2026-10-08"
evidence_state: "reconstructed"
status: "partial"
summary: "Independent empty-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Deals list and multi-view workspace empty component

## Evidence boundary

- **RECONSTRUCTION:** No-content or onboarding presentation isolated from the populated workflow.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **RECONSTRUCTION:** Saved-view selector and view switcher
- **RECONSTRUCTION:** Table, Pipeline and Forecast layouts
- **RECONSTRUCTION:** Sort, search, period and pagination controls

## User actions

- **BOUNDARY:** Open the view switcher
- **BOUNDARY:** Select Pipeline locally
- **BOUNDARY:** Select Forecast and inspect period controls

## Network and API

- **OBSERVED:** GET /crm/sales/deals?{query} -> 200. Request: none. Response: deals[], pipelines[], stages[], products[], meta. Trigger: Load deal table.
- **OBSERVED:** POST /crm/sales/deals/kanban_funnels -> 200. Request: segment_id, group_by_type, interval_type?. Response: kanban groups. Trigger: Select Pipeline or Forecast.
- **OBSERVED:** POST /crm/sales/deals/kanban_headers -> 200. Request: group_by_type, ids[], segment_id, interval_type?. Response: kanban headers. Trigger: Load grouped columns.

## Registered fixture

- **RECONSTRUCTION:** Independent empty-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for empty-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
