---
component: Apollo People Discovery Empty State
ui_category: 'CRM > Prospect Discovery'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Find people workspace before a search, combining AI natural-language entry, quick filters, pinned filter navigation and advanced-filter plan gates.
---

# Component: Apollo People Discovery Empty State

## Location

- **Product:** Apollo People at the sanitized route pattern `#/people`.
- **Evidence boundary:** The live URL contained an opaque recommendation identifier that is not retained.

## Structure

Global shell → 300 px filter sidebar → Find people header and Import menu → centered AI query combobox → quick-filter card → advanced-filter upgrade row.

## Behavior & States

- The default All scope showed aggregate inventory but no person rows before a query or filter.
- The AI combobox rotated example prompts.
- Quick filters offered common locations, email states, job titles and industries.
- Revenue, Funding and Company Lookalikes appeared behind an advanced-filter plan gate.
- No query, filter or AI action was submitted.

## Rules & Validation

- Aggregate inventory does not prove that any usable contact can be previewed or exported.
- Do not retain person, company, recommendation or account identifiers.
- Treat natural-language search and Search with AI as potentially executable.
- Keep upgrade navigation, import and provider search disabled in reconstructions.

## Technical Data

- **OBSERVED:** Document title was `Find people - Apollo` and sanitized route was `#/people`.
- **OBSERVED:** The filter region measured 300 px wide and began immediately after the icon rail.
- **OBSERVED:** A bounded capture found no console warnings or errors.
- **NOT OBSERVED:** Person rows, search results, pagination, selection, reveal, enrichment, export, saved state, errors and request behavior.
- **NEEDS VERIFICATION:** Search cost, credit consumption, entitlements, ranking and result persistence.

## Accessibility

The filter region had a Filters landmark. The AI prompt exposed combobox semantics. A reusable state should include explicit empty-state guidance before asking users to submit AI or structured filters.

## Sources

- **OBSERVATION:** Authenticated People default screen, 2026-10-09.
- **RECONSTRUCTION:** Fictional aggregate counts and guarded local discovery screen.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-discovery-empty-state.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-onboarding-task-row]] and [[apollo-people-filter-catalogue-dialog]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-discovery-empty-state.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.
