---
component: Semrush Target Type Filter
ui_category: 'Navigation & Filtering > Segmented Filters'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Mutually exclusive All targets, AI Search, and SEO filter that changes campaign metric vocabulary between prompts and keywords.
---

# Component: Semrush Target Type Filter

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Position Tracking campaign collection.
- **Extraction level:** Independent segmented filter extracted from the screen toolbar.
- **Evidence boundary:** The filter was exercised safely. Provider result counts and private requests are excluded.

## Screenshot

- **OBSERVED:** The control appeared between project search and date range in the captured Position Tracking screenshot.
- **NEEDS VERIFICATION:** A durable provider screenshot asset is not stored in this repository.

## Structure

All targets radio → AI Search radio → SEO radio.

## Actions

Selecting AI Search changed Improved, Declined, and All headers from keywords to prompts. Selecting SEO restored keyword labels and the configured SEO campaign row.

## Behavior & States

One segment is selected at a time. The checked state is exposed through radio semantics. The selected mode changes both dataset scope and column vocabulary.

### State fixtures

All targets, AI Search, and SEO.

## Rules & Validation

Do not treat this as a visual-only tab. The mode changes the meaning of downstream metrics. Provider persistence remains needs verification.

## Technical Data

- **OBSERVED:** Accessible radio roles with boolean selected values.
- **OBSERVED:** AI Search produced prompt-oriented headers while SEO produced keyword-oriented headers.
- **NOT OBSERVED:** URL persistence, API parameters, counts for a configured AI Search target, and permission-dependent states.
- **RECONSTRUCTION:** The preview updates accessible status copy locally.

## Accessibility

Use a named radiogroup, expose checked state, and ensure downstream header changes are announced or discoverable.

## Cross-Component Pattern Note

This control belongs to [[semrush-position-tracking-projects]] and illustrates a reusable semantic-mode switch rather than a decorative tab set.

## Competitor Comparisons

| Pattern       | Strength                                    | Reuse opportunity                                                    |
| ------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| Semrush       | Compact mode switch with vocabulary changes | Make the downstream schema explicit in component contracts           |
| Centilio Seek | Multi-provider search research              | Add provider and evidence-source modes without changing table layout |

## Best Observed Approach

Use segmented controls only when each selection is mutually exclusive and its impact on downstream data is immediately visible.

## Sources

- **OBSERVATION:** Authenticated Semrush Position Tracking target-filter interaction, 2026-09-30.
- **RECONSTRUCTION:** Local radio-state fixture. No provider request or project mutation.
