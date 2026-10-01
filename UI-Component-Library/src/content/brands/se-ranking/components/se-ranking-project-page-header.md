---
component: SE Ranking project page header
ui_category: 'Application Layout > Page Header'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Project breadcrumb and title with a guarded reconstructed Widgets menu.
---

# Component: SE Ranking project page header

## Human View

The header combines the centilio.com breadcrumb, Overview title, site label, and Widgets control.

## State Fixtures

- Observed closed header.
- Reconstructed Widgets menu marked needs verification.

## Actions

| Element | Local behavior | Evidence |
| --- | --- | --- |
| Breadcrumb | Guard message | Destination not exercised |
| Widgets | Opens local menu | Menu contents reconstructed |
| Menu item | Guard message | No layout save occurs |

## Evidence Boundary

- **OBSERVED:** Breadcrumb, title, site label, and Widgets trigger.
- **RECONSTRUCTION:** Menu items, open state, and responsive layout.
- **NOT OBSERVED:** Menu contents, persistence, drag arrangement, and navigation.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview, 2026-09-30.
