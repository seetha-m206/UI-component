---
component: "HubSpot Ticket Preview Customization"
ui_category: "Account / Settings > Preview Customization"
source_product: "HubSpot Service Hub"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
---

# HubSpot Ticket Preview Customization

## Location

- **OBSERVED:** Authenticated Ticket Preview Customization and Update preview cards, inspected 2026-10-06.

## Structure

- **OBSERVED:** The view inventory contained Search by view name, Create team view and one Default view assigned to all unassigned teams and users.
- **OBSERVED:** Update preview cards offered a disabled Edit Ticket associations card and an Edit Ticket property list destination. Both described choosing properties shown in previews.

## Actions

| Element | Safe action | Observed result or boundary |
| --- | --- | --- |
| Preview Customization tab | Page visit | Loaded the default preview view inventory. |
| Update preview cards | Page visit | Opened the card-options panel. |
| Close | Keyboard Return | Returned to Preview Customization. |
| Default view Actions | Open disclosure | Displayed disabled Clone view and Reset default view with an upgrade prompt. |
| Editors and Create team view | Not activated | Selection, editing and persistence are **NOT OBSERVED**. |

## Behavior & States

- **OBSERVED:** The associations-card editor was unavailable while the property-list editor was linked.
- **NOT OBSERVED:** Preview layout editor, property selection, association-card eligibility and save outcomes.

## Technical Data

- **OBSERVED / DOM:** The inventory used selectable rows and sortable headings. The card panel distinguished disabled and enabled editor links.

## Human Context

- **RECOMMENDATION:** Separate the record-preview layout from reusable preview-card property configuration and make eligibility visible.

## AI Context

- **FACT:** No preview property or audience assignment was changed.

## Needs Verification

- **NEEDS VERIFICATION:** Layout editor, property-list editor, association eligibility, team views, permissions and persistence.

## Sources

- **OBSERVED:** Authenticated Ticket Preview Customization screens, inspected 2026-10-06.
