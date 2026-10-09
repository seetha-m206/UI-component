---
component: Apollo People Quick Filters
ui_category: 'Filters > Suggested Filter Chips'
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Suggested location, email-status, job-title and industry chips with a visually separated advanced-filter upgrade row.
---

# Component: Apollo People Quick Filters

## Structure

Locations → Email Status → Job Titles → Industry → advanced-filter lock row and View plans.

## Behavior & States

- Location suggestions were United States and Canada.
- Email status suggestions were Verified, Unverified and Unavailable.
- Job-title suggestions were founder, sales manager and marketing director.
- Industry suggestions included Information Technology & Services, Marketing & Advertising and Retail.
- Revenue, Funding and Company Lookalikes were presented as advanced filters.
- No chip or plan link was selected.

## Rules & Validation

- Suggested chips are shortcuts, not preselected filters.
- Do not describe Verified email as deliverability certainty.
- Visually and semantically separate plan-gated controls from available chips.
- Do not execute a provider search from a reconstruction.

## Technical Data

- **OBSERVED:** Suggestions were grouped in a two-column card.
- **OBSERVED:** The advanced row used lock and feature labels plus a highlighted View plans action.
- **NOT OBSERVED:** Selection styling, multi-select, result counts, removal, plan navigation and search execution.
- **NEEDS VERIFICATION:** Whether quick filters combine with AND or OR and whether they consume credits.

## Sources

- **OBSERVATION:** Default People quick-filter card, 2026-10-09.
- **RECONSTRUCTION:** Static fictional shortcut card with all actions disabled.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-people-quick-filters.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty, disabled and plan-gated states while keeping consequential provider actions inert.
- **RECONSTRUCTION:** Related records: [[apollo-people-job-title-filter]] and [[apollo-people-saved-empty-state]].
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-people-quick-filters.html).

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Compare only against separately observed competitor records and do not infer feature parity.

## Accessibility

- **RECONSTRUCTION:** Native controls have accessible names and semantic selected, expanded or disabled state where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.
