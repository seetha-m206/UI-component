---
component: "Zapier Guided Templates"
ui_category: "Automation > Reusable Templates"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Reusable automation-template explanation with a documentation boundary."
---

# Component: Zapier Guided Templates

## Location

- **OBSERVATION:** Authenticated route `/app/assets/templates` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-guided-templates.png)

## Structure

- **OBSERVATION:** Guided templates heading
- **OBSERVATION:** Reusable automation explanation
- **OBSERVATION:** Official Learn more link

## Actions

| Action                   | Result or boundary                                    |
| ------------------------ | ----------------------------------------------------- |
| Learn more               | Opens official template documentation                 |
| Create reusable template | No creation control was visible in the observed state |

## Behavior & States

- **OBSERVATION:** Informational template state
- **OBSERVATION:** Trial banner
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** The page used a single primary heading and a named Learn more link.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** Template authoring, sharing, configuration and instantiation were not observed.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
