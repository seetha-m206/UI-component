---
component: Similarweb onboarding progress action
ui_category: 'Actions > Primary Button'
source_product: Similarweb
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Full-width pill Next action observed disabled at the bottom of an incomplete onboarding step.
---

# Component: Similarweb onboarding progress action

## Human View

A full-width pill action anchors the bottom of the onboarding viewport. At the observed empty step it is muted and unavailable, reinforcing that a job title must be chosen first.

## State Fixtures

- Observed disabled Next state.
- Synthetic enabled state labelled **needs verification**.

## Technical View

- Native button semantics preserve disabled behavior.
- The local enabled fixture is guarded and reports that no provider submission occurred.
- The arrow is decorative and hidden from assistive technology.

## Actions

| Element | User action | Observed result | Evidence boundary |
|---|---|---|---|
| Next while empty | Activate | Button cannot be activated | **OBSERVED** |
| Next after selection | Activate | Not exercised | **NOT OBSERVED**, needs verification |

## AI Context

Never describe the enabled style, navigation target, validation, or save behavior as provider-observed. The enabled specimen exists only to complete the local design-state set.

## Evidence Boundary

- **OBSERVED:** Label, arrow, bottom placement, full-width pill shape, muted disabled styling, and disabled semantics.
- **RECONSTRUCTION:** Enabled styling and guarded status response.
- **INFERENCE:** A valid selection enables Next.
- **NOT OBSERVED:** Loading state, error state, submission request, navigation, persistence, and double-submit handling. All need verification.

## Sources

- **OBSERVATION:** Authenticated Similarweb account onboarding in the Codex in-app browser, 2026-09-30.
