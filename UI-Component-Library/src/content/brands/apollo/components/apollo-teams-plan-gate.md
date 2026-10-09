---
component: "Teams"
ui_category: "Settings > Users & Teams"
source_product: Apollo
last_verified: 2026-10-09
evidence_state: runtime_observed
status: partial
summary: Organization-plan gate for team grouping and analytics filters.
---

# Component: Teams

## Location

- **OBSERVED:** Authenticated route pattern `/#/settings/premium/teams`.
- **OBSERVED:** Reached by passive settings navigation or a direct internal route. No provider-changing action was selected.

## Screenshot

- **RECONSTRUCTION:** [Open the fictional local screenshot](/research/apollo/fixtures/apollo-teams-plan-gate.png).
- **OBSERVED:** Provider screenshots were displayed transiently only and are not retained.

## Structure

- **OBSERVED:** Teams page with a primary content region and persistent settings navigation.
- **RECONSTRUCTION:** The local fixture preserves the observed information hierarchy with fictional values.

## Actions

- **OBSERVED:** Visible action boundaries: Upgrade to Organization.
- **OBSERVED:** None of these actions was executed.

## Behavior & States

- **OBSERVED:** Group users by region, department or manager. The screen was inspected after its content loaded.
- **RECONSTRUCTION:** Every name, metric, threshold, domain, profile, row and count is synthetic.
- **NOT OBSERVED:** Submitted, connected, upgraded, imported, exported, saved, deleted or otherwise consequential outcomes.
- **NEEDS VERIFICATION:** Provider persistence, permissions, validation, loading, error and responsive states.

## Rules & Validation

- **OBSERVED:** Only the visible default, empty, gated or read-only state is documented.
- **RECONSTRUCTION:** All fixture actions are disabled and cannot call Apollo.
- **NEEDS VERIFICATION:** Provider authorization, validation, server rules, persistence and recovery behavior.

## Technical Data

- **OBSERVED:** Sanitized document title, route pattern, headings, tabs and action labels were captured in the dated provider receipt.
- **RECONSTRUCTION / HTML:** Semantic React headings, sections, tabs, buttons, cards and status regions.
- **RECONSTRUCTION / CSS:** Scoped Apollo-inspired dark fixture styling. No provider design tokens or source CSS were copied.
- **RECONSTRUCTION / JavaScript:** Static fixture configuration and local React rendering only.
- **NOT OBSERVED / Network:** No request payload, response schema, header, token, script identifier or endpoint contract was retained.

## Cross-Component Pattern Note

- **RECONSTRUCTION:** Reuse explicit empty and plan-gated states, persistent settings navigation and disabled consequential actions.
- **RECONSTRUCTION:** Related records: [[apollo-team-sharing-defaults-empty-state]] and [[apollo-territories-plan-gate]].

## Accessibility

- **RECONSTRUCTION:** Native headings and buttons provide accessible names. Tab groups use semantic tab roles and notices use status regions where applicable.
- **NEEDS VERIFICATION:** Provider focus order, keyboard interaction, screen-reader output, contrast and responsive accessibility.

## Competitor Comparisons

- **NEEDS VERIFICATION:** This pass records Apollo only. Any comparison with other sales platforms must use their separately observed records and must not infer feature parity.

## Sources

- **OBSERVED:** Authenticated, read-only Apollo observation on 2026-10-09.
- **OBSERVED:** [Open this component's sanitized evidence record](/research/apollo/evidence/apollo-teams-plan-gate.html).
- **RECONSTRUCTION:** [Open the local preview](/apollo/apollo-teams-plan-gate).
- **RECONSTRUCTION:** [Open the fictional screenshot](/research/apollo/fixtures/apollo-teams-plan-gate.png).
- **NEEDS VERIFICATION:** Network contracts, provider persistence and consequential outcomes remain open.
