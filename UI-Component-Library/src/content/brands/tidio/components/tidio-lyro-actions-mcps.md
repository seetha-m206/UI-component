---
component: "Tidio Lyro Actions and MCPs"
ui_category: "AI Support > Actions and Tools"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Actions and beta MCP tabs, empty action inventory and reusable action templates."
---

# Component: Tidio Lyro Actions and MCPs

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/lyro-ai/actions-mcps/actions` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-lyro-actions-mcps.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Actions and MCPs tabs.
- **OBSERVATION:** No-actions empty state.
- **OBSERVATION:** Calendly, CRM, email and product template cards.

## Actions

| Action        | Result or boundary                       |
| ------------- | ---------------------------------------- |
| Create Action | Visible only and not clicked             |
| Open MCP tab  | Visible but not used to connect a server |

## Behavior & States

- **OBSERVATION:** No Actions configured.
- **OBSERVATION:** MCP tab marked beta.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Authentication, tool invocation, consent, writes and external consequences were not observed.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
