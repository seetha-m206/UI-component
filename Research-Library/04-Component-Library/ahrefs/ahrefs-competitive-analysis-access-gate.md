---
component: Ahrefs Competitive Analysis Access Gate
ui_category: 'Data Display > Access Gate'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Competitive Analysis pricing gate with product promise, pricing action, and report-preview surface.
---

# Component: Ahrefs Competitive Analysis Access Gate

## Evidence boundary

The screen showed the Competitive Analysis heading, a comparison-focused description, an orange See pricing action, and a large tutorial report preview.

Pricing destination, checkout, competitor setup, live reports, filters, exports, quotas, and results were not exercised.

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

- **OBSERVED:** The screen showed the Competitive Analysis heading, a comparison-focused description, an orange See pricing action, and a large tutorial report preview.
- **NOT OBSERVED:** Pricing destination, checkout, competitor setup, live reports, filters, exports, quotas, and results were not exercised.
- **RECOMMENDATION:** Reuse this primitive across Seek workflows while exposing provider, permission, evidence, and cost state before execution.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions and fictional values only.
