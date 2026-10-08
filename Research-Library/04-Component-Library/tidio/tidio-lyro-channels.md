---
component: "Tidio Lyro Channels"
ui_category: "AI Support > Channel Configuration"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Inactive Lyro channel configuration with prerequisite banner and connection states."
---

# Component: Tidio Lyro Channels

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/channels/live-conversations` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-channels.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Knowledge prerequisite banner.
- **OBSERVATION:** Live conversations and Email tabs.
- **OBSERVATION:** Channel rows.
- **OBSERVATION:** Answer-personalization and follow-up controls.

## Actions

| Action          | Result or boundary             |
| --------------- | ------------------------------ |
| Activate Lyro   | Disabled in the observed state |
| Connect channel | No channel was connected       |
| Change behavior | Controls were not changed      |

## Behavior & States

- **OBSERVATION:** Lyro inactive.
- **OBSERVATION:** Live Chat present but widget installation required.
- **OBSERVATION:** Social channels not connected.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Activation, runtime answering, follow-up timing and CSAT delivery were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
