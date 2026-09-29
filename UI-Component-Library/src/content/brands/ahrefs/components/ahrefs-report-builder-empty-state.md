---
component: Report Builder empty state
ui_category: 'Screen > Empty State'
source_product: Ahrefs
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Observed authenticated first-report state with a guarded creation action.
---

# Component: Report Builder empty state

## Evidence boundary

Observed authenticated first-report state with a guarded creation action.

Report creation, widgets, scheduling, export, persistence, and external actions were not exercised.

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
