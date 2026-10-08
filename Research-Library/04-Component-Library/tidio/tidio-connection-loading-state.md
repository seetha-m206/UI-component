---
component: "Tidio Connection Loading State"
ui_category: "System Feedback > Loading and Recovery"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Full-screen connecting state and transient accessibility-only connection warning."
---

# Component: Tidio Connection Loading State

## Location

- **OBSERVATION:** Authenticated Tidio route `Multiple authenticated panel routes` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-connection-loading-state.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Dark full-screen Tidio loading surface.
- **OBSERVATION:** Connecting message.
- **OBSERVATION:** Transient apology and retry countdown in the accessibility tree.

## Actions

| Action              | Result or boundary                            |
| ------------------- | --------------------------------------------- |
| Wait for connection | Observed pages settled without a write action |

## Behavior & States

- **OBSERVATION:** Connecting.
- **OBSERVATION:** Transient connection warning.
- **OBSERVATION:** Settled application screen.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** The warning was not consistently visible in the rendered screenshot and is not characterized as the normal settled state.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
