---
component: "Tidio Widget Appearance Editor"
ui_category: "Settings > Widget Appearance"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Settings catalogue, appearance form, content tabs and live widget preview."
---

# Component: Tidio Widget Appearance Editor

## Location

- **OBSERVATION:** Authenticated Tidio route `/panel/settings/live-chat/appearance` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-widget-appearance-editor.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Settings group navigation.
- **OBSERVATION:** Background and action color controls.
- **OBSERVATION:** Home, Chat, Pre-chat and Minimized tabs.
- **OBSERVATION:** Side-by-side widget preview.

## Actions

| Action                | Result or boundary           |
| --------------------- | ---------------------------- |
| Edit appearance field | No field was changed         |
| Save                  | Visible only and not clicked |

## Behavior & States

- **OBSERVATION:** Brand logo marked as a plan-gated option.
- **OBSERVATION:** Unsaved editor with live preview.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Save behavior, publication to an installed widget and responsive preview behavior remain unverified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
