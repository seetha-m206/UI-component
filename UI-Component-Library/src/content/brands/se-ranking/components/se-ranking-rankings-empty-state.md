---
component: SE Ranking rankings empty state
ui_category: 'Feedback > Empty State'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: observed_reconstructed
status: partial
summary: No-keywords state with a guarded Add keywords action and disabled fixture.
---

# Component: SE Ranking rankings empty state

## Human View

The Rankings widget explains that no keywords are tracked and places a single Add keywords action beneath the message.

## State Fixtures

- Observed empty state.
- Synthetic disabled action.
- Guarded local action feedback.

## Actions

| Element | Action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Add keywords | Activate | Shows a local guard message | Live outcome **NOT OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Empty copy, action label, and widget context.
- **RECONSTRUCTION:** Icon, disabled state, and local guard status.
- **NOT OBSERVED:** Setup destination, validation, quota effects, and successful keyword creation.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
