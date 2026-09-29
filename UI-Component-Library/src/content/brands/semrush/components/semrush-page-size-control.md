---
component: Semrush Page Size Control
ui_category: 'Navigation & Filtering > Pagination'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent pagination status and rows-per-page selector with 10, 20, 50, and 100 options.
---

# Component: Semrush Page Size Control

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Site Audit project-list and issue-detail tables.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Page label → disabled current-page field → total pages → page-size trigger → option list.

## Actions

Open and close the page-size list and choose 10, 20, 50, or 100 rows.

## Behavior & States

The current selection is reflected by the trigger and aria-selected option. The observed page field stayed disabled because only one page existed.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Keep current page and page size distinct. Expose the selected option. Do not imply multi-page behavior from a one-page dataset.

## Technical Data

- **OBSERVED:** Observed options were exactly 10, 20, 50, and 100. Pagination was a named navigation region.
- **NOT OBSERVED:** Navigation across multiple pages, direct page entry, invalid page numbers, loading, URL persistence, and server requests were not observed.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Use nav with an accessible name, label the page field, expose the option list and selected value, and preserve focus after selection.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-site-audit-projects]] and [[semrush-site-audit-issue-detail]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Keep page status compact and make density changes explicit and reversible.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
