---
component: "Tidio Application Shell"
ui_category: "Application Layout > Customer Messaging Shell"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Icon rail, account utilities, trial boundary and product navigation."
---

# Component: Tidio Application Shell

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/getting-started` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-application-shell.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Dark icon rail with product destinations.
- **OBSERVATION:** Top utility strip with support, notifications, usage and plan.
- **OBSERVATION:** Light workspace surface that persists across product routes.

## Actions

| Action             | Result or boundary                      |
| ------------------ | --------------------------------------- |
| Select destination | Read-only route navigation was observed |
| Upgrade            | Visible only and not opened             |

## Behavior & States

- **OBSERVATION:** Rail selection changes with the active product.
- **OBSERVATION:** A trial indicator was visible in this account.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Responsive behavior, permission variants, billing and upgrade behavior were not exercised.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
