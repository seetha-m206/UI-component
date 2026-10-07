---
component: "Salesforce Sales New Event Form"
ui_category: "Forms > Calendar Modal"
source_product: "Salesforce Sales (trial workspace)"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Component: Salesforce Sales New Event Form

## Location

- **OBSERVED:** Opened from Sales → Calendar → New Event and cancelled without changing values.

## Structure

- **OBSERVED:** Subject choices were Call, Email, Meeting, Send Letter/Quote and Other.
- **OBSERVED:** The form included description, start and end date and time, attendees, related records, location, Show Time As, All-Day Event and Private.
- **OBSERVED:** Related record object selectors showed Contacts, Accounts and Calendars. The private-event warning described admin and View All Data visibility.

## Behavior & States

- **OBSERVED:** Default duration was one hour. No event was saved.
- **RECONSTRUCTION:** The catalogue fixture uses fictional attendees, records and location.
- **NOT OBSERVED:** Recurrence, invitations, conflicts, successful save and calendar sync.

## Needs Verification

- **NEEDS VERIFICATION:** Successful event creation, invitations and recurrence behavior.

## Sources

- **OBSERVED:** Private receipt screen ID `sales-new-event-form`.
