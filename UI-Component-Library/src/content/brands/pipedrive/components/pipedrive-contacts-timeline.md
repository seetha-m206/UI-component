---
component: "Pipedrive Contacts Timeline"
ui_category: "Data Display > Timeline"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Three-month contacts activity matrix."
---

# Pipedrive Contacts Timeline

## Location

- **OBSERVED:** Authenticated Contacts > Contacts timeline screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** Persons and Organizations tabs, Person split-create control, group email, item count, frequency and range selectors, activity-type filters, month columns and contact rows.

## Actions

- **OBSERVED:** No contact, organization, group email, filter or range change was executed.

## Behavior & States

- **OBSERVED:** Two provider sample contacts appeared across a July to October timeline.
- **RECONSTRUCTION:** The local preview uses fictional contacts and keeps controls local.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Keyboard traversal across the horizontal timeline, focus restoration and screen-reader announcements.

## Human Context

- **RECOMMENDATION:** Preserve the fixed identity column and clear time-axis labels when the timeline scrolls horizontally.

## AI Context

- **RECONSTRUCTION:** Public fixtures contain invented identities and values.

## Needs Verification

- **NEEDS VERIFICATION:** Frequency persistence, filtering, group-email behavior, responsive layout and provider errors.

## Sources

- **OBSERVED:** Authenticated Pipedrive Contacts timeline, 2026-10-07.
