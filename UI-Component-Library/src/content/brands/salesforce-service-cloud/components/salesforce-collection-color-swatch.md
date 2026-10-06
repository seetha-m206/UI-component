---
component: "Salesforce Collection Color Swatches"
ui_category: "Forms > Color Swatch"
source_product: "Salesforce Lightning trial workspace"
last_verified: "2026-10-06"
evidence_state: "source_reviewed"
status: "partial"
summary: "Default color palette exposes 13 hex swatches with #1b96ff selected."
---

# Component: Salesforce Collection Color Swatches

Product → Screen → Component → Action → Behavior → States → Rules → Technical Data

## Location

- **OBSERVED:** Authenticated Salesforce Lightning trial workspace, Service or Analytics screen, inspected on 2026-10-06 via Codex CUA. Exact commercial edition and full Service Cloud entitlement are not established.
- **OBSERVED:** Parent composition: [salesforce-collection-color-picker](./salesforce-collection-color-picker.md). This is an individual control record, not another full screen.

## Screenshot

![Fictional local reconstruction](/research/salesforce-service-cloud/fixtures/salesforce-collection-color-swatch.png)

- **RECONSTRUCTION:** A fictional local viewport screenshot, not a Salesforce capture. Option selection and error/boundary states in the preview are local only. Long menus can continue below the image.
- **OBSERVED:** Private provider receipt `screens-actions-20261006/provider/collection-color-picker` includes the rendered source state. It is excluded from public assets because account identifiers can appear in surrounding UI.

## Structure

- **OBSERVED:** Default color palette exposes 13 hex swatches with #1b96ff selected.

## Actions

| Element and action | Observed result or untouched boundary |
| --- | --- |
| Open Color from blank New Collection | Swatches and Cancel/Done are visible. The palette was canceled without a new choice. |

## Behavior & States

- **OBSERVED:** The exact visible state above is supported by the named receipt. A menu being present does not prove that choosing an option works or persists.
- **RECONSTRUCTION:** The isolated preview uses native labelled controls and in-memory fictional state. It demonstrates a distinct control from its parent layout.
- **NOT OBSERVED:** Color selection and persisted collection appearance are unobserved.

## Rules & Validation

- **OBSERVED:** Defaults, selected items and disabled controls are documented only where the rendered UI exposed them.
- **NOT OBSERVED:** No provider save, submit, backend validation or durable outcome was exercised for this control.
- **RECONSTRUCTION:** Operations that would change provider data or copy a link show a local boundary notice and never contact Salesforce.

## Technical Data

- **OBSERVED / DOM:** Accessible roles and labels in the source capture identify the control and its current state.
- **RECONSTRUCTION / CSS:** Local spacing, tokens, responsive layout and native field behavior are design choices, not provider implementation claims.
- **NOT OBSERVED / Network:** No API request/response, credentials or cookies were inspected. Provider event handlers and persistence remain unknown.
- **NOT OBSERVED / Motion:** Timing, reduced-motion behavior and provider transitions are unmeasured.

## Accessibility

- **OBSERVED:** The named control appeared in a keyboard-readable accessibility tree. This is not an accessibility audit.
- **RECONSTRUCTION:** The preview has a labelled control and visible focus. Native selects can differ from Salesforce custom menus.

## Human Context

- **RECOMMENDATION:** Reuse the atomic control structure where it supports a concrete Centilio Care interaction, with the provider evidence boundary attached.

## AI Context

- **OBSERVED:** Current source identity is Salesforce Lightning trial workspace, verified 2026-10-06.
- **RECONSTRUCTION:** Preview names and any non-empty data are invented.
- **NEEDS VERIFICATION:** Color selection and persisted collection appearance are unobserved.

## Best Observed Approach

- **RECOMMENDATION:** Treat the control and parent composition as related but separate catalogue entries. The source does not establish product-wide behavior.

## Needs Verification

- **NEEDS VERIFICATION:** Color selection and persisted collection appearance are unobserved.
- **NEEDS VERIFICATION:** Provider mobile behavior, alternate permissions, error paths and saved state require separate evidence.

## Sources

- **OBSERVED:** Private source receipt `screens-actions-20261006/provider/collection-color-picker`, 2026-10-06.
- **OBSERVED:** Public sanitized receipt index `/research/salesforce-service-cloud/capture-manifest.json`.
- **RECONSTRUCTION:** `src/previews/salesforce-service-shared/SalesforceIndividuals.tsx` and `individualCatalogue.ts` provide the local example.
