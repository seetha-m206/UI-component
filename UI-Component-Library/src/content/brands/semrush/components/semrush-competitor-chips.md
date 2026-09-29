---
component: Semrush Competitor Chips
ui_category: 'Search & Comparison > Entity Chips'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Removable competitor chips with an immutable owned-domain marker, limits, empty state, and restoration.
---

# Component: Semrush Competitor Chips

Product → Owned domain → Competitor chips → Remove or restore → Comparison scope

## Location

- **Observed in:** Authenticated competitor setup and Brand Performance reports.
- **Extraction level:** Independent entity-chip collection.
- **Evidence boundary:** Chip removal and owned-domain distinction were observed. Names and limits are fictional.

## Structure

Owned chip → removable competitor chips → limit count → local restore action → status.

## Actions

Remove a competitor or restore the default fictional comparison set.

## Behavior & States

Default, limit reached, owned-domain only, disabled, removed, and restored.

### State fixtures

Three-competitor, four-competitor limit, and empty competitor states are available.

## Rules & Validation

Never allow the owned entity to appear removable. Announce the remaining comparison count after removal.

## Technical Data

- **OBSERVED:** Competitor chips are individually removable while the owned domain is visually distinct.
- **NOT OBSERVED:** Exact maximum, persistence, and server validation.
- **RECONSTRUCTION:** All names and mutations are fictional and local.

## Accessibility

Each remove button includes the competitor name. The collection has an accessible label and updates a status region.

## Cross-Component Pattern Note

Extracted from [[semrush-ai-competitor-setup]] and [[semrush-brand-performance-insights]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush competitor chips | Makes comparison scope compact and editable | Reuse for tracked brands and domains |
| Centilio Seek | Needs competitor and owned-brand separation | Protect the owned entity from accidental removal |

## Best Observed Approach

Encode entity ownership in both label and styling, then keep removal reversible.

## Sources

- **OBSERVATION:** Authenticated competitor selection review, 2026-09-29.
- **RECONSTRUCTION:** Fictional local entities.
