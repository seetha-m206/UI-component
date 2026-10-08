---
component: "Make Router and Filter Builder"
ui_category: "Automation Builder > Routing and Conditions"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "source_reviewed"
status: "complete"
summary: "Source-reviewed branching, route ordering, fallback and condition-builder mechanics."
---

# Component: Make Router and Filter Builder

## Location

- **SOURCE REVIEWED:** Official Make documentation was reviewed on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-router-filter-builder.png)

## Structure

- **SOURCE REVIEWED:** Routers split one scenario flow into sequential routes.
- **SOURCE REVIEWED:** Filters sit on connections and evaluate operands with typed operators before allowing bundles through.
- **SOURCE REVIEWED:** Fallback routes process bundles that match no earlier route.

## Actions

| Action                    | Result or boundary                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| Add router or save filter | NOT OBSERVED in the authenticated workspace because it required creating or editing a scenario |
| Local preview controls    | Update only fictional fixture state or show a safety notice                                    |

## Behavior & States

- **SOURCE REVIEWED:** Source-reviewed branching, route ordering, fallback and condition-builder mechanics.
- **RECONSTRUCTION:** Local controls never contact Make or a connected service.
- **NEEDS VERIFICATION:** Provider persistence, entitlement variants, responsive behavior and connected-app consequences remain unverified unless explicitly described above.

## Technical Data

- **OBSERVATION / DOM:** The inspected Make runtime exposed semantic headings, links, buttons, tables, inputs, switches and named navigation regions where applicable.
- **OBSERVATION / ROUTE:** Route shapes are recorded without organization or team identifiers.
- **RECONSTRUCTION:** Shared renderer is `src/previews/make-shared/MakePreview.tsx`.
- **NEEDS VERIFICATION:** Network request bodies, provider storage contracts and backend error payloads were not captured.

## Accessibility

- **OBSERVATION:** Core controls were generally named in the accessibility tree. Some search fields exposed generated names rather than human-readable labels.
- **RECONSTRUCTION:** The fictional fixture adds explicit labels, headings, disabled consequential actions and live boundary notices.

## Evidence Boundary

- **NOT OBSERVED:** No connection, scenario, schedule, run, replay, retry, delete, invitation, permission, notification, AI prompt, template instantiation, app installation, payment or provider write was exercised.

## Sources

- **SOURCE REVIEWED:** https://help.make.com/router
- **SOURCE REVIEWED:** https://help.make.com/filtering
- **RECONSTRUCTION:** Fictional local fixture in this library.
