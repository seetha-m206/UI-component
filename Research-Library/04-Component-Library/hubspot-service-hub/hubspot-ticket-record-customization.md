---
component: "HubSpot Ticket Record Customization"
ui_category: "Account / Settings > Record Customization"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Record Customization

## Location

- **OBSERVED:** Authenticated Ticket Record Customization settings, inspected 2026-10-06.

## Structure

- **OBSERVED:** The page explained that views customize the layout and content of Ticket records. It provided Search by view name and Create team view.
- **OBSERVED:** The table columns were View name, Assigned to, Last updated and Actions. One Default view row was assigned to all unassigned teams and users, with no last-updated value.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Record Customization tab | Page visit | Loaded the existing default record view. |
| Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt. |
| Default view | Page visit | Opened the populated Ticket record-page editor. |
| More card actions | Open disclosure | Displayed Set conditional logic and Remove card. |
| Search, Create team view, row selection, editing and save controls | Not activated | Assignment, editing and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** Pagination showed Page 1 with previous and next unavailable.
- **OBSERVED:** The record-page editor contained About this ticket, Activities, Contacts, Companies, Deals and Attachments, with header, card and tab controls.
- **NOT OBSERVED:** Team-view creation, assignments, bulk selection, edits and saved outcomes.

## Technical Data

- **OBSERVED / DOM:** Search was settable, rows used checkboxes, sortable headings and a popup action.

## Human Context

- **RECOMMENDATION:** Keep layout definitions and audience assignments visible before entering an editor.

## AI Context

- **FACT:** The default-view inventory and record-page editor were inspected without changes.

## Needs Verification

- **NEEDS VERIFICATION:** Creation, assignment, sorting, edit dialogs, permissions and save outcomes.

## Sources

- **OBSERVED:** Authenticated Ticket Record Customization screen, inspected 2026-10-06.
