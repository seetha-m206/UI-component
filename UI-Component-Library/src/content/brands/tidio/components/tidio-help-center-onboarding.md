---
component: "Tidio Help Center Onboarding"
ui_category: "Knowledge > Help Center Onboarding"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Beta Help Center entry with an empty onboarding state and create boundary."
---

# Component: Tidio Help Center Onboarding

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/help-center` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-help-center-onboarding.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Beta badge.
- **OBSERVATION:** All Help Centers navigation.
- **OBSERVATION:** Create Help Center onboarding card.

## Actions

| Action             | Result or boundary           |
| ------------------ | ---------------------------- |
| Create Help Center | Visible only and not clicked |

## Behavior & States

- **OBSERVATION:** No Help Centers configured.
- **OBSERVATION:** Time-specific pricing copy visible in this session.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Creation, publication, domain setup and current pricing are not verified product contracts.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
