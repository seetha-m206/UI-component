---
component: "Wix Analytics Date Range Popover"
ui_category: "Date and Time > Date Range Picker"
source_product: "Wix"
last_verified: "2026-10-07"
evidence_state: "source_reviewed"
status: "partial"
summary: "Preset-driven analytics range picker with month calendar, continuous selection and Cancel/Apply footer."
---

# Wix Analytics Date Range Popover

## Structure
- **OBSERVED:** Presets included Custom, Today, Yesterday, Last 7, 14, 30, 90 and 365 days, This month, This year, Previous month and Previous year.
- **OBSERVED:** The calendar showed month/year navigation, a selected range, textual range, Cancel and Apply.

## Behavior & States
- **OBSERVED:** Cancel closed the overlay without changing the report.
- **NOT OBSERVED:** Apply, validation, cross-month navigation and persistence.
- **RECONSTRUCTION:** Local Apply emits a guard and makes no provider change.

## Local Preview Captures

- **RECONSTRUCTION:** These images capture the fictional local preview. They are not Wix provider screenshots.

### Observed open popover

![wix-analytics-date-range — Observed open popover](/research/wix/fixtures/wix-analytics-date-range--open.jpg)

- **RECONSTRUCTION / CAPTURE:** `open` at 1600 × 1200. SHA-256 `447eaef0609fed7012e51bf15a7356b48b05070f151b884aa719e5aeb72b34c2`.

## Sources
- **OBSERVED:** Authenticated Wix analytics date picker, 2026-10-07. No durable provider screenshot was archived.
