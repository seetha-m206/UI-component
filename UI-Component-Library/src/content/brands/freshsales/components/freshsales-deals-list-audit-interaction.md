---
component: "Deals list and multi-view workspace interaction component"
ui_category: "CRM records > interaction"
source_product: "Freshsales"
parent_workflow: "Deals list and multi-view workspace"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "partial"
summary: "Independent interaction-level Freshsales audit record with fictional local fixtures and provider outcomes left unverified."
---

# Deals list and multi-view workspace interaction component

## Evidence boundary

- **OBSERVED:** Overlay, menu, drawer, tab or view transition exercised without a provider write.
- **RECONSTRUCTION:** The preview uses fictional identities and values and cannot contact Freshsales.
- **NOT OBSERVED:** Provider writes, persistence, destructive actions, external communications, uploads, AI prompts, billing and permission changes were not exercised.

## DOM structure

- **OBSERVED:** Saved-view selector and view switcher
- **OBSERVED:** Table, Pipeline and Forecast layouts
- **OBSERVED:** Sort, search, period and pagination controls

## User actions

- **OBSERVED:** Open the view switcher
- **OBSERVED:** Select Pipeline locally
- **OBSERVED:** Select Forecast and inspect period controls

## Network and API

- **OBSERVED:** GET /crm/sales/deals?{query} -> 200. Request: none. Response: deals[], pipelines[], stages[], products[], meta. Trigger: Load deal table.
- **OBSERVED:** POST /crm/sales/deals/kanban_funnels -> 200. Request: segment_id, group_by_type, interval_type?. Response: kanban groups. Trigger: Select Pipeline or Forecast.
- **OBSERVED:** POST /crm/sales/deals/kanban_headers -> 200. Request: group_by_type, ids[], segment_id, interval_type?. Response: kanban headers. Trigger: Load grouped columns.

## Registered fixture

- **RECONSTRUCTION:** Independent interaction-level preview with a local interaction boundary.
- **NEEDS VERIFICATION:** Any consequential provider outcome requires separate authorization and runtime evidence.

## Reusable pattern

- CRM records workflow pattern for interaction-level reuse.

## Sources

- **OBSERVED:** Authenticated, read-only Freshsales audit on 2026-10-08.
