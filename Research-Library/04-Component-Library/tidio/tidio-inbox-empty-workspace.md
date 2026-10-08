---
component: "Tidio Inbox Empty Workspace"
ui_category: "Inbox > Omnichannel Queue"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Conversation and ticket folders, empty queue, integration prompts and browser-notification boundary."
---

# Component: Tidio Inbox Empty Workspace

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/inbox/conversations/<sanitized-operator>` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-inbox-empty-workspace.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Conversation, ticket, mention, Lyro, spam and view folders.
- **OBSERVATION:** Empty conversation list.
- **OBSERVATION:** No-active-conversations canvas.
- **OBSERVATION:** Channel integration cards.

## Actions

| Action                | Result or boundary           |
| --------------------- | ---------------------------- |
| Simulate conversation | Visible only and not clicked |
| Connect channel       | Visible only and not clicked |

## Behavior & States

- **OBSERVATION:** No active conversations.
- **OBSERVATION:** Browser notifications blocked banner.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Message composition, assignment, solve, ticket creation and real queue behavior were not exercised.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
