---
component: Apollo People Sort Dialog
ui_category: 'Tables > Field and Direction Sort'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Compact sort dialog with field and direction comboboxes and disabled Apply until a change is made.
---

# Component: Apollo People Sort Dialog

## Structure

Sort by heading → field combobox → direction combobox → Apply.

## Behavior & States

- The current field was Relevance.
- The current direction was Descending.
- Apply was disabled because no sort value changed.
- Escape dismissed the dialog without changing the People view.
- No field or direction menu was opened.

## Rules & Validation

- Disable Apply until the requested sort differs from the current sort.
- Keep field and direction separately labelled.
- Do not claim row ordering behavior without a non-empty result set.
- Sorting must not imply relevance quality or data completeness.

## Technical Data

- **OBSERVED:** Trigger expanded into a dialog rather than a one-dimensional menu.
- **OBSERVED:** Both selectors exposed combobox semantics.
- **NOT OBSERVED:** Available fields, ascending application, row reorder, URL persistence and server errors.
- **NEEDS VERIFICATION:** Stable secondary sort, pagination interaction and relevance definition.

## Accessibility

The dialog and both comboboxes were exposed, but the outer unnamed combobox wrappers added noise. A reusable implementation should ensure one labelled control per field.

## Sources

- **OBSERVATION:** Relevance sort dialog opened and dismissed without applying, 2026-10-09.
- **RECONSTRUCTION:** Disabled local field and direction selectors.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-sort-dialog.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-saved-empty-state]] and [[apollo-permission-profiles-plan-gate]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-sort-dialog.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
