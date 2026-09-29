---
component: Semrush Async Status State
ui_category: 'Feedback & Status > Loading State'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Reusable loading, loaded, and explicitly synthetic error states for tables, charts, and cards.
---

# Component: Semrush Async Status State

Product → Surface context → Loading or settled state → Evidence boundary

## Location

- **Observed in:** AI Visibility charts and tables, Home Folders SEO table, and Site Audit visibility tabs.
- **Extraction level:** Independent feedback primitive.
- **Evidence boundary:** Loading and settled behavior were observed. The error fixture is synthetic.

## Structure

Surface label → live status → progress or settled content → optional error disclosure.

## Actions

No user action. Parent workflows control the state transition.

## Behavior & States

Table loading, chart loading, card loaded, and synthetic error. Loading is never presented as zero or missing data.

### State fixtures

Every fixture isolates one status and names unobserved failure behavior as synthetic.

## Rules & Validation

Keep headers visible where possible. Distinguish loading, empty, zero, unavailable, and error. Never infer zero while data is unresolved.

## Technical Data

- **OBSERVED:** Tables exposed Loading rows before populated or empty results.
- **OBSERVED:** Folder table cells transitioned through a visible loading state.
- **NOT OBSERVED:** Failure messaging, retries, timeout behavior, and transport errors.
- **RECONSTRUCTION:** The error fixture is explicitly synthetic and does not retry.

## Accessibility

Use a named live status and `aria-busy=true` while loading. Use an alert only for actionable failure.

## Cross-Component Pattern Note

Extracted from [[semrush-ai-visibility-dashboard]], [[semrush-home-folders-workspace]], and [[semrush-site-audit-issue-detail]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush loading state | Preserves surrounding report context | Standardize loading without hiding headers |
| Centilio Seek | Can expose provider progress and freshness | Preserve provenance while each provider resolves |

## Best Observed Approach

Represent unresolved data explicitly and never collapse it into empty or zero.

## Sources

- **OBSERVATION:** Authenticated Semrush loading transitions, 2026-09-29.
- **RECONSTRUCTION:** Local fixtures with a clearly synthetic error state.
