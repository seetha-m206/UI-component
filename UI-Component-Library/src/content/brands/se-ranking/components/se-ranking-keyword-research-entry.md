---
component: SE Ranking keyword research entry
ui_category: 'Research > Keyword Research'
source_product: SE Ranking
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Keyword-research landing screen with query entry, feature cards, carousel indicators, and guarded overlays.
---

# Component: SE Ranking keyword research entry

## Human View

The entry screen centers a single keyword query bar above educational feature cards. It explains difficulty, search volume, paid competition, global volume, bulk analysis, saved keyword lists, database expansion, and historical data before a user runs research.

## State Fixtures

- Observed default empty entry screen.
- Observed screen with acquisition survey dialog.
- Observed screen with audit-complete toast.
- Synthetic disabled specimen for component review.

## Technical View

- The page contains two repeated query bars and horizontally paged feature-card groups.
- The local reconstruction renders one primary bar and representative card groups.
- Local Analyze is guarded and never sends a keyword or consumes provider quota.

## Evidence Boundary

- **OBSERVED:** Heading, supporting copy, empty query prompt, Analyze action, carousel counts, and feature-card labels.
- **RECONSTRUCTION:** Card illustrations, responsive stacking, disabled specimen, and carousel styling.
- **NOT OBSERVED:** Query results, file upload, validation, analysis timing, request payloads, and database selection. These need verification.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Keyword Research entry screen, 2026-09-30.
