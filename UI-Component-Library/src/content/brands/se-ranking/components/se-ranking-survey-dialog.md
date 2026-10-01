---
component: SE Ranking acquisition survey dialog
ui_category: 'Feedback > Survey Dialog'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: observed_reconstructed
status: partial
summary: Observed acquisition-source survey with eleven options and guarded local Skip, Complete, and close actions.
---

# Component: SE Ranking acquisition survey dialog

## Human View

An account-level overlay asks how the user heard about SE Ranking. Eleven single-choice options appear in a compact scrollable dialog with Skip, Complete, and close controls.

## State Fixtures

- Observed open dialog with no selection.
- Reconstructed local selected option.
- Guarded local Skip and Complete status.

## Technical View

- The live accessibility tree exposed checkbox roles even though the layout visually appeared single-choice.
- The reconstruction uses radio controls to reflect the visible single-selection presentation.
- Complete stays disabled locally until one option is chosen, and neither action submits data.

## Evidence Boundary

- **OBSERVED:** Dialog copy, option labels, open state, close affordance, Skip, and Complete.
- **RECONSTRUCTION:** Radio semantics, selected styling, Complete enablement, and local close behavior.
- **NOT OBSERVED:** Successful dismissal, persisted response, survey submission, and recurrence rules. The live close control did not dismiss in this browser session.

## Sources

- **OBSERVATION:** Authenticated SE Ranking acquisition survey overlay, 2026-09-30.
