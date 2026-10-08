---
component: "Tidio Dashboard Overview"
ui_category: "Dashboard > Customer Support Overview"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Setup progress, quick actions, zero-data performance metrics and usage status."
---

# Component: Tidio Dashboard Overview

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/dashboard` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-dashboard-overview.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Setup progress card.
- **OBSERVATION:** Quick-action tiles.
- **OBSERVATION:** Performance range with KPI tabs.
- **OBSERVATION:** Project status and usage rail.

## Actions

| Action        | Result or boundary                                         |
| ------------- | ---------------------------------------------------------- |
| Finish setup  | Visible only and not opened                                |
| Change metric | Visible tabs were recorded without changing provider state |

## Behavior & States

- **OBSERVATION:** 0 of 5 setup progress.
- **OBSERVATION:** Zero-data performance panel.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Non-zero chart behavior, data freshness and metric calculations were not verified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
