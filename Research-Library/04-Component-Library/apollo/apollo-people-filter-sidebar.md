---
component: Apollo People Filter Sidebar
ui_category: 'Filters > Pinned Filter Sidebar'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Fixed-width filter rail with All, Unsaved and Saved scopes, pinned filters, full filter catalogue entry and saved-search controls.
---

# Component: Apollo People Filter Sidebar

## Structure

Three-state scope selector → Job Titles → locked People Lookalikes → Company → Location → Industry & Keywords → Filter catalogue trigger → Save search and New search footer.

## Behavior & States

- All was selected by default. Unsaved showed the same aggregate count. Saved showed zero in the observed account state.
- Saved was opened safely and produced a zero-result workspace.
- Returning to All restored the default discovery state.
- Save search and New search were disabled in the untouched default state and available in the filtered Saved view.
- No search was saved or cleared.

## Rules & Validation

- Scope changes are view filters, not evidence of data ownership or accessibility.
- Keep the current scope programmatically selected.
- Do not infer contact availability from aggregate counts.
- Treat Save search as a provider write even when the query is empty.

## Technical Data

- **OBSERVED:** Sidebar width was 300 px.
- **OBSERVED:** Scope options were All, Unsaved and Saved.
- **OBSERVED:** Pinned filters were Job Titles, People Lookalikes, Company, Location and Industry & Keywords.
- **NOT OBSERVED:** Non-zero Saved data, Unsaved results, saved-search naming, persistence and permissions.
- **NEEDS VERIFICATION:** Responsive collapse, scroll behavior, filter badges and server synchronization.

## Accessibility

The scope selector exposed a radiogroup and checked radio state. The pinned filter rows were largely generic elements in the captured tree and need button semantics and expanded state.

## Sources

- **OBSERVATION:** All and Saved People scope states, 2026-10-09.
- **RECONSTRUCTION:** Synthetic counts and local-only scope switching.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-filter-sidebar.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-filter-catalogue-dialog]] and [[apollo-people-import-menu]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-filter-sidebar.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
