---
component: 'Gorgias Inbox Controls'
ui_category: 'Inbox > View, Table and Notification Controls'
source_product: 'Gorgias'
last_verified: '2026-10-08'
evidence_state: 'source_reviewed'
status: 'complete'
summary: 'Default-view filtering, locked edit-view rules, table columns and empty notifications.'
---

# Component: Gorgias Inbox Controls

## Location

- **OBSERVATION:** Transient controls opened from the Assigned to me inbox.

## Screenshot

![Fictional local preview](/research/gorgias/fixtures/gorgias-inbox-controls.png)

## Structure

- **OBSERVATION:** Default-view selection lists Assigned to me, Unassigned, All, Snoozed, Closed, Trash and Spam.
- **OBSERVATION:** The edit-view surface exposes assignee and open-status filters while stating that the default Inbox view cannot be saved.
- **OBSERVATION:** Table settings select Tags, Customer and Last message while offering additional columns.
- **OBSERVATION:** Notifications expose Settings, All filtering and Mark all as read with an empty state.
- **RECONSTRUCTION:** The local fixture presents these independent transient surfaces together for comparison.

## Actions and boundaries

- **NOT OBSERVED:** No view definition, filter, table column, pagination or notification state changed.
- **NEEDS VERIFICATION:** Custom views, saved changes and populated notifications.

## Sources

- **OBSERVATION:** Authenticated Gorgias runtime, 2026-10-08.
