---
component: Semrush View Mode Toggle
ui_category: 'Data Display > View Toggle'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Card and SEO-table representation switch that preserves collection identity and metric meaning.
---

# Component: Semrush View Mode Toggle

Product → View selection → Shared collection → Card or table representation

## Location

- **Observed in:** Authenticated Semrush Home Folders workspace.
- **Extraction level:** Independent data-view primitive.
- **Evidence boundary:** Card and table identities were observed. Fixtures use fictional folders.

## Structure

Named radiogroup → Cards option → SEO table option → shared collection → status.

## Actions

Switch between cards and table without changing the underlying collection.

## Behavior & States

Card view, table view, and disabled. The same two fixture entities remain present.

### State fixtures

Both representations are available directly and remain locally interactive.

## Rules & Validation

Preserve identity and metric meaning across views. Do not refetch or reset filters solely because presentation changes.

## Technical Data

- **OBSERVED:** Enabling SEO table mode first exposed loading and then a seven-column grid.
- **OBSERVED:** Folder identities and shared metrics remained consistent across views.
- **NOT OBSERVED:** Persistence across sessions and network behavior.
- **RECONSTRUCTION:** Uses local fictional data with reduced columns.

## Accessibility

Use a named radiogroup with `aria-checked` state. Use semantic cards and table markup for each representation.

## Cross-Component Pattern Note

Extracted from [[semrush-home-folders-workspace]] and designed to compose with [[semrush-async-status-state]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush view switch | Supports scanning and comparison without losing context | Reuse across sites, competitors, and prompt collections |
| Centilio Seek | Can retain provider evidence in both views | Preserve provenance in each representation |

## Best Observed Approach

Treat view selection as presentation state, not a different dataset.

## Sources

- **OBSERVATION:** Authenticated Semrush Home view-switch interaction, 2026-09-29.
- **RECONSTRUCTION:** Local fictional collection.
