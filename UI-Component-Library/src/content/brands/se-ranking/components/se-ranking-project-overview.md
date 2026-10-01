---
component: SE Ranking project overview workspace
ui_category: 'Application Layout > Dashboard'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Project dashboard with observed SEO metrics, AI-answer engine cards, rankings empty state, audit state, and setup actions.
---

# Component: SE Ranking project overview workspace

## Human View

The project overview arranges key SEO and AI-search signals into configurable cards. A metric strip gives the fastest account summary, followed by answer-engine presence, rankings, audit, backlinks, competitor, analytics, content, and setup widgets.

## State Fixtures

- Observed project metrics and empty rankings state.
- Observed Website Audit loading state.
- Observed audit-complete toast over the workspace.

## Technical View

- The reconstructed metric strip uses the observed values: AI Presence 0.06%, Organic Traffic 5, Organic Keywords 516, and Referring Domains 82.
- The local AI engine cards preserve the observed five-engine information architecture without asserting provider calculations.
- Setup, review, and add-keyword actions are inert local buttons.

## Evidence Boundary

- **OBSERVED:** Widget hierarchy, metric labels and displayed values, empty Rankings action, Website Audit loading, and five AI engine cards.
- **RECONSTRUCTION:** Responsive grid, card spacing, icon substitutes, and below-fold grouping.
- **NOT OBSERVED:** Widget customization, date changes, setup submissions, metric formulas, and refresh behavior. These need verification.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview for centilio.com, 2026-09-30.
