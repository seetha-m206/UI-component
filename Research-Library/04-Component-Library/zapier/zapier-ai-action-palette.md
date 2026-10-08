---
component: "Zapier AI Action Palette"
ui_category: "AI Automation > Action Selection"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "AI action catalogue with custom prompts, quick actions and product categories."
---

# Component: Zapier AI Action Palette

## Location

- **OBSERVATION:** Authenticated route `/editor/sandbox/draft/2/setup` was inspected on 2026-10-08, or the record explicitly identifies official source review.
- **RECONSTRUCTION:** The local preview uses fictional names, values, counts and dates and never contacts Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-ai-action-palette.png)

## Structure

- **OBSERVATION:** AI categories for All, Popular, AI by Zapier, Human in the Loop, Productivity and Chatbots and Agents
- **OBSERVATION:** Custom prompt entry
- **OBSERVATION:** Quick actions for Extract, Summarize, Classify, Write, Translate, Analyze, Transcribe and Search

## Actions

| Action               | Result or boundary             |
| -------------------- | ------------------------------ |
| Choose custom prompt | Would open AI setup            |
| Choose quick action  | Would add a prepared AI action |

## Behavior & States

- **OBSERVATION:** AI category catalogue
- **OBSERVATION:** Quick-action grid
- **RECONSTRUCTION:** Local controls update only the fictional preview or show a safety notice.

## Technical Data

- **OBSERVATION / DOM:** Zapier exposed semantic headings, links, buttons, checkboxes, comboboxes, tables and named regions across the inspected surfaces.
- **OBSERVATION / ROUTE:** Query identifiers, account identifiers and opaque draft identifiers are intentionally removed from this record.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NEEDS VERIFICATION:** Provider request payloads, persistence contracts and connected-app consequences are not established.

## Accessibility

- **OBSERVATION:** Named category and action buttons were exposed, although several adjacent icon-only controls had generated identifiers instead of useful names.
- **RECONSTRUCTION:** The fictional preview uses explicit labels, headings, buttons and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No AI action was selected, configured, tested or run. AI output quality and provider-side data handling remain unverified.

## Sources

- **OBSERVATION:** Authenticated Zapier runtime, observed 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
