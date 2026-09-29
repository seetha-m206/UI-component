---
component: Semrush Site Audit Issue Detail
ui_category: 'Data Display > Issue Detail Workspace'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Site Audit issue-detail workspace with remediation guidance, visibility tabs, loading and empty states, search, advanced filters, row selection, affected-page grid, project switching, and pagination fixtures.
---

# Component: Semrush Site Audit Issue Detail

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Semrush Site Audit within the authenticated AI Visibility navigation.
- **Observed screen:** A single Site Audit issue-detail route reached from a project audit.
- **Evidence boundary:** The live screen contained a customer domain, campaign identifier, page identifier, page URL, title, crawl values, and timestamps. Those values remain session-only. The reconstruction uses fictional `.example` domains and synthetic metrics.

## Structure

Persistent Semrush top bar → global product rail → AI Visibility section navigation → Site Audit header → project selector → campaign actions → crawl metadata → seven report tabs → all-issues return → issue card → severity and remediation disclosure → Issues and Hidden tabs → search and advanced filters → selection toolbar → affected-pages grid → pagination.

## Actions

| Reusable component | States and controls | Safe interaction tested | Observed result |
|---|---|---|---|
| Project selector | Collapsed and expanded combobox | Opened | Displayed two projects and a Create new SEO project action |
| Report navigation | Seven tabs with Issues selected | Inspected only | Overview, Issues, Crawled Pages, Statistics, Compare Crawls, Progress, and JS Impact were visible |
| Campaign actions | Rerun, PDF, Export, Share, and Settings | Inspected only | Outcomes need verification because they may mutate state, disclose data, or leave the reviewed screen |
| Issue summary | Title, Warning badge, Send to, Site Structure, Exclude check, failed and successful counts | Inspected only | One failed check and no successful checks were represented in the captured issue |
| How to fix | Collapsed and expanded disclosure | Opened | Revealed an issue explanation, Meta tags, Indexability, and Content categories, a concise remediation, and a collaboration prompt |
| Issues and Hidden tabs | Selected, loading, populated, and empty | Opened Hidden and returned to Issues | Hidden briefly showed Loading, then settled to No hidden issues |
| Search | Empty, populated, loading transition, empty result, clear recovery | Entered a synthetic non-matching value, searched, and cleared | Settled to Nothing found with Try changing your filters and a Clear filters recovery action |
| Advanced filters | Collapsed, expanded, one condition, two conditions | Opened, changed operator, added a condition, removed a condition, and cleared all | Exposed Include and Exclude operators, Page URL field, value input, Add condition, Apply filters, Clear all, and per-condition removal |
| Row selection | Unselected and selected | Selected one row, then used Deselect all | Added a bulk bar with 1 row selected, Deselect all, and Hide |
| Affected-page grid | Header and one page row | Inspected and selected only | Exposed All items, Page URL, Discovered, page report, external-link, and Hide controls |
| Pagination | Current page and page-size menu | Opened | Offered 10, 20, 50, and 100 rows per page |

## Behavior & States

- The project selector is anchored within the Site Audit title and exposes a compact project list.
- The report tablist remains above the issue context. Issues is the selected report for this screen.
- Remediation guidance expands inside the issue card without navigating away.
- Switching to Hidden first exposes a transient loading state and then a dedicated empty state.
- Search keeps the table shell visible and replaces the page row with a recoverable empty state.
- Advanced filters are additive. A second condition gains its own remove action.
- Row selection creates a contextual bulk-action bar and can be reversed without changing live data.
- The reconstruction keeps navigation and mutation local. Untested live actions only display a guard message or remain disabled.

### State fixtures

| Fixture | Purpose | Evidence status |
|---|---|---|
| Issue detail | Default issue card, controls, grid row, and pagination | Observed with synthetic values |
| How to fix | Expanded explanation and remediation guidance | Observed |
| Hidden loading | Transient state after opening Hidden | Observed |
| No hidden issues | Settled Hidden empty state | Observed |
| Search empty | Synthetic query with Nothing found and Clear filters | Observed |
| Advanced filters | One Include, Page URL, and value condition | Observed |
| Two conditions | Additive second condition with remove action | Observed |
| Selected row | Bulk selection bar with guarded Hide | Observed |
| Project menu | Two synthetic projects and disabled creation | Observed structure |
| Page-size menu | 10, 20, 50, and 100 options | Observed |
| Disabled | Non-interactive design-system override | Synthetic preview state |

## Rules & Validation

