---
component: Portfolio empty state
ui_category: 'Screen > Empty State'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed authenticated first-portfolio state with a guarded creation action.
---

# Component: Portfolio empty state

## Evidence boundary

Observed authenticated first-portfolio state with a guarded creation action.

Portfolio creation, URL analysis, persistence, quotas, and external actions were not exercised.

## States and behavior

- Default reproduces the observed authenticated state with fictional or public display values only.
- Interactive actions remain local. Guarded actions announce that live behavior needs verification.
- Disabled is a synthetic design-system state.
- No account, pricing, quota, export, alert, project, provider, deployment, commit, or push action is performed.

## Accessibility

Native headings, buttons, inputs, radio controls, tables, status regions, and selected-state attributes are used where applicable. Live focus management and backend navigation remain unverified unless explicitly observed.

## Sources

- **OBSERVATION:** Authenticated Ahrefs review in the Codex in-app browser, 2026-09-29.
- **RECONSTRUCTION:** Local React preview with guarded actions and no private workspace values.
