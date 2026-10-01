---
component: SE Ranking audit-complete toast
ui_category: 'Feedback > Notification Toast'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: observed_reconstructed
status: partial
summary: Audit-complete notification with site, Health Score, review action, and local dismiss fixture.
---

# Component: SE Ranking audit-complete toast

## Human View

A floating notification reports that an initial site audit completed, names the site, displays its Health Score, and offers a direct review action.

## State Fixtures

- Observed open notification for centilio.com with Health Score 80.
- Reconstructed locally dismissed state with a restore control for review.

## Technical View

- The toast floats at the upper right above the active screen.
- The local review action does not navigate and the local close action only changes fixture state.

## Evidence Boundary

- **OBSERVED:** Completion label, site, score, review link copy, position, and close affordance.
- **RECONSTRUCTION:** Exact dimensions, local dismiss/restore behavior, and responsive placement.
- **NOT OBSERVED:** Auto-dismiss timing, live navigation outcome, queueing, and recurrence. These need verification.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview and Keyword Research screens, 2026-09-30.