- Never copy live domains, campaign identifiers, page identifiers, URLs, titles, crawl values, or timestamps into fixtures.
- Keep rerun, export, sharing, settings, sending, exclusion, hiding, project creation, and external navigation guarded until their contracts and permissions are verified.
- Preserve table headers during loading and empty states so the result context remains clear.
- Announce loading and empty results through status semantics.
- Expose filter operator, field, and value controls with unique names for every condition.
- Keep Hide separate from selection. Selection itself must not mutate audit state.
- Preserve explicit Warning text. Do not rely on color alone.
- Keep remediation guidance in the issue context so users can act without losing their place.

## Technical Data

- **OBSERVED:** The Site Audit header is a named region above the issue workspace.
- **OBSERVED:** The report navigation is a flex tablist named Site Audit reports with seven tabs and a 14 px computed font.
- **OBSERVED:** The advanced-filter trigger is a button exposed as `role=combobox`, with a 6 px computed border radius and a 14 px font.
- **OBSERVED:** The advanced-filter panel exposes Include and Exclude operators, one Page URL field option, a value textbox, Add condition, Apply filters, Clear all, and condition removal.
- **OBSERVED:** The affected-pages collection is a `role=grid` rendered with CSS Grid at a 14 px computed font size.
- **OBSERVED:** Visible grid headers were Page URL and Discovered, plus selection and row-action columns.
- **OBSERVED:** Opening Hidden produced a transient Loading row before No hidden issues.
- **OBSERVED:** A non-matching search produced Nothing found, Try changing your filters, and Clear filters.
- **OBSERVED:** Selecting the page row exposed 1 row selected, Deselect all, and Hide.
- **OBSERVED:** The issue-details card had an 8 px computed border radius.
- **NOT OBSERVED:** Rerun, PDF export, spreadsheet export, Share, Settings, Send to, Exclude check, Hide, Unhide, external-page opening, live project switching, project creation, Apply filters, all-issues navigation, Site Structure navigation, page-report navigation, and report-tab navigation.
- **NOT OBSERVED:** Sort behavior was not re-tested in this pass beyond the initially exposed ascending Page URL state.
- **NOT OBSERVED:** Network requests, payloads, server validation, error responses, quota effects, authorization checks, and persistence were not recorded.
- **INFERENCE:** The loading row is a client-visible transition while the Hidden collection resolves. No network evidence was gathered to establish its transport.
- **RECOMMENDATION:** Centilio Seek should retain inline remediation, reversible filtering, explicit evidence states, and selection-before-mutation while separating audit mutations from navigation and read-only analysis.

## Accessibility

- The live report and visibility controls expose tab and selected-state semantics.
- Project and advanced-filter triggers expose combobox semantics and expanded state.
- The affected-page collection exposes grid, row, gridcell, and columnheader roles.
- Search has a dedicated textbox, action, clear control, and recoverable empty state.
- Loading and empty messages should use live status semantics without moving keyboard focus.
- Filter conditions need numbered accessible labels, especially when more than one exists.
- Selection controls need distinct All items and row-specific labels.
- Popovers and menus still need keyboard-only Escape, focus return, and focus-trap verification.
- Warning and selection states must remain understandable without color.

## Cross-Component Pattern Note

The global and AI Visibility shell follows [[semrush-ai-visibility-shell]]. The parent multi-project grid is documented in [[semrush-site-audit-projects]]. The search, filter, and pagination primitives complement [[semrush-report-filter-controls]].

## Competitor Comparisons

| Product | Comparable pattern | Strength | Open question |
|---|---|---|---|
| Semrush | Issue-level audit workspace | Keeps evidence, remediation, affected pages, filtering, and bulk selection in one context | Mutation confirmation, permissions, responsive behavior, and server failures remain unverified |
| Centilio Seek | Proposed evidence-backed remediation workspace | Can attach provider evidence, confidence, ownership, and safe action gates to each issue | Final provider contracts, authorization model, quotas, and persistence remain open |

## Best Observed Approach

Keep the issue explanation, severity, remediation, affected pages, reversible search and filters, and explicit loading and empty states in one workspace. Make selection reversible and require a separate guarded action before any live change. Treat every project, export, collaboration, and audit mutation as a permissioned action.

## Sources

- **OBSERVATION:** Authenticated Semrush Site Audit issue-detail review, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM captures for the Site Audit header, report tabs, issue card, remediation disclosure, visibility tabs, search, advanced filter panel, grid, selection toolbar, project list, and pagination options.
- **OBSERVATION:** Screenshots of the default issue screen, expanded How to fix guidance, Hidden empty state, search empty state, and advanced filter panel.
- **RECONSTRUCTION:** Local React preview uses fictional projects and local-only interactions. No live campaign, project, setting, export, sharing, navigation, filtering, exclusion, or hiding action was submitted.
