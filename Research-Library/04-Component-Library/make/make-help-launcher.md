---
component: "Make Help Launcher"
ui_category: "Application Shell > Help and Support"
source_product: "Make"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Searchable help overlay with pinned documentation, support, tutorial, community, feedback and product-update destinations."
---

# Component: Make Help Launcher

## Location

- **OBSERVATION:** Authenticated Make workspace inspected read-only on 2026-10-08.
- **RECONSTRUCTION:** The local preview removes account identity, organization and team IDs, connection identity, billing data and live usage values.

## Screenshot

![Fictional local preview](/research/make/fixtures/make-help-launcher.png)

## Structure

- **OBSERVATION:** Help opens as a large overlay without leaving the current workspace.
- **OBSERVATION:** Pinned destinations include Help center, Contact support, Tutorials, Make Community, Share your ideas and What is new.
- **OBSERVATION:** External support, feedback and community destinations were not opened.

## Actions

| Action                  | Result or boundary                                                                |
| ----------------------- | --------------------------------------------------------------------------------- |
| Open a help destination | NOT OBSERVED because it leaves the inspected workspace or starts external support |
| Local preview controls  | Update only fictional fixture state or show a safety notice                       |

## Behavior & States

- **OBSERVATION:** Searchable help overlay with pinned documentation, support, tutorial, community, feedback and product-update destinations.
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

- **OBSERVATION:** Authenticated Make runtime, 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
