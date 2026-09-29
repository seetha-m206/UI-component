---
component: Semrush Row Overflow Menu
ui_category: 'Actions & Controls > Row Actions'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Row-level overflow trigger with safe navigation, guarded settings, disabled deletion, selection, and Escape close.
---

# Component: Semrush Row Overflow Menu

Product → Entity row → Overflow trigger → Action hierarchy → Local result or guarded mutation

## Location

- **Observed in:** Authenticated project and folder collection rows.
- **Extraction level:** Independent row-action menu.
- **Evidence boundary:** Trigger and action hierarchy were observed. Live rename, settings, and delete outcomes were not tested.

## Structure

Entity metadata → icon trigger → menu → safe action → guarded actions → disabled destructive action.

## Actions

Open, close, dismiss with Escape, select a local report action, or inspect guarded actions.

## Behavior & States

Closed, open, disabled, safe-selected, guarded-selected, destructive-disabled, and Escape-dismissed.

### State fixtures

Closed, open, and disabled fixtures are available.

## Rules & Validation

Separate navigation from mutation. Disable or gate destructive actions until confirmation behavior is verified.

## Technical Data

- **OBSERVED:** Rows and entities expose compact overflow actions.
- **NOT OBSERVED:** Rename, settings destination, delete confirmation, and persistence.
- **RECONSTRUCTION:** The safe report action updates local status only.

## Accessibility

The trigger exposes `aria-haspopup="menu"` and `aria-expanded`. Escape closes the menu. Menu items are keyboard-accessible and the destructive state is disabled.

## Cross-Component Pattern Note

Refines [[semrush-context-action-menu]] for row-level use.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush row overflow | Keeps dense tables compact | Standardize safe and destructive ordering |
| Centilio Seek | Needs actions on sources, queries, and competitors | Keep risky actions visibly separated |

## Best Observed Approach

Order safe navigation first, configuration second, and destructive actions last with a verified confirmation gate.

## Sources

- **OBSERVATION:** Authenticated row-action review, 2026-09-29.
- **RECONSTRUCTION:** Fictional local row.
