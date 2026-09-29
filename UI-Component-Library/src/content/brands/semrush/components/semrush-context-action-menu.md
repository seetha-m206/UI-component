---
component: Semrush Context Action Menu
ui_category: 'Actions & Controls > Context Menu'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent overflow menu for collaborative, organizational, configuration, and destructive entity actions.
---

# Component: Semrush Context Action Menu

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Home Folders per-folder settings.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Icon trigger → named menu → Share, Pin, Tags, Settings → separated Delete action → result status.

## Actions

Open or close the menu and choose a contextual action. The reconstruction reports needs verification without mutating data.

## Behavior & States

The menu groups several actions behind a compact overflow trigger. Delete is visually distinguished from ordinary actions.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Name the trigger for the target entity. Keep destructive actions separated and confirmed. Close after selection and return focus to the trigger.

## Technical Data

- **OBSERVED:** The live trigger exposed expanded and collapsed state with menu semantics. Five actions were visible in the observed order.
- **NOT OBSERVED:** Share, Pin, Tags modification, Settings navigation, Delete confirmation, permissions, persistence, and network behavior were not observed.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Use aria-haspopup=menu, aria-expanded, menu and menuitem roles, a descriptive trigger name, Escape closure, and focus return.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-home-folders-workspace]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Keep rare actions compact while making scope and destructive risk unmistakable.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
