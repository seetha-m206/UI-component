---
component: "Tidio Flows Welcome"
ui_category: "Automation > Flow Onboarding"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Flows navigation, lead-generation introduction and reusable starter strategy cards."
---

# Component: Tidio Flows Welcome

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/flows/welcome-to-flows` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-flows-welcome.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Flows category navigation.
- **OBSERVATION:** Lead-generation introduction.
- **OBSERVATION:** Cards for lead bot, phone call and appointment booking.

## Actions

| Action                   | Result or boundary           |
| ------------------------ | ---------------------------- |
| Add lead generation flow | Visible only and not clicked |
| Open strategy            | No provider flow was created |

## Behavior & States

- **OBSERVATION:** Welcome-to-Flows onboarding.
- **OBSERVATION:** One item count shown beside My Flows.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** The embedded provider demo content is intentionally omitted and no flow execution was observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
