---
component: Semrush Sort Control
ui_category: 'Navigation & Filtering > Sorting'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Accessible ascending and descending sort control with local row-order feedback.
---

# Component: Semrush Sort Control

Product → Column label → Direction control → Reordered rows → Status

## Location

- **Observed in:** Authenticated Site Audit project list Last Update column.
- **Extraction level:** Independent sorting primitive.
- **Evidence boundary:** Direction and row reversal were observed. Fixtures use fictional projects.

## Structure

Sortable label → direction button → ordered values → live direction status.

## Actions

Toggle ascending and descending order.

## Behavior & States

Ascending, descending, and disabled. Direction is exposed visually and programmatically.

### State fixtures

Both observed directions are independently available.

## Rules & Validation

Do not rely on icon direction alone. Keep the column label in the accessible name. Preserve stable row identity.

## Technical Data

- **OBSERVED:** Direction changed from ascending to descending and reversed the row order.
- **OBSERVED:** The live route hash recorded the sort state.
- **NOT OBSERVED:** Server sorting, request parameters, errors, and persistence beyond the observed hash.
- **RECONSTRUCTION:** Uses local fictional rows.

## Accessibility

Include the column and direction in the button name. Announce the applied direction.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-projects]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush sorting | Direction is programmatic and visual | Standardize for tables and ranked evidence lists |
| Centilio Seek | Can add relevance, freshness, and confidence sorting | Keep sort meaning explicit |

## Best Observed Approach

Expose the sorted field and direction together, then preserve item identity during reorder.

## Sources

- **OBSERVATION:** Authenticated Site Audit sorting interaction, 2026-09-29.
- **RECONSTRUCTION:** Local synthetic rows.
