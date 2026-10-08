---
component: "Tidio Lyro Configure"
ui_category: "AI Support > General Configuration"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "General, Audiences and Copilot tabs with identity, language and access settings."
---

# Component: Tidio Lyro Configure

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/configure/general` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-configure.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Configuration tabs.
- **OBSERVATION:** AI agent identity inputs.
- **OBSERVATION:** Default and specific language controls.
- **OBSERVATION:** Contact-property access section.

## Actions

| Action                | Result or boundary               |
| --------------------- | -------------------------------- |
| Edit identity         | No field was changed             |
| Change language       | No selection was changed         |
| Grant property access | No additional access was granted |

## Behavior & States

- **OBSERVATION:** Agent name Lyro.
- **OBSERVATION:** English configured.
- **OBSERVATION:** No extra contact properties selected.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** The screen copy describing default access was observed, but data access and privacy enforcement were not independently verified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
