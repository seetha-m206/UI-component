---
component: "Tidio Customers Live Visitors Boundary"
ui_category: "Customers > Live Visitors"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Live visitor navigation and widget-installation empty state."
---

# Component: Tidio Customers Live Visitors Boundary

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/customers/visitors` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-customers-live-visitors-boundary.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Now live, All contacts and Subscribers navigation.
- **OBSERVATION:** Zero visitor count.
- **OBSERVATION:** Widget-installation empty-state panel.

## Actions

| Action           | Result or boundary           |
| ---------------- | ---------------------------- |
| Simulate visitor | Visible only and not clicked |
| Install widget   | Visible only and not clicked |

## Behavior & States

- **OBSERVATION:** No live visitors.
- **OBSERVATION:** Widget not installed boundary.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Visitor presence, lead capture and contact creation behavior were not exercised.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
