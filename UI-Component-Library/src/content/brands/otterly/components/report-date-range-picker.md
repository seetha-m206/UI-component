---
component: OtterlyAI Report Date Range Picker
ui_category: "Filtering > Date Range"
source_product: OtterlyAI
last_verified: 2026-10-01
evidence_state: mixed_observed_reconstructed
status: partial
summary: The report date control opened a preset list alongside September and October calendar grids.
---

## Human View

**OBSERVATION:** The report date control opened a preset list alongside September and October calendar grids. Presets shown were Month to date, Last month, Last 14, 30, 60, and 90 days. The selected interval was highlighted in the calendars.

**Safe interaction:** The local preset selector changes a fictional label only. Calendar cells are illustrative.

**Screenshot:** [Fictional local preview](./screenshots/report-date-range-picker-preview.png). No customer, member, credential, or account metric values are reproduced.

## AI Context

- **Component boundary:** Independent reusable entry, empty, or overlay pattern from the authenticated app.
- **Action chain:** Presets shown were Month to date, Last month, Last 14, 30, 60, and 90 days. The selected interval was highlighted in the calendars.
- **Fixture:** The local preset selector changes a fictional label only. Calendar cells are illustrative.
- **Seek lesson (RECOMMENDATION):** Make the next action and unavailable states clear without implying a completed provider operation.

## Structure and States

- **Observed:** Initial or opened state described above.
- **Needs verification:** Custom date commit behavior, timezone rules, and cross-report propagation were not exercised.

## Technical Data

- **OBSERVATION:** Browser-visible controls and their accessible labels were inspected in the Codex in-app browser.
- **NOT OBSERVED:** Provider implementation, private network contracts, saved data behavior, or credentials.
- **RECONSTRUCTION:** Isolated React preview with fictional data and no provider request.

## Sources

- **OBSERVATION:** Authenticated OtterlyAI application, 2026-10-01.
- **SCREENSHOT:** Fictional local preview linked above.
- **EVIDENCE BOUNDARY:** Opening a control is not proof that its submission or integration works.
