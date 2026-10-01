---
component: SE Ranking keyword query bar
ui_category: 'Research > Search Input'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
---

# Component: SE Ranking keyword query bar

## Human View

The control accepts typed keywords or a TXT/CSV drop, pairs the query with a regional database selector, and ends with a prominent Analyze action.

## State Fixtures

- Observed empty query with disabled local Analyze guard.
- Reconstructed database dropdown, explicitly marked needs verification.
- Synthetic disabled specimen.

## Actions

| Element | User action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Keyword input | Type | Enables local Analyze guard | **RECONSTRUCTION** |
| Database button | Open | Shows a local region list | **NOT OBSERVED**, needs verification |
| Analyze | Activate | Displays a local safety status | **NOT OBSERVED** on provider |
| Drop target | Drop file | Unsupported locally | **NOT OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Empty prompt, selector affordance, and Analyze label.
- **RECONSTRUCTION:** Region list, enabled transition, keyboard focus, and responsive stacking.
- **NOT OBSERVED:** Live dropdown contents, upload parsing, request payload, quota use, errors, and result navigation. These need verification.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Keyword Research entry screen, 2026-09-30.
