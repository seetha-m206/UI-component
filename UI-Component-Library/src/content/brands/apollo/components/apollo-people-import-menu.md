---
component: Apollo People Import Menu
ui_category: 'Data Operations > Import Menu'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Compact import menu separating single-contact entry from CSV bulk import.
---

# Component: Apollo People Import Menu

## Structure

Import trigger → menu → Single contact → CSV.

## Behavior & States

- The menu opened below the People page header trigger.
- Opening did not start an import.
- Single contact and CSV were visible and unselected.
- Escape dismissed the menu.

## Rules & Validation

- Both destinations transmit or create provider data and require explicit authorization.
- Do not open file pickers, upload CSVs or enter personal contact data during research.
- Keep data mapping, validation, duplicate handling and ownership NOT OBSERVED.

## Technical Data

- **OBSERVED:** Trigger exposed expanded state.
- **OBSERVED:** Menu items were Single contact and CSV.
- **NOT OBSERVED:** Forms, file selection, mapping, preview, validation, duplicate resolution, submission, progress and errors.
- **NEEDS VERIFICATION:** File limits, accepted columns, consent handling and rollback.

## Accessibility

The surface exposed menu and menuitem semantics. A reusable version should preserve focus return and explain that CSV is a bulk data operation.

## Sources

- **OBSERVATION:** Import menu opened and dismissed without selection, 2026-10-09.
- **RECONSTRUCTION:** Disabled local import menu.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-import-menu.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-filter-sidebar]] and [[apollo-people-job-title-filter]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-import-menu.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
