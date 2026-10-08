---
component: 'monday.com Global Search'
ui_category: 'Navigation > Global Search Overlay'
source_product: 'monday.com'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Cross-product search scopes, shortcuts, saved searches and quick-search education observed.'
---

# Component: monday.com Global Search

## Location

- **OBSERVATION:** Opened from the global toolbar without entering a query.

## Screenshot

![Fictional local preview](/research/monday/fixtures/monday-global-search.png)

## Structure

- **OBSERVATION:** Search input, date filter and scopes for All, Cross Boards, Updates, Files, People, Tags and Docs.
- **OBSERVATION:** Related-to-me shortcuts, saved-search empty state, recent-search empty state and quick-search education.

## Behavior

- **OBSERVATION:** Overlay takes focus and can be closed without changing search state.
- **RECONSTRUCTION:** Scope buttons and close action update local state only.

## Actions

- **OBSERVATION:** Date filter, saved-search guidance and quick-search entry are available.
- **NOT OBSERVED:** Query submission, result navigation, saved-search creation or search preference changes.

## States

- **OBSERVATION:** Empty saved and recent searches, quick-search switch off.
- **NEEDS VERIFICATION:** Result ranking, pagination, keyboard result navigation and permission filtering.

## Rules and Validation

- **RECONSTRUCTION:** Input stays empty and no provider query is sent.

## Technical Data

- **OBSERVATION:** Modal dialog, focused text field, scope links and switch semantics are exposed.

## Lessons

- **RECOMMENDATION:** Combine broad object scopes with personal shortcuts and explicit saved-search empty states.

## Sources

- **OBSERVATION:** Authenticated monday.com global search, 2026-10-08.
- **NOT OBSERVED:** Search requests or provider ranking contracts.
