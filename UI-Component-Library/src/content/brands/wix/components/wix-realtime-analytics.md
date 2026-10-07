---
component: "Wix Real-time Analytics Zero State"
ui_category: "Analytics and Reporting > Real-time Dashboard"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Real-time visitor map, selectable zero-state tabs, device placeholders and 24-hour activity cards."
---

# Wix Real-time Analytics Zero State

## Structure
- **OBSERVED:** Visitors in the last 30 minutes and Live visitors both showed zero above a map with Page views, Traffic source and device placeholders.
- **OBSERVED:** Recent visitors and Live activity showed separate 24-hour empty states with overview links.

## Behavior & States
- **OBSERVED / DOM:** The two metrics were accessible tabs with selection state.
- **NOT OBSERVED:** Populated sessions, streaming refresh, map interaction and secondary menus.
- **RECONSTRUCTION:** The local fixture switches zero-state tabs without contacting Wix.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Visitors in last 30 minutes

![wix-realtime-analytics — Visitors in last 30 minutes](/research/wix/fixtures/wix-realtime-analytics--recent.jpg)

- **RECONSTRUCTION / CAPTURE:** `recent` at 1600 × 1200. SHA-256 `6323f565a2bbf64e993b863e8f7a0667ef436a199d45ac895ade9ed26545e31e`.

### Live visitors tab

![wix-realtime-analytics — Live visitors tab](/research/wix/fixtures/wix-realtime-analytics--live.jpg)

- **RECONSTRUCTION / CAPTURE:** `live` at 1600 × 1200. SHA-256 `e20a7d4fc39e759fe9ebe35d479462adab4e1dc8c3b287c6fb7d018a61c0a073`.

## Sources
- **OBSERVED:** Authenticated Wix Real-time Analytics, 2026-10-07. No durable provider screenshot was archived.
