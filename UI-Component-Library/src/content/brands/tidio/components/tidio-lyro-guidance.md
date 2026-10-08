---
component: "Tidio Lyro Guidance"
ui_category: "AI Support > Behavior Guidance"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Communication-style table and emoji preference control."
---

# Component: Tidio Lyro Guidance

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/guidance` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-guidance.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Emoji preference switch.
- **OBSERVATION:** Communication-style row with tone and audience columns.
- **OBSERVATION:** Add guidance actions.

## Actions

| Action           | Result or boundary             |
| ---------------- | ------------------------------ |
| Toggle emoji use | Observed as on and not changed |
| Add guidance     | Visible only and not clicked   |

## Behavior & States

- **OBSERVATION:** Emoji use enabled.
- **OBSERVATION:** Neutral tone for everyone.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Save semantics, audience targeting and generated response effects were not tested.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
