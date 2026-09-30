---
component: Similarweb onboarding workspace
ui_category: 'Application Layout > Onboarding'
source_product: Similarweb
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Authenticated step-four account-completion gate with progress, prompt, searchable job-title field, and fixed progression action.
---

# Component: Similarweb onboarding workspace

## Human View

A sparse single-task onboarding screen keeps attention on one question. A back action and progress bar sit above the prompt. The primary action remains fixed at the bottom and disabled until an answer is chosen.

## State Fixtures

- Observed empty gate at step 4 of 11.
- Observed open searchable selector.
- Observed `Marketing` result list.
- Synthetic disabled specimen for design-system review.

## Technical View

- Three-row viewport layout: progress header, centered question content, fixed action footer.
- Progress is represented as both text (`4/11`) and a 36.36% bar.
- Direct navigation to `pro.similarweb.com` redirected to this gate while onboarding was incomplete.
- The local preview never navigates, persists answers, or calls Similarweb.

## Actions

| Element | User action | Observed result | Evidence boundary |
|---|---|---|---|
| Back control | Activate | Not exercised | **NOT OBSERVED**, needs verification |
| Job-title selector | Open | Search input and `Type to search` list state appear | **OBSERVED** |
| Next | Activate while empty | Control is disabled | **OBSERVED** |
| Direct product URL | Navigate | Redirects to onboarding step 4 | **OBSERVED** |

## AI Context

Treat this as an account-completion gate, not the Similarweb product shell. Do not infer later onboarding questions, persisted answers, or product access from the reconstruction.

## Evidence Boundary

- **OBSERVED:** Authenticated step 4 of 11, question copy, supporting copy, back control, progress bar, empty selector, disabled Next action, and product-URL redirect.
- **RECONSTRUCTION:** Responsive dimensions, focus styling, and local status messages.
- **INFERENCE:** The bottom action becomes enabled after a valid selection.
- **NOT OBSERVED:** Earlier or later questions, Next submission, persistence, error handling, completed onboarding, and the product workspace. All need verification.

## Sources

- **OBSERVATION:** Authenticated Similarweb account onboarding in the Codex in-app browser, 2026-09-30.
