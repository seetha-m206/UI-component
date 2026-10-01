---
component: SE Ranking audit loading panel
ui_category: 'Feedback > Loading State'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Website Audit launch confirmation and active crawl progress states observed in the authenticated product.
---

# Component: SE Ranking audit loading panel

## Human View

The audit flow shows a confirmation before a manual launch, then replaces the report with a timed progress panel and live crawl counters.

## State Fixtures

- Observed Launch website audit confirmation.
- Observed Don’t ask again option, Cancel, and Launch Audit actions.
- Observed active crawl with elapsed time, email notice, five counters, and Stop Audit.
- Observed completed-report boundary where Refresh launches a new audit and no failure-specific Retry is present.

## Evidence Boundary

- **OBSERVED:** Manual launch confirmation, scan-frequency explanation, launch action, active progress state, elapsed timer, live counters, email notice, and Stop Audit action.
- **RECONSTRUCTION:** Responsive local layout and local action feedback.
- **NOT OBSERVED:** Failure-specific Retry label. The live provider exposed Launch Audit for a fresh run instead.
- **BOUNDARY:** The successful run completed with 476 pages, so manufacturing a failure would not establish a naturally occurring provider Retry state.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
- **OBSERVATION:** Authenticated Website Audit manual launch and active crawl, 2026-10-01.
