---
component: "Tidio Provider Action Boundaries"
ui_category: "Interaction Safety > Guarded Actions"
source_product: "Tidio"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Reusable local treatment for install, connect, create, simulate, activate and save actions that were visible but not exercised."
---

# Component: Tidio Provider Action Boundaries

## Location

- **OBSERVATION:** Authenticated Tidio route `Multiple authenticated panel routes` was inspected in the visible in-app browser on 2026-10-08.
- **RECONSTRUCTION:** The local fixture uses fictional content and contains no account, operator, customer or provider-demo identifiers.

## Screenshot

![Fictional local preview](/research/tidio/fixtures/tidio-provider-action-boundaries.jpg)

- **RECONSTRUCTION:** This image is generated from the local fixture. It is not a Tidio provider screenshot.
- **NEEDS VERIFICATION:** No durable provider screenshot is published in the catalogue.

## Structure

- **OBSERVATION:** Primary and secondary action examples.
- **OBSERVATION:** Local-only boundary notice.
- **OBSERVATION:** Disabled-state example for unmet prerequisites.

## Actions

| Action                      | Result or boundary                                 |
| --------------------------- | -------------------------------------------------- |
| Use guarded fixture action  | Shows a local notice only and never contacts Tidio |
| Use disabled fixture action | Remains unavailable                                |

## Behavior & States

- **OBSERVATION:** Guarded.
- **OBSERVATION:** Disabled.
- **OBSERVATION:** Local notice shown.
- **RECONSTRUCTION:** Fixture actions change local React state only and do not contact Tidio.

## Technical Data

- **OBSERVATION / Accessibility:** Visible labels and landmark structure were inspected through the browser accessibility representation.
- **OBSERVATION / Route:** Only the sanitized route above is retained. No account identifiers, cookies, tokens, message bodies or opaque payloads are stored.
- **RECONSTRUCTION:** Shared implementation is `src/previews/tidio-shared/TidioPreview.tsx`.

## Accessibility

- **OBSERVATION:** Major page, navigation and action labels were available to the accessibility tree.
- **RECONSTRUCTION:** Fixture controls have explicit accessible names, keyboard focus styles and status notices.

## Evidence Boundary

- **NOT OBSERVED / NEEDS VERIFICATION:** Provider consequences, validation, persistence, permissions and error handling remain unverified.

## Sources

- **OBSERVATION:** Authenticated Tidio runtime, inspected 2026-10-08 without provider mutations.
- **RECONSTRUCTION:** Fictional local preview and fixture state in this library.
