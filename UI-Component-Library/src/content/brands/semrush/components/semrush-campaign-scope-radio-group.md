---
component: Semrush Campaign Scope Radio Group
ui_category: 'Forms > Radio Group'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Mutually exclusive backlink-audit scope options with adjacent evidence counts and disabled fixture.
---

# Component: Semrush Campaign Scope Radio Group

## Human View

Lets a user choose exactly one domain boundary while comparing the backlink and referring-domain volume available for each option.

## State Fixtures

Root domain selected, version-specific selection, and reconstructed disabled state.

## Technical View

- Native radios share one name and an associated fieldset legend.
- Each option pairs a plain-language label with secondary counts.
- Selection changes update an aria-live status locally.

## AI Context

Counts explain the consequence of scope. Keep them associated with the option and never treat them as final audit results.

## Evidence Boundary

- **OBSERVED:** Four mutually exclusive options, selected root-domain default, option labels, and adjacent backlink and domain counts.
- **RECONSTRUCTION:** Fictional domain and counts, local status, and disabled state.
- **NOT OBSERVED:** Saved selection, validation, or downstream audit differences.

## Sources

- Authenticated Semrush Backlink Audit Campaign Scope step, 2026-09-30.
