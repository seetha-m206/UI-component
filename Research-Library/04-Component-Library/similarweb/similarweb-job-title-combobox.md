---
component: Similarweb job-title combobox
ui_category: 'Forms > Searchable Select'
source_product: Similarweb
last_verified: 2026-09-30
evidence_state: mixed_observed_reconstructed
status: partial
summary: Searchable onboarding combobox with empty, open, filtered, clear, and synthetic selected fixtures.
---

# Component: Similarweb job-title combobox

## Human View

The field begins with “Type here.” Opening it reveals an inline search input. Typing `Marketing` returns a long role list and adds a clear action without selecting an answer.

## State Fixtures

- Observed closed placeholder.
- Observed open `Type to search` state.
- Observed `Marketing` query with matching roles.
- Synthetic selected and disabled states, both marked as reconstructions.

## Technical View

- Reconstructed with native input semantics plus `role="combobox"`, `aria-expanded`, `aria-controls`, and a linked listbox.
- Filtering is local and deterministic in the preview.
- Clear removes the query and returns to the open search-hint state.
- Selecting a local option does not persist or transmit an onboarding answer.

## Actions

| Element | User action | Observed result | Evidence boundary |
|---|---|---|---|
| Closed field | Click | Search input and list open | **OBSERVED** |
| Search input | Type `Marketing` | Matching marketing job titles appear | **OBSERVED** |
| Clear | Click | Query is cleared | **OBSERVED** |
| Result option | Select | Not exercised in the live provider | **NOT OBSERVED**, needs verification |

## AI Context

Preserve the distinction between a typed query and a selected role. The captured list is evidence for the filtered state only. It does not establish ordering, full taxonomy, server matching, or persistence behavior.

## Evidence Boundary

- **OBSERVED:** Placeholder, open state, search input, clear action, `Type to search`, and the filtered Marketing result list.
- **RECONSTRUCTION:** Accessible listbox semantics and local option-selection state.
- **INFERENCE:** Selecting a valid result enables progression.
- **NOT OBSERVED:** Keyboard navigation, no-results copy, remote search, selected-value styling, submission, validation, and persistence. All need verification.

## Sources

- **OBSERVATION:** Authenticated Similarweb account onboarding in the Codex in-app browser, 2026-09-30.
