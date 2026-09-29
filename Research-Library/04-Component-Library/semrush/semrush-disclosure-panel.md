---
component: Semrush Disclosure Panel
ui_category: 'Actions & Controls > Disclosure'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent disclosure pattern for FAQ, remediation guidance, and collapsible recommendation content.
---

# Component: Semrush Disclosure Panel

Product → Disclosure variant → Trigger → Expanded region → Evidence boundary

## Location

- **Observed in:** AI Visibility landing FAQs, AI Visibility recommendations, and Site Audit issue remediation.
- **Extraction level:** Independent reusable disclosure primitive.
- **Evidence boundary:** Content is synthetic. Expansion behavior is based on observed authenticated and public Semrush screens.

## Structure

Named trigger → expanded state → controlled answer region → optional independent sibling disclosures.

## Actions

Open and close each disclosure. FAQ items can remain open simultaneously.

## Behavior & States

Closed, one open, multiple open, remediation open, recommendations open, and disabled. The FAQ variant preserves the observed independent multi-open behavior.

### State fixtures

Fixtures isolate the three observed disclosure families without importing their parent screens.

## Rules & Validation

Do not force observed independent FAQs into a single-open accordion. Preserve stable trigger and panel ids. Keep expansion reversible.

## Technical Data

- **OBSERVED:** FAQ and remediation triggers exposed expanded state and revealed in-place content.
- **OBSERVED:** Multiple landing-page FAQ items remained expanded together.
- **NOT OBSERVED:** Persistence, analytics events, remote content loading, and failure states.
- **RECONSTRUCTION:** Uses local React state only.

## Accessibility

Use native buttons with `aria-expanded` and `aria-controls`. Give every revealed panel a named region.

## Cross-Component Pattern Note

Extracted from [[semrush-ai-visibility-landing]], [[semrush-ai-visibility-dashboard]], and [[semrush-site-audit-issue-detail]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush disclosure | Keeps explanation near the related decision | Reuse for evidence, remediation, methodology, and education |
| Centilio Seek | Can add provider provenance and freshness | Keep evidence metadata inside the expanded region |

## Best Observed Approach

Use reversible, independently controlled disclosure regions with explicit accessible state.

## Sources

- **OBSERVATION:** Semrush screen reviews and state captures, 2026-09-29.
- **RECONSTRUCTION:** Local interactive preview. No remote action was performed.
