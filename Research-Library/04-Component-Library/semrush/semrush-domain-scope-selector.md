---
component: Semrush Domain Scope Selector
ui_category: 'Forms & Inputs > Domain Scope Menu'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Domain-scope popover that pairs the current domain with Root Domain, Exact URL, Subdomain, and Subfolder choices.
---

# Component: Semrush Domain Scope Selector

## Human View

Domain-scope popover that pairs the current domain with Root Domain, Exact URL, Subdomain, and Subfolder choices.

## State Fixtures

Collapsed, open, selected Root Domain, alternate local selection, and guarded downstream action.

## Technical View

The trigger sits between the domain input and Analyze action. The open popover repeats the domain on every row and right-aligns the scope label.

## AI Context

Scope changes the semantic unit of analysis. Preserve it explicitly instead of normalizing all choices to a root domain.

## Evidence Boundary

- **OBSERVED:** Collapsed and expanded selector, selected Root Domain, plus Exact URL, Subdomain, and Subfolder options.
- **RECONSTRUCTION:** Local option selection and fictional domain value.
- **NOT OBSERVED:** Provider-side recalculation after scope selection or the behavior of malformed subpaths.

## Sources

- Authenticated Semrush Domain Overview entry and report screens, 2026-09-30.
- [[semrush-domain-overview-report]]
