---
component: Semrush Metric Distribution Switch
ui_category: 'Analytics & Reporting > Metric Switch'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Switch between share-of-voice and sentiment measures while preserving entity identity.
---

# Component: Semrush Metric Distribution Switch

Product → Metric selector → Same entity set → Recalculated distribution

## Location

- **Observed in:** Authenticated Brand Performance insight reports.
- **Extraction level:** Independent analytic metric switch.
- **Evidence boundary:** Metric changes were observed. Values and brands are fictional.

## Structure

Two-option segmented control → entity rows → proportional bars → values → live metric status.

## Actions

Switch between share of voice and sentiment.

## Behavior & States

Share, sentiment, positive sentiment, negative sentiment, and disabled.

### State fixtures

Share-of-voice and sentiment fixtures are available.

## Rules & Validation

Preserve entity order and identity when changing measures. Do not compare percentages and signed sentiment as if they shared one scale.

## Technical Data

- **OBSERVED:** Brand Performance provides multiple analytic views over the same entities.
- **NOT OBSERVED:** Calculation formula and server request behavior.
- **RECONSTRUCTION:** Fictional values and local switching.

## Accessibility

The selector uses `role="radiogroup"` with an `aria-label`, and each option exposes `aria-checked`. The selected metric is announced in a status region.

## Cross-Component Pattern Note

Extracted from [[semrush-brand-performance-insights]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush metric switch | Keeps comparison entities stable | Reuse across distribution cards |
| Centilio Seek | Needs visibility, citation, and sentiment measures | Preserve context while changing units |

## Best Observed Approach

Keep the entity set fixed and name the active measurement explicitly.

## Sources

- **OBSERVATION:** Authenticated Brand Performance review, 2026-09-29.
- **RECONSTRUCTION:** Fictional local metrics.
