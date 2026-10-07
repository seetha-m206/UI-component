---
component: "Pipedrive Organizations List"
ui_category: "Data Display > Data Table"
source_product: "Pipedrive"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Pipedrive Organizations List

## Location

- **OBSERVED:** Authenticated Contacts > Organizations screen.

## Screenshot

- **NEEDS VERIFICATION:** Provider screenshot is not retained because the authenticated view exposed private account context.

## Structure

- **OBSERVED:** Contacts sub-navigation, Organization split-create control, item count, Filter and Actions controls, onboarding filter guidance and selectable organization rows.

## Actions

- **OBSERVED:** No organization, contact, filter, import, enrichment or action menu item was opened or changed.

## Behavior & States

- **OBSERVED:** The provider showed two sample organizations after its onboarding preview state loaded.
- **RECONSTRUCTION:** The local preview preserves the table pattern with fictional organizations and guarded controls.

## Technical Data

- **OBSERVED / DOM:** Accessibility structure and visible labels were inspected. Network and API behavior were not exercised.

## Accessibility

- **NEEDS VERIFICATION:** Keyboard order, focus restoration, screen-reader announcements, loading, validation and error behavior.

## Human Context

- **RECOMMENDATION:** Keep relationship counts scannable and treat onboarding guidance as secondary to the table.

## AI Context

- **RECONSTRUCTION:** Public fixtures contain invented identities and values.

## Needs Verification

- **NEEDS VERIFICATION:** Persistence, permissions, provider errors, responsive behavior and enrichment outcomes.

## Sources

- **OBSERVED:** Authenticated Pipedrive Organizations screen, 2026-10-07.
