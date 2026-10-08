---
component: "Tidio Lyro Data Sources Empty State"
ui_category: "AI Support > Knowledge Sources"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Empty knowledge source list with website, manual, file, Zendesk and product source options."
---

# Component: Tidio Lyro Data Sources Empty State

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/data-sources/added` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-data-sources-empty.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Empty Q and A state.
- **OBSERVATION:** Source option cards.
- **OBSERVATION:** Assistant test panel with disabled control.

## Actions

| Action          | Result or boundary             |
| --------------- | ------------------------------ |
| Add data source | Visible only and not opened    |
| Test Lyro       | Disabled in the observed state |

## Behavior & States

- **OBSERVATION:** No knowledge added.
- **OBSERVATION:** Test unavailable before knowledge exists.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Import panels, parsing, sync, indexing and answer quality were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
