---
component: Semrush Carousel Controls
ui_category: 'Navigation & Filtering > Carousel Controls'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Previous and next recommendation controls with position and boundary states.
---

# Component: Semrush Carousel Controls

Product → Recommendation card → Previous or next → Position → Boundary state

## Location

- **Observed in:** Semrush Home recommendation cards and AI Visibility recommended actions.
- **Extraction level:** Independent paging primitive.
- **Evidence boundary:** Forward paging and recommendation cards were observed. Content is synthetic.

## Structure

Current card → previous button → position dots → next button → live position status.

## Actions

Move backward or forward inside a bounded recommendation set.

## Behavior & States

First, middle, last, boundary-disabled, and globally disabled.

### State fixtures

Each position is directly available and remains interactively pageable.

## Rules & Validation

Disable unavailable directions. Expose current position. Do not trigger recommendation navigation from the paging control.

## Technical Data

- **OBSERVED:** Home exposed recommendation cards with a forward control.
- **OBSERVED:** AI Visibility recommendations could be expanded and collapsed.
- **NOT OBSERVED:** Looping, autoplay, keyboard shortcuts, recommendation navigation, and persistence.
- **RECONSTRUCTION:** Adds explicit previous and boundary behavior as a reusable contract.

## Accessibility

Give previous and next buttons accessible names and announce the current position with `aria-live` rather than relying on dots alone.

## Cross-Component Pattern Note

Extracted from [[semrush-home-folders-workspace]] and [[semrush-ai-visibility-dashboard]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush recommendations | Keeps next actions compact | Reuse for opportunities and remediation suggestions |
| Centilio Seek | Can rank by evidence and expected impact | Preserve why each recommendation is shown |

## Best Observed Approach

Keep paging reversible, bounded, and separate from activating the recommendation.

## Sources

- **OBSERVATION:** Authenticated Semrush recommendation reviews, 2026-09-29.
- **RECONSTRUCTION:** Local synthetic recommendation cards.
