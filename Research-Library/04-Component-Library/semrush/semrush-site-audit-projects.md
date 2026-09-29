---
component: Semrush Site Audit Projects
ui_category: 'Data Display > Audit Project Table'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: runtime_verified
status: complete
summary: Authenticated Site Audit project-list workspace with search, sortable recency, dense health metrics, crawl-limit feedback, read-only audit settings, creation modal, horizontal overflow, and pagination controls.
---

# Component: Semrush Site Audit Projects

Product → Screen → Component → Action → Behavior → States → Rules → Validation → Technical Data → Reference

## Location

- **Product:** Semrush Site Audit within the authenticated AI Visibility navigation.
- **Observed screen:** Site Audit project list at the `/siteaudit/` route.
- **Evidence boundary:** The live screen contained account-specific domains, campaign identifiers, metrics, and settings. Those values remain session-only. The reconstruction uses fictional `.example` projects and no campaign identifiers.

## Structure

Persistent Semrush top bar → global product rail → AI Visibility section navigation → breadcrumbs and page title → feedback link → project search → create-project action → horizontally scrollable project grid → project rows with audit metrics and settings action → page controls → persistent help affordance.

## Actions

| Reusable component | States and controls | Safe interaction tested | Observed result |
|---|---|---|---|
| Project search | Empty, focused, populated, clearable | Entered a synthetic non-matching value | The grid preserved its header and replaced rows with a “Nothing found” state, echoed the query, explained acceptable search terms, and offered “Show all projects” |
| Show-all recovery | Button in the empty state | Clicked | Cleared the query and restored all project rows |
| Last Update sort | Ascending and descending button labels | Clicked once | Accessibility state changed from ascending to descending and the row order reversed. The URL hash recorded the sort state |
| Create-project action | Primary button and modal | Opened, inspected, and cancelled | Opened a modal with required Domain guidance, optional Name input, Create SEO project, Cancel, and close actions |
| Project identity | Primary project link plus repeated domain text | Inspected only | The link targeted that project’s audit overview |
| Audit settings trigger | Collapsed and expanded pop-up button | Opened and dismissed | Exposed campaign actions, a scrollable audit-settings summary, and a checked audit-complete email option |
| Rerun campaign | Enabled live action | Not clicked | Outcome, confirmation, quota use, crawl timing, and network behavior need verification |
| Stop and save results | Disabled in the observed menu | Inspected only | Unavailable for the captured project state |
| Cancel crawling | Disabled in the observed menu | Inspected only | Unavailable for the captured project state |
| Crawl-limit warning | Warning icon, dialog, and change-limit CTA | Opened and dismissed | Explained that only the configured maximum number of pages would be represented and offered a page-limit change action |
| Health metrics | Site Health, AI Search Health, Errors, Warnings, Crawlability, HTTPS, International SEO, Site Performance, Internal Linking, Markups, and Core Web Vitals | Inspected only | Each supported metric linked to a dedicated detail route. Unsupported categories rendered “Not implemented” |
| Horizontal overflow | Scrollable dense grid | Observed | Additional metric columns continued beyond the initial viewport without collapsing the first-screen table |
| Pagination | Disabled current-page field, page count, page-size combobox, page status | Opened the page-size control | The menu offered 10, 20, 50, and 100 rows. Page input remained disabled because only one page existed |

## Behavior & States

- Search filters the visible project collection without removing column context.
- No-results feedback is embedded as a full-width grid row and is recoverable through a single action.
- Recency sort exposes its direction through an accessible label and persists it in the URL hash.
- Each project row combines identity, freshness, crawl coverage, health scores, issue counts, supported audit categories, and unavailable-category placeholders.
- Metric links use precise accessible names such as “Site Health score is 95%, open details.”
- The project action trigger is a pop-up button. Its expanded surface mixes action commands with current configuration values.
- The observed inactive campaign showed Stop and Cancel as disabled while Rerun remained available.
- The crawl-limit warning is contextual to the pages-crawled cell and includes both the limit ratio and an explanation of incomplete coverage.
- Create-project modal closure through Cancel was safe and did not create a project.
- The reconstruction keeps all data synthetic. Navigation, creation, rerun, cancellation, configuration, email, export, and feedback actions are local-only or disabled.

### State fixtures

| Fixture | Purpose | Evidence status |
|---|---|---|
| Projects list | Default toolbar, metric grid, two project rows, overflow, and pagination | Observed with synthetic values |
| Filtered projects | Populated search with one matching project | Observed search behavior |
| Nothing found | Query echo, explanation, and Show all projects recovery | Observed |
| Sort toggled | Descending accessibility label and reversed row order | Observed |
| Audit settings menu | Campaign actions, settings summary, and checked email option | Observed, with live modifications disabled |
| Crawl-limit warning | Coverage warning and change-limit CTA | Observed, with CTA disabled |
| Create project modal | Domain guidance, optional name, primary and cancel actions | Observed. Submission was not tested |
| Page-size menu | 10, 20, 50, and 100 options | Observed |
| Disabled | Non-interactive design-system override | Synthetic preview state |

