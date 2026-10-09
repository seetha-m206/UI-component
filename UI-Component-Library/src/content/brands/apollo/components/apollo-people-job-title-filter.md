---
component: Apollo People Job Title Filter
ui_category: 'Filters > Include and Exclude Filter'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Expanded job-title filter with Simple and Advanced modes, include and exclude comboboxes, exact-match guidance, similar-title option and related filters.
---

# Component: Apollo People Job Title Filter

## Structure

Simple and Advanced mode buttons → Include job-title combobox → exact-match help → similar-title control → Exclude combobox → past-title, management-level and department disclosures → Create New Persona.

## Behavior & States

- Simple was the visible mode.
- Include and Exclude accepted job-title tokens but no value was entered.
- Quotation-mark guidance explained exact matching.
- A similar-title option was visible.
- Related Past job titles, Management Level and Departments & Job Function controls stayed collapsed.
- Create New Persona was visible and unexecuted.

## Rules & Validation

- Preserve the difference between include and exclude tokens.
- Explain exact matching before users enter a quoted title.
- Do not change persona state during read-only research.
- Keep Advanced operators and resulting query semantics NEEDS VERIFICATION until observed.

## Technical Data

- **OBSERVED:** Placeholder copy was Search for a job title and Enter titles to exclude.
- **OBSERVED:** Similar-title, past-title, management-level and department controls were present.
- **NOT OBSERVED:** Token selection, autocomplete, Advanced mode, validation, query application and persona creation.
- **NEEDS VERIFICATION:** Synonym expansion, Boolean logic, token limits and exclusions.

## Accessibility

Include and Exclude used combobox semantics, but their accessible names were weak in the captured tree. A reusable component must bind each textbox to its include or exclude label.

## Sources

- **OBSERVATION:** Expanded Job Titles filter, 2026-10-09.
- **RECONSTRUCTION:** Local text fields and disabled related actions.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-job-title-filter.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-import-menu]] and [[apollo-people-quick-filters]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-job-title-filter.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
