---
component: SE Ranking project overview workspace
ui_category: 'Application Layout > Dashboard'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
---

# Component: SE Ranking project overview workspace

## Human View

The project overview arranges key SEO and AI-search signals into configurable cards. A metric strip gives the fastest account summary, followed by answer-engine presence, rankings, audit, backlinks, competitor, analytics, content, and setup widgets.

## State Fixtures

- Observed project metrics and empty rankings state.
- Observed Website Audit launch confirmation and active progress state.
- Observed audit-complete toast over the workspace.
- Observed Widgets visibility menu and Rankings engine and date menus.

## Technical View

- The reconstructed metric strip uses the current observed values: AI Presence 0.06%, Organic Traffic 12, Organic Keywords 517, Referring Domains 82, and Search Visibility 0%.
- The local AI engine cards preserve the observed five-engine information architecture without asserting provider calculations.
- Provider-changing behavior remains isolated to the dated live observations. Local fixtures do not call SE Ranking.

## Evidence Boundary

- **OBSERVED:** Widget hierarchy, metric labels and displayed values, eleven-item Widgets menu, reversible Insights visibility toggle, rankings engine and date menus, successful keyword import, audit launch and progress, issue report, and five AI engine cards.
- **RECONSTRUCTION:** Responsive grid, card spacing, icon substitutes, and below-fold grouping.
- **OBSERVED:** Widget drag ordering with delayed reload persistence, restoration of the original order, metric settings, AI setup destination, AI Search drill-down, analytics connector choices, Rankings full-report destination, and completed audit values.
- **NOT OBSERVED:** Metric formulas, completed analytics OAuth, and paid affected-URL detail.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview for centilio.com, 2026-09-30 and 2026-10-01.
