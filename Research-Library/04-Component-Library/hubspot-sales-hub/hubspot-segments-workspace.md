---
component: "HubSpot Segments Workspace"
ui_category: "Data Display > List Workspace"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Segments Workspace

## Location

- **OBSERVED:** Segments Manage view at `/contacts/343751787/objectLists/views/all`.

## Screenshot

- **OBSERVED:** Empty workspace: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-empty.png`.
- **OBSERVED:** What's new: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-whats-new.png`.
- **OBSERVED:** Quick create: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-quick-create.png`.
- **OBSERVED:** Create menu: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-create-menu.png`.

## Structure

- **OBSERVED:** The header reports zero segments and provides What's new, Admin settings, Import, Quick create and Create segment.
- **OBSERVED:** Manage and Analyze form the primary modes.
- **OBSERVED:** The empty state explains segmentation by industry, size, location, value or other CRM and visitor attributes and links to a user guide.
- **OBSERVED:** Quick create offered Contacts, Companies, Deals and Tickets. Create segment offered Manually and Start with AI.
- **OBSERVED:** What's new opened a modal with AI Suggestions, Analyze and Granular Filter Insights tabs plus Professional and Enterprise entitlement messaging.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| What's new | Open, then close | Displayed feature education without dismissing it through Got it. |
| Quick create | Open, then close | Listed four CRM objects. No object was selected. |
| Create segment | Open, then close | Listed Manually and Start with AI. Neither was selected. |
| Import, Got it and Admin settings | Not activated | Navigation, dismissal and settings outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** Creation modes are disclosed before any authoring form begins.
- **OBSERVED:** AI creation is clearly separated from manual creation.
- **NEEDS VERIFICATION:** Segment builder, validation, saved lists, permissions, import and AI suggestion generation.

## Technical Data

- **OBSERVED / DOM:** Header menus use pop-up buttons with accessible expanded states. The What's new surface exposes a tab group.
- **NEEDS VERIFICATION:** Segment query model, recalculation cadence, creation API and AI inputs.

## Human Context

- **RECOMMENDATION:** Pair an educational empty state with explicit manual and AI authoring paths. Keep cross-object quick create separate from segment creation.

## AI Context

- **FACT:** All labels and menu inventories were directly observed.
- **RECONSTRUCTION:** Local previews may demonstrate disclosures with fictional objects only.
- **NEEDS VERIFICATION:** No segment, object or import was created.

## Sources

- Authenticated HubSpot Segments Manage view, observed 2026-10-07.
