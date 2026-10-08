---
component: "Zapier Zap History and Failure Recovery"
ui_category: "Automation Operations > Run History and Recovery"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Run-history filters, no-results state, Autoreplay boundary and source-reviewed failure taxonomy."
---

# Component: Zapier Zap History and Failure Recovery

## Location

- **OBSERVATION:** Authenticated route `/app/history` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-zap-history-failures.png)

## Structure

- **OBSERVATION:** Date, Zap, app, folder and run-status filters
- **OBSERVATION:** Refresh and clear-filter actions
- **OBSERVATION:** Autoreplay toggle with help disclosure
- **OBSERVATION:** No-results state
- **OBSERVATION:** Source-reviewed statuses for errored, safely halted, on hold, handled error and scheduled

## Actions

| Action            | Result or boundary                          |
| ----------------- | ------------------------------------------- |
| Filter runs       | Narrows the history table                   |
| Refresh           | Reloads run data                            |
| Enable Autoreplay | Would schedule eligible retries             |
| Replay failed run | Would execute eligible failed actions again |

## Behavior & States

- **OBSERVATION:** Empty history
- **OBSERVATION:** Errored
- **OBSERVATION:** Safely halted
- **OBSERVATION:** On hold
- **OBSERVATION:** Handled error
- **OBSERVATION:** Scheduled for replay
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Filters had explicit names and the Autoreplay checkbox exposed its disabled state in the observed empty account.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No run details were opened, no Autoreplay preference changed and no replay occurred.

## Sources

- **SOURCE REVIEWED:** https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zaps
- **RECONSTRUCTION:** Fictional local fixture in this library.
