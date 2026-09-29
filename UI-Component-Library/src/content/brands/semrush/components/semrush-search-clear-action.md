---
component: Semrush Search and Clear Action
ui_category: 'Search & Discovery > Search Action'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent search input with populated, clearable, submitted, no-results, explanation, and recovery states.
---

# Component: Semrush Search and Clear Action

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Home Folders and Site Audit search surfaces.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Search icon → labeled textbox → conditional clear → apply action → optional no-results status and recovery.

## Actions

Type a query, clear the query, apply search, and recover through Clear filters.

## Behavior & States

A populated field adds a clear control. Applying a non-matching synthetic query reveals No results found and a one-step recovery action without removing context.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Keep clear and submit actions separately named. Preserve surrounding table or collection context. Never infer zero results from a loading state.

## Technical Data

- **OBSERVED:** Observed search controls are text fields with conditional clear buttons. Home Folders filtered immediately, while Site Audit issue search exposed an explicit Search action.
- **NOT OBSERVED:** Server-backed latency, request cancellation, malformed input, result ranking, network requests, and error responses were not observed.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Label the textbox by purpose. Name Clear search and Apply search separately. Announce the settled empty result with role=status.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-home-folders-workspace]], [[semrush-site-audit-projects]], and [[semrush-site-audit-issue-detail]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Combine an unmistakable input purpose, reversible clearing, explicit result feedback, and one-step recovery.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
