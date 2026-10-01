---
component: Semrush Position Tracking Landscape
ui_category: 'Analytics & Reporting > Rank Tracking Dashboard'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Position Tracking campaign report shell with actions, target metadata, report tabs, summary metrics, narrative insights, and loading states.
---

# Component: Semrush Position Tracking Landscape

Product → Screen → Components → Actions → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Observed in:** Authenticated Semrush Position Tracking configured campaign, Landscape and Overview reports.
- **Extraction level:** Full report screen and reusable report-shell primitives.
- **Evidence boundary:** Real account names, competitors, keywords, URLs, and metrics are excluded. Preview content is synthetic.

## Screenshot

- **OBSERVED:** In-session screenshots captured the campaign collection and loaded report viewport.
- **NEEDS VERIFICATION:** A durable provider screenshot asset is not stored in this repository.

## Structure

Application shell → report header → project selector and actions → target metadata → keyword and competitor counts → SERP and Share of Voice controls → report tabs → filters → KPI cards → narrative summary → diagnostic widgets.

## Actions

| Element                         | Safe test     | Observed result                                                    |
| ------------------------------- | ------------- | ------------------------------------------------------------------ |
| Configured campaign             | Open          | Navigated to Landscape with selected date range in the URL         |
| Overview tab                    | Click         | Opened Overview and replaced widgets with trend and rankings table |
| Export, Share, Alerts, Settings | Not activated | Needs verification                                                 |
| Edit keywords and competitors   | Not activated | Needs verification                                                 |

## Behavior & States

Widgets displayed loading skeletons before resolving independently. KPI cards exposed Visibility, Estimated Traffic, and Average Position. Landscape combined narrative findings with diagnostic widgets. Overview exposed dense filters, trend metric selectors, potential-growth mode, and a rankings table. Report tabs navigate to report-specific URLs.

### State fixtures

Loading, Landscape, Overview, guarded action feedback, dismissible notice, KPI cards, narrative summary, and synthetic Rankings Overview.

## Rules & Validation

Exports, sharing, alerts, settings, keyword changes, competitor changes, tag creation, Google connection, and purchasing remain guarded. Never copy customer data into reusable fixtures.

## Technical Data

- **OBSERVED:** Report navigation uses accessible tabs with selected states.
- **OBSERVED:** KPI and widget loading states resolve independently.
- **OBSERVED:** Date, comparison domain, report mode, and sorting appear in query parameters.
- **OBSERVED:** Overview exposes checkbox selection, sortable headers, metric tabs, and filter popovers.
- **NOT OBSERVED:** Private endpoints, export payloads, alert persistence, settings changes, bulk actions, permissions, and failure responses.
- **RECONSTRUCTION:** All fixture data and actions remain local.

## Accessibility

Maintain one page heading, label selectors, expose tab and checked states, preserve table header relationships, label icon actions, and announce widget loading and guarded feedback.

## Cross-Component Pattern Note

This screen composes [[semrush-position-tracking-date-range]], [[semrush-rankings-overview-table]], metric cards, narrative summaries, notices, and guarded report actions.

## Competitor Comparisons

| Pattern                   | Strength                                   | Reuse opportunity                                                     |
| ------------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| Semrush Position Tracking | Broad diagnostics under a consistent shell | Separate report navigation from widget state while preserving filters |
| Centilio Seek             | Cross-provider SEO and AI visibility       | Add provenance and confidence beside each metric                      |

## Best Observed Approach

Keep the report shell stable across report tabs, preserve target and date context in navigation, and let widgets resolve independently.

## Sources

- **OBSERVATION:** Authenticated Semrush Position Tracking Landscape and Overview review, 2026-09-30.
- **OBSERVATION:** Accessibility tree, DOM snapshot, safe tab navigation, URL state, loading transitions, and in-session screenshot evidence.
- **RECONSTRUCTION:** Fictional data and guarded actions. No export, alert, share, edit, purchase, or settings action occurred.
