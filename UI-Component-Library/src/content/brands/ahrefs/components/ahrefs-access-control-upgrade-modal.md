---
component: Ahrefs Access Control Upgrade Modal
ui_category: 'Overlays > Upgrade Modal'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Enterprise access-control upsell modal opened from project sharing settings.
---

# Component: Ahrefs Access Control Upgrade Modal

## Evidence boundary

Manage access opened a centered modal with a close control, Enterprise explanation, Upgrade plan action, and illustrative team list.

Pricing, permission changes, team-member selection, focus trapping, Escape handling, persistence, and upgrade completion were not exercised.

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

- **OBSERVED:** Manage access opened a centered modal with a close control, Enterprise explanation, Upgrade plan action, and illustrative team list.
- **NOT OBSERVED:** Pricing, permission changes, team-member selection, focus trapping, Escape handling, persistence, and upgrade completion were not exercised.
- **RECOMMENDATION:** Reuse this primitive across Seek workflows while exposing provider, permission, evidence, and cost state before execution.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions and fictional values only.
