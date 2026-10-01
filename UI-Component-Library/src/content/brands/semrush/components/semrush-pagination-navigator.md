---
component: Semrush Pagination Navigator
ui_category: 'Navigation & Filtering > Pagination'
source_product: Semrush
last_verified: 2026-09-29
evidence_state: mixed_observed_reconstructed
status: complete
summary: Accessible report pagination with explicit observed and needs-verification fixtures.
---

# Component: Semrush Pagination Navigator

## Human View

Moves through report pages while showing the current position. Boundary actions disable at the first and last page.

## State Fixtures

Observed single-page, reconstructed first, middle, and last pages, plus disabled. Every multi-page fixture is labeled **needs verification** because the authenticated dataset had one page.

## Technical View

- Semantic `nav` named Pagination.
- Numbered controls expose `aria-current="page"`.
- Previous and next controls become disabled at boundaries.
- A polite status reports `Page n of total`.

## AI Context

Use when an agent must reason about partial result sets. Preserve page position, total pages, disabled boundaries, and whether behavior is observed or reconstructed.

## Evidence Boundary

- **OBSERVED:** Named pagination region, page status, page-size options, and disabled page 1 of 1 control.
- **NOT OBSERVED:** Multiple live pages, request parameters, persistence, or navigation failures.
- **RECONSTRUCTION:** Number buttons and previous/next transitions use local state.

## Sources

- [[semrush-site-audit-projects]]
- [[semrush-site-audit-issue-detail]]
