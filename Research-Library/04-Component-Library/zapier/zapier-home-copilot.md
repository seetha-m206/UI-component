---
component: "Zapier Home Copilot"
ui_category: "AI Automation > Copilot Creation"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "AI-assisted automation prompt, accuracy warning and start-from-scratch product choices."
---

# Component: Zapier Home Copilot

## Location

- **OBSERVATION:** Authenticated route `/app/home` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-home-copilot.png)

## Structure

- **OBSERVATION:** What would you like to automate heading
- **OBSERVATION:** Copilot prompt area with dictate and disabled send controls
- **OBSERVATION:** Start-from-scratch cards for Zap, Agent, Table, MCP and Form
- **OBSERVATION:** Recommended automation carousel

## Actions

| Action                   | Result or boundary                            |
| ------------------------ | --------------------------------------------- |
| Enter automation request | Would enable the send control                 |
| Open a product card      | Routes to the corresponding creation boundary |

## Behavior & States

- **OBSERVATION:** Empty Copilot prompt
- **OBSERVATION:** Disabled send button
- **OBSERVATION:** AI can make mistakes warning
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** The dictate control and product links had explicit names. The prompt area was exposed as a text entry area without a useful accessible label.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No Copilot prompt was entered, submitted or evaluated. Recommendations were not instantiated.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
