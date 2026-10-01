---
component: Semrush Health Score Indicator
ui_category: 'Data Display > Score and Progress'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: mixed_observed_reconstructed
status: complete
summary: Metric score with healthy, warning, critical, loading, and no-data fixtures.
---

# Component: Semrush Health Score Indicator

## Human View

Summarizes a 0–100 health metric while keeping loading and missing data distinct from a poor score.

## State Fixtures

Healthy, needs attention, critical, loading, and no data.

## Technical View

- Exposes `role="progressbar"` and numeric ARIA bounds.
- Uses text plus a native progress element beside the visual ring.
- Does not translate missing data into zero.

## AI Context

Agents must keep `null`, loading, and zero separate. Threshold labels and fixture values are synthetic and require a product contract before production reuse.

## Evidence Boundary

- **OBSERVED:** Site Health and AI Visibility scores, loading transitions, and unconfigured states.
- **NOT OBSERVED:** Calculation formula, threshold contract, or shared visualization package.
- **RECONSTRUCTION:** Thresholds, values, and score-ring rendering are fictional.

## Sources

- [[semrush-site-audit-projects]]
- [[semrush-ai-visibility-dashboard]]
