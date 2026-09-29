---
component: Semrush Dropdown Filter Action
ui_category: 'Navigation & Filtering > Dropdown Filter'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent combobox trigger supporting ownership options, empty tag lists, and advanced field-operator-value filtering.
---

# Component: Semrush Dropdown Filter Action

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Home Folders and Site Audit issue-detail filters.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Combobox trigger → expanded surface → option list or field-operator-value condition → clear and guarded apply actions.

## Actions

Open and close, select ownership, inspect empty tags, change Include or Exclude, enter a Page URL condition, add a condition, and clear.

## Behavior & States

Ownership and Tags use compact lists. Advanced filtering expands into structured condition controls. Empty filter data remains explicit instead of showing a blank menu.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Expose expanded state. Give every condition a unique label. Keep Apply separate from Clear. Preserve an explicit empty-state message.

## Technical Data

- **OBSERVED:** Observed triggers are buttons exposed as role=combobox. The Site Audit advanced trigger computed to a 6 px radius and 14 px font.
- **NOT OBSERVED:** Live filter application, URL persistence, server queries, multi-condition boolean logic, keyboard Escape, and error behavior were not observed.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Use aria-expanded, a named listbox or dialog, labeled operator, field, and value controls, and keyboard focus return.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-home-folders-workspace]], [[semrush-report-filter-controls]], and [[semrush-site-audit-issue-detail]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Use one trigger pattern while allowing list, empty, and structured-condition contents.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
