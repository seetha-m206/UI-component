---
component: SE Ranking setup actions
ui_category: 'Actions > Setup CTA'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Guarded AI tracking, analytics, and keyword setup calls to action assembled from Project Overview.
---

# Component: SE Ranking setup actions

## Human View

Project widgets use compact setup actions for AI tracking, analytics connection, and keyword tracking when data is absent or a module is not configured.

## State Fixtures

- Observed action labels assembled into one comparison specimen.
- Guarded local click feedback.
- Synthetic disabled set.

## Actions

| Element | Action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Set up AI tracking | Activate | Guard message only | Live flow **NOT OBSERVED** |
| Connect analytics | Activate | Guard message only | Live flow **NOT OBSERVED** |
| Add keywords | Activate | Guard message only | Live flow **NOT OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Action labels and their widget contexts.
- **RECONSTRUCTION:** Unified card presentation, disabled state, and local feedback.
- **NOT OBSERVED:** Setup steps, permissions, integrations, persistence, and provider API behavior.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
