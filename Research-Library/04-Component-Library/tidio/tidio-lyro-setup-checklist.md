---
component: "Tidio Lyro Setup Checklist"
ui_category: "AI Support > Setup Checklist"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Nested Lyro navigation and staged checklist for knowledge, tone, testing and channels."
---

# Component: Tidio Lyro Setup Checklist

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/setup` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-setup-checklist.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Lyro section navigation.
- **OBSERVATION:** Five setup cards.
- **OBSERVATION:** Disabled channel launch until prerequisites are met.

## Actions

| Action          | Result or boundary             |
| --------------- | ------------------------------ |
| Open setup card | No card was changed            |
| Launch channel  | Disabled in the observed state |

## Behavior & States

- **OBSERVATION:** Knowledge prerequisite incomplete.
- **OBSERVATION:** Channel launch unavailable.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Completion persistence and activation behavior were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