## Rules & Validation

- Keep account domains, campaign identifiers, settings, metrics, and email preferences out of reusable fixtures.
- Do not start, rerun, stop, cancel, or reconfigure an audit during an evidence-only review.
- Preserve column headers during filtering so users retain the table’s metric context.
- Pair warning icons with readable dialog text and an explicit coverage ratio.
- Keep unavailable categories explicit as “Not implemented” rather than rendering zero.
- Expose sort direction programmatically and visually.
- Give project, metric, issue-count, settings, pagination, and creation controls distinct accessible names.
- Treat the audit-complete email control as an account setting. Do not change it without explicit approval.
- In a reusable implementation, separate read-only configuration summary from mutation controls to reduce accidental changes.

## Technical Data

- **OBSERVED:** The project collection is a `role=grid` element rendered with CSS Grid at a 14 px computed font size.
- **OBSERVED:** Fourteen column headers were present: Project, Last Update, Pages Crawled, Site Health, AI Search Health, Errors, Warnings, Crawlability, HTTPS, Int. SEO, Site Performance, Internal Linking, Markups, and Core Web Vitals.
- **OBSERVED:** The projects container is exposed as a named region and the pagination control as `nav[aria-label="Pagination"]`.
- **OBSERVED:** The primary Create SEO project control is a `type=button` with a 6 px computed border radius.
- **OBSERVED:** Search is a text input with the placeholder “Project name or domain.” A populated search adds a clear-input button.
- **OBSERVED:** The grid’s metric links route to overview, AI-search, issues, crawlability, HTTPS, international SEO, performance, linking, markups, and web-vitals detail paths.
- **OBSERVED:** Toggling recency changed the route hash to a `sorting/update_desc/page/1` pattern.
- **OBSERVED:** The page-size combobox exposed 10, 20, 50, and 100 options. The page textbox was disabled at page 1 of 1.
- **OBSERVED:** The create modal exposes a named dialog with Domain and optional Name textboxes. Domain guidance rejects subfolders.
- **NOT OBSERVED:** Create-project validation, malformed-domain errors, request payload, loading, duplicate handling, quota effects, success routing, and server errors.
- **NOT OBSERVED:** Rerun, stop-and-save, cancel-crawling, settings changes, page-limit changes, email toggling, feedback email, project links, metric links, issue links, exports, and pagination across multiple live pages.
- **NOT OBSERVED:** Network requests were not recorded in this pass. Route targets and state transitions came from the rendered DOM and visible behavior.
- **INFERENCE:** Client-side search is likely applied to the already-rendered project collection because results changed immediately while the table shell remained stable.
- **RECOMMENDATION:** Centilio Seek should adopt the dense status-grid pattern but separate destructive campaign actions from configuration inspection and preserve metric semantics in every responsive representation.

## Accessibility

- The live grid exposes row, gridcell, and columnheader semantics.
- Sort direction is included in both the header label and button accessible name.
- Project and metric links use outcome-oriented accessible names instead of score-only labels.
- The no-results message is exposed as a status and includes a keyboard-operable recovery button.
- Settings, crawl-limit, page-size, and creation overlays require focus management and Escape behavior. Escape closure was inconsistent during tool-driven inspection and needs verification with keyboard-only testing.
- Warning state must not rely on the amber icon alone.
- “Not implemented” is textual, preserving meaning without color.

## Cross-Component Pattern Note

The global and AI Visibility navigation follows [[semrush-ai-visibility-shell]]. The table’s filter, sort, overflow, and pagination primitives complement [[semrush-report-filter-controls]]. The audit-health deep links are the next screen family to review and are not reconstructed in this record.

## Competitor Comparisons

| Product | Comparable pattern | Strength | Open question |
|---|---|---|---|
| Semrush | Multi-project audit status grid | Packs freshness, crawl capacity, issues, and many health categories into one comparison surface | Mutation safeguards, responsive behavior, and deep-link return state remain unverified |
| Centilio Seek | Proposed site and AI-readiness workspace | Can unify crawl, AI visibility, and remediation ownership while keeping evidence boundaries explicit | Final audit model, quotas, providers, and authorization rules remain open |

## Best Observed Approach

Keep search, creation, sortable freshness, audit coverage, health metrics, unavailable-category labels, warnings, and pagination in one consistent project-list card. Preserve the header during empty states, expose detail destinations through descriptive link names, and keep high-impact audit actions visibly separate from read-only configuration.

## Sources

- **OBSERVATION:** Authenticated Semrush Site Audit project-list review, 2026-09-29.
- **OBSERVATION:** Accessibility and DOM captures for the 14-column grid, search and empty state, sort direction, project action menu, crawl-limit dialog, modal fields, and pagination options.
- **OBSERVATION:** Screenshots of the default table, no-results state, settings menu, crawl-limit warning, and create-project modal.
- **RECONSTRUCTION:** Local React preview uses fictional projects and local-only controls. No project, audit, setting, email, feedback, export, or navigation action was submitted.
