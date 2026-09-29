---
component: Semrush Bulk Selection Action Bar
ui_category: 'Actions & Controls > Bulk Selection'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent contextual action bar with selected-row count, reversible deselection, and guarded batch mutation.
---

# Component: Semrush Bulk Selection Action Bar

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Site Audit issue-detail affected-page grid.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Selected count badge → singular or plural label → Deselect all → guarded bulk action.

## Actions

Reflect selection count, clear the selection, and expose the available Hide action without executing it.

## Behavior & States

The bar appears only when at least one row is selected. Deselect all removes the bar and announces that selection was cleared.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Selection must never perform the mutation itself. Keep a reversible escape action. Require a separate confirmation for destructive or hiding actions.

## Technical Data

- **OBSERVED:** The observed live bar showed 1 row selected, Deselect all, and Hide after selecting a single affected-page row.
- **NOT OBSERVED:** Hide, multi-row selection behavior, select-all across pages, confirmation, undo, permissions, and persistence were not observed.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Expose a named region, announce the count in text, keep Deselect all keyboard operable, and do not encode selection by color alone.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-site-audit-issue-detail]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Make scope visible, deselection immediate, and mutation a separate guarded decision.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
