---
component: "Tidio Integrations Catalogue"
ui_category: "Integrations > Marketplace Catalogue"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Searchable integration catalogue grouped by business function with zero installed integrations."
---

# Component: Tidio Integrations Catalogue

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/integrations` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-integrations-catalogue.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Category navigation.
- **OBSERVATION:** Search field.
- **OBSERVATION:** Integration cards.
- **OBSERVATION:** My integrations count and developer portal entry.

## Actions

| Action                      | Result or boundary                     |
| --------------------------- | -------------------------------------- |
| Search catalogue            | No query was submitted                 |
| Open or connect integration | No integration was opened or connected |

## Behavior & States

- **OBSERVATION:** Zero integrations installed.
- **OBSERVATION:** Catalogue cards across analytics, CRM, ecommerce and marketing.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Entitlements, OAuth, installation and provider consequences were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
