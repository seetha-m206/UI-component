---
component: "HubSpot Segments Analysis Dashboard"
ui_category: "Analytics/Reporting > Dashboard"
source_product: "HubSpot Sales Hub"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# HubSpot Segments Analysis Dashboard

## Location

- **OBSERVED:** Segments Analyze view at `/contacts/343751787/objectLists/analyze`.

## Screenshot

- **OBSERVED:** Dashboard: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-analyze.png`.
- **OBSERVED:** Overlap selector: `Internal/scratch-2026-10/hubspot-sales-hub/evidence/screenshots/2026-10-07-segments-overlap-selector.png`.

## Structure

- **OBSERVED:** Segment type defaults to Contacts and can switch among Contacts, Companies, Deals, Tickets, Orders and Carts.
- **OBSERVED:** Five usage categories are shown: Personalization, Communication, Automation, Analytics and Segmentation, each with a View Segments link.
- **OBSERVED:** Segment overlap allows selecting up to five segments and showed a Type to search empty selector because no segments existed.
- **OBSERVED:** A Segments that require your attention card appeared in a loading state before resolving to an empty table with Segment Name, 7-Day Size Change, Type, Object and Last Updated columns.

## Actions

| Element | Safe action | Observed result |
| --- | --- | --- |
| Segment type | Open, then close | Listed six supported object types. Contacts stayed selected. |
| Select segments | Open, then close | Displayed Type to search and Clear all with no options. |
| Manage | Activate | Returned to the Manage route. |
| View Segments links | Not activated | Filtered-view outcomes remain **NEEDS VERIFICATION**. |

## Behavior & States

- **OBSERVED:** Usage metrics showed zero contact segments in use across the categories.
- **OBSERVED:** The overlap empty state explicitly asks the user to select a segment.
- **NEEDS VERIFICATION:** Populated overlap visualization, attention rules, metric refresh and object-type switching results.

## Technical Data

- **OBSERVED / DOM:** Object type and overlap controls use searchable listbox patterns. Usage-category links include reference-category query parameters.
- **NEEDS VERIFICATION:** Analytics data source, time windows, overlap computation and alert thresholds.

## Human Context

- **RECOMMENDATION:** Keep segment inventory and segment effectiveness as separate modes, with object scope and overlap comparison prominent in analysis.

## AI Context

- **FACT:** Empty analysis states and selector inventories were directly observed.
- **RECONSTRUCTION:** A local preview must use fictional segment names and metrics.
- **NEEDS VERIFICATION:** No segment selection or analytical filter was applied.

## Sources

- Authenticated HubSpot Segments Analyze view, observed 2026-10-07.
