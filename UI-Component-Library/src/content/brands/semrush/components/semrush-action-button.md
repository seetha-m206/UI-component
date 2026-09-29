---
component: Semrush Action Button
ui_category: 'Actions & Controls > Action Button'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent Semrush-style action button with primary, secondary, ghost, icon, danger, disabled, guarded, loading, and success fixtures.
---

# Component: Semrush Action Button

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Home, AI Visibility, and Site Audit action surfaces.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Label or icon → semantic visual variant → disabled or busy state → local result status.

## Actions

Primary activation, supporting activation, low-emphasis action, icon-only settings, and guarded destructive action.

## Behavior & States

Primary and secondary variants establish hierarchy. Icon actions retain an accessible label. Dangerous and live-impact actions stop at a verification message. Loading and success demonstrate the reusable contract but are synthetic.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Use one primary action per action group. Label icon-only controls. Disable repeated activation while busy. Separate destructive styling from ordinary secondary actions.

## Technical Data

- **OBSERVED:** Observed Semrush action controls are native buttons. The Home Create Folder button computed to a 6 px radius and 14 px font. The reconstruction exposes aria-busy during local loading.
- **NOT OBSERVED:** Button-level loading, success, failure, destructive confirmation, network requests, and live action outcomes were not observed. Loading and success fixtures are synthetic.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Use a native button, visible focus, an accessible name, disabled semantics, and a live status message for asynchronous completion.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-home-folders-workspace]], [[semrush-site-audit-issue-detail]], and [[semrush-ai-visibility-dashboard]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Keep visual hierarchy, action risk, busy state, and accessible naming in one reusable primitive.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
