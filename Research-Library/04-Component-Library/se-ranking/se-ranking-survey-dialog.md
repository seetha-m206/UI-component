---
component: SE Ranking acquisition survey dialog
ui_category: 'Feedback > Survey Dialog'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
---

# Component: SE Ranking acquisition survey dialog

## Human View

An account-level overlay asks how the user heard about SE Ranking. Eleven single-choice options appear in a compact scrollable dialog with Skip, Complete, and close controls.

## State Fixtures

- Observed open dialog with no selection.
- Observed Other selection with the conditional answer field.
- Observed Complete dismissal and absence after reload.

## Technical View

- The live accessibility tree exposed checkbox roles even though the layout visually appeared single-choice.
- The reconstruction uses radio controls to reflect the visible single-selection presentation.
- The local reconstruction preserves the observed selection, conditional answer, and completion states without calling SE Ranking.

## Evidence Boundary

- **OBSERVED:** Dialog copy, all eleven option labels, Other selection, conditional answer field, Complete action, dismissal, and absence after reload.
- **RECONSTRUCTION:** Radio semantics and local fixture transitions.
- **NOT OBSERVED:** Skip persistence, recurrence timing after a completed response, and a distinct success message because completion closed the survey without one.

## Sources

- **OBSERVATION:** Authenticated SE Ranking acquisition survey overlay and reload check, 2026-10-01.
