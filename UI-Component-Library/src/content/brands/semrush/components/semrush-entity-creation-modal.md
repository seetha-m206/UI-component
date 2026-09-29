---
component: Semrush Entity Creation Modal
ui_category: 'Overlays > Creation Modal'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Independent creation modal with website selection, optional name, share-after-create setting, guarded submission, cancellation, and synthetic validation.
---

# Component: Semrush Entity Creation Modal

Product → Action component → Variants → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Home Create Folder flow.
- **Extraction level:** Independent reusable action primitive derived from a verified Semrush screen.
- **Evidence boundary:** Live account identifiers and values are excluded. Fixtures use synthetic data and local interactions.

## Structure

Named modal → close → required Website combobox → suggestions → Add a competitor → optional Name → share checkbox → Create and Cancel.

## Actions

Open website suggestions, enter a name, cancel, close, and inspect the guarded Create action.

## Behavior & States

Cancellation closes the surface and confirms that no data was created. Website suggestions use fictional values. The validation fixture is explicitly synthetic because live validation was not tested.

### State fixtures

Every preview fixture isolates one reusable state or variant. Observed states are reproduced with fictional data. Any synthetic completion, loading, or validation state is labelled as synthetic in this record.

## Rules & Validation

Do not submit without explicit authorization. Keep account suggestions out of fixtures. Treat Share once created as a permission change. Return focus to the opener on close.

## Technical Data

- **OBSERVED:** The live dialog exposed Website and Name fields, Share once created, Create, Cancel, and Close. The reconstruction uses role=dialog and aria-modal=true.
- **NOT OBSERVED:** Creation, validation text, duplicate handling, folder limits, competitor creation, sharing, request payloads, success routing, and server errors were not observed. The error fixture is synthetic.
- **RECONSTRUCTION:** The preview performs no live provider mutation and uses local React state only.

## Accessibility

Use a programmatic dialog title, labeled fields, logical focus order, Escape closure, focus return, and role=alert for validation.

## Cross-Component Pattern Note

This primitive was extracted from [[semrush-home-folders-workspace]] and [[semrush-site-audit-projects]]. It can be composed into other SEO, AI-search, reporting, and administration workspaces without importing a full screen.

## Competitor Comparisons

| Pattern | Strength | Reuse opportunity |
|---|---|---|
| Semrush observed action | Compact, task-focused behavior within dense application screens | Standardize the action contract independently of the source page |
| Centilio Seek | Can add evidence state, permissions, ownership, and provider provenance | Reuse the primitive across site, keyword, competitor, content, and audit workflows |

## Best Observed Approach

Keep required identity, optional metadata, permission changes, cancellation, and final submission visibly separate.

## Sources

- **OBSERVATION:** Authenticated Semrush interaction review, 2026-09-29.
- **OBSERVATION:** Accessibility, DOM, state-transition, and screenshot evidence from the linked source screens.
- **RECONSTRUCTION:** Independent local action-level preview with synthetic values. No live action was submitted.
