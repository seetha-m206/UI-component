---
component: Semrush Country Tag Selector
ui_category: 'Forms > Tag Input'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Searchable multi-select country control with removable tags, selected options, limits, empty state, and disabled fixture.
---

# Component: Semrush Country Tag Selector

## Human View

Combines selected target countries as removable tags with a searchable option list for adding more.

## State Fixtures

Selected tags, empty, at-limit needs-verification, searchable results, and disabled.

## Technical View

- Tags expose named remove buttons.
- The option list uses multi-select listbox semantics.
- Selected state appears both in tags and options.
- Local count communicates the fixture limit.

## AI Context

Selected countries describe target-audience relevance. They must not be inferred as traffic origin or legal operating territory.

## Evidence Boundary

- **OBSERVED:** Five selected country tags, delete actions, expanded searchable country list, selected rows, unselected rows, and collapse via Escape.
- **RECONSTRUCTION:** Fictional reduced country list, maximum count, empty and disabled states.
- **NOT OBSERVED:** Limit enforcement, remote search, persistence, or validation. The limit fixture needs verification.

## Sources

- Authenticated Semrush Backlink Audit Target Countries step, 2026-09-30.
