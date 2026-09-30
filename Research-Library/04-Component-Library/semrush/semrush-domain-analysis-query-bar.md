---
component: Semrush Domain Analysis Query Bar
ui_category: 'Forms & Inputs > Compound Domain Query'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Persistent domain analysis bar with editable domain, clear action, domain-scope selector, and guarded Analyze action.
---

# Component: Semrush Domain Analysis Query Bar

## Human View

Persistent domain analysis bar with editable domain, clear action, domain-scope selector, and guarded Analyze action.

## State Fixtures

Populated, cleared, disabled Analyze, edited value, scope-open, and guarded action feedback.

## Technical View

A settable domain combobox is paired with a clear affordance, a domain-scope selector, and a high-emphasis Analyze action. Clearing the field disables local analysis.

## AI Context

Parse the domain value and scope as separate fields. Do not infer a provider request from local status text.

## Evidence Boundary

- **OBSERVED:** Authenticated persistent header with centilio.com, clear action, Root Domain scope, and Analyze button.
- **RECONSTRUCTION:** Fictional domain, local editing, disabled Analyze, and guarded Analyze feedback.
- **NOT OBSERVED:** Autocomplete suggestions, invalid-domain copy, live Analyze request, quota use, or result navigation.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
