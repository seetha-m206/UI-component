---
component: SE Ranking audit health score
ui_category: 'Data Display > Score Indicator'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: observed_reconstructed
---

# Component: SE Ranking audit health score

## Human View

The completed audit summary emphasizes Health Score 80 and provides Review issues.

## State Fixtures

- Observed Health Score 80.
- Synthetic disabled review action.
- Guarded local review feedback.

## Evidence Boundary

- **OBSERVED:** Score, label, and Review issues action.
- **RECONSTRUCTION:** Circular gauge, disabled state, and local feedback.
- **NOT OBSERVED:** Score calculation, issue destination, ranges, and refresh behavior.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview and audit-complete notification, 2026-09-30.
