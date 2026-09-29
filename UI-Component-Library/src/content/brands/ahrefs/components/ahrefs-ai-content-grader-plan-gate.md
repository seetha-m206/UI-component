---
component: Ahrefs AI Content Grader Plan Gate
ui_category: 'Data Display > Plan Availability State'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated experimental Enterprise-only availability state for AI Content Grader.
---

# Component: Ahrefs AI Content Grader Plan Gate

## Evidence boundary

The screen showed the AI Content Grader heading and stated that the experimental tool is available only on an Enterprise plan. No form or CTA was visible in the captured viewport.

Enterprise entitlement, grading inputs, AI processing, scoring, results, errors, pricing, and responsive behavior were not exercised.

## States and behavior

- Default reproduces the observed authenticated state using fictional values where data is needed.
- Interactive actions remain local and announce a needs-verification status.
- Disabled is a synthetic design-system state.
- No account, quota, pricing, analysis, project, permission, external navigation, deployment, commit, or push action is performed.

## Rules

- Preserve the Ahrefs dark shell, restrained neutral controls, and orange primary action hierarchy.
- Keep all live provider, project, permission, pricing, and quota behavior behind an explicit guard.
- Use accessible names for icon-only actions and visible labels for text inputs.
- Distinguish observed behavior from synthetic fixture states.

## Accessibility

Native buttons, inputs, selects, headings, status regions, step state, and dialog semantics are used in the reconstruction. Live focus management and keyboard behavior remain unverified unless explicitly observed.

## Technical data

- **OBSERVED:** The screen showed the AI Content Grader heading and stated that the experimental tool is available only on an Enterprise plan. No form or CTA was visible in the captured viewport.
- **NOT OBSERVED:** Enterprise entitlement, grading inputs, AI processing, scoring, results, errors, pricing, and responsive behavior were not exercised.
- **RECOMMENDATION:** Reuse this primitive across Seek workflows while exposing provider, permission, evidence, and cost state before execution.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions and fictional values only.
