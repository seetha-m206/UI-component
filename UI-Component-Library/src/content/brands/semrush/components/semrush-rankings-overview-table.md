---
component: Semrush Rankings Overview Table
ui_category: 'Data Display > Sortable Analytics Table'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Dense keyword rankings table with search, filter popovers, metric tabs, selection, sortable columns, comparison dates, and guarded bulk actions.
---

# Component: Semrush Rankings Overview Table

Product → Screen component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Position Tracking → Overview report.
- **Extraction level:** Independent data-display and filter component.
- **Evidence boundary:** Keywords, URLs, positions, traffic, and customer data are fictional in the preview.

## Screenshot

- **OBSERVED:** The table structure was captured through accessibility and DOM evidence after opening Overview.
- **NEEDS VERIFICATION:** A durable provider screenshot asset is not stored in this repository.

## Structure

Heading and count → table settings → guarded keyword actions → search and filters → Positions, Estimated Traffic, and Visibility tabs → comparison table → selection and sorting.

## Actions

Search, switch metric tabs, select rows, select all, open filters, and sort columns. Add keywords, Buy more keywords, bulk Actions, exports, and destination links were not activated.

## Behavior & States

Search filters visible rows. Metric tabs change analytical emphasis. Rows and select-all expose checkboxes. Headers expose sort semantics. Filters include positions, SERP features, tags, intent, volume, keyword difficulty, and advanced filters. Skeleton rows appeared before data resolved.

### State fixtures

Loading, populated, searched, selected rows, Positions, Estimated Traffic, Visibility, ascending sort, descending sort, and empty result.

## Rules & Validation

Selection and filtering must preserve project, target, date range, and comparison domain. Keyword, quota, export, and bulk actions remain guarded.

## Technical Data

- **OBSERVED:** Accessible grid with checkbox selection and named sort controls.
- **OBSERVED:** Report URL carries report mode and sort direction parameters.
- **OBSERVED:** Columns include comparison dates, difference, visibility, estimated traffic, volume, CPC, and URL.
- **NOT OBSERVED:** Server-side sorting endpoint, filter request schema, pagination, mutations, export format, and permission failures.
- **RECONSTRUCTION:** Local search, metric tabs, selection, and sorting use synthetic rows.

## Accessibility

Expose selection labels, sort direction, filter names, active metric tabs, horizontal overflow, and empty-result status.

## Cross-Component Pattern Note

This table belongs to [[semrush-position-tracking-landscape]] and generalizes to keyword, prompt, page, competitor, and citation rankings.

## Competitor Comparisons

| Pattern       | Strength                                      | Reuse opportunity                                      |
| ------------- | --------------------------------------------- | ------------------------------------------------------ |
| Semrush       | High-density filtering and comparison columns | Keep controls discoverable without hiding active state |
| Centilio Seek | Provider-spanning ranking evidence            | Add source, freshness, and confidence dimensions       |

## Best Observed Approach

Keep search and frequent filters above the table, expose sort direction in headers, and preserve context while switching metrics.

## Sources

- **OBSERVATION:** Authenticated Semrush Position Tracking Overview review, 2026-09-30.
- **OBSERVATION:** Accessibility tree, DOM snapshot, report URL state, and loading hierarchy.
- **RECONSTRUCTION:** Interactive local table with fictional keyword data. No provider mutation or export.
