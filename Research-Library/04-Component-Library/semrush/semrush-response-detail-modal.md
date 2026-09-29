---
component: Semrush Response Detail Modal
ui_category: 'Overlays > Response Detail'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Loading and resolved prompt-response modal with brand tags, synthetic answer text, grouped sources, and safe close.
---

# Component: Semrush Response Detail Modal

Product → View full response → Loading → Prompt evidence → Sources → Close

## Location

- **Observed in:** Authenticated AI Visibility prompt table.
- **Extraction level:** Independent evidence-detail overlay.
- **Evidence boundary:** Structure and loading transition were observed. All fixture content and domains are fictional.

## Structure

Modal title → close action → prompt → mentioned brands → response → grouped sources.

## Actions

Open from a closed fixture, inspect loading or resolved evidence, and close safely.

## Behavior & States

Closed, loading with busy state, resolved, desktop two-column, and mobile single-column.

### State fixtures

Loading and resolved states remain separate so unresolved data is never confused with missing evidence.

## Rules & Validation

Keep answer text and sources together. Preserve source labels. Never copy authenticated prompt or customer data into fixtures.

## Technical Data

- **OBSERVED:** The modal first showed a loader and then prompt metadata, brand tags, answer text, and grouped sources.
- **NOT OBSERVED:** Provider request, retry, error, permissions, export, and citation navigation.
- **RECONSTRUCTION:** Uses fictional `.example` domains and synthetic response text.

## Accessibility

Use a named modal dialog with `aria-modal`, an `aria-busy` status during loading, a descriptive close action, and readable source grouping.

## Cross-Component Pattern Note

Extracted from [[semrush-ai-visibility-dashboard]] and complements [[semrush-evidence-answers-drawer]].

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush response modal | Keeps answer and evidence in one reading surface | Reuse for provider response comparison |
| Centilio Seek | Can add provenance, freshness, and confidence | Keep each claim tied to its source |

## Best Observed Approach

Show the complete response and its evidence together, with loading and source identity explicit.

## Sources

- **OBSERVATION:** Authenticated Semrush full-response modal review, 2026-09-29.
- **RECONSTRUCTION:** Synthetic local evidence only.
