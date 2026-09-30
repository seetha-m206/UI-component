---
component: Semrush Backlink Audit Projects
ui_category: 'Data Display > Backlink Audit Project Table'
source_product: Semrush
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: complete
summary: Authenticated Backlink Audit project collection with breadcrumbs, search, sortable columns, setup actions, loading skeletons, empty state, and guarded creation.
---

# Component: Semrush Backlink Audit Projects

## Human View

A project-level Backlink Audit workspace that helps users find a domain, see whether an audit is configured, and start setup without leaving the table context.

## State Fixtures

Ready, observed loading skeleton, reconstructed empty collection, filtered no-results, and guarded create or setup feedback.

## Technical View

- Breadcrumb navigation is separate from the page title.
- Search filters fictional rows locally.
- The table keeps project identity in the first column and configuration actions in the metric column.
- Loading uses cell-aligned skeletons so table geometry remains stable.

## AI Context

Treat Setup as a prerequisite state, not a zero metric. Never infer audit results from an unconfigured row.

## Evidence Boundary

- **OBSERVED:** Authenticated SEO shell, breadcrumb, project search, Create SEO project, sortable Projects header, Set up rows, loading skeleton rows, and single-page pagination.
- **RECONSTRUCTION:** Fictional projects, no-results copy, and local action feedback.
- **NOT OBSERVED:** Empty-account behavior, multi-page navigation, project creation, completed audit metrics, or failure response.

## Sources

- Authenticated Semrush Backlink Audit project screen, 2026-09-30.
- [[semrush-home-folders-workspace]]
