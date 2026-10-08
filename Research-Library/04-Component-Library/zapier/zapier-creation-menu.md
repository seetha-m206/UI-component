---
component: "Zapier Creation Menu"
ui_category: "Navigation > Product Creation Menu"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Cross-product creation launcher for automations, data, forms, canvases, chatbots, agents and MCP."
---

# Component: Zapier Creation Menu

## Location

- **OBSERVATION:** Authenticated route `/app/*` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-creation-menu.png)

## Structure

- **OBSERVATION:** Create trigger in the persistent sidebar
- **OBSERVATION:** Links for Zaps, Tables, Forms, Canvas, Chatbots, Agents and MCP servers
- **OBSERVATION:** Short purpose copy for each destination

## Actions

| Action                 | Result or boundary                             |
| ---------------------- | ---------------------------------------------- |
| Choose Zaps            | Opens the Zap editor                           |
| Choose another product | Crosses into a distinct Zapier product surface |

## Behavior & States

- **OBSERVATION:** Collapsed trigger
- **OBSERVATION:** Expanded creation menu
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Each product link combined its name and purpose into an accessible description.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Only the Zap entry was opened. Tables, Forms, Canvas, Chatbots, Agents and MCP creation were not exercised.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
