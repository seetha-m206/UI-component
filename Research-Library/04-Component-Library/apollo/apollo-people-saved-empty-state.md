---
component: Apollo Saved People Empty State
ui_category: 'Empty States > Filtered Result Recovery'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Saved-people zero-result state with filter visibility, sorting, search, AI research, workflow creation and recovery actions.
---

# Component: Apollo Saved People Empty State

## Structure

Selected Saved scope → Hide Filters → sort → Search people → Research with AI → Create workflow → zero-result illustration and explanation → Reset filters and Search with AI.

## Behavior & States

- Selecting Saved changed the workspace from discovery onboarding to a result toolbar and zero-state.
- The observed Saved count was zero.
- The empty state advised adjusting search or filters.
- Reset filters and Search with AI were offered as recovery actions.
- Returning to All restored the original discovery state.
- No recovery, AI, workflow, search or save action was executed.

## Rules & Validation

- Keep empty distinct from loading, access denied and network failure.
- Do not infer that Saved equals owned, enriched or exportable.
- AI and workflow recovery paths remain consequential and disabled in reconstructions.
- Preserve a direct non-AI recovery action.

## Technical Data

- **OBSERVED:** Toolbar included Hide Filters, Relevance, Search people, Research with AI and Create workflow.
- **OBSERVED:** Recovery actions were Reset filters and Search with AI.
- **NOT OBSERVED:** Non-zero saved rows, pagination, row actions, selection, reveal, export, workflow output and AI output.
- **NEEDS VERIFICATION:** Saved-result permissions, result freshness and empty-state causes.

## Accessibility

The state had readable explanatory text and keyboard-operable recovery buttons. The illustration had an accessible name indicating an empty search page.

## Sources

- **OBSERVATION:** Saved People zero-state and return to All, 2026-10-09.
- **RECONSTRUCTION:** Fictional zero-state with disabled recovery actions.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-saved-empty-state.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-quick-filters]] and [[apollo-people-sort-dialog]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-saved-empty-state.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
