---
component: Apollo Global Search Palette
ui_category: 'Search > Command Palette'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Global command palette combining navigation search with AI suggestion shortcuts and keyboard guidance.
---

# Component: Apollo Global Search Palette

## Location

- **Product:** Apollo authenticated shell.
- **Observed trigger:** Header control labeled Search or ask a question in Apollo with Command-K hint.

## Structure

Search input → AI suggestions label → three shortcut rows → keyboard-help footer.

## Behavior & States

- Opening preserved the underlying Home route.
- Suggestions were Build your target audience, Build your TAM and Craft outbound sequence.
- Keyboard guidance exposed Up and Down to navigate, Escape to close and Enter to select.
- Escape dismissed the palette without a query.
- No text was entered and no AI or navigation suggestion was selected.

## Rules & Validation

- Treat AI suggestions as potentially executable even before a prompt is submitted.
- Keep search and AI generation clearly distinguished in copy and result treatment.
- Never retain live query history, contact suggestions or account-specific results in evidence.
- Local reconstructions may accept text but must not contact Apollo.

## Technical Data

- **OBSERVED:** Header trigger measured about 440 by 32 px with an 8 px radius.
- **OBSERVED:** The popover aligned below the trigger and used a stacked three-row suggestion list.
- **NOT OBSERVED:** Typed search, recent queries, result categories, AI processing, loading, zero results, error responses and destination routing.
- **NEEDS VERIFICATION:** Debounce, keyboard selection, request type, permission filtering and search persistence.

## Accessibility

The trigger had a useful accessible name. The captured dialog semantics were incomplete. A reusable palette should be a named dialog or combobox with `aria-activedescendant` and explicit result-group labels.

## Sources

- **OBSERVATION:** Search palette opened and dismissed without input, 2026-10-09.
- **RECONSTRUCTION:** Fictional local palette with every result action disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-global-search-palette.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-global-picklists-plan-gate]] and [[apollo-goals-plan-gate]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-global-search-palette.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
