---
component: SE Ranking survey action footer
ui_category: 'Actions > Form Actions'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Guarded Skip and Complete actions with observed disabled and synthetic enabled states.
---

# Component: SE Ranking survey action footer

## Human View

Skip and Complete sit at the lower right of the survey dialog, with Complete unavailable until the response is valid.

## State Fixtures

- Observed Skip and Complete presentation.
- Observed Complete after selecting Other.
- Observed survey dismissal and persistence after reload.
- Observed that the completed survey remains unavailable on a later authenticated revisit, preventing a valid Skip replay in this account.

## Evidence Boundary

- **OBSERVED:** Skip, Complete, placement, selected-response action, submission dismissal, and reload persistence.
- **RECONSTRUCTION:** Disabled specimen and local feedback copy.
- **NOT OBSERVED:** Skip persistence and explicit success response because completion closed the survey without a confirmation message and the account no longer receives the survey.

## Sources

- **OBSERVATION:** Authenticated SE Ranking acquisition survey, 2026-09-30.
- **OBSERVATION:** Authenticated Complete action and post-reload dismissal, 2026-10-01.
