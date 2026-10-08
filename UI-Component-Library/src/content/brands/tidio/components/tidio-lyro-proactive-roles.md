---
component: "Tidio Lyro Proactive Roles"
ui_category: "AI Support > Proactive Roles"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Empty role list with a template gallery for visitor and sales scenarios."
---

# Component: Tidio Lyro Proactive Roles

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/proactive-roles` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-proactive-roles.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Proactive role introduction.
- **OBSERVATION:** Empty role state.
- **OBSERVATION:** Six role template cards.

## Actions

| Action           | Result or boundary           |
| ---------------- | ---------------------------- |
| Create role      | Visible only and not clicked |
| Explore template | Visible only and not clicked |

## Behavior & States

- **OBSERVATION:** No proactive roles.
- **OBSERVATION:** Template catalogue.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Template setup, trigger evaluation and visitor-facing execution were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
