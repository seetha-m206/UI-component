---
component: Semrush Filter Visibility Control
ui_category: 'Navigation & Filtering > Advanced Filter Visibility'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Show and hide advanced filters while retaining staged values in local state.
---

# Component: Semrush Filter Visibility Control

Product → Show filters → Staged criteria → Hide filters → Retained criteria

## Location

- **Observed in:** Authenticated Site Audit issue-detail controls.
- **Extraction level:** Independent filter-visibility primitive.
- **Evidence boundary:** Show and hide behavior was observed. Retention is modeled locally and needs live persistence verification.

## Structure

Disclosure button → staged-count hint → advanced fields → retained-value status.

## Actions

Show or hide the filter region and edit fictional staged values.

## Behavior & States

Hidden, visible, disabled, edited, hidden-after-edit, and restored-visible.

### State fixtures

Hidden, visible, and disabled fixtures are available.

## Rules & Validation

Hiding controls must not silently clear staged values. Do not claim server application until a request is verified.

## Technical Data

- **OBSERVED:** Site Audit exposes explicit Show filters and Hide filters controls.
- **NOT OBSERVED:** Live request parameters and cross-navigation persistence.
- **RECONSTRUCTION:** Values are retained only in component state.

## Accessibility

The toggle exposes `aria-expanded` and `aria-controls`. Fields keep visible labels.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-issue-detail]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush advanced filters | Reduces density without losing context | Reuse for report and evidence tables |
| Centilio Seek | Often combines multiple evidence filters | Preserve staged values across collapse |

## Best Observed Approach

Treat visibility and filter values as separate state so collapse never means reset.

## Sources

- **OBSERVATION:** Authenticated Site Audit filter review, 2026-09-29.
- **RECONSTRUCTION:** Local staged values.
