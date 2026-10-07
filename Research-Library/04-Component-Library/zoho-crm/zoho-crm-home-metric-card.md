---
component: "Zoho CRM Home Metric Card"
ui_category: "Dashboard > Metric card"
source_product: "Zoho CRM"
last_verified: "2026-10-07"
evidence_state: "documented"
status: "partial"
summary: "Compact Home cards present one named CRM metric, a point-in-time value and a component refresh control."
---

# Component: Zoho CRM Home Metric Card

## Overview

The first row of Home contains compact metric cards for open deals, untouched deals, calls today and leads. Each card pairs a title with a large value and a component-level refresh control.

## Actions

| Element | User action | Observed result | State |
|---|---|---|---|
| Refresh Component | Activate | **NEEDS VERIFICATION:** request and visual feedback not exercised | Unverified |
| Card body | Select | **NEEDS VERIFICATION:** drill-down behavior not exercised | Unverified |

## Behavior & States

**OBSERVED:** Four equal-width cards appear in one row. Values are account-derived and point-in-time.

**RECONSTRUCTION:** Public examples use invented values and do not reproduce authenticated counts.

**NEEDS VERIFICATION:** loading, stale, unavailable, error, zero-versus-empty distinction, drill-down and refresh timing.

## Rules & Validation

Live values are intentionally excluded from public fixtures because they may represent private business data and change over time.

## Technical Data

- **OBSERVED:** Each card is contained by a Home component identifier and exposes a button named `Refresh Component`.
- **NOT OBSERVED:** Aggregation query, time zone, cache rules, refresh endpoint and authorization filtering.

### State Fixtures

```json
{"label":"My Open Deals","value":12,"trend":null,"refreshing":false}
```

## Accessibility

**NEEDS VERIFICATION:** whether the value is associated with its label, whether refresh announces completion and whether cards are interactive keyboard targets.

## Sources

Authenticated Zoho CRM Home, observed 2026-10-07. Private receipt `01-home-dashboard.png`.
