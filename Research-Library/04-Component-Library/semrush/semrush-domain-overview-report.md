---
component: Semrush Domain Overview Report
ui_category: 'Application Layout > Domain Analytics Workspace'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Authenticated domain analytics workspace with query header, breadcrumbs, report filters, tabs, metric summary, country distribution, and trends.
---

# Component: Semrush Domain Overview Report

## Human View

Authenticated domain analytics workspace with query header, breadcrumbs, report filters, tabs, metric summary, country distribution, and trends.

## State Fixtures

Loading skeleton, populated synthetic report, tab-selected report, gated tab, and recoverable error.

## Technical View

The workspace separates persistent query controls from report context. Overview combines metric cards, country distribution, SERP distribution, and traffic or keyword trends while preserving filter context above.

## AI Context

Treat every metric as filter-scoped. Fixture values are synthetic and must not be attributed to the observed domain.

## Evidence Boundary

- **OBSERVED:** Authenticated report shell, breadcrumbs, user manual and feedback links, Export to PDF control, country, device, date and currency context, report tabs, loading skeletons, summary cards, distribution tables, trend charts, notification card, sparse-data state, and recoverable error.
- **RECONSTRUCTION:** Fictional domain and metric values, local interactions, responsive layout, and guarded export.
- **NOT OBSERVED:** Exported file contents, feedback submission, cross-filter network behavior, chart hover values, or successful report retry.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
