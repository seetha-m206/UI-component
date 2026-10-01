---
component: Rank pagination
ui_category: 'Navigation > Pagination'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed numbered Ahrefs Rank pagination with a distant final page and next control.
---

# Component: Rank pagination

## Evidence boundary

Observed numbered Ahrefs Rank pagination with a distant final page and next control.

The source was authenticated and observed on 2026-09-29. The Ahrefs session had expired on 2026-09-30, so this continuation reuses the dated source evidence rather than claiming a fresh live-provider verification. Backend requests, quotas, exports, saved settings, billing, navigation outcomes, and account mutations were not exercised.

## States and behavior

- Default reproduces the observed control or state with fictional values where a row is needed.
- Local selection, typing, and pagination are safe preview behavior.
- Provider-impacting actions announce a needs-verification status and remain local.
- Disabled is a synthetic design-system state.

## Accessibility

Native buttons, inputs, tables, tab roles, current-page state, disabled state, labels, and status regions are used where applicable. Source keyboard behavior and live focus management remain unverified.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **CONTINUATION:** Local reconstruction verified on 2026-09-30 after the live session returned to sign-in.
