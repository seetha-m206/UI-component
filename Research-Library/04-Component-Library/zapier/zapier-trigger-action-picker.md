---
component: "Zapier Trigger and Action Picker"
ui_category: "Automation Builder > App and Event Selection"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Role-aware app picker that changes built-in tool availability between trigger and action steps."
---

# Component: Zapier Trigger and Action Picker

## Location

- **OBSERVATION:** Authenticated route `/editor/sandbox/draft/{step}/setup` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-trigger-action-picker.png)

## Structure

- **OBSERVATION:** Category rail for Home, Apps, AI, Flow controls, Utilities, Products and Custom apps
- **OBSERVATION:** App search and browse-all-apps boundary
- **OBSERVATION:** Top apps, built-in tools and Zapier products groups
- **OBSERVATION:** Step-role-specific availability messages

## Actions

| Action          | Result or boundary                       |
| --------------- | ---------------------------------------- |
| Search apps     | Filters candidates without authorization |
| Choose an app   | Would open event and connection setup    |
| Change category | Updates the picker catalogue             |

## Behavior & States

- **OBSERVATION:** Trigger: Human in the Loop, Schedule and Sub-Zap available
- **OBSERVATION:** Trigger: Delay, Filter, Looping and Paths unavailable
- **OBSERVATION:** Action: Delay, Filter, Human in the Loop, Looping, Paths and Sub-Zap available
- **OBSERVATION:** Action: Schedule unavailable
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** The search field and category buttons had explicit names. Some asynchronously loading app cards temporarily exposed unnamed buttons.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No app or event was selected and no connection was requested.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
