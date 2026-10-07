---
component: "HubSpot Meetings Activity Workspace"
ui_category: "CRM > Activity Management"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Meetings Activity Workspace

## Location

- **OBSERVED:** Meetings index at `/contacts/343751787/objects/0-47/views/all/list` and a provider-sample meeting focused inside its associated contact timeline.

## Screenshots

- **OBSERVED:** `2026-10-07-meetings-list.png` and `2026-10-07-meeting-activity-detail.png`.

## Structure

- **OBSERVED:** The index table contains Meeting name, Activity date, Activity assigned to, Call and meeting type, Meeting outcome, Meeting location, associated Contacts and associated Deals.
- **OBSERVED:** Two provider-labelled sample meetings were visible, with record links and inline association controls.
- **OBSERVED:** Opening a sample meeting routed to the associated Contact record with the meeting expanded in the center activity timeline.
- **OBSERVED:** The expanded activity showed title, timestamp, owner, description, property summary, attendees, duration, location, associations and Add comment.
- **OBSERVED:** The surrounding record retained the three-column contact-detail workspace and association cards.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Sample meeting link | Open | Focused the selected meeting inside the associated sample contact timeline. |
| Import, Export, Edit, Add comment and association controls | Not activated | Provider writes and transfer behavior remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** Activity records are first-class index objects while their detailed context is presented inside the related CRM record.
- **OBSERVED:** The meeting detail uses Back to timeline to preserve activity context.
- **NEEDS VERIFICATION:** Editing, commenting, attendee management, outcome updates, import and export.

## Technical Data

- **OBSERVED / DOM:** Meetings use CRM object type `0-47`; the focused record URL carries an `engagement` identifier.
- **NEEDS VERIFICATION:** Association update API, meeting property schema and activity ownership rules.

## AI Context

- **FACT:** The two sample meetings were provider-labelled sample data.
- **RECONSTRUCTION:** Local previews must replace provider names, descriptions and dates with fictional fixtures.
- **NEEDS VERIFICATION:** No meeting or association was modified.

## Sources

- Authenticated HubSpot Meetings index and provider-sample activity detail, observed 2026-10-07.
