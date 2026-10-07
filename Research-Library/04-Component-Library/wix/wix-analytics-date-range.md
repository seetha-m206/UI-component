---
component: "Wix Analytics Date Range Popover"
ui_category: "Date and Time > Date Range Picker"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
---

# Wix Analytics Date Range Popover

## Location
- **OBSERVED:** Opened from Traffic Overview without changing the selected period.

## Structure
- **OBSERVED:** Presets included Custom, Today, Yesterday, Last 7, 14, 30, 90 and 365 days, This month, This year, Previous month and Previous year.
- **OBSERVED:** September 2026 calendar showed a continuous selected range beginning September 8. Month and year controls, previous/next arrows, a textual range, Cancel and Apply were present.

## Actions
| Action | Result |
| --- | --- |
| Open field | Popover appeared over the dashboard. |
| Cancel | Closed the popover without changing the report. |
| Apply | Not activated in Wix. |

## Technical Data
- **OBSERVED / DOM:** Calendar cells exposed selectable, selected and disabled states.
- **NOT OBSERVED:** Custom range validation, cross-month navigation, Apply result and persistence.

## Human Context
- **RECONSTRUCTION:** Local Apply reports that no range was applied. It never changes provider analytics.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed open popover

![wix-analytics-date-range — Observed open popover](/research/wix/fixtures/wix-analytics-date-range--open.jpg)

- **RECONSTRUCTION / CAPTURE:** `open` at 1600 × 1200. SHA-256 `447eaef0609fed7012e51bf15a7356b48b05070f151b884aa719e5aeb72b34c2`.

## Sources
- **OBSERVED:** Authenticated Wix Traffic date-range popover, inspected 2026-10-07. No durable provider screenshot was archived.
