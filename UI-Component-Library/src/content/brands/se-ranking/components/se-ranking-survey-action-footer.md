---
component: SE Ranking survey action footer
ui_category: 'Actions > Form Actions'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Guarded Skip and Complete actions with observed disabled and synthetic enabled states.
---

# Component: SE Ranking survey action footer

## Human View

Skip and Complete sit at the lower right of the survey dialog, with Complete unavailable until the response is valid.

## State Fixtures

- Observed no-selection action state.
- Synthetic enabled Complete state marked needs verification.
- Disabled action pair.

## Evidence Boundary

- **OBSERVED:** Skip, Complete, placement, and no-selection presentation.
- **RECONSTRUCTION:** Complete enablement, disabled group, and local feedback.
- **NOT OBSERVED:** Skip event, submission, validation, persistence, and success response.

## Sources

- **OBSERVATION:** Authenticated SE Ranking acquisition survey, 2026-09-30.
