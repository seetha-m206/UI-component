---
component: SE Ranking keyword or file input
ui_category: 'Inputs > File Drop Field'
source_product: SE Ranking
last_verified: 2026-10-01
evidence_state: complete_with_boundaries
---

# Component: SE Ranking keyword or file input

## Human View

The import dialog accepts UTF-8 CSV or TXT files, optional target links, a search-engine scope, and a keyword group.

## State Fixtures

- Observed empty CSV/Text upload form.
- Observed selected filename state for `se-ranking-keywords-evidence.txt`.
- Observed active Import state and processing spinner.
- Observed success toast: Added 1, updated 0.
- Observed live file-input restriction `accept=".csv,.txt"`; unsupported JSON was blocked before import and added no keyword.
- Observed duplicate confirmation after re-entering the tracked keyword: `Duplicates found: 1` with `No, add keywords with duplicates` and `Yes, remove duplicates` actions.
- Observed duplicate-removal result: `Added keywords: 0`; the tracked keyword and 1/750 account limit remained unchanged.

## Evidence Boundary

- **OBSERVED:** Import method chooser, `accept=".csv,.txt"`, unsupported-extension boundary, format choices, target-link checkbox, engine and group selectors, file chooser, selected filename, Import enablement, processing, successful parsing, duplicate detection, duplicate-removal confirmation, and provider results.
- **RECONSTRUCTION:** Responsive local layout, disabled specimen, and explanatory unsupported-type message based on the live accept restriction.
- **NOT OBSERVED:** Invalid encoding, malformed accepted files, oversized files, the `No, add keywords with duplicates` outcome, quota exhaustion, and CSV/XLS history import.

## Sources

- **OBSERVATION:** Authenticated SE Ranking Keyword Research entry, 2026-09-30.
- **OBSERVATION:** Authenticated Project Overview keyword import completed with Added 1 and updated 0, 2026-10-01.
- **TECHNICAL OBSERVATION:** Authenticated Rankings import file input restricted selection to `.csv,.txt`, 2026-10-01.
- **OBSERVATION:** Authenticated Rankings duplicate check found one duplicate. Choosing `Yes, remove duplicates` closed the form with `Added keywords: 0` and left the keyword limit at 1/750, 2026-10-01.
