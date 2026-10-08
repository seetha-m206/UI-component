---
component: "Trello Inbox Controls"
ui_category: "Task Capture > Inbox and Filtering Controls"
source_product: "Trello"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Private task-capture inbox with filters, sorting and channel education."
---

# Component: Trello Inbox Controls

## Location

- **OBSERVATION:** Inbox pane inside the board workspace.

## Screenshot

![Fictional local preview](/research/trello/fixtures/trello-inbox-controls.png)

## Structure

- **OBSERVATION:** Filter and menu controls sit above add-card and channel education.
- **OBSERVATION:** Filter covers keyword, created date, completion and due date.
- **OBSERVATION:** Menu exposes sort, archived cards, add-from channels, background, settings and new-tab navigation.

## Behavior

- **OBSERVATION:** Inbox is explicitly private to the current user.
- **RECONSTRUCTION:** Sort and filter selections operate on fictional rows only.

## Actions

- **OBSERVATION:** Open filter, menu and sort submenu.
- **NOT OBSERVED:** Add card, import from channels, view archive, change background/settings or apply sort/filter.

## States

- **OBSERVATION:** Empty onboarding state with newest, oldest and alphabetical sort options.
- **NEEDS VERIFICATION:** Populated inbox, deduplication and capture-channel error states.

## Rules and Validation

- **RECONSTRUCTION:** Channel connections and card creation are disabled.

## Technical Data

- **OBSERVATION:** Resizable pane with popovers, fields and checkbox groups.

## Lessons

- **RECOMMENDATION:** Make task capture private by default and explain inbound channels at the point of use.

## Sources

- **OBSERVATION:** Authenticated Trello Inbox controls, 2026-10-08.
- **NOT OBSERVED:** Inbox creation or integration behavior.
