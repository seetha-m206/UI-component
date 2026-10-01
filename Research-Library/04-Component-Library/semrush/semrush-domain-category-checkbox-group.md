---
component: Semrush Domain Category Checkbox Group
ui_category: 'Forms > Checkbox Group'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Multi-select domain-theme checklist with selected, unselected, clear-all, restore-default, and disabled states.
---

# Component: Semrush Domain Category Checkbox Group

## Human View

Allows several themes to describe a domain so backlink risk can be interpreted in context.

## State Fixtures

Default mixed selection, no selection, restore-default availability, and reconstructed disabled group.

## Technical View

- Native checkboxes retain independent selection.
- Clear all removes every local choice.
- Restore defaults is disabled while the initial defaults remain selected.
- A live counter exposes selection state without relying on color.

## AI Context

Categories are user-provided context, not detected truth. Preserve multi-select semantics and distinguish defaults from confirmed choices.

## Evidence Boundary

- **OBSERVED:** Large category checklist, checked and unchecked items, Clear all categories, and disabled Restore default categories.
- **RECONSTRUCTION:** Reduced fictional option set and local reset behavior.
- **NOT OBSERVED:** Maximum selection, saved values, failure, or server-side categorization.

## Sources

- Authenticated Semrush Backlink Audit Domain Categories step, 2026-09-30.
