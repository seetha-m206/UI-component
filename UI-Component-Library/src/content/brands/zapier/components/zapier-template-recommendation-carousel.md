---
component: "Zapier Template Recommendation Carousel"
ui_category: "Automation Templates > Recommendation Carousel"
source_product: "Zapier"
last_verified: "2026-10-08"
evidence_state: "observed"
status: "complete"
summary: "Authenticated read-only Zapier component with a fictional local reconstruction and provider consequences left unverified."
---

# Component: Zapier Template Recommendation Carousel

## Location

- **OBSERVATION:** Authenticated Zapier route `/app/assets/zaps and /app/home` was inspected on 2026-10-08.
- **RECONSTRUCTION:** The local preview uses fictional labels and values and cannot contact Zapier.

## Screenshot

![Fictional local preview](/research/zapier/fixtures/zapier-template-recommendation-carousel.png)

## Structure

- **OBSERVATION:** Scrollable multi-app automation recommendations with titles, step counts, usage cues and card-action menus.

## Actions

| Action | Observed result or boundary |
| --- | --- |
| Scroll recommendations | Read-only disclosure or local fixture state only |
| Open Card actions | Read-only disclosure or local fixture state only |
| Inspect Save for later and Dismiss choices | Read-only disclosure or local fixture state only |

## Behavior & States

- **OBSERVATION:** The named screen, disclosure, selected tab, disabled control and empty state were recorded only when visible.
- **RECONSTRUCTION:** Preview controls change fictional local React state or show a boundary notice.
- **NOT OBSERVED:** No recommendation was saved, dismissed or instantiated.

## Rules & Validation

- **OBSERVATION:** Disabled controls and unavailable actions remain visibly disabled in the documented state.
- **RECONSTRUCTION:** Consequential controls cannot contact Zapier from the preview.

## Technical Data

- **OBSERVATION / DOM:** The inspected state exposed semantic headings, buttons, links, tabs, inputs, dialogs, lists or status text as applicable.
- **OBSERVATION / ROUTE:** Account identifiers, query identifiers and opaque draft identifiers are intentionally removed.
- **RECONSTRUCTION:** Shared renderer is `src/previews/zapier-shared/ZapierPreview.tsx`.
- **NOT OBSERVED / NETWORK:** Provider request bodies, response contracts, persistence and connected-app consequences were not inspected.

## Accessibility

- **OBSERVATION:** Visible controls exposed names and disabled, selected, expanded or checked states where applicable.
- **RECONSTRUCTION:** The fictional preview uses native labelled controls and live status messages.

## Evidence Boundary

- **NOT OBSERVED:** No recommendation was saved, dismissed or instantiated.
- **NEEDS VERIFICATION:** Provider responsive behavior, permission variants and completed workflow consequences remain open.

## Sources

- **OBSERVATION:** Authenticated, read-only Zapier inspection on 2026-10-08.
- **RECONSTRUCTION:** Fictional local fixture in this library.
