---
component: "Wix Real-time Analytics Zero State"
ui_category: "Analytics and Reporting > Real-time Dashboard"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Real-time Analytics Zero State

## Location
- **OBSERVED:** Authenticated Real-time Analytics for an unpublished site.

## Structure
- **OBSERVED:** Two top tabs reported Visitors in the last 30 minutes and Live visitors, both at zero. A world-map area retained Page views, Traffic source and device breakdown placeholders.
- **OBSERVED:** Recent visitors and Live activity cards each showed a 24-hour empty state and linked to Traffic or Behavior overview.

## Actions
| Action | Result |
| --- | --- |
| Navigate from Analytics rail | Real-time dashboard loaded without changing data. |
| Visitor tabs | Visible and selectable. The provider tab switch was not exercised. |

## Technical Data
- **OBSERVED / DOM:** Tabs exposed selected/selectable states. Empty cards used headings, descriptive text and overview links.
- **NOT OBSERVED:** Populated visitors, map interaction, secondary action menus and streaming refresh.

## Human Context
- **RECONSTRUCTION:** The local fixture switches both zero-state tabs using fictional state only.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Visitors in last 30 minutes

![wix-realtime-analytics — Visitors in last 30 minutes](/research/wix/fixtures/wix-realtime-analytics--recent.jpg)

- **RECONSTRUCTION / CAPTURE:** `recent` at 1600 × 1200. SHA-256 `6323f565a2bbf64e993b863e8f7a0667ef436a199d45ac895ade9ed26545e31e`.

### Live visitors tab

![wix-realtime-analytics — Live visitors tab](/research/wix/fixtures/wix-realtime-analytics--live.jpg)

- **RECONSTRUCTION / CAPTURE:** `live` at 1600 × 1200. SHA-256 `e20a7d4fc39e759fe9ebe35d479462adab4e1dc8c3b287c6fb7d018a61c0a073`.

## Sources
- **OBSERVED:** Authenticated Wix `/analytics/overviews/realtime`, inspected 2026-10-07. No durable provider screenshot was archived.
