---
component: "Zapier Zap Editor Canvas"
ui_category: "Automation Builder > Workflow Canvas"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Draft-labelled automation canvas with Copilot, trigger, action, status and version controls."
---

# Component: Zapier Zap Editor Canvas

## Location

- **OBSERVATION:** Authenticated route `/editor/sandbox/draft` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-zap-editor-canvas.png)

## Structure

- **OBSERVATION:** Draft identity and disabled activation toggle
- **OBSERVATION:** Copilot prompt with build-mode selector
- **OBSERVATION:** Trigger and action nodes connected on a vertical canvas
- **OBSERVATION:** Editor rail for assets, details, notes, history, runs, status, settings and versions
- **OBSERVATION:** Bottom component palette

## Actions

| Action       | Result or boundary           |
| ------------ | ---------------------------- |
| Open trigger | Shows the trigger app picker |
| Open action  | Shows the action app picker  |
| Add step     | Would extend the draft       |
| Turn Zap on  | Disabled in the blank draft  |

## Behavior & States

- **OBSERVATION:** Untitled draft
- **OBSERVATION:** Empty trigger
- **OBSERVATION:** Empty action
- **OBSERVATION:** Disabled activation
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Trigger and action nodes were named by role and sequence. The canvas exposed multiple image nodes with weak or missing labels.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** The blank editor route created an untitled sandbox draft. No app, event, mapping, test, publish or activation action was completed.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
