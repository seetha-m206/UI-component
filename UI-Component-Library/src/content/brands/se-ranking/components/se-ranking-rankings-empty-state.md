---
component: SE Ranking rankings empty state
ui_category: 'Feedback > Empty State'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
status: complete
summary: No-keywords state whose Add keywords action was traced through a successful live TXT import.
---

# Component: SE Ranking rankings empty state

## Human View

The Rankings widget explains that no keywords are tracked and places a single Add keywords action beneath the message.

## State Fixtures

- Observed empty state.
- Synthetic disabled action.
- Guarded local action feedback.

## Actions

| Element | Action | Local result | Evidence boundary |
| --- | --- | --- | --- |
| Add keywords | Activate | Opens the local import reconstruction | Live destination and successful import **OBSERVED** |

## Evidence Boundary

- **OBSERVED:** Empty copy, action label, import destination, selected file, processing state, success toast, and populated rankings metrics after one keyword was added.
- **RECONSTRUCTION:** Icon, disabled state, and local guard status.
- **OBSERVED:** TXT import completion, added count, resulting 1/750 keyword limit, imported keyword row, the live `.csv,.txt` restriction, duplicate detection, and the zero-add result after removing the duplicate from the pending list.
- **NOT OBSERVED:** Malformed accepted-file validation, the `No, add keywords with duplicates` outcome, quota exhaustion, rollback, and removal of the added keyword.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Project Overview and successful TXT keyword import, 2026-10-01.
- **OBSERVATION:** Authenticated Rankings duplicate check and `Yes, remove duplicates` result, 2026-10-01.
