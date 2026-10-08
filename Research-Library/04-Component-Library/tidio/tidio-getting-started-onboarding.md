---
component: "Tidio Getting Started Onboarding"
ui_category: "Onboarding > Setup Checklist"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Channel cards and a five-step onboarding checklist with zero completed tasks."
---

# Component: Tidio Getting Started Onboarding

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/getting-started` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-getting-started-onboarding.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Install-widget banner.
- **OBSERVATION:** Chat, Email and Social support channel cards.
- **OBSERVATION:** Five task rows with progress at 0 of 5.

## Actions

| Action             | Result or boundary            |
| ------------------ | ----------------------------- |
| Install or connect | Visible only and not opened   |
| Open task          | No provider task was advanced |

## Behavior & States

- **OBSERVATION:** Zero-progress checklist.
- **OBSERVATION:** Unconfigured support-channel cards.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Installation, mailbox connection, social connection and completion persistence remain unverified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
