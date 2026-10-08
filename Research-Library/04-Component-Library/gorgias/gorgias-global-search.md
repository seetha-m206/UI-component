---
component: 'Gorgias Global Search'
ui_category: 'Search > Cross-Object Search Dialog'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Command-search dialog with object scopes, recent sections, advanced search and keyboard hints.'
---

# Component: Gorgias Global Search

## Location

- **OBSERVATION:** Opened from the shell search control using the displayed Command-K shortcut.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-global-search.png)

## Structure

- **OBSERVATION:** Dialog contains a search field, Advanced search, All, Customers and Tickets scopes, search-modifier help, recent objects and keyboard hints.
- **OBSERVATION:** Both recent sections were empty in the observed account.

## Actions

| Action | Result or boundary |
| --- | --- |
| Open or dismiss | Dialog toggles without a search request |
| Change scope | Local fixture changes the selected pill only |
| Enter query | Not exercised to avoid returning customer or ticket content |

## Behavior & States

- **OBSERVATION:** Search focus moved directly to the query field.
- **RECONSTRUCTION:** Empty recent states contain no identities or ticket text.

## Technical Data

- **OBSERVATION / DOM:** Search input, radios, dialog, results region and keyboard-help text were semantic.

## Evidence Boundary

- **NOT OBSERVED:** Results, advanced-search filters, modifiers and new-tab result opening.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
