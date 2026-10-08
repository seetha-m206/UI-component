---
component: "Freshchat FAQ Search"
ui_category: "Search > Help Search"
source_product: "Freshchat"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "partial"
summary: "Observed Freshchat FAQ search entry, categories, clear action and populated results."
---

# Freshchat FAQ Search

## Location

- **OBSERVED:** Freshchat Messenger Home → FAQ search.

## Structure

- **OBSERVED:** Back control, branded header, labeled search field, clear action, category list and Search Results heading.

## Actions

- **OBSERVED:** Typing the non-sensitive query `chat widget` replaced categories with a populated result list.
- **OBSERVED:** Result titles were links and the clear action appeared only when the field contained text.

## Behavior & States

- **OBSERVED:** Empty/category and populated-results states.
- **NOT OBSERVED:** Zero-result, loading, offline and error states.
- **RECONSTRUCTION:** Local search filters a fictional set in memory.

## Technical Data

- **OBSERVED / DOM:** The search field exposed a stable FAQ-search identifier and announced a result count for keyboard users.
- **NEEDS VERIFICATION:** Search endpoint, ranking, debounce, telemetry and caching.

## Sources

- **OBSERVED:** Embedded Freshchat FAQ search, 2026-10-08.
