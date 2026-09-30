---
component: SE Ranking audit loading panel
ui_category: 'Feedback > Loading State'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Website Audit loading card with a synthetic guarded stalled and Retry state.
---

# Component: SE Ranking audit loading panel

## Human View

The Website Audit widget reserves card space while audit data is loading.

## State Fixtures

- Observed loading state.
- Synthetic stalled state with guarded Retry.

## Evidence Boundary

- **OBSERVED:** Widget title and loading presentation.
- **RECONSTRUCTION:** Skeleton geometry, stalled message, and Retry action.
- **NOT OBSERVED:** Polling, timeout, retry request, error handling, and completion timing.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
