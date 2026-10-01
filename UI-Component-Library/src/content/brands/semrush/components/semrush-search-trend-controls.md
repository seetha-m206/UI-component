---
component: Semrush Search Trend Controls
ui_category: 'Data Visualization > Trend Chart Controls'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Trend-chart toolbar with time range, day or month aggregation, series visibility, organic or paid mode, notes, and export affordance.
---

# Component: Semrush Search Trend Controls

## Human View

Trend-chart toolbar with time range, day or month aggregation, series visibility, organic or paid mode, notes, and export affordance.

## State Fixtures

2Y selected, alternate range, Days or Months, series shown or hidden, loading chart, and synthetic chart.

## Technical View

Time range uses tabs, aggregation uses a two-option radio group, and each traffic or position series uses an independent checkbox. Export and notes remain separate actions.

## AI Context

Series checkboxes alter visibility only. Do not treat hidden series as zero data. Range and aggregation must be retained with chart interpretation.

## Evidence Boundary

- **OBSERVED:** 1M, 6M, 1Y, 2Y, All time, Days, Months, Export, Organic Traffic, Paid Traffic, Branded Traffic, organic or paid keyword mode, ranking-band series, notes, and chart loading.
- **RECONSTRUCTION:** Synthetic trend geometry, local toggles, and guarded export.
- **NOT OBSERVED:** Export file, chart hover tooltips, exact note contents, paid-mode results, or provider request payloads.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
