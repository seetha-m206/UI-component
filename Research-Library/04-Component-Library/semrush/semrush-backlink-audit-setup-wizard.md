---
component: Semrush Backlink Audit Setup Wizard
ui_category: 'Forms > Multi-step Setup'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Four-step modal wizard for campaign scope, brand settings, domain categories, and target countries with guarded submission.
---

# Component: Semrush Backlink Audit Setup Wizard

## Human View

A focused configuration dialog that separates required scope from three optional enrichment steps before an audit starts.

## State Fixtures

Campaign scope, brand settings, domain categories, target countries, source-warning alert, and safe closed state.

## Technical View

- Vertical tablist exposes the current step and preserves local choices.
- The close action exits without submitting.
- The primary Start action is disabled in the reconstruction.
- Mobile fixtures stack the rail above the active panel.

## AI Context

Model this as staged configuration. Do not equate visiting a step with saving its values or starting an audit.

## Evidence Boundary

- **OBSERVED:** Four named steps, optional labels, step navigation, modal close, radio, text, checkbox and tag-selection controls, and Start Backlink Audit.
- **RECONSTRUCTION:** Fictional values and warning copy.
- **NOT OBSERVED:** Submission payload, persistence, network response, validation failure, or successful audit creation. All require verification.

## Sources

- Authenticated Semrush Backlink Audit Settings modal, 2026-09-30.
