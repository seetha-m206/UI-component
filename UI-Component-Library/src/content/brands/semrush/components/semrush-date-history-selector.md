---
component: Semrush Date History Selector
ui_category: 'Navigation & Filtering > Historical Snapshot'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Current, historical, unavailable, open, selected, and disabled date-snapshot states.
---

# Component: Semrush Date History Selector

Product → Update date trigger → Snapshot list → Selected historical report

## Location

- **Observed in:** Authenticated AI Visibility report controls.
- **Extraction level:** Independent historical snapshot selector.
- **Evidence boundary:** Current-versus-historical labeling was observed. Fixture dates are fictional.

## Structure

Selected date → state label → listbox → available and unavailable options → live selection status.

## Actions

Open the list, choose a snapshot, or dismiss it by selecting the current value.

## Behavior & States

Current, historical, unavailable option, open, closed, and disabled.

### State fixtures

Current, historical, and disabled initial states are available.

## Rules & Validation

Distinguish freshness from availability. A disabled date must remain visible and non-selectable rather than disappearing.

## Technical Data

- **OBSERVED:** The report exposes a dated update selector and historical state.
- **NOT OBSERVED:** Request parameters, retention duration, and unavailable-date rules.
- **RECONSTRUCTION:** All dates and selection changes are local.

## Accessibility

The trigger exposes `aria-haspopup="listbox"` and `aria-expanded`. Options expose selected and disabled states.

## Cross-Component Pattern Note

Extracted from [[semrush-report-filter-controls]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush history | Keeps report-time context visible | Reuse for audits and AI-answer snapshots |
| Centilio Seek | Needs comparison across crawl and model dates | Display freshness next to the chosen period |

## Best Observed Approach

Show both the date and whether it represents the current or a historical snapshot.

## Sources

- **OBSERVATION:** Authenticated AI Visibility history selector, 2026-09-29.
- **RECONSTRUCTION:** Fictional local dates.
