---
component: Semrush Project Selector
ui_category: 'Navigation & Filtering > Project Selector'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Compact project combobox with fictional project options and a guarded create-project action.
---

# Component: Semrush Project Selector

Product → Current project → Expanded project list → Local selection → Guarded creation

## Location

- **Observed in:** Authenticated Site Audit issue detail header.
- **Extraction level:** Independent reusable selector.
- **Evidence boundary:** Fixture project names and domains are fictional. Live switching was not executed.

## Structure

Combobox trigger → selected project → named listbox → project options → guarded creation action.

## Actions

Open or close the list and choose a synthetic project. Creation stays disabled and marked needs verification.

## Behavior & States

Closed, expanded, alternate selected, and disabled.

### State fixtures

The expanded fixture reproduces two project options and the observed create-project affordance.

## Rules & Validation

Never expose live customer names in fixtures. Separate selection from creation. Preserve the current project until a new selection is confirmed.

## Technical Data

- **OBSERVED:** The live trigger exposed combobox semantics and two project choices plus Create new SEO project.
- **NOT OBSERVED:** Live switching, project creation, permissions, loading, errors, or request payloads.
- **RECONSTRUCTION:** Uses fictional `.example` domains and local state.

## Accessibility

Expose `aria-expanded`, a named listbox, and selected option state. Return focus to the trigger on dismissal.

## Cross-Component Pattern Note

Extracted from [[semrush-site-audit-issue-detail]] and designed to compose with [[semrush-report-tabs]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush project selector | Keeps project context adjacent to audit navigation | Reuse across site, keyword, content, and competitor workspaces |
| Centilio Seek | Can add ownership and provider badges | Keep access state visible without exposing sensitive identifiers |

## Best Observed Approach

Keep current context, alternative choices, and entity creation as separate actions.

## Sources

- **OBSERVATION:** Authenticated Semrush Site Audit selector review, 2026-09-29.
- **RECONSTRUCTION:** Synthetic project choices only.
