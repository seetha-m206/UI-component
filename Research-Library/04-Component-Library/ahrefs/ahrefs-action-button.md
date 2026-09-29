---
component: Ahrefs Action Button
ui_category: 'Actions > Button'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Reusable Ahrefs primary, secondary, ghost, loading, and disabled action treatments.
---

# Component: Ahrefs Action Button

## Evidence boundary

Orange primary actions appeared for Continue and pricing. Bordered secondary actions appeared for Manage access. Cancel used a quiet header action.

Server-side loading timing, destructive styling, success confirmation, and retry behavior were not observed. Loading is a synthetic preview state.

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

- **OBSERVED:** Orange primary actions appeared for Continue and pricing. Bordered secondary actions appeared for Manage access. Cancel used a quiet header action.
- **NOT OBSERVED:** Server-side loading timing, destructive styling, success confirmation, and retry behavior were not observed. Loading is a synthetic preview state.
- **RECOMMENDATION:** Reuse this primitive across Seek workflows while exposing provider, permission, evidence, and cost state before execution.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions and fictional values only.
