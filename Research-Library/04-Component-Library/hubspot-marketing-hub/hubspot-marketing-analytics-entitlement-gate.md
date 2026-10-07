---
component: "HubSpot Marketing Analytics Entitlement Gate"
ui_category: "Marketing > Analytics"
source_product: "HubSpot Marketing Hub Professional"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Marketing Analytics Entitlement Gate

## Location

- **OBSERVED:** Marketing Analytics locked route at `/pricing/343751787/upgrade/locked-nav-item?upgradeSource=website-performance-reports-locked-nav-item`.

## Screenshots

- **OBSERVED:** `2026-10-07-marketing-analytics-upgrade-gate.png`.

## Screen, Actions & States

- **OBSERVED:** The gate described source reporting, visitor behavior, page performance and campaign tracking in one analytics surface.
- **OBSERVED:** Feature sections covered traffic-source filtering, page comparison, chart-type changes, dashboard saving and UTM dimensions.
- **OBSERVED:** Conversion controls and plan comparison tables were visible.
- **NOT ACTIVATED:** Talk to Sales, Start trial, View pricing, dashboard creation or report interaction.
- **NEEDS VERIFICATION:** Live dashboards, filters, chart changes, attribution, UTM drill-down, saved reports and exports.

## Fictional Local Fixture

```yaml
date_range: last_30_days
sessions: 12480
new_contacts: 318
customers: 24
top_source: organic_search
entitlement: locked
```

## Evidence Boundary

- **FACT:** The entitlement gate was directly observed.
- **RECONSTRUCTION:** All metrics are fictional and local only.
- **NEEDS VERIFICATION:** No authenticated analytics workspace was accessible.

## Sources

- Authenticated HubSpot Marketing Analytics entitlement gate, observed 2026-10-07.
