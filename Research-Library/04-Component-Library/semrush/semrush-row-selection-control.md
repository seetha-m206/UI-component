---
component: Semrush Row Selection Control
ui_category: 'Data Entry > Selection'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: mixed_observed_reconstructed
status: complete
summary: Checkbox-based row selection with explicit count, mixed, all, and disabled fixtures.
---

# Component: Semrush Row Selection Control

## Human View

Selects report rows and keeps the selected count visible before bulk actions become available.

## State Fixtures

Unchecked, observed single selected, reconstructed multiple and all selected, indeterminate, and disabled. Multi-row fixtures are labeled **needs verification**.

## Technical View

- Native checkboxes preserve keyboard and form semantics.
- Select-all exposes the DOM indeterminate state.
- Selected rows retain identity and receive a visible container state.

## AI Context

Keep selection state independent from action execution. An agent must not infer that selecting rows authorizes Hide, Delete, or another mutation.

## Evidence Boundary

- **OBSERVED:** One affected-page row selected and a one-selected action bar.
- **NOT OBSERVED:** Multi-row, select-all across pages, persistence, confirmation, or mutation results.
- **RECONSTRUCTION:** Mixed and multi-row state is local only.

## Sources

- [[semrush-site-audit-issue-detail]]
- [[semrush-bulk-selection-action-bar]]
