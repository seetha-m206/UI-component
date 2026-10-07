---
component: "Freshsales Filter and View Controls"
ui_category: "Search & Filtering > Filter Builder"
source_product: "Freshsales"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Freshsales Filter and View Controls

## Location

- **OBSERVED:** Contacts list filter drawer and saved-view selector.

## Structure

- **OBSERVED:** The right-side filter drawer combined a field picker, search input, popular filters, a long grouped field list, empty guidance, and disabled Apply action until a rule exists.
- **OBSERVED:** The saved-view overlay included search, All/Default/My/Other view tabs, Add new view, and choices such as My contacts, New contacts, Recently modified, Never contacted, Needs follow-up, and Active.

## Actions

- **OBSERVED:** Both overlays were opened and dismissed. No filter or view was saved.

## Behavior & States

- **OBSERVED:** Opening the field picker produced a scrollable catalogue with sales, lifecycle, source, activity, ownership, location, campaign, score, subscription, and custom-record fields.
- **RECONSTRUCTION:** Local selection is temporary and produces no provider request.

## Technical Data

- **OBSERVED / DOM:** Combobox, list, buttons, disabled Apply state, and expanded/collapsed disclosures were exposed to accessibility APIs.
- **NEEDS VERIFICATION:** Rule operators, multi-rule logic, validation, view persistence, sharing, and permissions.

## Sources

- **OBSERVED:** Authenticated Freshsales Contacts overlays, 2026-10-07.
