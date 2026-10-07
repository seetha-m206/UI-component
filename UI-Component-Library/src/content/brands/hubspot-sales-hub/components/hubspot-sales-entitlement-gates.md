---
component: "HubSpot Sales Entitlement Gate"
ui_category: "Conversion > Feature Gate"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Reusable feature-entitlement page preserving navigation context, plan comparison, benefit education and conversion controls."
---

# HubSpot Sales Entitlement Gate

## Location

- **OBSERVED:** Locked navigation destinations under `/pricing/343751787/upgrade/locked-nav-item` for Sales Workspace, Forecast, Sales Analytics, Sequences, Documents, Prospecting Agent and Workflows.

## Screenshots

- **OBSERVED:** `2026-10-07-sales-workspace-upgrade-gate.png`, `2026-10-07-forecast-upgrade-gate.png`, `2026-10-07-sales-analytics-upgrade-gate.png`, `2026-10-07-sequences-upgrade-gate.png`, `2026-10-07-documents-upgrade-gate.png`, `2026-10-07-prospecting-agent-upgrade-gate.png`, and `2026-10-07-workflows-upgrade-gate.png` under the Sales Hub evidence screenshot directory.

## Structure

- **OBSERVED:** Every gate preserves the shared HubSpot shell and replaces the product workspace with a marketing-led feature page.
- **OBSERVED:** The hero pairs a task-oriented value statement with plan-specific entitlement copy and one or two conversion actions.
- **OBSERVED:** Sales Workspace, Forecast, Sales Analytics, Sequences and Workflows offered Talk to Sales and Start 14-day trial for Sales Hub Professional.
- **OBSERVED:** Documents and Prospecting Agent offered Buy now and Talk to Sales for Starter Customer Platform.
- **OBSERVED:** Supporting content uses benefit cards followed by Free-versus-paid feature comparison tables.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Locked nav item | Open | Routed to a feature-specific entitlement page with `upgradeSource` in the URL. |
| Talk to Sales, Start trial and Buy now | Not activated | Commercial, trial, billing and lead-capture outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** The locked destination explains value before presenting plan limits.
- **OBSERVED:** The source navigation item remains discoverable even when access is unavailable.
- **NEEDS VERIFICATION:** Trial activation, checkout, sales handoff, seat assignment and post-upgrade return routing.

## Technical Data

- **OBSERVED / DOM:** Each gate exposes a distinct `upgradeSource` query parameter, allowing navigation origin attribution.
- **OBSERVED / DOM:** Current-plan buttons in comparison tables are disabled.
- **NEEDS VERIFICATION:** Analytics events, entitlement API and upgrade persistence.

## Human Context

- **RECOMMENDATION:** Preserve user orientation at the moment of denial. Name the unavailable capability, explain its practical value, show the required plan and offer a reversible way back.

## AI Context

- **FACT:** The seven feature gates and their conversion controls were directly observed.
- **RECONSTRUCTION:** A local preview may use fictional plans and static comparison data only.
- **NEEDS VERIFICATION:** No trial, purchase, sales request or account change was initiated.

## Sources

- Authenticated HubSpot Sales navigation and feature gates, observed 2026-10-07.
