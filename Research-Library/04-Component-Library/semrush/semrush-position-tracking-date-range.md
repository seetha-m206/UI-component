---
component: Semrush Position Tracking Date Range
ui_category: 'Navigation & Filtering > Date Range Selector'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Campaign date-range selector with 2, 7, 30, 60, and 90-day presets plus loading and resolved metric states.
---

# Component: Semrush Position Tracking Date Range

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Position Tracking campaign collection and campaign report.
- **Extraction level:** Independent date-range primitive.
- **Evidence boundary:** Last 30 days was exercised. The remaining presets were observed but not selected.

## Screenshot

- **OBSERVED:** The closed selector appeared in the toolbar. Its expanded option list was captured through accessibility evidence.
- **NEEDS VERIFICATION:** A durable provider screenshot asset is not stored in this repository.

## Structure

Date trigger → expanded preset list → selected option → loading state → resolved metrics.

## Actions

Opening the selector exposed Last 2 days, Last 7 days, Last 30 days, Last 60 days, and Last 90 days. Selecting Last 30 days changed the displayed range, showed loading placeholders, then resolved updated metrics.

## Behavior & States

Closed, expanded, selected seven days, selected thirty days, loading, and resolved.

### State fixtures

All observed preset labels plus a reconstructed local refresh status.

## Rules & Validation

Keep preset labels separate from rendered calendar dates. Preserve selection through loading. Sixty and ninety-day results remain needs verification.

## Technical Data

- **OBSERVED:** Accessible combobox with expanded or collapsed state and selected option.
- **OBSERVED:** Thirty-day selection produced start and end date query parameters on linked reports.
- **NOT OBSERVED:** Private endpoint, cache strategy, timezone boundary, invalid ranges, and 60 or 90-day result behavior.
- **RECONSTRUCTION:** The preview changes preset status without contacting Semrush.

## Accessibility

Label the combobox, expose selected state, retain focus after selection, and announce loading-to-resolved transitions.

## Cross-Component Pattern Note

The same date contract composes into [[semrush-position-tracking-projects]], [[semrush-position-tracking-landscape]], and keyword trend reports.

## Competitor Comparisons

| Pattern       | Strength                                    | Reuse opportunity                                    |
| ------------- | ------------------------------------------- | ---------------------------------------------------- |
| Semrush       | Compact presets coupled to loading feedback | Standardize preset and exact-date representations    |
| Centilio Seek | Cross-provider evidence windows             | Add freshness and provider coverage beside the range |

## Best Observed Approach

Show human-readable calendar dates after selection and preserve the preset as machine-readable state.

## Sources

- **OBSERVATION:** Authenticated Semrush Position Tracking date-range interaction, 2026-09-30.
- **OBSERVATION:** Accessibility state and linked URL query changes.
- **RECONSTRUCTION:** Local preset fixture. No provider setting changed.
