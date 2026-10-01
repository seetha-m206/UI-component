---
component: SE Ranking keyword query bar
ui_category: 'Research > Search Input'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: Keyword and file-drop entry with database selector and a locally guarded Analyze action.
---

# Component: SE Ranking keyword query bar

## Human View

The control accepts typed keywords or a TXT/CSV drop, pairs the query with a regional database selector, and ends with a prominent Analyze action.

## State Fixtures

- Observed empty query with disabled local Analyze guard.
- Observed database dropdown with Search, India selected, four pinned countries, and the full alphabetical country list.
- Observed populated query for `centilio` with enabled Analyze.
- Synthetic disabled specimen.

## Actions

| Element | User action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Keyword input | Type `centilio` | Enabled Analyze | **OBSERVED** |
| Database button | Open | Displayed searchable country database menu with India selected | **OBSERVED** |
| Analyze | Activate | Navigated to `?keyword=centilio&source=in` and loaded the overview report | **OBSERVED** |
| Drop target | Drop file | TXT upload is covered by the separate keyword file-drop component | **OBSERVED elsewhere** |

## Evidence Boundary

- **OBSERVED:** Empty and populated inputs, selector menu, all country entries, India selection, enabled Analyze, result navigation, and the 1/10 research limit.
- **RECONSTRUCTION:** Responsive stacking and local file drop behavior.
- **NOT OBSERVED:** Raw request payload, quota exhaustion, invalid query errors, and accepted-file parsing on this screen.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Keyword Research entry and result screens, 2026-10-01.
